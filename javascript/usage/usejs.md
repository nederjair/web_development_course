# INTRODUCTION

Now that you have a sense for the language of JavaScript, let’s look at some of the ways we can put it to use in modern web design. First, we’ll explore DOM scripting, which allows us to manipulate the elements, attributes, and text on a page. I’ll introduce you to some ready-made JavaScript and DOM scripting resources, so you don’t have to go it alone. You’ll learn about polyfills, which provide older browsers with modern features and normalize functionality. I’ll also introduce you to JavaScript libraries that make developers’ lives easier with collections of polyfills and shortcuts for common tasks.

# MEET THE DOM

You’ve seen references to the Document Object Model (DOM for short) sev- eral times throughout this course, but now is the time to give it the attention it deserves. The DOM gives us a way to access and manipulate the contents of a document. We commonly use it for HTML, but the DOM can be used with any XML language as well. And although we’re focusing on its relationship with JavaScript, it’s worth noting that the DOM can be accessed by other lan- guages too, such as PHP, Ruby, C++, and more. Although DOM Level 1 was released by the W3C in 1998, it was nearly five years later that DOM scripting began to gain steam.

The DOM is a programming interface (an API) for HTML and XML pages. It provides a structured map of the document, as well as a set of methods to interface with the elements contained therein. Effectively, it translates our markup into a format that JavaScript (and other languages) can understand. The basic gist is that the DOM serves as a map to all the elements on a page and lets us do things with them. We can use it to find elements by their names or attributes, and then add, modify, or delete elements and their content.

Without the DOM, JavaScript wouldn’t have any sense of a document’s contents—and by that, I mean the entirety of the document’s contents. Everything from the page’s doctype to each individual letter in the text can be accessed via the DOM and manipulated with JavaScript.

## The Node Tree

A simple way to think of the DOM is in terms of the document tree as dia- grammed in FIGURE 22-1. You saw documents diagrammed in this way when you were learning about CSS selectors.

```html
<!DOCTYPE html>
<html>
<head>
<title>Document title</title>
<meta charset="utf-8">
</head>
<body>
<div>
<h1>Heading</h1>
<p>Paragraph text with a <a href="foo.html">link</a> here.</p>
</div>
<div>
<p>More text here.</p>
</div>
</body>
</html>
```


![[fig1.png]]
*Figure 1*

Each element within the page is referred to as a node. If you think of the DOM as a tree, each node is an individual branch that can contain further branches. But the DOM allows deeper access to the content than CSS because it treats the actual content as a node as well. FIGURE 22-2 shows the struc- ture of the first p element. The element, its attributes, and its contents are all nodes in the DOM’s node tree.


![[fig2.png]]
*Figure 2*

The DOM also provides a standardized set of methods and functions through which JavaScript can interact with the elements on our page. Most DOM scripting involves reading from and writing to the document. There are several ways to use the DOM to find what you want in a document. Let’s go over some of the specific methods we can use for accessing objects defined by the DOM, as well as some of the methods for manipulating those elements.

## Accessing DOM Nodes

The document object in the DOM identifies the page itself, and more often than not will serve as the starting point for our DOM crawling. The docu- ment object comes with a number of standard properties and methods for accessing collections of elements. This is reminiscent of the length property we learned about in previous lectures. Just as length is a standard property of all arrays, the document object comes with a number of built-in properties containing information about the document. We then wind our way to the element we’re after by chaining those properties and methods together, separated by periods, to form a sort of route through the document.

To give you a general idea of this, the statement in this example says to look on the page (document), find the element that has the id value “begin- ner”, find the HTML content within that element (innerHTML), and save those contents to a variable (foo):

```javascript
var foo = document.getElementById("beginner").innerHTML;
```

Because the chains tend to get long, it is also common to see each property or method broken onto its own line to make it easier to read at a glance.

Remember, whitespace in JavaScript is ignored, so this has no effect on how the statement is parsed.

```javascript
var foo = document
.getElementById("beginner")
.innerHTML;
```

There are several methods for accessing nodes in the document.

### By element name: `getElementsByTagName()`

We can access individual elements by the tags themselves, using document. getElementsByTagName(). This method retrieves any element or elements you specify as an argument.

For example, document.getElementsByTagName("p") returns every paragraph on the page, wrapped in something called a collection or nodeList, in the order they appear in the document from top to bottom. nodeLists behave much like arrays. To access specific paragraphs in the nodeList, we reference them by their index, just like an array.

```javascript
var paragraphs = document.getElementsByTagName("p");
```

Based on this variable statement, paragraphs[0] is a reference to the first paragraph in the document, paragraphs[1] refers to the second, and so on. If we had to access each element in the nodeList separately, one at a time…well, it’s a good thing we learned about looping through arrays earlier. Loops work the exact same way with a nodeList.

```javascript
var paragraphs = document.getElementsByTagName("p");
for( var i = 0; i < paragraphs.length; i++ ) {
// do something
}
```

Now we can access each paragraph on the page individually by referencing paragraphs[i] inside the loop, just as with an array, but with elements on the page instead of values.

### By id attribute value: `getElementById()`

This method returns a single element based on that element’s ID (the value of its id attribute), which we provide to the method as an argument. For example, to access this particular image

```html
<img src="photo.jpg" alt="" id="lead-photo">
```

we include the id value as an argument for the getElementById() method:

```javascript
var photo = document.getElementById("lead-photo");
```

### By class attribute value: `getElementsByClassName()`

Just as it says on the tin, this allows you to access nodes in the document based on the value of a class attribute. This statement assigns any element with a class value of “column-a” to the variable firstColumn so it can be accessed easily from within a script:

```javascript
var firstColumn = document.getElementsByClassName("column-a");
```

Like getElementsByTagName(), this returns a nodeList that we can reference by index or loop through one at a time.

### By selector: `querySelectorAll()`

`querySelectorAll()` allows you to access nodes of the DOM based on a CSS- style selector. The syntax of the arguments in the following examples should look familiar to you. It can be as simple as accessing the child elements of a specific element:

```javascript
var sidebarPara = document.querySelectorAll(".sidebar p");
```

or as complex as selecting an element based on an attribute:

```javascript
var textInput = document.querySelectorAll("input[type='text']");
```

`querySelectorAll()` returns a nodeList, like `getElementsByTagName()` and `getElementsByClassName(),` even if the selector matches only a single element. 

### Accessing an attribute value: `getAttribute()`

As I mentioned earlier, elements aren’t the only thing you can access with the DOM. To get the value of an attribute attached to an element node, we call getAttribute() with a single argument: the attribute name. Let’s assume we have an image, stratocaster.jpg, marked up like this:

```html
<img src="stratocaster.jpg" alt="electric guitar" id="lead-image">
```

In the following example, we access that specific image (getElementbyId()) and save a reference to it in a variable (“bigImage”). At that point, we could access any of the element’s attributes (alt, src, or id) by specifying it as an argument in the getAttribute() method. In the example, we get the value of the src attribute and use it as the content in an alert message. (I’m not sure why we would ever do that, but it does demonstrate the method.)

```javascript
var bigImage = document.getElementById("lead-image");
alert( bigImage.getAttribute("src") ); // Alerts "stratocaster.jpg".
```

## Manipulating Nodes

Once we’ve accessed a node by using one of the methods discussed previ- ously, the DOM gives us several built-in methods for manipulating those elements, their attributes, and their contents.

### setAttribute()

To continue with the previous example, we saw how we get the attribute value, but what if we wanted to set the value of that src attribute to a new pathname altogether? Use setAttribute()! This method requires two argu- ments: the attribute to be changed and the new value for that attribute.

In this example, we use a bit of JavaScript to swap out the image by changing the value of the src attribute:

```javascript
var bigImage = document.getElementById("lead-image");
bigImage.setAttribute("src", "lespaul.jpg");
```

Just think of all the things you could do with a document by changing the values of attributes. Here we swapped out an image, but we could use this same method to make a number of changes throughout our document:

- Update the checked attributes of checkboxes and radio buttons based on user interaction elsewhere on the page.

- Find the link element for our .css file and point the href value to a differ- ent style sheet, changing all the page’s styles.

- Update a title attribute with information on an element’s state (“this element is currently selected,” for example).

### innerHTML

innerHTML gives us a simple method for accessing and changing the text and markup inside an element. It behaves differently from the methods we’ve covered so far. Let’s say we need a quick way of adding a paragraph of text to the first element on our page with a class of intro:

```javascript
var introDiv = document.getElementsByClassName("intro");
introDiv[0].innerHTML = "<p>This is our intro text</p>";
```

The second statement here adds the content of the string to introDiv (an element with the class value "intro") as a real live element because innerHTML tells JavaScript to parse the strings “`<p>`” and “`</p>`” as markup.

### style

The DOM also allows you to add, modify, or remove a CSS style from an element by using the style property. It works similarly to applying a style with the inline style attribute. The individual CSS properties are available as properties of the style property. I bet you can figure out what these state- ments are doing by using your new CSS and DOM know-how:

```javascript
document.getElementById("intro").style.color = "#fff";
document.getElementById("intro").style.backgroundColor = "#f58220"; //orange
```

In JavaScript and the DOM, property names that are hyphenated in CSS (such as background-color and border-top-width) become camel case (back- groundColor and borderTopWidth, respectively) so the “ –” character isn’t mis- taken for an operator. 

In the examples you’ve just seen, the style property is used to set the styles for the node. It can also be used to get a style value for use elsewhere in the script. This statement gets the background color of the \#intro element and assigns it to the brandColor variable:

```javascript
var brandColor = document.getElementById("intro").style.backgroundColor;
```

## Adding and Removing Elements

So far, we’ve seen examples of getting and setting nodes in the existing docu- ment. The DOM also allows developers to change the document structure itself by adding and removing nodes on the fly. We’ll start out by creating new nodes, which is fairly straightforward, and then we’ll see how we add the nodes we’ve created to the page. The methods shown here are more surgi- cal and precise than adding content with innerHTML. While we’re at it, we’ll remove nodes, too.

### createElement()

To create a new element, use the aptly named createElement() method. This function accepts a single argument: the element to be created. Using this method is a little counterintuitive at first because the new element doesn’t appear on the page right away. Once we create an element in this way, that new element remains floating in the JavaScript ether until we add it to the document. Think of it as creating a reference to a new element that lives purely in memory—something that we can manipulate in JavaScript as we see fit, and then add to the page once we’re ready:

```javascript
var newDiv = document.createElement("div");
```

### createTextNode()

If we want to enter text into either an element we’ve created or an existing element on the page, we can call the createTextNode() method. To use it, pro- vide a string of text as an argument, and the method creates a DOM-friendly version of that text, ready for inclusion on the page. Like createElement(), this creates a reference to the new text node that we can store in a variable and add to the page when the time comes:

```javascript
var ourText = document.createTextNode("This is our text.");
```

### appendChild()

So we’ve created a new element and a new string of text, but how do we make them part of the document? Enter the appendChild() method. This method takes a single argument: the node you want to add to the DOM. You call it on the existing element that will be its parent in the document structure. Time for an example.

Here we have a simple div on the page with the id “our-div”:

```html
<div id="our-div"></div>
```

Let’s say we want to add a paragraph to \#our-div that contains the text “Hello, world!” We start by creating the p element (document.createElement()) as well as a text node for the content that will go inside it (createTextNode()):

```javascript
var ourDiv = document.getElementById("our-div");
var newParagraph = document.createElement("p");
var copy = document.createTextNode("Hello, world!");
```

Now we have our element and some text, and we can use appendChild() to put the pieces together:

```javascript
newParagraph.appendChild( copy );
ourDiv.appendChild( newParagraph );
```

The first statement appends copy (that’s our “Hello, world!” text node) to the new paragraph we created (newParagraph), so now that element has some content. The second line appends the newParagraph to the original div (ourDiv). Now ourDiv isn’t sitting there all empty in the DOM, and it will display on the page with the content “Hello, world!” You should be getting the idea of how it works. How about a couple more?

### insertBefore()

The insertBefore() method, as you might guess, inserts an element before another element. It takes two arguments: the first is the node that gets insert- ed, and the second is the element it gets inserted in front of. You also need to know the parent to which the element will be added.

So, for example, to insert a new heading before the paragraph in this markup

```html
<div id="our-div">
<p id="our-paragraph">Our paragraph text</p>
</div>
```

we start by assigning variable names to the div and the p it contains, and then create the h1 element and its text node and put them together, just as we saw in the last example:

```javascript
var ourDiv = document.getElementById("our-div");
var para = document.getElementById("our-paragraph");
var newHeading = document.createElement("h1");
var headingText = document.createTextNode("A new heading");
newHeading.appendChild( headingText ); // Add our new text node to the new heading
```

Finally, in the last statement shown here, the insertBefore() method places the newHeading h1 element before the para element inside ourDiv.

```javascript
ourDiv.insertBefore( newHeading, para );
```

### replaceChild()

The replaceChild() method replaces one node with another and takes two arguments. The first argument is the new child (i.e., the node you want to end up with). The second is the node that gets replaced by the first. As with insertBefore(), you also need to identify the parent element in which the swap happens. For the sake of simplicity, let’s say we start with the following markup:

```html
<div id="our-div">
<div id="swap-me"></div>
</div>
```

And we want to replace the div with the id “swap-me” with an image. We start by creating a new img element and setting the src attribute to the path- name to the image file. In the final statement, we use replaceChild() to put newImg in place of swapMe.

```javascript
var ourDiv = document.getElementById("our-div");
var swapMe = document.getElementById("swap-me");
var newImg = document.createElement("img"); // Create a new image element
newImg.setAttribute( "src", "path/to/image.jpg" ); // Give the new image a "src" attribute
ourDiv.replaceChild( newImg, swapMe );
removeChild()
```

You remove a node or an entire branch from the document tree with the removeChild() method. The method takes one argument, which is the node you want to remove. Remember that the DOM thinks in terms of nodes, not just elements, so the child of an element may be the text (node) it contains, not just other elements.

Like appendChild(), the removeChild() method is always called on the parent element of the element to be removed (hence, “remove child”). That means we’ll need a reference to both the parent node and the node we’re looking to remove. Let’s assume the following markup pattern:

```html
<div id="parent">
<div id="remove-me">
<p>Pssh, I never liked it here anyway.</p>
</div>
</div>
```

Our script would look something like this:

```javascript
var parentDiv = document.getElementById("parent");
var removeMe = document.getElementById("remove-me");
parentDiv.removeChild( removeMe ); // Removes the div with the id "remove-me" from the page.
```


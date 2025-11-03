# JavaScript

## INTRODUCTION

We’ll start by going over what JavaScript is—and what it isn’t—and discuss some of the ways it is used. The majority of the chapter is made up of an introduction to JavaScript syntax—variables, functions, operators, loops, stuff like that. Will you be coding by the end of the chapter? Probably not. But you will have a good head start toward understanding what’s going on in a script when you see one. I’ll finish up with a look at some of the ways you can manipulate the browser window and tie scripts to user actions such as clicking or submitting a form.

## WHAT IS JAVASCRIPT?

JavaScript is a programming language that adds interactivity and custom behaviors to our sites. It is a client-side scripting language, which means it runs on the user’s machine and not on the server, as other web programming languages such as PHP and Ruby do. That means JavaScript (and the way we use it) is reliant on the browser’s capabilities and settings. It may not even be available at all, either because the user has chosen to turn it off or because the device doesn’t support it, which good developers keep in mind and plan for.

JavaScript is also what is known as a dynamic and loosely typed program- ming language. Don’t sweat this description too much; I’ll explain what all that means later.

*First, I want to establish that JavaScript is kind of misunderstood.*

### What javascript isn’t 

Right off the bat, the name is pretty confusing. Despite its name, JavaScript has nothing to do with Java. It was created by Brendan Eich at Netscape in 1995 and originally named “LiveScript.” But Java was all the rage around that time, so for the sake of marketing, “LiveScript” became “JavaScript.” Or just “JS,” if you want to sound as cool as one possibly can while talking about JavaScript.

JS also has something of a bad reputation. For a while it was synonymous with all sorts of unscrupulous internet shenanigans—unwanted redirects, obnoxious pop-up windows, and a host of nebulous “security vulnerabili- ties,” just to name a few. There was a time when JavaScript allowed less repu- table developers to do all these things (and worse), but modern browsers have largely caught on to the darker side of JavaScript development and locked it down. 

We shouldn’t fault JavaScript itself for that era, though. As the not-so- old cliché goes, “with great power comes great responsibility.” JavaScript has always allowed developers a tremendous amount of control over how pages are rendered and how our browsers behave, and it’s up to us to use that con- trol in responsible ways.

### What it is

JavaScript is a lightweight but incredibly powerful scripting language. We most frequently encounter it through our browsers, but JavaScript has snuck into everything from native applications to PDFs to ebooks. Even web servers themselves can be powered by JavaScript. As a dynamic programming language, JavaScript doesn’t need to be run through any form of compiler that interprets our human-readable code into something the browser can understand. The browser effectively reads the code the same way we do and interprets it on the fly. JavaScript is also loosely typed. All this means is that we don’t necessarily have to tell JavaScript what a variable is. If we’re setting a variable to a value of 5, we don’t have to programmatically specify that variable as a number; that is, 5 is a number, and JavaScript recognizes it as such.

### What JavaScript Can Do

Most commonly we’ll encounter JavaScript as a way to add interactivity to a page. Whereas the “structural” layer of a page is our HTML markup, and the “presentational” layer of a page is made up of CSS, the third “behavioral” layer is made up of our JavaScript.

All of the elements, attributes, and text on a web page can be accessed by scripts using the DOM (Document Object Model), which we’ll be looking at later. We can also write scripts that react to user input, altering either the contents of the page, the CSS styles, or the browser’s behavior on the fly.

You’ve likely seen this in action if you’ve ever attempted to register for a web- site, entered a username, and immediately received feedback that the user- name you’ve entered is already taken by someone else (FIGURE 21-1). The red border around the text input and the appearance of the “sorry, this username is already in use” message are examples of JavaScript altering the contents of the page.

Blocking the form submission is an example of JavaScript altering the browser’s default behavior. Ultimately, verifying this information is a job for the server—but JavaScript allows the website to make that request and offer immediate feedback without the need for a page reload.

![[fig1.png]]

In short, JavaScript allows you to create highly responsive interfaces that improve the user experience and provide dynamic functionality, without waiting for the server to load up a new page. For example, we can use JavaScript to do any of the following:

- Suggest the complete term a user might be entering in a search box as he types. You can see this in action on Google.com .

    ![[fig2.png]]

- Request content and information from the server and inject it into the current document as needed, without reloading the entire page—this is commonly referred to as “Ajax.”

    ![[fig3.png]]

- Test for browsers’ individual features and capabilities. For example, one can test for the presence of “touch events,” indicating that the user is inter- acting with the page through a mobile device’s browser, and add more touch-friendly styles and interaction methods.

- Fill in gaps where a browser’s built-in functionality falls short, or add some of the features found in newer browsers to older browsers. These kinds of scripts are usually called shims or polyfills.

- Load an image or content in a custom-styled “lightbox”—isolated on the page with CSS—after a user clicks a thumbnail version of the image

    ![[fig4.png]]

## ADDING JAVASCRIPT TO A PAGE

As with CSS, you can embed a script right in a document or keep it in an external file and link it to the page. Both methods use the script element.

### Embedded Script

To embed a script on a page, just add the code as the content of a script element:

```html
<script>
… JavaScript code goes here
</script>
```

### External Scripts

The other method uses the src attribute to point to a script file (with a .js suffix) by its URL. In this case, the script element has no content:

```html
<script src="my_script.js"></script>
```

The advantage to external scripts is that you can apply the same script to multiple pages (the same benefit external style sheets offer). The downside, of course, is that each external script requires an additional HTTP request of the server, which slows down performance.

#### Script Placement

The script element can go anywhere in the document, but the most com- mon places for scripts are in the head of the document and at the very end of the body. It is recommended that you don’t sprinkle them throughout the document, because they would be difficult to find and maintain.

For most scripts, the end of the document, just before the </body> tag, is the preferred placement because the browser will be done parsing the document and its DOM structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
</head>
<body>
…contents of page…
<script src="script.js"></script>
</body>
</html>
```

Consequently, that information will be ready and available by the time it gets to the scripts, and they can execute faster. In addition, the script download and execution blocks the rendering of the page, so moving the script to the bottom improves the perceived performance.

However, in some cases, you might want your script to do something before the body completely loads, so putting it in the head will result in better per- formance. For example, Modernizr (a feature detection tool) recommends its script be placed in the head so the feature detection tests can be run up front.

## THE ANATOMY OF A SCRIPT

In this section, we will be you familiar with the basic building blocks of JavaScript so you can begin to understand scripts when you encounter them. Many developers have taught themselves to program by finding existing scripts and adapting them for their own needs. After some practice, they are ready to start writing their own from scratch. Recognizing the parts of a script is the first step, so that’s where we’ll start.

Originally, JavaScript’s functionality was mostly limited to crude methods of interaction with the user. We could use a few of JavaScript’s built-in functions (FIGURE 21-5) to provide user feedback, such as alert() to push a notifica- tion to a user, and confirm() to ask a user to approve or decline an action. To request the user’s input, we were more or less limited to the built-in prompt() function. Although these methods still have their time and place today, they’re jarring, obtrusive, and—in common opinion, at least—fairly obnoxious ways of interacting with users. As JavaScript has evolved over time, we’ve been afforded much more graceful ways of adding behavior to our pages, creating a more seamless experience for our users.

![[fig5.png]]

In order to take advantage of these interaction methods, we have to first understand the underlying logic that goes into scripting. These are logic pat- terns common to all manner of programming languages, although the syntax may vary.

To draw a parallel between programming languages and spoken languages: although the vocabulary may vary from one language to another, many grammar patterns are shared by the majority of them. By the end of this section, you’re going to know about variables, arrays, com- parison operators, if/else statements, loops, functions, and more.

### The Basics

There are a few common syntactical rules that wind their way though all of JavaScript.

It is important to know that JavaScript is case-sensitive. A variable named myVariable, a variable named myvariable, and a variable named MYVariable will be treated as three different objects.

Also, whitespace such as tabs and spaces is ignored, unless it’s part of a string of text and enclosed in quotes. All of the character spaces added to scripts such as the ones in this chapter are for the benefit of humans—they make reading through the code easier. JavaScript doesn’t see them.

### Statements

A script is made up of a series of statements. A statement is a command that tells the browser what to do. Here is a simple statement that makes the browser display an alert with the phrase “Thank you”:

```javascript
alert("Thank you.");
```

The semicolon at the end of the statement tells JavaScript that it’s the end of the command, just as a period ends a sentence. According to the JavaScript standard, a line break will also trigger the end of a command, but it is a best practice to end each statement with a semicolon.

### Comments

JavaScript allows you to leave comments that will be ignored at the time the script is executed, so you can provide reminders and explanations through- out your code. This is especially helpful if this code is likely to be edited by another developer in the future.

There are two methods of using comments. For single-line comments, use two slash characters (//) at the beginning of the line. You can put single-line comments on the same line as a statement, as long as the comment comes after the statement. It does not need to be closed, as a line break effectively closes it.

```javascript
// This is a single-line comment.
```

Multiple-line comments use the same syntax that you’ve seen in CSS. Everything within the /* */ characters is ignored by the browser. You can use this syntax to “comment out” notes and even chunks of the script when troubleshooting.

```javascript
/* This is a multiline comment.
Anything between these sets of characters will be
completely ignored when the script is executed.
This form of comment needs to be closed. */
```

### Variables

A variable is like an information container. You give it a name and then assign it a value, which can be a number, text string, an element in the DOM, or a function—anything, really. This gives us a convenient way to reference that value later by name. The value itself can be modified and reassigned in what- ever way our scripts’ logic dictates.

The following declaration creates a variable with the name foo and assigns it the value 5:

```javascript
var foo = 5;
```

We start by declaring the variable by using the var keyword. The single equals sign (=) indicates that we are assigning it a value. Because that’s the end of our statement, we end the line with a semicolon. Variables can also be declared without the var keyword, which impacts what part of your script will have access to the information they contain. We’ll discuss that further in the section “Variable Scope and the var Keyword” later in this lecture.

You can use anything you like as a variable name, but make sure it’s a name that will make sense to you later. You wouldn’t want to name a variable some- thing like data; it should describe the information it contains. In our earlier very specific example, productName might be a more useful name than foo. There are a few rules for naming a variable:

- It must start with a letter or an underscore.

- It may contain letters, digits, and underscores in any combination.

- It may not contain character spaces. As an alternative, use underscores in place of spaces, or close up the space and use camel case instead (for example, my_variable or myVariable).

- It may not contain special characters (e.g., ! . , / \ + * =).

You can change the value of a variable at any time by redeclaring it anywhere in your script. Remember: JavaScript is case-sensitive, and so are those vari- able names.

### Data types

The values we assign to variables fall under a few distinct data types:

#### Undefined
The simplest of these data types is likely undefined. If we declare a vari- able by giving it a name but no value, that variable contains a value of undefined.

```javascript
var foo;
alert(foo); // This will open a dialog containing "undefined".
```
Odds are you won’t find a lot of use for this right away, but it’s worth knowing for the sake of troubleshooting some of the errors you’re likely to encounter early on in your JavaScript career. If a variable has a value of undefined when it shouldn’t, you may want to double-check that it has been declared correctly or that there isn’t a typo in the variable name. 

#### Null

Similar to undefined, assigning a variable of null (again, case-sensitive) simply says, “Define this variable, but give it no inherent value.”

```javascript
var foo = null;
alert(foo); // This will open a dialog containing "null".
```

#### Numbers

You can assign variables numeric values.

```javascript
var foo = 5;
alert(foo); // This will open a dialog containing "5".
```

The word foo now means the exact same thing as the number 5 as far as JavaScript is concerned. Because JavaScript is loosely typed, we don’t have to tell our script to treat the variable foo as the number 5. The variable behaves the same as the number itself, so you can do things to it that you would do to any other number by using classic mathematical notation: +, -, *, and / for plus, minus, multiply, and divide, respectively. In this example, we use the plus sign (+) to add foo to itself (foo + foo).


```javascript
var foo = 5;
alert(foo + foo); // This will alert "10".
```

#### Strings

Another type of data that can be saved to a variable is a string, which is basically a line of text. Enclosing characters in a set of single or double quotes indicates that it’s a string, as shown here:

```javascript
var foo = "five";
alert( foo ); // This will alert "five"
```

The variable foo is now treated exactly the same as the word five. This applies to any combination of characters: letters, numbers, spaces, and so on. If the value is wrapped in quotation marks, it will be treated as a string of text. If we were to wrap the number 5 in quotes and assign it to a variable, that variable wouldn’t behave as a number; instead, it would behave as a string of text containing the character “5.”Strings

Earlier we saw the plus sign (+) used to add numbers. When the plus sign is used with strings, it sticks the strings together (called concatenation) into one long string, as shown in this example.

```javascript
var foo = "bye"
alert(foo + foo); // This will alert "byebye"
```

Notice what the alert returns in the following example when we define the value 5 in quotation marks, treating it as a string instead of a number:

```javascript
var foo = "5";
alert( foo + foo ); // This will alert "55"
```

If we concatenate a string and a number, JavaScript will assume that the number should be treated as a string as well, since the math would be impossible.

```javascript
var foo = "five";
var bar = 5;
alert( foo + bar ); // This will alert "five5"
```

#### Booleans

We can also assign a variable a true or false value. This is called a Boolean value, and it is the lynchpin for all manner of advanced logic. Boolean val- ues use the true and false keywords built into JavaScript, so quotation marks are not necessary.

```javascript
var foo = true; // The variable "foo" is now true
```

Just as with numbers, if we were to wrap the preceding value in quotation marks, we’d be saving the word true to our variable instead of the inherent value of true (i.e., “not false”).

In a sense, everything in JavaScript has either an inherently true or false value. For example, null, undefined, 0, and empty strings (" ") are all inherently false, while every other value is inherently true. These values, although not identical to the Booleans true and false, are commonly referred to as being “truthy” and “falsy.”

#### Arrays

An array is a group of multiple values (called members) that can be assigned to a single variable. The values in an array are said to be indexed, meaning you can refer to them by number according to the order in which they appear in the list. The first member is given the index number 0, the second is 1, and so on, which is why one almost invariably hears us nerds start counting things at zero—because that’s how JavaScript counts things, and many other programming languages do the same. We can avoid a lot of future coding headaches by keeping this in mind.

So, let’s say our script needs all of the variables we defined earlier. We could define them three times and name them something like foo1, foo2, and so on, or we can store them in an array, indicated by square brackets ([ ]).

```javascript
var foo = [5, "five", "5"];
```

Now anytime you need to access any of those values, you can grab them from the single foo array by referencing their index number:

```javascript
alert( foo[0] ); // Alerts "5"
alert( foo[1] ); // Alerts "five"
alert( foo[2] ); // Also alerts "5"
alert( foo[0] ); // Alerts "5"
alert( foo[1] ); // Alerts "five"
alert( foo[2] ); // Also alerts "5"
```

#### Comparison Operators

Now that we know how to save values to variables and arrays, the next logi- cal step is knowing how to compare those values. There is a set of special characters called comparison operators that evaluate and compare values in different ways:

`==` Is equal to
`!=` Is not equal to
`===` Is identical to (equal to and of the same data type)
`!==` Is not identical to
`>` Is greater than
`>=` Is greater than or equal to
`<` Is less than
`<=` Is less than or equal to

There’s a reason all of these definitions read as parts of a statement. In com- paring values, we’re making an assertion, and the goal is to obtain a result that is either inherently true or inherently false. When we compare two values, JavaScript evaluates the statement and gives us back a Boolean value depend- ing on whether the statement is true or false.


```javascript
alert( 5 == 5 ); // This will alert "true"
alert( 5 != 6 ); // This will alert "true"
alert( 5 < 1 ); // This will alert "false"
```

#### Equal versus identical

The tricky part is understanding the difference between “equal to” (==) and “identical to” (===). We already learned that all of these values fall under a certain data type. For example, a string of “5” and a number 5 are similar, but they’re not quite the same thing.

Well, that’s exactly what === is meant to check.

```javascript
alert( "5" == 5 ); // This will alert "true". They're both "5".
alert( "5" === 5 ); /* This will alert "false". They're both "5", but they're not the same data type. */
alert( "5" !== 5 ); /* This will alert "true", since they're not the same data type. */
```

#### Mathematical operators

The other type of operator is a mathematical operator, which performs math- ematical functions on numeric values (and, of course, variables that contain numeric values). We touched briefly on the straightforward mathematical operators for add (+), subtract (-), multiply (*), and divide (/). There are also some useful shortcuts you should be aware of:

`+=` Adds the value to itself
`++` Increases the value of a number (or a variable containing a number value) by 1
`--` Decreases the value of a number (or a variable containing a number value) by 1

#### if/else statements

if/else statements are how we get JavaScript to ask itself a true/false ques- tion. They are more or less the foundation for all the advanced logic that can be written in JavaScript, and they’re about as simple as programming gets. In fact, they’re almost written in plain English. The structure of a conditional statement is as follows:

```javascript
if( true ) {
// Do something.
}
```

It tells the browser “if this condition is met, then execute the commands listed between the curly brackets ({ }).” JavaScript doesn’t care about whitespace in our code, remember, so the spaces on either side of the ( true ) are purely for the sake of more readable code.

Here is a simple example using the array we declared earlier:

```javascript
var foo = [5, "five", "5"];
if( foo[1] === "five" ) {
alert("This is the word five, written in plain English.");
}
```

Since we’re making a comparison, JavaScript is going to give us a value of either true or false. The highlighted line of code says “true or false: the value of the foo variable with an index of 1 is identical to the word ‘five’?”

In this case, the alert would fire because the foo variable with an index of 1 (the second in the list, if you’ll remember) is identical to “five”. It is indeed true, and the alert fires.

We can also explicitly check if something is false by using the != comparison operator, which reads as “not equal to.”

```javascript
if( 1 != 2 ) {
    alert("If you're not seeing this alert, we have bigger problems than JavaScript."); // 1 is never equal to 2, so we should always see this alert.
}
```

JavaScript says, “That ‘1 is not equal to 2’ line is a true statement, so I’ll run this code.”

If the statement doesn’t evaluate to true, the code inside the curly brackets will be skipped over completely:

```javascript
if( 1 == 2 ) {
    alert("If you're seeing this alert, we have bigger problems than JavaScript."); // 1 is not equal to 2, so this code will never run.
}
```

#### That covers “if,” but what about “else”?

what if we want to do one thing if something is true and something else if that thing is false? We could write two if statements, but that’s a little clunky. Instead, we can just say, “else, do something…else.”

```javascript
var test = "testing";
if( test == "testing" ) {
    alert( "You haven't changed anything." );
} else {
    alert( "You've changed something!" );
}
```

Changing the value of the test variable to something else—anything other than the word testing—will trigger the alert “You’ve changed something!”

### Loops

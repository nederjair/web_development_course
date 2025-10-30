## Simple CSS adjustments
1. duplicate (copy and paste) the folder from the previous laboratory work and name it `lab_css`.

2. open the just created folder `lab_css` with `vscode`.

3. create a new `html` document called `cooking.html` with `vscode`. Add the following markup:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Cooking with Nada Surf</title>
    <link rel="stylesheet" href="css/cooking.css">
  </head>

  <body>
    <h1>Cooking with Daniel from Nada Surf</h1>

    <p>
      I had the pleasure of spending a crisp, Spring day in Portsmouth, NH
      cooking and chatting with Daniel Lorca of the band Nada Surf as he
      prepared a gourmet, sit-down dinner for 28 pals.
    </p>

    <p>
      When I first invited Nada Surf to be on the show, I was told that Daniel
      Lorca was the guy I wanted to talk to. Then Daniel emailed his response:
      "i'm way into it, but i don't want to talk about it, i wanna do it." After
      years of only having access to touring bands between their sound check and
      set, I've been doing a lot of <em>talking</em> about cooking with
      rockstars. To actually cook with a band was a dream come true.
    </p>

    <h2>Six-hour Salad</h2>

    <p><img src="salads.jpg" alt="Smoked tomato salads on plates" /></p>

    <p>
      Daniel prepared a salad of arugula, smoked tomatoes, tomato jam, and
      grilled avocado (it's as good as it sounds!). I jokingly called it "6-hour
      Salad" because that's how long he worked on it. The fresh tomatoes were
      slowly smoked over woodchips in the grill, and when they were softened,
      Daniel separated out the seeds which he reduced into a smoky jam. The
      tomatoes were cut into strips to put on the salads. As the day meandered,
      the avocados finally went on the grill after dark. I was on flashlight
      duty while Daniel checked for the perfect grill marks.
    </p>

    <p>
      I wrote up a streamlined adaptation of his recipe that requires
      <em>much</em> less time and serves 6 people instead of <em>five</em>times
      that amount.
    </p>

    <h2>The Main Course</h2>

    <p>
      In addition to the smoky grilled salad, Daniel served tarragon cornish
      hens with a cognac cream sauce loaded with chanterelles and grapes, and
      wild rice with grilled ramps (wild garlicky leeks). Dinner was served
      close to midnight, but it was a party so nobody cared.
    </p>

    <p>
      We left that night (technically, early the next morning) with full
      bellies, new cooking tips, and nearly 5 hours of footage. I'm considering
      renaming the show "Cooking with Nada Surf".
    </p>
  </body>
</html>
```

5. Create a new folder called `css`, this folder will contain all the css documents.

6. Inside the new created folder (`css`) create a new `CSS` document called `cooking.css`. Add the next styling rules to the document:

```css
h1 {
  color: green;
}
p {
  font-size: large;
  font-family: sans-serif;
}
```

Save the file, and take a look at the page in the browser. You should notice some changes (if your browser already uses a sans-serif font, you may see only a size change).

7. Make the h1 element “gray” and take a look at it in the browser. Then make it “blue”. Finally, make it “orange”.

8. Add a new rule that makes the h2 elements orange as well.

9. Add a 100-pixel left margin to paragraph (p) elements by using this declaration:

```css
margin-left: 100px;
```
10. Add a 100-pixel left margin to the h2 headings as well.

11. Add an orange, 1-pixel border to the bottom of the h1 element by using this declaration:

```css
border-bottom: 1px solid orange;
```

12. Move the image to the right margin, and allow text to flow around it with the float property. The shorthand margin property shown in this rule adds zero pixels of space on the top and bottom of the image and 12 pixels of space on the left and right of the image

```css
img {
float: right;
margin: 0 12px;
}
```

12. add the current page to the navigation menu (`nav`)

## Advanced adjustments using CSS

13. create a new `html` file called `bakery.html`. Add the following markup, then check the just created page in the browser

```html
<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Black Goose Bakery</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bakery.css">
  <link href="https://fonts.googleapis.com/css?family=Stint+Ultra+Expanded" rel="stylesheet">
</head>

<body>

  <header>
    <nav>
      <ul>
        <li><a href="">Menu</a></li>
        <li><a href="">News</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
    <h1><img src="images/bgb_logo.png" alt="Black Goose Bakery"></h1>
    <p>The delicious baked goods you love at Black Goose Bistro...now available to go!</p>
  </header>

  <main>
    <h2>Fresh from the Oven</h2>
    <h3>Breads</h3>
    <p><img src="images/bread.png" alt="round loaf of bread on cutting board"> Our breads are made daily from
      highest-quality whole grain flour, water, salt, and yeast or sourdough starter. Simply and naturally, and never
      any preservatives. Patience is key to achieving the proper level of fermentation and baking each loaf to
      perfection. Available in whole grain, sourdough, olive loaf, classic rye, and potato-onion.</p>
    <p class="more"><a href="">Learn more about our baking process...</a></p>

    <h3>Muffins</h3>
    <p><img src="images/muffin.png" alt="one chocolate chip muffin"> Every day, we offer a large selection of muffins,
      including blueberry, multi-berry, bran, corn, lemon-poppyseed, and chocolate. Our muffins are made from scratch
      each day. Stop by to see our seasonal muffin flavors!</p>
    <p class="more"><a href="">Learn more about how we make our muffins...</a></p>
  </main>

  <aside>
    <h2>Hours</h2>
    <p><span class="day">Monday:</span> 5am to 3pm</p>
    <p><span class="day">Tuesday:</span> 5am to 3pm</p>
    <p><span class="day">Wednesday:</span> 5am to 3pm</p>
    <p><span class="day">Thursday:</span> 5am to 3pm</p>
    <p><span class="day">Friday:</span> 5am to 3pm</p>
    <p><span class="day">Saturday:</span> 6am to 4pm</p>
    <p><span class="day">Sunday:</span> 6am to 4pm</p>
  </aside>

  <footer>
    <p>All content copyright &copy; 2017, Black Goose Bistro.</p>
  </footer>

</body>

</html>
```

15. Inside the `css` folder  create a new `CSS` document called `bakery.css`. Add the following styling rules so your navigation menu gets centered and a bakground picture gets added (and other notizable changes)

```css
/* header styles */
header {
  color: white;
  background: url(../imgs/croissants_banner.jpg) no-repeat center center;
  background-size: cover;
  text-align: center;
}
```
16. Add the following styling rules to the `cooking.css` file to eliminate the circles in the unordered list.

```css
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```
Save the document and look at the changes in a browser.

16. Turn that ul element into a flexbox by setting its display to flex. As a result, all of the li elements become flex items. Because we want rows and no wrapping, the default values for flex-direction and flex-wrap are fine, so the properties can be omitted:

```css
nav ul {
…
display: flex;
}
```
Save the document and look at the changes in a browser. You should see that the links are lined up tightly in a row, which is an improvement.

17. Now we can work on the appearance of the links. Start by making the a elements in the nav list items display as block elements instead of inline. Give them 1px rounded borders, padding within the borders (.5em top and bottom, 1em left and right), and .5em margins to give them space and to open up the brown navigation bar.

```css
nav ul li a {
  display: block;
  border: 1px solid;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  margin: 0.5em;
}
```

18. We want the navigation menu to be centered in the width of the nav section for that add the following declaration for the nav ul element:

```css
nav ul {
    …
    justify-content: center;
}
```

19. Add the following rules to change the body of the page

```css
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 100%;
  background-color: lightgray;
  margin: 0;
}```

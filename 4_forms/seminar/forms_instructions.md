# Starting the pizza order form
Here’s the scenario. You are the web designer in charge of creating an online pizza ordering form for Black Goose Bistro. The owner has handed you a sketch (FIGURE 9-9) of the form’s content. There are sticky notes from the programmer with information about the script and variable names you need to use.

![[fig1.png]]

![[fig2.png]]

Your challenge is to turn the sketch into a functional form. I’ve given you a head start by creating a bare-bones document with text content and minimal markup and styles. 

# Instructions

1. Copy the folder of the previous laboratory work and name it `lab_forms`, then open it with `vscode`.

2. Create a new file in the folder `lab_forms` and call it `pizza.html`.

3. Copy the next `html` markup text into `pizza.html`.

```html
<!DOCTYPE html >
<html>
<head>
  <meta charset="utf-8" >
   <title>Blackstone Bistro: Pizza-on-Demand</title>
   <style type="text/css">
      ol, ul { 
     list-style-type: none;
      }
   </style>
</head>

<body>

<h1>Blackstone Bistro | Pizza-on-Demand</h1>

<p>Our 12" wood-fired pizzas are available for delivery. Build your custom pizza and we'll deliver it within an hour.</p>


Your Information
<ul>
  <li>Name:</li>
  <li>Address:</li>
  <li>Telephone Number:</li>
  <li>Email:</li>
  <li>Delivery instructions:</li>
</ul>


<h2>Design Your Dream Pizza:</h2>

<p>Pizza specs<p>

<p>Crust <em>(Choose one)</em>:</p>
<ul>
  <li>Classic white</li>
  <li>Multigrain</li>
  <li>Cheese-stuffed crust</li>
  <li>Gluten-free</li>
</ul>

<p>Toppings <em>(Choose as many as you want)</em>:</p>
<ul>
  <li>Red sauce</li>
  <li>White sauce</li>
  <li>Mozzarella Cheese</li>
  <li>Pepperoni</li>
  <li>Mushrooms</li>
  <li>Peppers</li>
  <li>Anchovies</li>
</ul>

<p>Number</p>
<p>How many pizzas:<p>

</body>
</html>
```

4. Put everything after the intro paragraph into a form element. The programmer has left a note specifying the action and the method to use for this form. The resulting form element should look like this (keep it on one line):

```html
<form action="http://www.blackgoosebistro.com/pizza.php" method="POST">
…
</form>
```

5. In this exercise, we’ll work on the “Your Information” section of the form. Start with the first four short text-entry form controls that are marked up appropriately as an unordered list. Here’s the first one; you insert the other three:

```html
<li>Name: <input type="text" name="customername"></li>
```

HINTS: Choose the most appropriate input type for each entry field. Be sure to name the input elements as specified in the programmer’s note.

6. After “Delivery instructions:” add a line break and a multiline text area. Because we aren’t writing a style sheet for this form, use markup to make it four rows long and 60 characters wide (in the real world, CSS is preferable because it gives you more finetuned control):

```html
        <li>
          Delivery instructions:<br />
          <textarea
            name="instructions"
            rows="4"
            cols="60"
            maxlength="400"
            placeholder="No more than 400 characters long"
          ></textarea>
        </li>
```

7. We’ll skip the rest of the form for now until we get a few more controls under our belt, but we can add the submit and reset buttons at the end, just before the `</form>` tag. Note that they’ve asked us to change the text on the submit button.

```html
<p><input type="submit" value="Bring me a pizza!"><input type="reset"></p>
```

8.  Now, save the document and open it in a browser. The parts that are finished should generally match FIGURE 9-2. If they don’t, then you have some more work to do.

9. Once the document looks right, take it for a spin by entering some information and submitting the form. You should get a response like the one shown in FIGURE 9-10.



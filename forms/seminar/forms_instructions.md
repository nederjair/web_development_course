1# FORMS

Here’s the scenario. You are the web designer in charge of creating an online pizza ordering form for Black Goose Bistro. The owner has handed you a sketch (FIGURE 1) of the form’s content. There are sticky notes from the programmer with information about the script and variable names you need to use.

![[fig1.png]]
**FIGURE 1**

Your challenge is to turn the sketch into a functional form (FIGURE 2). I’ve given you a head start by creating a bare-bones document with text content and minimal markup and styles. 

![[fig2.png]]
**FIGURE 2**

# INSTRUCTIONS

## Starting the pizza order form

1. Copy the folder of the previous laboratory work and name it `lab_forms`, then open it with `vscode`.

2. Create a new file in the folder `lab_forms` and call it `pizza.html`.

3. Copy the next `html` markup text into `pizza.html`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Blackstone Bistro: Pizza-on-Demand</title>
    <style type="text/css">
      ol,
      ul {
        list-style-type: none;
      }
    </style>
  </head>

  <body>
    <h1>Blackstone Bistro | Pizza-on-Demand</h1>

    <p>
      Our 12" wood-fired pizzas are available for delivery. Build your custom
      pizza and we'll deliver it within an hour.
    </p>

    Your Information
    <ul>
      <li>Name:</li>
      <li>Address:</li>
      <li>Telephone Number:</li>
      <li>Email:</li>
      <li>Delivery instructions:</li>
    </ul>

    <h2>Design Your Dream Pizza:</h2>

    <p>Pizza specs</p>
    <p></p>

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
    <p>How many pizzas:</p>
    <p></p>
  </body>
</html>
```

4. Put everything after the intro `paragraph` into a `form` element. The programmer has left a note specifying the action and the method to use for this `form`. The resulting `form` element should look like this:

```html
<form action="http://www.blackgoosebistro.com/pizza.php" method="POST">
…
</form>
```

5. In this exercise, we’ll work on the “Your Information” section of the form. Start with the first four short `text-entry` form controls that are marked up appropriately as an unordered list. Here’s the first one; you insert the other three:

```html
<li>Name: <input type="text" name="customername"></li>
```

HINTS: Choose the most appropriate `input` type for each entry field. Be sure to name the `input` elements as specified in the programmer’s note.

6. After “Delivery instructions:” add a line break and a multiline text area. Because we aren’t writing a style sheet for this form, use markup to make it four rows long and 60 characters wide (in the real world, `CSS` is preferable because it gives you more finetuned control):

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

7. Add the submit and reset buttons at the end, just before the `</form>` tag. Note that they’ve asked us to change the text on the submit button.

```html
<p><input type="submit" value="Bring me a pizza!"><input type="reset"></p>
```

8.  Now, save the document and open it in a browser. The parts that are finished should generally match FIGURE 2. If they don’t, then you have some more work to do.

9. Once the document looks right, take it for a spin by entering some information and submitting the form. You should get a response like the one shown in FIGURE 3.

![[fig3.png]]
**FIGURE 3**

## Adding radio buttons and checkboxes
The next section of the Black Goose Bistro pizza ordering form uses radio buttons and checkboxes for selecting pizza options.

10. In the “Design Your Dream Pizza” section, there are lists of Crust and Toppings options. The Crust options should be radio buttons because pizzas have only one crust. Insert a radio button before each option. Follow this example for the remaining crust options:

```html
<li><input type="radio" name="crust" value="white"> Classic white</li>
```
11. Mark up the Toppings options as you did the Crust options, but this time, the type should be checkbox. Be sure the variable name for each is `toppings[]`, and that the “Red sauce” option is preselected (checked), as noted on the sketch.

12. Save the document and check your work by opening it in a browser to make sure it looks right; then submit the form to make sure it’s functioning properly.

## Adding a menu
The only other control that needs to be added to the order form is a pull-down menu for selecting the number of pizzas to have delivered.

13. Insert a select `menu` element with the option to order between 1 and 6 pizzas: 

```html
      <p>
        How many pizzas:
        <select name="pizzas" size="1">
          <option>1</option>
        </select>
      </p>
```

14. Save the document and check it in a browser. You can submit the form, too, to be sure that it’s working. You should get the “Thank You” response page listing all of the information you entered in the form.

15. Add the new created form as a service to your black goose bistro restaurant (add it to the `nav` element in the navigation menu)

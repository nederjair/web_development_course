# JavaScript laboratory work

# Main goal

Your goose bistro restaurant needs a way to keep your customers entretained and informed about the variety of your dishes. You've thaught about a wonderful strategy, a game of guess the word but with the dishes you offer and real life photos of them. For that your friend javascript comes to the rescue.

# INSTRUCTIONS

1. Copy the folder of the previous laboratory work and name it `lab_js`, then open it with `vscode`.

2. Create a new file in the folder `lab_js` and call it `guess_word.html`.


3. Copy the next `html` markup text into `guess_word.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My page</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <h1>Welcome to the guess the Goose bistro dish game</h1>
    <div id="letters"></div>
    <hr />
    <div>
      <input
        type="text"
        maxlength="1"
        placeholder="enter a letter"
        size="2"
        id="userInput"
      />
      <button id="guess">guess</button>
    </div>
    <script src="guess_game.js"></script>
  </body>
</html>
```

Look at the page on the browser, you should get something like the following:

![[fig1.png]]

2. Create a new file in the folder `lab_js` and call it `guess_game.js`.

3. inside `guess_game.js` add a function to generate a random integer

```javascript
function getRandomIntInclusive(min, max) {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // Generate a random integer within the range [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

This function will help us to create choose a random word (dish) from an array of predetermined words.

4. create an array where the words will be stored and selected from.

```javascript
const words = ["pizza", "tapenade", "pasta", "borsh"];
```

5. Select a random word and store it in the variable `word`

```javascript
randInt = getRandomIntInclusive(0, words.length - 1);
var word = words[randInt];
```

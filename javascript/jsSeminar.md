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

6. get the `div` element that contains the `span` elements where the letters of the word are contained. notice that its id is `"letters"`.

```javascript
var letters = document.getElementById("letters");
```

This element (`div`) will be useful to let us to generate the initial `span` elements and change the letter that the page display.

7. Get the text `input` element where the user writes the letter that he thinks is part of the word.

```javascript
var userInput = document.getElementById("userInput");
```

This element will be useful to get the text (a letter) written by the user and check if it is part of the word.

8. Declare an array that will serve us as a placeholder for the `span` elements so we can modify them.

```javascript
const spanArray = [];
```

9. Declare an array that will serve us as a placeholder for the currently user guessed letter so we can store them for future comparisons with the guessing word.

```javascript
const userArray = [];
```

10. use a cycle to generate the `span` elements where the letters of the word will be shown. 

```javascript
for (i = 0; i < word.length; i++) {
  var initialText = document.createTextNode("  _____  ");
  spanArray[i] = document.createElement("span");
  spanArray[i].setAttribute("id", "letter" + i);
  spanArray[i].appendChild(initialText);
  letters.appendChild(spanArray[i]);
  userArray[i] = "  _____  ";
}
```

- the `{javascript} spanArray[i] = document.createElement("span");` create the `span` elements and save them in the `spanArray` array.

- the `{javascript} var initialText = document.createTextNode("  _____  ");` create the initial texts to fill the `span` elements.

- the `{javascript} spanArray[i].appendChild(initialText);` set the text of the `span` element.

- the `{javascript} letters.appendChild(spanArray[i]);` append the `span` elements to the `div` element.


- the `{javascript} spanArray[i].setAttribute("id", "letter" + i);` set the id of the current spam element.

- the `{javascript} userArray[i] = "  _____  ";` set the userArray to an initial text.

11. Create the next function (`fillUserWord`) and place it after the `{javascript} getRandomIntInclusive` function.

```javascript
function fillUserWord(userArray, userInput, word) {
  for (i = 0; i < word.length; i++) {
    if (word[i] === userInput) {
        userArray[i] = userInput;
    }
  }
}
```

This function compares the letter that the user inputs with the letters in the guessing word and put the guessed letter where it should be.

12. Create the next function (`mirrorUserWord`) and place it after the `{javascript} fillUserWord` function.

```javascript
function mirrorUserWord(userArray) {
  for (i = 0; i < word.length; i++) {
    spanArray[i].innerHTML = userArray[i];
  }
}
```

This function writes the content in userArray to the `span` elements mirroring or updating the content of the letters in the page.

13. get the button element so we can scan or listen or poll the click event and update the game, write the next line of code at the end of the current document.

```javascript
var guessButton = document.getElementById("guess");
```

14. after the previous line of code add an event listener for the click event and perform the needed actions, an anonimus function is used.


```javascript
guessButton.addEventListener("click", function () {
  var userLetter = userInput.value;
  fillUserWord(userArray, userLetter, word);
  mirrorUserWord(userArray);
  userInput.value = "";
  userInput.focus();
});
```






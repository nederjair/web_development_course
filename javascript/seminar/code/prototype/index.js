function getRandomIntInclusive(min, max) {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // Generate a random integer within the range [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillUserWord(userArray, userInput, word) {
  for (i = 0; i < word.length; i++) {
    if (word[i] === userInput) {
      userArray[i] = userInput;
    }
  }
}

function mirrorUserWord(userArray) {
  for (i = 0; i < word.length; i++) {
    spanArray[i].innerHTML = userArray[i];
  }
}
const words = ["pizza", "tapenade", "pasta", "borsh"];
randInt = getRandomIntInclusive(0, words.length - 1);
var word = words[randInt];
const spanArray = [];
const userArray = [];
var letters = document.getElementById("letters");
var userInput = document.getElementById("userInput");
for (i = 0; i < word.length; i++) {
  var initialText = document.createTextNode("  _____  ");
  spanArray[i] = document.createElement("span");
  spanArray[i].setAttribute("id", "letter" + i);
  spanArray[i].appendChild(initialText);
  letters.appendChild(spanArray[i]);
  userArray[i] = "  _____  ";
}

var guessButton = document.getElementById("guess");
guessButton.addEventListener("click", function () {
  var userLetter = userInput.value;
  fillUserWord(userArray, userLetter, word);
  mirrorUserWord(userArray);
  userInput.value = "";
  userInput.focus();
});

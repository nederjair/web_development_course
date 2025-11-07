function getRandomIntInclusive(min, max) {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // Generate a random integer within the range [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const words = ["pizza", "tapenade", "pasta", "borsh"];
randInt = getRandomIntInclusive(0, words.length - 1);
var word = words[randInt];
var letters = document.getElementById("letters");
var userInput = document.getElementById("userInput");
const spanArray = [];
const userArray = [];

for (i = 0; i < word.length; i++) {
  var initialText = document.createTextNode("  _____  ");
  spanArray[i] = document.createElement("span");
  spanArray[i].setAttribute("id", "letter" + i);
  spanArray[i].appendChild(initialText);
  letters.appendChild(spanArray[i]);
  userArray[i] = "  _____  ";
}

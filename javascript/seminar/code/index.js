function fillUserWord(userArray, userLetter, word) {
  for (i = 0; i < word.length; i++) {
    if (word[i] === userLetter) {
      userArray[i] = userLetter;
    }
  }
}
var guessButton = document.getElementById("guess");
guessButton.addEventListener("click", function (userArray, word) {
  var userLetter = document.getElementById("userLetter").innerText;
  //fillUserWord(userArray, userLetter, word);
  alert(word);
});

var word = "pizza";
const spanArray = [];
const userArray = [];
var letters = document.getElementById("letters");
for (i = 0; i < word.length; i++) {
  var initialText = document.createTextNode("  _____  ");
  spanArray[i] = document.createElement("span");
  spanArray[i].setAttribute("id", "letter" + i);
  spanArray[i].appendChild(initialText);
  letters.appendChild(spanArray[i]);
  userArray[i] = "$";
}

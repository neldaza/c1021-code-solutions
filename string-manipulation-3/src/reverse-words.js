/* exported reverseWords */
// Psuedo Code

// create storage for new Word
// create storage for currently processing word

// loop through string argument

// if the current index of the string is a space
// the space, and temporary word's current value, is assigned to temporary word
// if it isn't,
// add the current value of temporary word, plus a space and assign it to newString
// and reset temporary word

// add temporary word to newString
// return newString

function reverseWords(string) {
  var newString = '';
  var temporaryWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      temporaryWord = string[i] + temporaryWord;
    } else {
      newString += temporaryWord + ' ';
      temporaryWord = '';
    }
  }
  newString += temporaryWord;
  return newString;
}

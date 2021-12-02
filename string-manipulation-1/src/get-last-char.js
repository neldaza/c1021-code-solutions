/* exported getLastChar */
// 1. define a properly named action for getting the
// last character of the input and allows an input to be placed
// 2. create storage for the input
// 3. access the length of the input and store it
// in a new variable
// 4. create an action that accesess the length of the
// variable, and jumps to the absolutely last value LOCATION
// and assign this to a new variable (Index)
// 5. create an action that accesses the last value from the
// original input with the previous index and assign it to a new
// variable
// 6. return the output

function getLastChar(word) {
  var wordLength = word.length;
  var lastCharIndex = wordLength - 1;
  var lastChar = word[lastCharIndex];
  return lastChar;
}

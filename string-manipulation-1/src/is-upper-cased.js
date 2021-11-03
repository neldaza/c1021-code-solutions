/* exported isUpperCased */
// 1. define function isUpperCased with perameter word, that will return the boolean
// if wether or not the entire word is capitalized.
// 2. set variable for the word being completely uppercased and assign to variable
// 3. if the argument word is strictly equal to the entire word being uppercased, return true
// 4. if it isnt, return false
function isUpperCased(word) {
  var upperCasedWord = word.toUpperCase();
  if (word === upperCasedWord) {
    return true;
  }

  return false;
}

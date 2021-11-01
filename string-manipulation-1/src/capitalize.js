/* exported capitalize */
// 1. define function that capitalizes first letter of argument word
// 2. assign the value of "word" being completely lowercased to variable loweredCase
// 3. return the first letter of "word" uppercased, concatenated with the lowercased rendition
// of "word", except with the first letter sliced off

function capitalize(word) {
  var loweredCase = word.toLowerCase();
  return word[0].toUpperCase() + loweredCase.slice(1);
}

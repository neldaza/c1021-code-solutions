/* exported isLowerCased */
// 1. define function to detect if entire word is lowercased with perameter word
// 2. set variable for word being entirely lowercase and assign it to variable wordLowerCased
// 3. if argument word is strictly equal to the lowercased complete version of itself
// 4. return true
// 5. if it isnt, return false
function isLowerCased(word) {
  var wordLowerCased = word.toLowerCase();
  if (word === wordLowerCased) {
    return true;
  }
  return false;
}

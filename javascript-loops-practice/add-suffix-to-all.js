/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var emptyArray = [];
  var word = words;

  for (i = 0; i < words.length; i++) {
    emptyArray.push(words[i] + suffix);

  }
  return emptyArray;
}

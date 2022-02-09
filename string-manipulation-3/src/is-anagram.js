/* eslint-disable no-unused-vars */
/* exported isAnagram */
function isAnagram(firstString, secondString) {
  let firstStringNoSpaces = '';
  let secondStringNoSpaces = '';

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringNoSpaces += firstString[i];
    }
  }
  for (let a = 0; a < secondString.length; a++) {
    if (secondString[a] !== ' ') {
      secondStringNoSpaces += secondString[a];
    }
  }

}

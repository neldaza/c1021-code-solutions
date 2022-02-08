/* exported isAnagram */
// eslint-disable-next-line no-unused-vars
function isPalindromic(string) {
  let stringNoSpacesFront = '';
  let stringNoSpacesBack = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      stringNoSpacesFront += string[i];
    }
  }
  for (let a = string.length - 1; a >= 0; a--) {
    if (string[a] !== ' ') {
      stringNoSpacesBack += string[a];
    }
  }

  if (stringNoSpacesBack === stringNoSpacesFront) {
    return true;
  }

  return false;
}

/* eslint-disable no-undef */
/* exported includesSeven */
function includesSeven(array) {
  var seven = 7;
  for (i = 0; i < array.length; i++) {
    if (array[i] === seven) {
      return true;
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] !== seven) {
      return false;
    }
  }
  if (array[i] === undefined) {
    return false;
  }
}

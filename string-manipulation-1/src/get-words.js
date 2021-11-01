/* exported getWords */
function getWords(string) {
  var array = [];
  var newArray = [];
  for (var a = 0; a < string.length; a++) {
    array.push(string);
  }
  for (var b = 0; b < array.length; b++) {
    if (array[b] === '') {
      array.splice(b);
    } else {
      newArray.push(array[b]);
    }
  }
  return newArray;
}

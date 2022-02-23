/* exported flatten */

// Psuedo Code

// create storage for final array
// loop through argument array
// create variable for values of indexes

// if an index at array isnt an array,
// push the value of the index to the final array

// if it is an array,
// loop through it,
// and push any values within it to the final array

// return the final array

function flatten(array) {
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    var currentArray = array[i];
    if (!Array.isArray(currentArray)) {
      finalArray.push(currentArray);
    } else {
      for (var a = 0; a < currentArray.length; a++) {
        finalArray.push(currentArray[a]);
      }
    }
  }
  return finalArray;
}

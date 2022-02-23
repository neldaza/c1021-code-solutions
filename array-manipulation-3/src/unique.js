/* exported unique */

// Psuedo Code

// create storage for the final array
// loop through the argument array
// if array[i] is not present within final array,
// push array[i] into final array

// return final array

function unique(array) {
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    if (finalArray.indexOf(array[i]) === -1) {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}

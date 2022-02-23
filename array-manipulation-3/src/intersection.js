/* exported intersection */

// Psuedo Code

// create storage for final array
// loop through the first array
// if the second array has an instance of an element in first array
// add it to final array

// return final array

function intersection(first, second) {
  var finalArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      finalArray.push(first[i]);
    }
  }
  return finalArray;
}

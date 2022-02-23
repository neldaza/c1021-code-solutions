/* exported union */

// Psuedo Code

// create storage for the final array
// loop through the first array
// if final array doesn't have an instance of an element within the first array,
// add it to final array

// loop through the second array
// if final array doesnt have an instance of an element within second array
// add it to final array

// return final array

function union(first, second) {
  var finalArray = [];
  for (var i = 0; i < first.length; i++) {
    if (finalArray.indexOf(first[i]) === -1) {
      finalArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (finalArray.indexOf(second[j]) === -1) {
      finalArray.push(second[j]);
    }
  }
  return finalArray;
}

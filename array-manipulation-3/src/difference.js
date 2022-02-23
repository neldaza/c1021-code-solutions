/* exported difference */

// Psuedo Code

// create storage for final array
// loop through the first array/
// if an element within the first array isn't present within the second array
// push it to final array

// loop through the second array
// if an element within the second array isnt present within the first array
// push it to the final array

// return final array

function difference(first, second) {
  var finalArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      finalArray.push(first[i]);
    }
  }
  for (var b = 0; b < second.length; b++) {
    if (first.indexOf(second[b]) === -1) {
      finalArray.push(second[b]);
    }
  }
  return finalArray;
}

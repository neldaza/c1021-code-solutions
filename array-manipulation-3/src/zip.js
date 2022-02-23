/* exported zip */

// Psuedo Code

// create storage for final array
// assign the lowest length between the first and second arrays to variable "length"

// loop using length as the condition
// push an array with an element from first, and an element from second, (which have the same indexes in their original arrays) into final array
// return final array

function zip(first, second) {
  var finalArray = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    finalArray.push([first[i], second[i]]);
  }
  return finalArray;
}

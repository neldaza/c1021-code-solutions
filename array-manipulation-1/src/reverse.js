/* exported reverse */
// 1. define function reverse with perameter array
// 2. if argument array is equal to empty array
// 3. return empty array
// 4. assign empty array to variable final array
// 5. loop through array indexes backwards
// 6. push array[i] to finalArray array
// 7. return finalArray
function reverse(array) {
  if (array === []) {
    return [];
  }
  var finalArray = [];

  for (var i = array.length - 1; i >= 0; i--) {
    finalArray.push(array[i]);
  }
  return finalArray;
}

/* exported tail */
// 1. define function tail with array perameter
// 2, if array equals empty array
// 3. return empty array
// 4. assign empty array to variable newArray
// 5. loop through length of array argument
// 6. if index isn't equal to 0 (first value)
// 7. push the array at index to newArray
// 8. return newArray (output)
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

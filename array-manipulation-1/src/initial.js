/* exported initial */
// 1. define function initial with array perameter
// 2. if array equals empty array
// 3. return empty array
// 4. assign empty array to variable newArray
// 5. assign array.length - 1 to variable lastIndex
// 6. loop through array indexes
// 7. if i isnt equal to the last index,
// 8. push array at i to newArray
// 9. return newArray (output)
function initial(array) {
  if (array === []) {
    return [];
  }
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

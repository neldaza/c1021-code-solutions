/* exported compact */
// 1. define compact function with array perameter
// 2. if array equals empty array
// 3. return empty array
// 4. assign variable falsy with no value
// 5. assign empty array to variable newArray
// 6. loop through indexes of array argument
// 7. set variable falsy equal to boolean function array at i
// 8. if falsy is equal to true
// 9. push array at i to newArray
// 10. return new Array

function compact(array) {
  var falsy;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    falsy = Boolean(array[i]);
    if (falsy === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

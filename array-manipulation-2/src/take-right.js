/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  const finalArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (newArray.length === count) {
      for (var a = newArray.length - 1; a >= 0; a--) {
        finalArray.push(newArray[a]);
      }
      return finalArray;
    } else {
      newArray.push(array[i]);
    }
  }
  return [];
}

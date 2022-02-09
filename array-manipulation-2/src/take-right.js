/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  for (let i = array.length - 1; i >= array.length - count; i--) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    }
  }

  newArray.reverse();
  return newArray;
}

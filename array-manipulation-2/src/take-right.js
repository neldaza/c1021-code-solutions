/* exported takeRight */
function takeRight(array, count) {
  const arrayCopy = array;
  const newArray = [];
  for (let i = arrayCopy.length - 1; i >= arrayCopy.length - count; i--) {
    if (arrayCopy[i] !== undefined) {
      newArray.push(arrayCopy[i]);
    }
  }

  newArray.reverse();
  return newArray;
}

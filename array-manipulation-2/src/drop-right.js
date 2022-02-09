/* exported dropRight */
function dropRight(array, count) {
  const arrayCopy = array;
  const newArray = [];

  for (let i = 0; i < arrayCopy.length - count; i++) {
    newArray.push(arrayCopy[i]);
  }

  return newArray;
}

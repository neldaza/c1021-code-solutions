/* exported dropRight */
function dropRight(array, count) {
  const newArray = [];
  const finalArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  const secondArray = newArray.slice(count);
  for (let a = secondArray.length - 1; a >= 0; a--) {
    finalArray.push(secondArray[a]);
  }

  return finalArray;
}

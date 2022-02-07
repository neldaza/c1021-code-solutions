/* exported take */
function take(array, count) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === count) {
      return newArray;
    }
    newArray.push(array[i]);
  }
  return newArray;
}

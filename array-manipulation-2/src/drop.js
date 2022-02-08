/* exported drop */
function drop(array, count) {
  const newArray = array.slice(count, array.length);
  return newArray;
}

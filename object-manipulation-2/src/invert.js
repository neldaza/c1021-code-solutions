/* exported invert */
function invert(source) {
  const returnObject = {};
  for (const [key, value] of Object.entries(source)) {
    returnObject[value] = key;
  }
  return returnObject;
}

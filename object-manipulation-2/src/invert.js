/* exported invert */
function invert(source) {
  const returnObject = {};
  for (const key in source) {
    returnObject[source[key]] = key;
  }

  return returnObject;
}

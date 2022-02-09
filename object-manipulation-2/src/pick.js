/* exported pick */
function pick(source, keys) {
  const returnObject = {};

  for (let i = 0; i < keys.length; i++) {
    for (const key in source) {
      if (key === keys[i]) {
        if (source[key] !== undefined) {
          returnObject[keys[i]] = source[key];
        }
      }
    }
  }
  return returnObject;
}

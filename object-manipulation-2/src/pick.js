/* exported pick */
function pick(source, keys) {
  const returnObject = {};

  for (let i = 0; i < keys.length; i++) {
    for (const [key, value] of Object.entries(source)) {
      if (key === keys[i]) {
        if (value !== undefined) {
          returnObject[keys[i]] = value;
        }
      }
    }
  }
  return returnObject;
}

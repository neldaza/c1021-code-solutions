/* exported omit */
function omit(source, keys) {
  const sourceCopy = Object.assign({}, source);
  for (let i = 0; i < keys.length; i++) {
    for (const [key] of Object.entries(source)) {
      if (key === keys[i]) {
        delete sourceCopy[key];
      }
    }
  }

  return sourceCopy;
}

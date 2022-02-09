/* exported omit */
function omit(source, keys) {
  const sourceCopy = Object.assign({}, source);
  for (let i = 0; i < keys.length; i++) {
    for (const property in source) {
      if (property === keys[i]) {
        delete sourceCopy[property];
      }
    }

  }
  return sourceCopy;
}

// for (const [key] of Object.entries(source)) {
//   if (key === keys[i]) {
//     delete sourceCopy[key];
//   }

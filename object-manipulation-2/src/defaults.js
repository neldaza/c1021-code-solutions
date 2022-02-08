/* exported defaults */
function defaults(target, source) {
  Object.keys(source).forEach(key => {
    if (!target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  });
}

/* exported truncate */
function truncate(length, string) {
  let newString = string.slice(0, length);

  for (let a = 0; a < newString.length; a++) {
    const lastIndex = newString.length - 1;
    if (newString[lastIndex] === ' ') {
      let final = newString.slice(0, lastIndex);
      final += '...';
      return final;
    }
  }

  newString += '...';
  return newString;
}

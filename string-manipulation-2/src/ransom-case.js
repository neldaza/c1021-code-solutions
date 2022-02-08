/* exported ransomCase */
function ransomCase(string) {
  const stringLowerCased = string.toLowerCase();
  let final = '';
  for (let i = 0; i < stringLowerCased.length; i++) {
    if (i === 0) {
      final += stringLowerCased[i];
    } else if (i % 2 !== 0) {
      const upperCasedLetter = stringLowerCased[i].toUpperCase();
      final += upperCasedLetter;
    } else {
      final += stringLowerCased[i];
    }
  }
  return final;
}

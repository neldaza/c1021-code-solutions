/* exported capitalizeWord */
function capitalizeWord(word) {
  let final = '';
  const allLowerCase = word.toLowerCase();
  for (let i = 0; i < allLowerCase.length; i++) {
    if (i === 0) {
      const firstLetterUppercase = allLowerCase[i].toUpperCase();
      final += firstLetterUppercase;
    } else {
      final += allLowerCase[i];
    }
  }
  if (final === 'Javascript') {
    const java = final.slice(0, 4);
    const cript = final.slice(5, 10);
    const final2 = java + 'S' + cript;
    return final2;
  }
  return final;
}

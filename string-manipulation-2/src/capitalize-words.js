/* exported capitalizeWords */
function capitalizeWords(string) {
  const allWordsLowerCased = string.toLowerCase();
  let separateWords = '';
  let final = '';
  for (let i = 0; i < allWordsLowerCased.length; i++) {
    if (allWordsLowerCased[i] === ' ') {
      const notFirstLetter = separateWords.slice(1, separateWords.length);
      const firstLetterCapitalized = separateWords[0].toUpperCase();
      final += firstLetterCapitalized + notFirstLetter + ' ';
      separateWords = '';
    } else {
      separateWords += allWordsLowerCased[i];
    }
  }
  const notFirstLetter = separateWords.slice(1, separateWords.length);
  const firstLetterCapitalized = separateWords[0].toUpperCase();
  final += firstLetterCapitalized + notFirstLetter;
  return final;
}

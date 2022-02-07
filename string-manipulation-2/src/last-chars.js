/* exported lastChars */
function lastChars(length, string) {
  let backwardsWords = '';
  for (let i = string.length - 1; i >= 0; i--) {
    backwardsWords += string[i];
  }
  const backwardsWordsSlice = backwardsWords.slice(0, length);
  let insideWord = '';
  let finalWord = '';
  for (var a = backwardsWordsSlice.length - 1; a >= 0; a--) {
    if (backwardsWordsSlice[a] === ' ') {
      finalWord += insideWord + ' ';
      insideWord = '';
    } else {
      insideWord += backwardsWordsSlice[a];
    }
  }
  finalWord += insideWord;
  return finalWord;
}

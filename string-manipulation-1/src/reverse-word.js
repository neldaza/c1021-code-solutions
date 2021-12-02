/* exported reverseWord */
// 1. define function reverseWord with word perameter
// 2. if word argument equals empty string
// 3. return empty string
// 4. assign empty string to variable finalWord
// 5. assign empty string to variable insideWord
// 6. loop through word argument backwards
// 7. if word at index is equal to a space,
// 8. add insideWord to final word,
// 9. and reset insideWord
// 10. if it's a letter,
// 11. add the letter at the index to insideWord string
// 12. add insideWord to finalWord for last iteration
// 13. return finalWord (output)

function reverseWord(word) {
  if (word === '') {
    return '';
  }
  var finalWord = '';
  var insideWord = '';

  for (var i = word.length - 1; i >= 0; i--) {
    if (word[i] === ' ') {
      finalWord += insideWord;
      insideWord = '';
    } else {
      insideWord += word[i];
    }
  }
  finalWord += insideWord;
  return finalWord;
}

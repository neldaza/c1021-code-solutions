/* exported getWords */
// 1, define getWords function with argument string
// 2. if string equals empty string
// 3. return empty array
// 4. assign empty array to variable array
// 5. assign empty string to variable currentWord
// 6. loop through string argument
// 7. if strings current index equals a space
// 8. push currentWord's value to output array
// 9. and reset current word
// 10. if it isnt a space,
// 11. add the letter at index to empty string
// 12 after the final iteration, push the curreent value of Currentword to output array
// 13. return the output

function getWords(string) {
  if (string === '') {
    return [];
  }
  var array = [];
  var currentWord = '';
  for (var a = 0; a < string.length; a++) {
    if (string[a] === ' ') {
      array.push(currentWord);
      currentWord = '';
    } else {
      currentWord += string[a];
    }
  }
  array.push(currentWord);
  return array;
}

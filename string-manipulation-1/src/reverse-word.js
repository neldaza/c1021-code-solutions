/* exported reverseWord */
// 1. define function reverseWord with word perameter
// . empty string variable
// 2. assign empty array to variable array
// 3. loop through entirety of word
// 4. store indexes of word in array variable
// 5. loop through array variable and concatenate string variable with reverse indexes of array
// return string

function reverseWord(word) {
  var string = '';
  var array = [];
  for (var i = 0; i < word.length; i++) {
    array.push(i);
  }
  for (i = 0; i > array.length --i) {
    string += array[i];
  }
  return string;
}

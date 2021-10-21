/* eslint-disable no-undef */
/* exported filterOutStrings */
// 1. define function to filter out strings
// 2. set up loop to cycle through entirety of values array
// 3. within the loop if a string is at I
// 4. splice i from the values array

function filterOutStrings(values) {
  for (i = 0; i < values.length; i++) {
    if (i[String]) {

      values.splice(i);
    }
  }
}

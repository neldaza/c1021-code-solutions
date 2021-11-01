/* eslint-disable no-undef */
/* exported isVowel */
// Line 11: define function to detect vowels with a character as a perameter
// Lines 12 - 21: assign vowel strings inside of arrays to their respective variables
// Line 22: assign boolean false to variable vowel
// Line 23: loop through the entirety of the characters argument
// Lines 24-44: if once the character argument is looped, and the value at it's index is strictly equal to the any of the values
// at the indexes for the vowels, meaning if the character argument is stricly equal to any vowel, then the variable
// vowel is assigned to a boolean true because if the previous condition was met, the argument is in fact a vowel.
// Line 47: Otherwise, return the vowels initial boolean of false, because if the character argument was looped through, and an exact match
// for strictly a singular vowel was not found, then the function will return false because the argument being called wasn't a vowel
function isVowel(character) {
  var a = ['a'];
  var upperCasedA = ['A'];
  var e = ['e'];
  var upperCasedE = ['E'];
  var letterI = ['i'];
  var upperCasedI = ['I'];
  var o = ['o'];
  var upperCasedO = ['O'];
  var u = ['u'];
  var upperCasedU = ['U'];
  var vowel = false;
  for (i = 0; i < character.length; i++) {
    if (character[i] === a[i]) {
      vowel = true;
    } else if (character[i] === upperCasedA[i]) {
      vowel = true;
    } else if (character[i] === e[i]) {
      vowel = true;
    } else if (character[i] === upperCasedE[i]) {
      vowel = true;
    } else if (character[i] === letterI[i]) {
      vowel = true;
    } else if (character[i] === upperCasedI[i]) {
      vowel = true;
    } else if (character[i] === o[i]) {
      vowel = true;
    } else if (character[i] === upperCasedO[i]) {
      vowel = true;
    } else if (character[i] === u[i]) {
      vowel = true;
    } else if (character[i] === upperCasedU[i]) {
      vowel = true;
    }

  }
  return vowel;
}

/* eslint-disable no-unused-vars */
/* exported isAnagram */

// Psuedo Code

// first and second strings are stripped of their space values

// The "no space" first and second strings are split into individual letters

// the letters are sorted in ascending order based on their respective UTF-16 Values

// both sorted arrays are called with the join method which returns the arrays as strings

// if the first ordered string is strictly equal to the second ordered string, return true

// else return false

function isAnagram(firstString, secondString) {

  var noSpaceFirstString = firstString.replaceAll(' ', '');
  var noSpaceSecondString = secondString.replaceAll(' ', '');

  var splitFirstString = noSpaceFirstString.split('');
  var splitSecondString = noSpaceSecondString.split('');

  var sortFirstString = splitFirstString.sort();
  var sortSecondString = splitSecondString.sort();

  var orderedFirstString = splitFirstString.join();
  var orderedSecondString = splitSecondString.join();

  if (orderedFirstString === orderedSecondString) {
    return true;
  }
  return false;

}

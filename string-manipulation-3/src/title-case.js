/* exported titleCase */

// Psuedo Code

// create storage for new string
// stip argument string of it's spaces, and create array with individual words
// create storage for "minor" words

// loop through array of words with no spaces
// if the splitWord array's length is more than or equal to 3

// take every word's first letter, and uppercase it, isolate the uppercased letter,
// and concatenate the rest of the word with the isolated uppercase

// if the string in the split array is  strictly equal to "Javascript",
// give it the proper title case "JavaScript"

// if the string in the split array is  strictly equal to "Javascript:",
// give it the proper title case "JavaScript:"

// if the string in the split array is  strictly equal to "Api",
// give it the proper title case "API"

// if the minorWords string array includes the value of splitWord[i],
// splitWord[i] gets lowercased

// if the minorWords string array includes splitWord at it's first index,
// the first index value of splitWOrd's first letter will get capitalized and concatenated with the rest of it's own word
// ex: "N" + "or" -> "Nor"

// create a variable for concatenating all of the splitWord array's values seperated by spaces being returned as a string
// properCapital is assigned to newString

// create new variable splitWordColon to strip colons from newString, and seperate strings
// loop through splitWordColon
// if there are two strings(words, length == 2) in the splitWordColon array,
// capitalize the second word that would be coming after the colon
// ex: John: the Guy => John: The Guy
// create a new variable that returns a string from an array that is concatenated by a ": "
// ex: ["Joe", "Shmoe"] => Joe: Shmoe
// newString is now equal to the new string with a proper colon

// create new variable to strip newString of any dashes (-)
// loop through array with no dashes,
// if the no dash array has a greater length than 1
// capitalize the first letter of each word, and concatenate the rest of the word with the newly uppercased first letter
// re-apply the dashes
// newString is now equal to the appropriately dashed and capitalized word

// return newString

function titleCase(string) {
  var newString = '';
  var splitWord = string.split(' ');
  var minorWords = ['And', 'and', 'or', 'Nor', 'nor', 'But', 'but', 'a', 'an', 'The', 'the', 'as', 'at', 'by', 'For', 'for', 'in', 'of', 'on', '"Per', 'per', 'to'];
  for (var i = 0; i < splitWord.length; i++) {
    if (splitWord[i].length >= 3) {
      splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].slice(1);
    }
    if (splitWord[i] === 'Javascript') {
      splitWord[i] = 'JavaScript';
    }
    if (splitWord[i] === 'Javascript:') {
      splitWord[i] = 'JavaScript:';
    }
    if (splitWord[i] === 'Api') {
      splitWord[i] = 'API';
    }
    if (minorWords.includes(splitWord[i])) {
      splitWord[i] = splitWord[i].toLowerCase();
    }
    if (minorWords.includes(splitWord[0])) {
      splitWord[0] = splitWord[0].charAt(0).toUpperCase() + splitWord[0].slice(1);
    }
    var properCapital = splitWord.join(' ');
    newString = properCapital;
  }
  var splitWordColon = newString.split(': ');
  for (var j = 0; j < splitWordColon.length; j++) {
    if (splitWordColon.length === 2) {
      splitWordColon[1] = splitWordColon[1].charAt(0).toUpperCase() + splitWordColon[1].slice(1);
    }
    var colonJoin = splitWordColon.join(': ');
    newString = colonJoin;
  }
  var splitWordDash = newString.split('-');
  for (var k = 0; k < splitWordDash.length; k++) {
    if (splitWordDash.length > 1) {
      splitWordDash[k] = splitWordDash[k].charAt(0).toUpperCase() + splitWordDash[k].slice(1);
    }
    var dashJoin = splitWordDash.join('-');
    newString = dashJoin;
  }
  return newString;

}

/* exported equal */
// Pseudo Code

// if the length of the first array isn't equal to the length of the second,
// return false

// if they are equal
// loop through the first array,
// if first at i isnt equal to second at the same index
// return false

// return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  }
}

/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 3 * n = O(3)n ~= O(n)
    i++                             // 2 * 1 = O(2)
  ) {
    const word = words[i];          // 3 * n = O(3)n ~= O(n)
    if (!seen[word]) {              // 4 * n = O(4)n ~= O(n)
      seen[word] = true;
      unique[unique.length] = word; // 5 * 1 = O(5)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2)n ~= O(n)
    i++                             // 2 * 1 = O(2)
  ) {
    const word = words[i];          // 3 * 1 = O(3)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 1 * n = O(1)n ~= O(n)
      c++                           // 2 * 1 = O(2)
    ) {
      const comparing = words[c];   // 3 * n = O(3)n ~= O(n)
      if (comparing === word) {     // 3 * 1 = O(3)
        isUnique = false;           // 3 * 1 = O(1)
      }
    }
    if (isUnique) {                 // 1 * 1 = O(1)
      unique[unique.length] = word; // 4 * n = O(4)n = O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(1)

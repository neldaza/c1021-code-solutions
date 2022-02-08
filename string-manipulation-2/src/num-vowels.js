/* exported numVowels */
function numVowels(string) {
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < string.length++; i++) {
    for (let a = 0; a < vowels.length; a++) {
      if (string[i] === vowels[a]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}

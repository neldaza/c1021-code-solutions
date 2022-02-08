/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let firstLetter = '';
  let secondLetter = '';
  let firstFragment = '';
  let secondFragment = '';
  let thirdFragment = '';

  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      firstFragment = string.slice(0, i);
      firstLetter = string.slice(i, i + 1);
    } else if (i === secondIndex) {
      secondFragment = string.slice(firstIndex + 1, i);
      secondLetter += string.slice(i, i + 1);
      thirdFragment = string.slice(secondIndex + 1, string.length);
    }
  }
  return `${firstFragment}${secondLetter}${secondFragment}${firstLetter}${thirdFragment}`;
}

/* exported truncate */
function truncate(length, string) {
  for (var i = 0; i < string.length; i++) {
    if (string[length]) {
      string.splice(string[length], string.length);
      string.append('...');
    }
  }
  return string;
}

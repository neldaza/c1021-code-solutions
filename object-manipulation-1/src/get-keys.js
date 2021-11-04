/* exported getKeys */
// 1. define function to get keys in object
// 2. assign empty array to variable keys
// 3. for every key in object,
// 4. push the key to the keys array
// 5. return keys array

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);

  }
  return keys;
}

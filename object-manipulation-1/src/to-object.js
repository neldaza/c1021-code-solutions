/* exported toObject */
// 1. define function to create object with keyValuePair as perameter
// 2. empty object literal is assigned to variable object
// 3. keyValuePair at Index 1, is assigned to keyValuePair at Index 0 at variable Object
// 4. return object variable

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];

  return object;
}

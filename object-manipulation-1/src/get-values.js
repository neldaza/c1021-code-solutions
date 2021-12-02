/* exported getValues */
// 1. define function to get values from object
// 2. assign empty array to variable values
// 3. for every key in object,
// 4. assign key at object to variable value
// 5. push value to the values array
// 6. return values array

function getValues(object) {
  var values = [];

  for (const key in object) {

    const value = object[key];
    values.push(value);
  }
  return values;
}

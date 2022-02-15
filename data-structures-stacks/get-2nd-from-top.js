/* exported get2ndFromTop */

function get2ndFromTop(stack) {

  const popArray = [];
  popArray.push(stack.peek());
  stack.pop();
  popArray.push(stack.peek());

  if (popArray.length === 1) {
    stack.push(popArray[0]);
    return popArray[0];
  } else if (popArray[0] === undefined) {
    return undefined;
  } else {
    stack.push(popArray[0]);
    return popArray[1];
  }
}

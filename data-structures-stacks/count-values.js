/* exported countValues */

function countValues(stack) {
  const stackArray = Array.from(stack.print());
  let counter = stackArray.length;
  const numbersArray = [];

  while (counter > 0) {
    if (stack.peek() !== undefined) {
      numbersArray.push(stack.peek());
    }
    if (numbersArray[0] === undefined) {
      return 0;
    }
    stack.pop();
    counter--;
  }
  return numbersArray.length;
}

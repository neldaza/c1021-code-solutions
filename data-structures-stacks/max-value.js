/* exported maxValue */

function maxValue(stack) {
  const stackArray = Array.from(stack.print());
  let counter = stackArray.length;
  const numbersArray = [];

  while (counter > 0) {
    if (stack.peek() !== undefined) {
      numbersArray.push(stack.peek());
    }
    if (numbersArray[0] === undefined) {
      return -Infinity;
    }
    stack.pop();
    counter--;
  }

  return Math.max(...numbersArray);
}

/* global Stack */
/* exported maxValue */

function maxValue(stack) {
  const newStack = new Stack();
  let largest = -Infinity;
  let counter = 0;

  while (stack.peek() !== undefined) {
    newStack.push(stack.pop());
    counter++;
  }

  while (counter !== 0) {
    if (largest < newStack.peek()) {
      largest = newStack.peek();
    }
    newStack.pop();
    counter--;
  }
  return largest;
}

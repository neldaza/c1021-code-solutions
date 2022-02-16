/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  let counter = 0;
  let firstNumber = null;
  let secondNumber = null;

  while (counter !== 2) {
    if (counter === 0) {
      firstNumber = stack.pop();
      counter++;
    } else if (counter === 1) {
      secondNumber = stack.pop();
      counter++;
    }
  }
  if (secondNumber !== undefined) {
    stack.push(secondNumber);
  }
  if (firstNumber !== undefined) {
    stack.push(firstNumber);
  }
  return secondNumber;
}

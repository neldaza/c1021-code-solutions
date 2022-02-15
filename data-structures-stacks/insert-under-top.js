/* exported insertUnderTop */

function insertUnderTop(stack, value) {

  let last = null;
  last = stack.peek();
  if (last === undefined) {
    return;
  }
  stack.pop();
  stack.push(value);
  stack.push(last);
}

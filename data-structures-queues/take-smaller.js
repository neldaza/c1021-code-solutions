/* exported takeSmaller */

function takeSmaller(queue) {
  let counter = 0;
  let firstValue;
  let secondValue;

  if (queue.peek() === undefined) {
    return;
  }

  while (counter !== 2) {
    if (counter === 0) {
      firstValue = queue.dequeue();
      counter++;
    } else if (counter === 1) {
      secondValue = queue.dequeue();
      counter++;
    }
  }

  if (firstValue < secondValue) {
    queue.enqueue(secondValue);
    return firstValue;
  } else if (firstValue === secondValue) {
    queue.enqueue(firstValue);
    return firstValue;
  } else if (firstValue > secondValue) {
    queue.enqueue(firstValue);
    return secondValue;
  }

  return firstValue;
}

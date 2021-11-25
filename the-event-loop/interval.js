let currentCount = 3;
var timerId = null;

console.log(currentCount);

function updateCount() {
  currentCount--;
  if (currentCount > 0) {
    console.log(currentCount);
  } else {
    console.log('Blast off!');
    clearInterval(timerId);
  }
}
timerId = setInterval(updateCount, 1000);

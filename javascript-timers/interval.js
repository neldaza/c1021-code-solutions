var countdown = 4;
var timerId = null;
var $heading = document.querySelector('h1');

function updatingHeading() {
  countdown--;
  if (countdown > 0) {
    $heading.textContent = countdown;
  } else {
    $heading.textContent = '~Earth Belooooooooowwwwwww Us~';
    clearInterval(timerId);
  }
}
timerId = setInterval(updatingHeading, 900);

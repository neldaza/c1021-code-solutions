var $character = document.querySelectorAll('.letter');
var indexNumber = 0;

function typingTutor(event) {
  if ($character[indexNumber].textContent === event.key) {
    $character[indexNumber].className = 'right';
    indexNumber++;
    $character[indexNumber].classList.add('current');
  } else {
    $character[indexNumber].className = 'wrong';
  }
}

document.addEventListener('keydown', typingTutor);

var $img = document.querySelector('img');
var $circleSelectorAll = document.querySelectorAll('.circle');

var currentImage = 0;
var imageSrcArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var timerId = null;

function updatingPicture() {
  currentImage++;
  for (let i = 0; i < imageSrcArray.length; i++) {
    $img.setAttribute('src', imageSrcArray[currentImage]);
    $img.setAttribute('data-image-index', `${currentImage}`);
    for (let a = 0; a < $circleSelectorAll.length; a++) {
      if (parseInt($circleSelectorAll[a].getAttribute('data-image-index')) === parseInt($img.getAttribute('data-image-index'))) {
        $circleSelectorAll[a].className = 'circle circle-background';
      } else {
        $circleSelectorAll[a].className = 'circle';
      }
    }
    if (currentImage === 4) {
      currentImage = 0;
      return;
    }
  }
}

function circleIndex(event) {
  clearInterval(timerId);
  timerId = null;
  event.target.className = 'circle circle-background';
  currentImage = parseInt(event.target.getAttribute('data-image-index'));
  $img.setAttribute('src', imageSrcArray[parseInt(event.target.getAttribute('data-image-index'))]);
  for (let i = 0; i < $circleSelectorAll.length; i++) {
    if (parseInt($circleSelectorAll[i].getAttribute('data-image-index')) !== parseInt(event.target.getAttribute('data-image-index'))) {
      $circleSelectorAll[i].className = 'circle';
    }
  }
  timerId = setInterval(updatingPicture, 3000);
}

for (let b = 0; b < $circleSelectorAll.length; b++) {
  $circleSelectorAll[b].addEventListener('click', circleIndex);
}

timerId = setInterval(updatingPicture, 3000);

var $img = document.querySelector('img');
var $circleSelectorAll = document.querySelectorAll('.circle');
var $nextArrow = document.querySelector('.next-arrow');
var $previousArrow = document.querySelector('.previous-arrow');

var currentImage = 0;
var imageSrcArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var timerId = null;

function updatingPicture() {
  if (currentImage === 4) {
    currentImage = -1;
  }
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

function lastPicture(event) {
  clearInterval(timerId);
  if (currentImage === 0) {
    currentImage = imageSrcArray.length - 1;
    $img.setAttribute('src', imageSrcArray[currentImage]);
    $img.setAttribute('data-image-index', currentImage);
    for (let i = 0; i < $circleSelectorAll.length; i++) {
      if (parseInt($circleSelectorAll[i].getAttribute('data-image-index')) === parseInt($img.getAttribute('data-image-index'))) {
        $circleSelectorAll[i].className = 'circle circle-background';
      } else {
        $circleSelectorAll[i].className = 'circle';
      }
    }
    timerId = setInterval(updatingPicture, 3000);
    return;
  }
  currentImage = parseInt($img.getAttribute('data-image-index')) - 1;
  $img.setAttribute('src', imageSrcArray[currentImage]);
  $img.setAttribute('data-image-index', parseInt($img.getAttribute('data-image-index')) - 1);
  for (let i = 0; i < $circleSelectorAll.length; i++) {
    if (parseInt($circleSelectorAll[i].getAttribute('data-image-index')) === parseInt($img.getAttribute('data-image-index'))) {
      $circleSelectorAll[i].className = 'circle circle-background';
    } else {
      $circleSelectorAll[i].className = 'circle';
    }
  }
  timerId = setInterval(updatingPicture, 3000);
}

function nextPicture(event) {
  clearInterval(timerId);
  if (currentImage === imageSrcArray.length - 1) {
    currentImage = 0;
    $img.setAttribute('src', imageSrcArray[currentImage]);
    $img.setAttribute('data-image-index', currentImage);
    for (let i = 0; i < $circleSelectorAll.length; i++) {
      if (parseInt($circleSelectorAll[i].getAttribute('data-image-index')) === parseInt($img.getAttribute('data-image-index'))) {
        $circleSelectorAll[i].className = 'circle circle-background';
      } else {
        $circleSelectorAll[i].className = 'circle';
      }
    }
    timerId = setInterval(updatingPicture, 3000);
    return;
  }
  currentImage = parseInt($img.getAttribute('data-image-index')) + 1;
  $img.setAttribute('src', imageSrcArray[currentImage]);
  $img.setAttribute('data-image-index', parseInt($img.getAttribute('data-image-index')) + 1);
  for (let i = 0; i < $circleSelectorAll.length; i++) {
    if (parseInt($circleSelectorAll[i].getAttribute('data-image-index')) === parseInt($img.getAttribute('data-image-index'))) {
      $circleSelectorAll[i].className = 'circle circle-background';
    } else {
      $circleSelectorAll[i].className = 'circle';
    }
  }
  timerId = setInterval(updatingPicture, 3000);
}

for (let b = 0; b < $circleSelectorAll.length; b++) {
  $circleSelectorAll[b].addEventListener('click', circleIndex);
}

$nextArrow.addEventListener('click', nextPicture);
$previousArrow.addEventListener('click', lastPicture);

timerId = setInterval(updatingPicture, 3000);

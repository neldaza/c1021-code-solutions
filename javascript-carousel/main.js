/* eslint-disable no-unused-vars */
var $circleOne = document.querySelector('.circle-one');
var $circleTwo = document.querySelector('.circle-two');
var $circleThree = document.querySelector('.circle-three');
var $circleFour = document.querySelector('.circle-four');
var $circleFive = document.querySelector('.circle-five');
var $img = document.querySelector('img');
var $rightArrow = document.querySelector('.right');
var $leftArrow = document.querySelector('.left');
var $circle = document.querySelector('circle');
//
var currentImage = 1;
var imageSrcArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var countdown = 4;
var timerId = null;
var $circleSelectorAll = document.querySelectorAll('.circle');

function updatingPicture() {
  countdown--;
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
  currentImage++;
}

function circleIndex(event) {
  $img.setAttribute('src', imageSrcArray[parseInt(event.target.getAttribute('data-image-index'))]);
  for (let i = 0; i < $circleSelectorAll.length; i++) {
    if (parseInt($circleSelectorAll[i].getAttribute('data-image-index')) !== parseInt(event.target.getAttribute('data-image-index'))) {
      $circleSelectorAll[i].className = 'circle';
    }
  }
  event.target.className = 'circle circle-background';
  currentImage = parseInt(event.target.getAttribute('data-image-index'));
}

for (let b = 0; b < $circleSelectorAll.length; b++) {
  $circleSelectorAll[b].addEventListener('click', circleIndex);
}

timerId = setInterval(updatingPicture, 3000);

// function pictureOne(event) {
//   $img.setAttribute('src', 'images/025.png');
//   $circleOne.className = 'circle circle-one circle-background';
//   $circleTwo.className = 'circle circle-two';
//   $circleThree.className = 'circle circle-three';
//   $circleFour.className = 'circle circle-four';
//   $circleFive.className = 'circle circle-five';
// }

// $circleOne.addEventListener('click', pictureOne);

// function pictureTwo(event) {
//   $img.setAttribute('src', 'images/039.png');
//   $circleOne.className = 'circle circle-one';
//   $circleTwo.className = 'circle circle-two circle-background';
//   $circleThree.className = 'circle circle-three';
//   $circleFour.className = 'circle circle-four';
//   $circleFive.className = 'circle circle-five';

// }
// $circleTwo.addEventListener('click', pictureTwo);

// function pictureThree(event) {
//   $img.setAttribute('src', 'images/001.png');
//   $circleOne.className = 'circle circle-one';
//   $circleTwo.className = 'circle circle-two';
//   $circleThree.className = 'circle circle-three circle-background';
//   $circleFour.className = 'circle circle-four';
//   $circleFive.className = 'circle circle-five';
// }
// $circleThree.addEventListener('click', pictureThree);

// function pictureFour(event) {
//   $img.setAttribute('src', 'images/004.png');
//   $circleOne.className = 'circle circle-one';
//   $circleTwo.className = 'circle circle-two';
//   $circleThree.className = 'circle circle-three';
//   $circleFour.className = 'circle circle-four circle-background';
//   $circleFive.className = 'circle circle-five';
// }
// $circleFour.addEventListener('click', pictureFour);

// function pictureFive(event) {
//   $img.setAttribute('src', 'images/007.png');
//   $circleOne.className = 'circle circle-one';
//   $circleTwo.className = 'circle circle-two';
//   $circleThree.className = 'circle circle-three';
//   $circleFour.className = 'circle circle-four';
//   $circleFive.className = 'circle circle-five circle-background';
// }
// $circleFive.addEventListener('click', pictureFive);

// function nextPicture(event) {
//   if ($circleFour.className === 'circle circle-four circle-background') {
//     pictureFive();
//   } else if ($circleFive.className === 'circle circle-five circle-background') {
//     pictureOne();
//   } else if ($circleOne.className === 'circle circle-one circle-background') {
//     pictureTwo();
//   } else if ($circleTwo.className === 'circle circle-two circle-background') {
//     pictureThree();
//   } else if ($circleThree.className === 'circle circle-three circle-background') {
//     pictureFour();
//   }
// }

// $rightArrow.addEventListener('click', nextPicture);

// function previousPicture(event) {
//   if ($circleFour.className === 'circle circle-four circle-background') {
//     pictureThree();
//   } else if ($circleFive.className === 'circle circle-five circle-background') {
//     pictureFour();
//   } else if ($circleOne.className === 'circle circle-one circle-background') {
//     pictureFive();
//   } else if ($circleTwo.className === 'circle circle-two circle-background') {
//     pictureOne();
//   } else if ($circleThree.className === 'circle circle-three circle-background') {
//     pictureTwo();
//   }
// }

// $leftArrow.addEventListener('click', previousPicture);

// function updatingPicture() {
//   countdown--;
//   if ($circleOne.className === 'circle circle-one circle-background') {
//     pictureTwo();
//     countdown = 4;
//   } else if ($circleTwo.className === 'circle circle-two circle-background') {
//     pictureThree();
//     countdown = 3;
//   } else if ($circleThree.className === 'circle circle-three circle-background') {
//     pictureFour();
//     countdown = 2;
//   } else if ($circleFour.className === 'circle circle-four circle-background') {
//     pictureFive();
//     countdown = 1;
//   } else if ($circleFive.className === 'circle circle-five circle-background') {
//     pictureOne();
//     countdown = 0;
//   }
// }

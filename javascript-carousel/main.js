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
var $pikachuPic = $img.setAttribute('src', 'images/025.png');
var $jigglypuffPic = $img.setAttribute('src', 'images/039.png');
var $bulbasaurPic = $img.setAttribute('src', 'images/001.png');
var $charmanderPic = $img.setAttribute('src', 'images/004.png');
var $squirtlePic = $img.setAttribute('src', 'images/007.png');
var $picturesArray = [$pikachuPic, $jigglypuffPic, $bulbasaurPic, $charmanderPic, $squirtlePic];
var currentImage = 0;
//
// 1. create function to switch to next picture based off event
// 2. loop through array of pictures
// 3. if the current picture matches the picture in the array order
// 4. currentImage = 0
// ? expression to return next index of array to viewport

// 6. increment currentImage value for next Picture
function toggleNext(event) {
  for (var i = 0; i < $picturesArray.length; i++) {
    var nextPicture = $picturesArray[i + 1];
    if ($img.getAttribute('src') === $picturesArray[i].getAttribute('src')) {
      nextPicture;
    }
    currentImage++;
  }

}

$circle.addEventListener('click', toggleNext);

/* function pictureOne(event) {
  $img.setAttribute('src', 'images/025.png');
  $circleOne.className = 'circle circle-one circle-background';
  $circleTwo.className = 'circle circle-two';
  $circleThree.className = 'circle circle-three';
  $circleFour.className = 'circle circle-four';
  $circleFive.className = 'circle circle-five';
}

$circleOne.addEventListener('click', pictureOne);

function pictureTwo(event) {
  $img.setAttribute('src', 'images/039.png');
  $circleOne.className = 'circle circle-one';
  $circleTwo.className = 'circle circle-two circle-background';
  $circleThree.className = 'circle circle-three';
  $circleFour.className = 'circle circle-four';
  $circleFive.className = 'circle circle-five';

}
$circleTwo.addEventListener('click', pictureTwo);

function pictureThree(event) {
  $img.setAttribute('src', 'images/001.png');
  $circleOne.className = 'circle circle-one';
  $circleTwo.className = 'circle circle-two';
  $circleThree.className = 'circle circle-three circle-background';
  $circleFour.className = 'circle circle-four';
  $circleFive.className = 'circle circle-five';
}
$circleThree.addEventListener('click', pictureThree);

function pictureFour(event) {
  $img.setAttribute('src', 'images/004.png');
  $circleOne.className = 'circle circle-one';
  $circleTwo.className = 'circle circle-two';
  $circleThree.className = 'circle circle-three';
  $circleFour.className = 'circle circle-four circle-background';
  $circleFive.className = 'circle circle-five';
}
$circleFour.addEventListener('click', pictureFour);

function pictureFive(event) {
  $img.setAttribute('src', 'images/007.png');
  $circleOne.className = 'circle circle-one';
  $circleTwo.className = 'circle circle-two';
  $circleThree.className = 'circle circle-three';
  $circleFour.className = 'circle circle-four';
  $circleFive.className = 'circle circle-five circle-background';
}
$circleFive.addEventListener('click', pictureFive);

function nextPicture(event) {
  if ($circleFour.className === 'circle circle-four circle-background') {
    pictureFive();
  } else if ($circleFive.className === 'circle circle-five circle-background') {
    pictureOne();
  } else if ($circleOne.className === 'circle circle-one circle-background') {
    pictureTwo();
  } else if ($circleTwo.className === 'circle circle-two circle-background') {
    pictureThree();
  } else if ($circleThree.className === 'circle circle-three circle-background') {
    pictureFour();
  }
}

$rightArrow.addEventListener('click', nextPicture);

function previousPicture(event) {
  if ($circleFour.className === 'circle circle-four circle-background') {
    pictureThree();
  } else if ($circleFive.className === 'circle circle-five circle-background') {
    pictureFour();
  } else if ($circleOne.className === 'circle circle-one circle-background') {
    pictureFive();
  } else if ($circleTwo.className === 'circle circle-two circle-background') {
    pictureOne();
  } else if ($circleThree.className === 'circle circle-three circle-background') {
    pictureTwo();
  }
}

$leftArrow.addEventListener('click', previousPicture);

var countdown = 4;
var timerId = null;

function updatingPicture() {
  countdown--;
  if ($circleOne.className === 'circle circle-one circle-background') {
    pictureTwo();
    countdown = 4;
  } else if ($circleTwo.className === 'circle circle-two circle-background') {
    pictureThree();
    countdown = 3;
  } else if ($circleThree.className === 'circle circle-three circle-background') {
    pictureFour();
    countdown = 2;
  } else if ($circleFour.className === 'circle circle-four circle-background') {
    pictureFive();
    countdown = 1;
  } else if ($circleFive.className === 'circle circle-five circle-background') {
    pictureOne();
    countdown = 0;
  }
}

timerId = setInterval(updatingPicture, 3000);

/* eslint-disable no-unused-vars */
// 1. assign the inner circle class to variable $innercircle
// 2. assign the body element to variable $body
// 3. assign the circle div for when it has the grey background to $greyCircle
// 4. assign the black background class to $blackBackground (to be used for when
// body background is changed)

var $innerCircle = document.querySelector('.inner-circle');
var $body = document.querySelector('body');
var $greyCircle = document.querySelector('grey-circle');
var lightOn = true;

function switchLights(event) {
  if (lightOn) {
    $innerCircle.className = 'grey-circle';
    $body.className = 'black-background';
    lightOn = false;

  } else {

    $innerCircle.className = 'inner-circle';
    $body.className = 'tan-background';
    lightOn = true;

  }

}

$innerCircle.addEventListener('click', switchLights);

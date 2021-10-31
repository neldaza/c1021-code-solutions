var $openModalButton = document.querySelector('.open-modal');
var $noButton = document.querySelector('.no');
var $container = document.querySelector('.container');
var hidden = true;

// 1. define function to switch the visibility property value of container
// 2. depending on the value of hidden,
// 3. if hidden's value is:
// 4. TRUE, change container's class name to container visible and make it visible,
// 5. and set hidden variable to false
// 5. Or else if hidden's value is FALSE,
// 6. change container visible's class name back to container
// 7. and set hidden's value back to true

function containerSwitch(event) {
  if (hidden) {
    $container.className = 'container-visible';
    hidden = false;
  } else {
    $container.className = 'container';
    hidden = true;

  }
}

$openModalButton.addEventListener('click', containerSwitch);
$noButton.addEventListener('click', containerSwitch);

/* eslint-disable no-unused-vars */
function handleFocus(event) {
  console.log('Focus event fired');
  console.log(event.target.name, 'is now focused');
}

function handleBlur(event) {
  console.log('Blur event fired');
  console.log(event.target.name, 'is now blurred');
}

function handleInput(event) {
  console.log('Value of', event.target.name, ':');
  console.log(event.target.value);
}

var $username = document.querySelector('#user-name');

var $email = document.querySelector('#user-email');

var $userMessage = document.querySelector('#user-message');

$username.addEventListener('focus', handleFocus);
$username.addEventListener('input', handleInput);
$username.addEventListener('blur', handleBlur);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('input', handleInput);
$email.addEventListener('blur', handleBlur);
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('input', handleInput);
$userMessage.addEventListener('blur', handleBlur);

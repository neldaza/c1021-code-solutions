var $Form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  var emailValue = $Form.elements.email.value;
  var userMessageValue = $Form.elements.message.value;
  var usernameValue = $Form.elements.name.value;
  var bigObject = { emailValue, userMessageValue, usernameValue };
  console.log(bigObject);
  $Form.reset();
}

$Form.addEventListener('submit', handleSubmit);

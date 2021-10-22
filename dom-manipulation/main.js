var $hotButton = document.querySelector('.hot-button');
// eslint-disable-next-line no-unused-vars
var $clickCount = document.querySelector('.click-count');
var clicksHit = 1;

function clicks(event) {
  event++;
  $clickCount.textContent = 'Clicks: ' + clicksHit++;
  if (clicksHit < 5) {
    $hotButton.className = 'hot-button + cold';
  } else if (clicksHit < 8) {
    $hotButton.className = 'hot-button + cool';
  } else if (clicksHit < 11) {
    $hotButton.className = 'hot-button + tepid';
  } else if (clicksHit < 14) {
    $hotButton.className = 'hot-button + warm';
  } else if (clicksHit < 17) {
    $hotButton.className = 'hot-button + hot';
  } else {
    $hotButton.className = 'hot-button + nuclear';
  }
}

$hotButton.addEventListener('click', clicks);

var $hotButton = document.querySelector('.hot-button');
// eslint-disable-next-line no-unused-vars
var $clickCount = document.querySelector('.click-count');
var clicksHit = 1;

function clicks(event) {
  $clickCount++;
  document.querySelector('.click-count').textContent = 'Clicks: ' + clicksHit++;
  if (clicksHit < 5) {
    document.querySelector('button').className = 'hot-button + cold';
  } else if (clicksHit < 8) {
    document.querySelector('button').className = 'hot-button + cool';
  } else if (clicksHit < 11) {
    document.querySelector('button').className = 'hot-button + tepid';
  } else if (clicksHit < 14) {
    document.querySelector('button').className = 'hot-button + warm';
  } else if (clicksHit < 17) {
    document.querySelector('button').className = 'hot-button + hot';
  } else {
    document.querySelector('button').className = 'hot-button + nuclear';
  }
}

$hotButton.addEventListener('click', clicks);

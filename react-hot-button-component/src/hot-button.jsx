import React from 'react';
import ReactDOM from 'react-dom';

const button = React.createElement(
  'button',
  { class: 'hot-button cold' },
  'Hot Button'
);

const p = React.createElement(
  'p',
  { class: 'click-count' },
  'Clicks: 0'
);

ReactDOM.render(
  button,
  p,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

const button = (
<div className="row">
  <button className="hot-button cold">Hot Button</button>
  <p className="click-count">Clicks: 0</p>
</div>
);

ReactDOM.render(
  button,
  document.getElementById('root')
);

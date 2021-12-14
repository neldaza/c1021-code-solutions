import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.clicks = this.clicks.bind(this);
    this.state = { clicksHit: 0 };
  }

  clicks() {
    if (this.state) {
      this.setState({ clicksHit: this.state.clicksHit + 1 });
    }
  }

  render() {
    if (this.state.clicksHit < 4) {
      return (
        <div>
          <button onClick={this.clicks} className="hot-button + cold">Hot Button</button>
          <p className="click-count">Clicks: {this.state.clicksHit}</p>
        </div>
      );
    } else if (this.state.clicksHit < 7) {
      return (
        <div>
          <button onClick={this.clicks} className="hot-button + cool">Hot Button</button>
          <p className="click-count">Clicks: {this.state.clicksHit}</p>
        </div>
      );
    } else if (this.state.clicksHit < 10) {
      return (
        <div>
          <button onClick={this.clicks} className="hot-button + tepid">Hot Button</button>
          <p className="click-count">Clicks: {this.state.clicksHit}</p>
        </div>
      );
    } else if (this.state.clicksHit < 13) {
      return (
        <div>
          <button onClick={this.clicks} className="hot-button + warm">Hot Button</button>
          <p className="click-count">Clicks: {this.state.clicksHit}</p>
        </div>
      );
    } else if (this.state.clicksHit < 18) {
      return (
        <div>
          <button onClick={this.clicks} className="hot-button + hot">Hot Button</button>
          <p className="click-count">Clicks: {this.state.clicksHit}</p>
        </div>
      );
    } else {
      return (
          <div>
            <button onClick={this.clicks} className="hot-button + nuclear">Hot Button</button>
            <p className="click-count">Clicks: {this.state.clicksHit}</p>
          </div>
      );
    }
  }
}

ReactDOM.render(
  <HotButton/>,
  document.getElementById('root')
);

// var clicksHit = 1;

// function clicks(event) {
//   event++;
//   $clickCount.textContent = 'Clicks: ' + clicksHit++;
//   if (clicksHit < 5) {
//     $hotButton.className = 'hot-button + cold';
//   } else if (clicksHit < 8) {
//     $hotButton.className = 'hot-button + cool';
//   } else if (clicksHit < 11) {
//     $hotButton.className = 'hot-button + tepid';
//   } else if (clicksHit < 14) {
//     $hotButton.className = 'hot-button + warm';
//   } else if (clicksHit < 17) {
//     $hotButton.className = 'hot-button + hot';
//   } else {
//     $hotButton.className = 'hot-button + nuclear';
//   }
// }

// $hotButton.addEventListener('click', clicks);

// function button(props) {
//   return (
//         <div className="row">
//           <button className={props.className}>Hot Button</button>
//           <p className="click-count">{props.text}</p>
//         </div>
//   );
// }

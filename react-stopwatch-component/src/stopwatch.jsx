import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      pausedOrPlay: 'play'
    };
    this.handleTick = this.handleTick.bind(this);
    this.reset = this.reset.bind(this);
  }

  updateSeconds() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  }

  handleTick() {
    // eslint-disable-next-line no-unused-vars
    const timerId = null;

    if (this.state.pausedOrPlay === 'pause') {
      this.setState({ pausedOrPlay: 'play' });
      clearInterval(this.timerId);
    } else {
      this.setState({ pausedOrPlay: 'pause' });
      this.timerId = setInterval(() => { this.setState({ seconds: this.state.seconds + 1 }); }, 1000);
    }
  }

  reset() {
    if (this.state.pausedOrPlay === 'play') {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column-full text-align-center">
            <div className="circle" onClick={this.reset}>
              <p className="secondsPassed">{this.state.seconds}</p>
            </div>
            <i className={`fas fa-${this.state.pausedOrPlay} personal-play`}
            onClick={this.handleTick}></i>
          </div>
        </div>
      </div>
    );
  }

}

export default Stopwatch;

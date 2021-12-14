import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      pausedOrPlay: 'play'
    };
    this.handleTick = this.handleTick.bind(this);
    this.updateSeconds = this.updateSeconds.bind(this);

  }

  updateSeconds() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  }

  handleTick() {
    this.setState({
      seconds: setInterval(this.updateSeconds, 1000)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column-full text-align-center">
            <div className="circle">
              <p className="secondsPassed">{this.state.seconds}</p>
            </div>
            <i className="fas fa-play personal-play" onClick={this.handleTick}></i>
          </div>
        </div>
      </div>
    );
  }

}

export default Stopwatch;

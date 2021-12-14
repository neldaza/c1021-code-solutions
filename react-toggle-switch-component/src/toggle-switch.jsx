import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { light: 'ON' };
    this.getBackgroundColor = this.getBackgroundColor.bind(this);
    this.toggle = this.toggle.bind(this);
    this.switchLightIcon = this.switchLightIcon.bind(this);
  }

  getBackgroundColor() {
    const { light } = this.state;
    if (light === 'ON') return 'background-color';
    if (light === 'OFF') return 'background-color-off';
  }

  switchLightIcon() {
    const { light } = this.state;
    if (light === 'ON') return 'on';
    if (light === 'OFF') return 'off';
  }

  toggle() {
    if (this.state.light === 'ON') {
      this.setState({ light: 'OFF' });
    } else {
      this.setState({ light: 'ON' });
    }
  }

  render() {
    const currentBackgroundColor = this.getBackgroundColor();
    const currentLightIcon = this.switchLightIcon();
    return (
      <div className={`flex align-items-center ${currentBackgroundColor}`}>
        <i className={`fas fa-toggle-${currentLightIcon}`} onClick={this.toggle}></i>
        <p>{this.state.light}</p>
      </div>
    );
  }
}

export default ToggleSwitch;

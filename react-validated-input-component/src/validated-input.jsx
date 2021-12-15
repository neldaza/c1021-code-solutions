import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleRequired = this.handleRequired.bind(this);
    this.handleTooShort = this.handleTooShort.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleRequired() {
    if (!this.state.password.length) {
      return 'view';
    } else {
      return 'hidden';
    }
  }

  handleTooShort() {
    if (!this.state.password.length) {
      return 'hidden';
    } else if (this.state.password.length < 8) {
      return 'view';
    } else {
      return 'hidden';
    }
  }

  handleIcon() {
    if (this.state.password.length < 8) {
      return 'times';
    } else {
      return 'check';
    }
  }

  render() {
    const handleRequired = this.handleRequired();
    const handleTooShort = this.handleTooShort();
    const handleIcon = this.handleIcon();

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="column-full">
              <p className="password-p">Password</p>
              <div className="row input-and-i">
                <input type="password" onChange={this.handleChange}></input>
                <i className={`icon-${handleIcon} fas fa-${handleIcon}`}></i>
              </div>
              <p className={`password-required ${handleRequired}`}>A password is required.</p>
              <p className={`password-required ${handleTooShort}`}>Your password is too short</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ValidatedInput;

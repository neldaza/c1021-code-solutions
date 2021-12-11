import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };

  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  render() {
    if (!this.state.isClicked) {
      return <button onClick={this.handleClick}>HEY</button>;
    } else {
      return <button onClick={this.handleClick}>IVE BEEN CLICKED</button>;
    }
  }

}

ReactDOM.render(<CustomButton />, document.getElementById('root'));

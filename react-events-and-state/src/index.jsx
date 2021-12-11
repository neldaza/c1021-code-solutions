import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
    this.notClicked = false;
  }

  handleClick() {
    if (this.notClicked) {
      this.setState({ isClicked: true });
      this.notClicked = false;
    } else {
      this.setState({ isClicked: false });
      this.notClicked = true;
    }
  }

  render() {
    let button;
    if (this.notClicked === true) {
      return <button onClick={this.handleClick}>IVE BEEN CLICKED</button>;
    } else {
      return <button onClick={this.handleClick}>HEY</button>;
    }

  }

}

ReactDOM.render(<CustomButton />, document.getElementById('root'));

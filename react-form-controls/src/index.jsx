import React from 'react';
import ReactDOM from 'react-dom';

class Newsletterform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <input type="email" value={this.state.value} onChange={this.handleChange} />
      <button type="submit">Sign Up</button>
    </form>);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    console.log('state:', this.state);
    event.preventDefault();
  }
}

ReactDOM.render(<Newsletterform />, document.getElementById('root'));

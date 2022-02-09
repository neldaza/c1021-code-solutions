import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: 'no' };
    this.viewModal = this.viewModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.greyBackground = this.greyBackground.bind(this);
  }

  viewModal() {
    if (this.state.isOpen === 'no') {
      this.setState({ isOpen: 'yes' });
    } else {
      this.setState({ isOpen: 'no' });
    }
  }

  closeModal() {
    if (this.state.isOpen === 'yes') {
      this.setState({ isOpen: 'no' });
    }
  }

  renderModal() {
    if (this.state.isOpen === 'no') { return ''; }
    if (this.state.isOpen === 'yes') { return '-out'; }
  }

  greyBackground() {
    if (this.state.isOpen === 'yes') { return 'grey-background'; }
    if (this.state.isOpen === 'no') { return ''; }
  }

  render() {
    const outOrIn = this.renderModal();
    const greyBackground = this.greyBackground();
    return (
      <div className={`vh-100 ${greyBackground}`} onClick={this.closeModal}>
        <div className='container'>
          <div className="row tab-button">
            <div className="column">
              <i className="tab-icon fas fa-align-justify" onClick={this.viewModal}></i>
            </div>
          </div>
          <div className={`row tab${outOrIn}`}>
            <div className="column-full">
              <h1>Menu</h1>
              <p className="index-p"><a>About</a></p>
              <p className="index-p"><a>Get Started</a></p>
              <p className="index-p"><a>Sign In</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;

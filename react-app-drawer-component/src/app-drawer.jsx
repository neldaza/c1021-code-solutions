import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: 'hidden' };
    this.viewModal = this.viewModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  viewModal() {
    if (this.state.isHidden === 'hidden') {
      this.setState({ isHidden: 'view' });
    } else {
      this.setState({ isHidden: 'hidden' });
      return '';
    }
  }

  renderModal() {
    if (this.state.isHidden === 'hidden') { return ''; }
    if (this.state.isHidden === 'view') { return '-out'; }
  }

  render() {
    const outOrIn = this.renderModal();
    return (
      <div>
        <div className="container">
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

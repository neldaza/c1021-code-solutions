import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClosed: 'yes' };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="column">
              <i className="tab-icon fas fa-align-justify"></i>
            </div>
          </div>
          <div className="row tab">
            <div className="column-full">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;

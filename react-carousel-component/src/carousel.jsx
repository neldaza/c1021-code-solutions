import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: 0
    };
  }

  render() {
    return (
  <div>
    <div className='container'>
      <div className="row justify-content-center">
        <div className="column-third flex justify-content-center">
          <div className="arrow left relative-fifty previous-arrow" arrow={'left'} onClick={this.props.arrowClick}></div>
        </div>
        <div className="column-third">
          {
            this.props.images.filter(photo => photo.photoId === this.props.currentPhoto).map(photo => {
              return (
                <img key={photo.photoId} src={photo.url} className="background my-container" />
              );
            })
          }
        </div>
        <div className="column-one-third flex justify-center">
          <div className="arrow right relative-fifty next-arrow" arrow={'right'} onClick={this.props.arrowClick}></div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="flex space-evenly">
          {
            this.props.images.map(photo => {
              if (this.props.currentPhoto === photo.photoId) {
                return (
                  <div key={photo.photoId} className="circle circle-background" imageindex={photo.photoId} onClick={this.props.circleClick}></div>
                );
              }
              return (
                <div key={photo.photoId} className="circle" imageindex={photo.photoId} onClick={this.props.circleClick}></div>
              );
            })
          }
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default Carousel;

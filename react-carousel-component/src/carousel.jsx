import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: 0
    };
    this.circleClick = this.circleClick.bind(this);
    this.arrowClick = this.arrowClick.bind(this);
  }

  componentDidMount() {
    this.carouselInterval = setInterval(() => {
      if (this.state.currentPhoto === this.props.images.length - 1) {
        this.setState({ currentPhoto: -1 });
      }
      this.setState({ currentPhoto: this.state.currentPhoto + 1 });
    }, 3000);
  }

  circleClick(event) {
    clearInterval(this.carouselInterval);
    this.setState({
      currentPhoto: parseInt(event.target.getAttribute('imageindex'))
    });
    this.componentDidMount();
  }

  arrowClick(event) {
    clearInterval(this.carouselInterval);
    if (event.target.getAttribute('arrow') === 'left' && this.state.currentPhoto === 0) {
      this.setState({ currentPhoto: this.props.images.length - 1 });
    } else if (event.target.getAttribute('arrow') === 'right' && this.state.currentPhoto === this.props.images.length - 1) {
      this.setState({ currentPhoto: 0 });

    } else if (event.target.getAttribute('arrow') === 'right') {
      this.setState({ currentPhoto: this.state.currentPhoto + 1 });

    } else if (event.target.getAttribute('arrow') === 'left') {
      this.setState({ currentPhoto: this.state.currentPhoto - 1 });
    }

    this.componentDidMount();
  }

  render() {
    return (
  <div>
    <div className='container'>
      <div className="row justify-content-center">
        <div className="column-third flex justify-content-center">
          <div className="arrow left relative-fifty previous-arrow" arrow={'left'} onClick={this.arrowClick}></div>
        </div>
        <div className="column-third">
          {
            this.props.images.filter(photo => photo.photoId === this.state.currentPhoto).map(photo => {
              return (
                <img key={photo.photoId} src={photo.url} className="background my-container" />
              );
            })
          }
        </div>
        <div className="column-one-third flex justify-center">
          <div className="arrow right relative-fifty next-arrow" arrow={'right'} onClick={this.arrowClick}></div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="flex space-evenly">
          {
            this.props.images.map(photo => {
              if (this.state.currentPhoto === photo.photoId) {
                return (
                  <div key={photo.photoId} className="circle circle-background" imageindex={photo.photoId} onClick={this.circleClick}></div>
                );
              }
              return (
                <div key={photo.photoId} className="circle" imageindex={photo.photoId} onClick={this.circleClick}></div>
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

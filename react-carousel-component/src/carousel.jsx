import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { photoId: 0, url: 'images/001.png' },
        { photoId: 1, url: 'images/004.png' },
        { photoId: 2, url: 'images/007.png' },
        { photoId: 3, url: 'images/025.png' },
        { photoId: 4, url: 'images/039.png' }
      ],
      currentPhoto: 0
    };
    this.circleClick = this.circleClick.bind(this);
    this.arrowClick = this.arrowClick.bind(this);

  }

  componentDidMount() {
    this.carouselInterval = setInterval(() => {
      if (this.state.currentPhoto === this.state.images.length - 1) {
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
      this.setState({ currentPhoto: this.state.images.length - 1 });
    } else if (event.target.getAttribute('arrow') === 'right' && this.state.currentPhoto === this.state.images.length - 1) {
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
      <Carousel
        images={this.state.images}
        currentPhoto={this.state.currentPhoto}
        arrowClick={this.arrowClick}
        circleClick={this.circleClick}
      />
    );
  }
}

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

import React from 'react';

class Home extends React.Component {
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
      if (this.state.currentPhoto === 4) {
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
    if (event.target.className === 'arrow left relative-fifty previous-arrow' && this.state.currentPhoto === 0) {
      this.setState({ currentPhoto: this.state.images.length - 1 });
    } else if (event.target.className === 'arrow right relative-fifty next-arrow' && this.state.currentPhoto === this.state.images.length - 1) {
      this.setState({ currentPhoto: 0 });

    } else if (event.target.className === 'arrow right relative-fifty next-arrow') {
      this.setState({ currentPhoto: this.state.currentPhoto + 1 });

    } else if (event.target.className === 'arrow left relative-fifty previous-arrow') {
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
          <div className="arrow left relative-fifty previous-arrow" onClick={this.arrowClick}></div>
        </div>
        <div className="column-third">
          {
            this.state.images.filter(photo => photo.photoId === this.state.currentPhoto).map(photo => {
              return (
                  <img key={photo.photoId} src={photo.url} className="background my-container" />
              );
            })
          }
        </div>
        <div className="column-one-third flex justify-center">
          <div className="arrow right relative-fifty next-arrow" onClick={this.arrowClick}></div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="flex space-evenly">
          {
            this.state.images.map(photo => {
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

export default Home;

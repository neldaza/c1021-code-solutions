import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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

  }

  componentDidMount() {
    this.carouselInterval = setInterval(() => {
      if (this.state.currentPhoto === 4) {
        this.setState({ currentPhoto: -1 });
      }
      this.setState({ currentPhoto: this.state.currentPhoto + 1 });
      console.log(this.state.currentPhoto);
    }, 3000);
  }

  render() {
    return (
  <div>
    <div className='container'>
      <div className="row justify-content-center">
        <div className="column-third flex justify-content-center">
          <div className="relative-fifty previous-arrow">
            <FontAwesomeIcon icon={faArrowLeft}/>
          </div>
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
          <div className="relative-fifty next-arrow">
            <FontAwesomeIcon icon={faArrowRight}/>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="flex space-evenly">
          <div className="circle circle-background" data-image-index="0"></div>
          <div className="circle" data-image-index="1"></div>
          <div className="circle" data-image-index="2"></div>
          <div className="circle" data-image-index="3"></div>
          <div className="circle" data-image-index="4"></div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default Home;

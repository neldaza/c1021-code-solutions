import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { photoId: 1, url: 'images/001.png' },
        { photoId: 2, url: 'images/004.png' },
        { photoId: 3, url: 'images/007.png' },
        { photoId: 4, url: 'images/025.png' },
        { photoId: 5, url: 'images/039.png' }
      ]
    };
  }

  render() {
    return (
  <div>
    <div className='my-container'>
      <div className='my-row justify-content-center'>
        <div className='my-column-full'>
          {
                <Carousel controls={true} interval={3000} slide={false} prevIcon={<FontAwesomeIcon icon={faArrowLeft}/>}
                  nextIcon={<FontAwesomeIcon icon={faArrowRight}/>}>
              {
                this.state.images.map(photo => {
                  return (
                      <Carousel.Item key={photo.photoId}>
                        <img src={photo.url} className="background my-container" />
                      </Carousel.Item>
                  );
                })
              }
            </Carousel>
          }
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default Home;

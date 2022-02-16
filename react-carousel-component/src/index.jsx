import ReactDOM from 'react-dom';
import React from 'react';
import Carousel from './carousel';

const carousel = <Carousel
  images={[
    { photoId: 0, url: 'images/001.png' },
    { photoId: 1, url: 'images/004.png' },
    { photoId: 2, url: 'images/007.png' },
    { photoId: 3, url: 'images/025.png' },
    { photoId: 4, url: 'images/039.png' }
  ]}
/>;

ReactDOM.render(
  carousel,
  document.getElementById('root')
);

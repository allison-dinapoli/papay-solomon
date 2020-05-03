import React from 'react'; 
import images from '../json/chapter2.json'; 
import {  withRouter } from 'react-router-dom'; 
import ImageView from './ImageView.js';

class ImageViewChapter2 extends React.Component {
  render() {
    return (
      <ImageView pathName="chapter2" images={images} />
    );
  }
}

export default withRouter(ImageViewChapter2);

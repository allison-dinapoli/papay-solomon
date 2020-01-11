import React from 'react'; 
import images from '../json/paintings.json'; 
import {  withRouter } from 'react-router-dom'; 
import ImageView from './ImageView.js';

class ImageViewChapter1 extends React.Component {
  render() {
    return (
      <ImageView pathName="chapter1" sectionHeader="CHAPTER &#8544;" images={images} />
    );
  }
}

export default withRouter(ImageViewChapter1);

import React from 'react'; 
import images from '../json/chapter1.json'; 
import {  withRouter } from 'react-router-dom'; 
import ImageView from '../components/ImageView';

class ImageViewChapter1 extends React.Component {
  render() {
    return (
      <ImageView pathName="work" sectionHeader="CHAPTER &#8544;" images={images} />
    );
  }
}

export default withRouter(ImageViewChapter1);

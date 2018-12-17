import React from 'react'; 
import images from '../json/paintings.json'; 
import Base from './base'; 

export default class ImageView extends React.Component {

  constructor(props) {
    super(props);

    let currentImageIndex;
    for (let index in images) {
      if ( images[index].id === this.props.match.params.id ) {
        currentImageIndex = Number(index);
      }
    }

    this.state = {
      currentImageIndex: currentImageIndex,
      currentImageId: this.props.match.params.id,
      showImageZoom: false
    }
  }


  render() {
    const grid = <div>sup</div>;
    return (<Base content={grid} />);
  }
}
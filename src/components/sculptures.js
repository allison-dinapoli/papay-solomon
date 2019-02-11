import React from 'react'; 
import images from '../json/sculptures.json'; 
import Base from './base'; 
import { Container, Row, Col } from 'react-bootstrap';

export default class Sculptures extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: images,
      currentImageIndex: 0
    }
    this.picturesPerRow = 3; 
  }

  openImage = (currentImageIndex) => {
    // You can use the react router history instead, and avoid the full page redirect :D
    //var newLocation = window.location.href; 
    //var domain = newLocation.split("/gallery")[0]; 
    //window.location.href = domain + "/gallery/" + this.state.images[currentImageIndex].id;
    //console.log(currentImageIndex.target.id);
    this.props.history.push("/sculptures/" + this.state.images[currentImageIndex.target.id].id);
  }   

  getFourImagesStartingAtN = (n) => {
    const startingIndex = n*this.picturesPerRow;
    let columns = [];
    for (let i = startingIndex; i < startingIndex + this.picturesPerRow; i++) {
      if (i < images.length) {
        let image = images[i];
        columns.push(<Col sm={4} style={{paddingLeft: "1vw", paddingRight: "1vw", paddingTop: "4vh", paddingBottom: "3vh"}}><img id={i} src={image['thumbnail']} style={{cursor: "pointer"}} onClick={this.openImage}></img></Col>);
      }
    }
    return columns;
  }

  getRows = () => {
    const imageCount = images.length;
    const batches = Math.ceil(imageCount/this.picturesPerRow);
    let rows = [];
    for (let n = 0; n < batches; n++) {
      let columns = this.getFourImagesStartingAtN(n);
      rows.push(<Row>{columns}</Row>);
    }
    return rows;
  }

  render() {
    const grid = <Container>{this.getRows()}</Container>; 
    return (<Base content={grid} />);
  }
}
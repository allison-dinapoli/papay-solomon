import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import images from '../json/sculptures.json'; 
import { Link, withRouter } from 'react-router-dom'; 
import Base from './base'; 

class ImageViewSculptures extends React.Component {
  
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
 
  backToGallery = () => {
    this.props.history.push("/chapter2/");  
  }

  nextPhoto = () => {
    var nextPhoto = this.nextPhotoPos();  
    this.setState({currentImageIndex: nextPhoto}); 
  }

  nextPhotoPos = () => {
    var numPhotos = images.length;
    var nextPhoto = (this.state.currentImageIndex + 1) % numPhotos;
    return nextPhoto; 
  }

  nextPhotoId = () => {
    var nextPhoto = this.nextPhotoPos();
    let nextRoute = `/chapter2/${images[nextPhoto].id}`;
    return nextRoute;
  }

  previousPhotoPos() {
    var numPhotos = images.length;
    var nextPhoto = (this.state.currentImageIndex - 1);
    if (nextPhoto < 0) {
      nextPhoto = numPhotos - 1; 
    }
    return nextPhoto; 
  }
  
  previousPhotoId = () => {
    var nextPhoto = this.previousPhotoPos(); 
    return "/chapter2/" + images[nextPhoto].id; 
  }

  previousPhoto = () => {
    var nextPhoto = this.previousPhotoPos(); 
    this.setState({currentImageIndex: nextPhoto}); 
  }

  openPhotoZoom = () => {
    this.setState({showImageZoom:true});
  }

  render() {
    const pageContent =  <div>
    <table width="100%" height="40px">
      <tbody>
        <tr>
          <td style={{textAlign:"left"}} width="10%">
            <a href={"https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(window.location.href)} target="_blank" rel="noopener noreferrer"><img src="/img/icons/facebook.svg" alt="facebook"/></a> 
            <a href={"https://www.twitter.com/intent/tweet?url=" + encodeURI(window.location.href)} target="_blank" rel="noopener noreferrer"><img src="/img/icons/twitter.svg" alt="twitter"/></a>
            <a href={"https://www.tumblr.com/widgets/share/tool?canonicalUrl=" + encodeURI(window.location.href)} target="_blank" rel="noopener noreferrer"><img src="/img/icons/tumblr.svg" alt="tumblr"/></a>
            <a href={"https://pinterest.com/pin/create/link/?url=" + encodeURI(window.location.href)} target="_blank" rel="noopener noreferrer"><img src="/img/icons/pinterest.svg" alt="pinterest"/></a>
          </td>
          <td style={{textAlign:"center"}} className="subheader" width="80%">{images[this.state.currentImageIndex].name}</td>
          <td style={{textAlign:"right"}} width="10%"><img src="/img/icons/baseline-close-24px.svg" width="40px" style={{cursor:"pointer"}} onClick={this.backToGallery} alt="back to gallery"/></td>
        </tr>
      </tbody>
    </table> 

    <div style={{display: "flex", justifyContent: "center",  alignItems: "center", height: "100%"}}>
      <Container style={{width: "100%"}}>
        <Row>
          <Col xs={1} sm={1} md={1} lg={1} xl={1}>
            <Link to={this.previousPhotoId()}>
              <img src="/img/icons/baseline-arrow_back_ios-24px.svg" width="60px" style={{cursor:"pointer", top: "50%", position: "absolute", left:"50%", marginLeft:"-30px"}} onClick={this.previousPhoto} alt="previous"/>
            </Link>
          </Col>
          <Col xs={10} sm={10} md={10} lg={10} xl={10}>
            <div style={{height: "600px", textAlign: "center"}}>
            <table style={{width: "100%"}}>
              <tr>
                <td style={{width: "50%", padding: "10px"}}>
              <ReactImageMagnify {...{
                smallImage: {
                  alt: images[this.state.currentImageIndex].name, 
                  src: images[this.state.currentImageIndex].src,
                  srcSet: images[this.state.currentImageIndex].srcset,
                  isFluidWidth: true,
                  sizes: '(max-width: 480px) 70vw, (max-width: 1000px) 40vw, 400px'
                }, 
                largeImage: {
                  alt: images[this.state.currentImageIndex].name, 
                  src: images[this.state.currentImageIndex].src,
                  width: images[this.state.currentImageIndex].width,
                  height: images[this.state.currentImageIndex].height
                }, 
                enlargedImagePortalId: "test" 
                
              }} />
              </td>
              <td>
                <span id="test" />
              </td>
              </tr>

              </table>
            </div>
          </Col>
          <Col xs={1} sm={1} md={1} lg={1} xl={1}>
            <Link to={this.nextPhotoId()}>
              <img src="/img/icons/baseline-arrow_forward_ios-24px.svg" width="60px" style={{cursor:"pointer", position: "absolute", top: "50%", left: "50%", marginLeft: "-30px"}} alt="next" onClick={this.nextPhoto}/>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    </div> ; 
    return (
      <Base content={pageContent} />
    );
  }
}

export default withRouter(ImageViewSculptures);

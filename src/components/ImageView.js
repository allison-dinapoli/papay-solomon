import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'; 
import Base from './base'; 
import './ImageView.css';

class ImageView extends React.Component {
  
  constructor(props) {
    super(props);
    
    let currentImageIndex;
    
    if (this.props.match.params.id == undefined) {
      currentImageIndex = 0; 
    } else {
      for (let index in this.props.images) {
        if ( this.props.images[index].id === this.props.match.params.id ) {
          currentImageIndex = Number(index);
        }
      }
    }
 
    this.state = {
      currentImageIndex: currentImageIndex,
      currentImageId: this.props.match.params.id,
      showImageZoom: false, 
      infoOpen: false
    }
  }
 
  //backToGallery = () => {
  //  this.props.history.push(`/${this.props.pathName}`);  
  //}

  nextPhoto = () => {
    var nextPhoto = this.nextPhotoPos();  
    this.setState({currentImageIndex: nextPhoto}); 
  }

  nextPhotoPos = () => {
    var numPhotos = this.props.images.length;
    var nextPhoto = (this.state.currentImageIndex + 1) % numPhotos;
    return nextPhoto; 
  }

  nextPhotoId = () => {
    var nextPhoto = this.nextPhotoPos();
    let nextRoute = `/${this.props.pathName}/${this.props.images[nextPhoto].id}`;
    return nextRoute;
  }

  previousPhotoPos() {
    var numPhotos = this.props.images.length;
    var nextPhoto = (this.state.currentImageIndex - 1);
    if (nextPhoto < 0) {
      nextPhoto = numPhotos - 1; 
    }
    return nextPhoto; 
  }
  
  previousPhotoId = () => {
    var nextPhoto = this.previousPhotoPos(); 
    return `/${this.props.pathName}/${this.props.images[nextPhoto].id}`; 
  }

  previousPhoto = () => {
    var nextPhoto = this.previousPhotoPos(); 
    this.setState({currentImageIndex: nextPhoto}); 
  }

  openPhotoZoom = () => {
    this.setState({showImageZoom:true});
  }

  openInfo = () => {
    this.setState({openInfo:true});
  }

  closeInfo = () => {
    this.setState({openInfo:false});
  }

  openFullScreen = () => {
    var elem = document.getElementById("viewingimage");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  render() {
    var infoButton =  <div id="infodiv"><img src="/img/icons/info.svg" alt="info" style={{cursor: "pointer", width: "2vw", minWidth: "20px"}} onClick={this.openInfo}></img></div>; 
    var image = <div><img id="viewingimage" src={this.props.images[this.state.currentImageIndex].src} alt={this.props.images[this.state.currentImageIndex].name} srcSet={this.props.images[this.state.currentImageIndex].srcset} sizes='(max-width: 480px) 70vw, (max-width: 1000px) 40vw, 400px' /> </div>
   
    if (this.state.openInfo) {
      infoButton = <div id="infodiv">
          <img className="icon" src="/img/icons/info_dark.svg" alt="info" style={{cursor: "pointer", width: "2vw", minWidth: "20px"}} onClick={this.closeInfo}></img> 
          <img className="icon" src="/img/icons/enter_fullscreen.svg" alt="fullscreen" style={{cursor: "pointer", width: "2vw", minWidth: "20px"}} onClick={this.openFullScreen}></img>
          <a className="icon quietLinkIcon" href="https://www.instagram.com/papaysolomon/" target="_blank" rel="noopener noreferrer">  <img style={{width: "2vw", minWidth: "25px"}} src="/img/icons/instagram.svg" alt="instagram"/></a>
          <a className="icon quietLinkIcon" href="https://www.facebook.com/artbypapaysolomon/" target="_blank" rel="noopener noreferrer">  <img style={{width: "2vw", minWidth: "25px"}}  src="/img/icons/facebook.svg" alt="facebook"/></a>
        </div> ;

        image = <Col xs={10} sm={10} md={10} lg={10} xl={10}>      
            <Container>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}><div><img id="viewingimage" src={this.props.images[this.state.currentImageIndex].src} alt={this.props.images[this.state.currentImageIndex].name} srcSet={this.props.images[this.state.currentImageIndex].srcset} sizes='(max-width: 480px) 70vw, (max-width: 1000px) 40vw, 400px' /></div></Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div style={{fontWeight: "bold"}}>{this.props.images[this.state.currentImageIndex].name}</div>
                  <div>{this.props.images[this.state.currentImageIndex].size}</div> 
                  <div>{this.props.images[this.state.currentImageIndex].medium}</div> 
                  <div>{this.props.images[this.state.currentImageIndex].year}</div> 
                </Col>
              </Row>
            </Container>
          </Col>
              
            
    }

    const pageContent =  <div>
      {infoButton}

      <div style={{display: "flex", justifyContent: "center",  alignItems: "center", height: "100%"}}>
        <Container style={{width: "100%"}}>
          <Row>
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
              <Link to={this.previousPhotoId()}>
                <img src="/img/icons/left.svg" width="60px" style={{cursor:"pointer", top: "50%", position: "absolute", left:"50%", marginLeft:"-30px"}} onClick={this.previousPhoto} alt="previous"/>
              </Link>
            </Col>
            {image}
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
              <Link to={this.nextPhotoId()}>
                <img src="/img/icons/right.svg" width="60px" style={{cursor:"pointer", position: "absolute", top: "50%", left: "50%", marginLeft: "-30px"}} alt="next" onClick={this.nextPhoto}/>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div> ; 
    return (
      <Base content={pageContent} doNotIncludeFooter={true} />
    );
  }
}

ImageView.defaultProps = {
    pathName: "chapter1", 
    images: []
}

export default withRouter(ImageView);

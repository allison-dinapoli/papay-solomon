import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'; 
import Base from './base'; 
import './ImageView.css';
import "./base.css";

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
      // currentImageId: this.props.match.params.id,
      showImageZoom: false, 
      infoOpen: false
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    console.log(event.keyCode);
    if (event.keyCode === 37) { // Arrow Left 
      var imgIndex = this.previousPhoto(); 
      this.props.history.push(`/${this.props.pathName}/${this.props.images[imgIndex].id}`)
    } else if (event.keyCode === 39) { // Arrow Right 
      var imgIndex = this.nextPhoto(); 
      this.props.history.push(`/${this.props.pathName}/${this.props.images[imgIndex].id}`)
    }
  }
 
  //backToGallery = () => {
  //  this.props.history.push(`/${this.props.pathName}`);  
  //}

  nextPhoto = () => {
    var nextPhoto = this.nextPhotoPos();  
    this.setState({currentImageIndex: nextPhoto}); 
    return nextPhoto; 
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
    return nextPhoto; 
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
    var infoButton =   <div id="infocontainer"><span id="infodiv"><img id="infoicon" className="icon" src="/img/icons/info.svg" alt="info" onClick={this.openInfo}></img></span></div>; 
    try {
      var image = <div className="viewingimagecontainer"><img id="viewingimage" src={this.props.images[this.state.currentImageIndex].src} alt={this.props.images[this.state.currentImageIndex].name} srcSet={this.props.images[this.state.currentImageIndex].srcset} sizes='(max-width: 480px) 70vw, (max-width: 1000px) 40vw, 400px' /> </div>
    
      if (this.state.openInfo) {
        infoButton = 
        <div id="infocontainer">
            
              <a className="quietLinkIcon" href="https://www.instagram.com/papaysolomon/" target="_blank" rel="noopener noreferrer">  <img className="icon" src="/img/icons/instagram.svg" alt="instagram"/></a>
              <a className="quietLinkIcon" href="https://www.facebook.com/artbypapaysolomon/" target="_blank" rel="noopener noreferrer">  <img className="icon" src="/img/icons/facebook.svg" alt="facebook"/></a>
              <img className="icon" src="/img/icons/enter_fullscreen.svg" alt="fullscreen" onClick={this.openFullScreen}></img>
              <span id="infodiv">
                <img id="infoicon" className="infoicon" src="/img/icons/info_dark.svg" alt="info" onClick={this.closeInfo}></img> 
              </span>
        </div> ;

          image = <Container style={{width: "80vw", justifyContent: "flex-start"}}>
                <Row style={{width: "80vw"}}>
                  <Col xs={12} sm={12} md={12} lg={12} xl={6}><div className="viewingimagecontainer"><img id="viewingimage" className="infoviewingimage" src={this.props.images[this.state.currentImageIndex].src} alt={this.props.images[this.state.currentImageIndex].name} srcSet={this.props.images[this.state.currentImageIndex].srcset} sizes='(max-width: 480px) 70vw, (max-width: 1000px) 40vw, 400px' /></div></Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                    <div className="infotext" >
                      <div style={{fontWeight: "bold", fontStyle: "italic", marginBottom: "34px"}}>{this.props.images[this.state.currentImageIndex].name}</div>
                      <div style={{marginBottom: "34px"}}>{this.props.images[this.state.currentImageIndex].size}</div> 
                      <div style={{marginBottom: "34px"}}>{this.props.images[this.state.currentImageIndex].medium}</div> 
                      <div style={{marginBottom: "34px"}}>{this.props.images[this.state.currentImageIndex].year}</div> 
                    </div>
                  </Col>
                </Row>
              </Container>       
      }

      const pageContent =  <div>
        {infoButton}

        <div style={{display: "flex", justifyContent: "center",  alignItems: "center", textAlign: "center", width: "100vw"}}>
          <table style={{width: "100vw"}}>
            <tbody> 
              <tr>
                <td style={{width: "10vw"}}> 
                  <div className="directionarrowscontainer">
                    <Link to={this.previousPhotoId()}>
                      <img className="directionarrows" src="/img/icons/left.svg" onClick={this.previousPhoto} alt="previous" />
                    </Link> 
                  </div>
                </td> 
                <td style={{width: "80vw"}}> {image} </td>
                <td style={{width: "10vw"}}> 
                  <div className="directionarrowscontainer">
                    <Link to={this.nextPhotoId()}>
                      <img className="directionarrows" src="/img/icons/right.svg" onClick={this.nextPhoto} alt="next" />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> ; 
      return (
        <Base content={pageContent} doNotIncludeFooter={true} />
      );
    } catch(error) {
      this.props.history.push("/")
      return (
        <div></div>
      );
    }
  }
}

ImageView.defaultProps = {
    pathName: "chapter1", 
    images: []
}

export default withRouter(ImageView);

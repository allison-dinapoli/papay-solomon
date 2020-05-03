import React from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 
import Base from './base'; 
import ImageWithLoading from './ImageWithLoading'
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

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
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
    var elem = document.getElementById("highRezImage");
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

  getImageHeight = () => {
    if (window.innerHeight > window.innerWidth) {
      return window.innerHeight/2; 
    }
    return 5 * window.innerHeight / 6;
  }

  getImageWidth = () => {
    var width = 2 * window.innerWidth / 3;
    if (this.state.openInfo && this.props.images[this.state.currentImageIndex].orientation == "landscape" && window.innerHeight < window.innerWidth) {
      width = 2 * width / 3;  
    }
    return width; 
  }

  render() {
    var infoButton = <div id="infocontainer"><span id="infodiv"><img id="infoicon" className="icon" src="/img/icons/info.svg" alt="info" onClick={this.openInfo}></img></span></div>; 
    try {

      var image1 = <div className="viewingimagecontainer"><ImageWithLoading id="viewingimage" height={this.getImageHeight()} width={this.getImageWidth()} highRezImageUrl={this.props.images[this.state.currentImageIndex].src} lowRezImageUrl={this.props.images[this.state.currentImageIndex].lowRezSrc} alt={this.props.images[this.state.currentImageIndex].name} srcSet={this.props.images[this.state.currentImageIndex].srcset} sizes='(max-width: 480px) 70vw, (max-width: 1000px) 40vw, 400px' /></div>
      var image = image1;

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

          image = <div id="frame">
                    <div id="pictureframe">
                      {image1}
                    </div>
                    <div id="infocard">
                      <div className="infotext" >
                        <div style={{fontStyle: "italic", marginBottom: "24px"}}>{this.props.images[this.state.currentImageIndex].name}</div>
                        <div style={{marginBottom: "24px"}}>{this.props.images[this.state.currentImageIndex].size}</div> 
                        <div style={{marginBottom: "24px"}}>{this.props.images[this.state.currentImageIndex].medium}</div> 
                        <div style={{marginBottom: "24px"}}>{this.props.images[this.state.currentImageIndex].year}</div> 
                      </div>  
                    </div>
                  </div> 
      }

      const pageContent =  <div>
        {infoButton}

        <div style={{display: "flex", flexDirection: "row", justifyContent: "center",  textAlign: "center", width: "100vw"}}>
          <div style={{width: "10vw"}} > 
            <div className="directionarrowscontainer">
              <Link to={this.previousPhotoId()}>
                <img className="directionarrows" src="/img/icons/left.svg" onClick={this.previousPhoto} alt="previous" />
              </Link> 
            </div>
          </div> 
          <div id="imagewall" style={{width: "80vw"}}> {image} </div>
          <div style={{width: "10vw"}}> 
            <div className="directionarrowscontainer">
              <Link to={this.nextPhotoId()}>
                <img className="directionarrows" src="/img/icons/right.svg" onClick={this.nextPhoto} alt="next" />
              </Link>
            </div>
          </div> 
        </div>
      </div> ; 

      return (
        <Base content={pageContent} doNotIncludeFooter={true} sectionHeader={this.props.sectionHeader} useDarkNavbar={true} />
      );
    } catch(error) {
      console.log(error);
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

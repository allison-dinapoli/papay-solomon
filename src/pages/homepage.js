import React from 'react'; 
import { withRouter } from 'react-router-dom';
import homepageJson from '../json/homepage.json';  
import '../css/homepage.css';
import ImageWithLoading from '../components/ImageWithLoading'
import "../css/base.css";

class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
    
    let currentImageIndex = 0; 
    let images = homepageJson['images'];
    this.images = images; 
    this.state = {
      currentImageIndex: currentImageIndex, 
      previousImageIndex: images.length - 1, 
      nextImageIndex: 1
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.nextPhoto, 5000);
    this.appendStyleToBody(); 
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    document.body.removeChild(this.noScrolling); 
  }

  appendStyleToBody = () => {
    var style = document.createElement('style'); 
    style.innerHTML = "body { overflow-y: hidden; overflow-x: hidden; }"
    this.noScrolling = document.body.appendChild(style); 
  }

  nextPhoto = () => {
    var nextPhoto = this.nextPhotoPos();  
    var currentPhoto = this.state.currentImageIndex; 
    var nextNextPhoto = this.nextNextPhotoPos();
    this.setState({currentImageIndex: nextPhoto, nextImageIndex: nextNextPhoto, previousImageIndex: currentPhoto}); 
    return nextPhoto; 
  }

  nextPhotoPos = () => {
    var numPhotos = this.images.length;
    var nextPhoto = (this.state.currentImageIndex + 1) % numPhotos;
    return nextPhoto; 
  }

  nextNextPhotoPos = () => {
    var numPhotos = this.images.length;
    var nextPhoto = (this.state.currentImageIndex + 2) % numPhotos;
    return nextPhoto; 
  }

  previousPhotoPos() {
    var numPhotos = this.images.length;
    var nextPhoto = (this.state.currentImageIndex - 1) % numPhotos;
    return nextPhoto; 
  }

  previousPreviousPhotoPos() {
    var numPhotos = this.images.length;
    var nextPhoto = (this.state.currentImageIndex - 2) % numPhotos;
    return nextPhoto; 
  }

  previousPhoto = () => {
    var nextPhoto = this.previousPhotoPos(); 
    this.setState({currentImageIndex: nextPhoto}); 
    return nextPhoto; 
  }

  getImageHeight = () => {
    return "100%";
  }

  getImageWidth = () => {
    return "100%"; 
  }

  getCustomStyle = () => {
    if (window.screen.height > window.screen.width) {
      let aspectRatio = window.screen.width / window.screen.height; 
      if (aspectRatio >= 0.5) {
        return {objectFit: "cover", marginTop: "-40px", height: "auto", maxHeight: "5000px"}
      } else {
        return {objectFit: "cover", marginTop: "-10px", width: "auto"}
      }
    } else {
      return {objectFit: "cover", maxHeight: "7000px"}
    }
  }

  getImageSrc = () => {
    if (window.screen.height > window.screen.width) {
      return this.images[this.state.currentImageIndex].mobileSrc;
    } else {
      return this.images[this.state.currentImageIndex].src;
    }
  }

  getLowRezImageSrc = () => {
    if (window.screen.height > window.screen.width) {
      return this.images[this.state.currentImageIndex].mobileLowRezSrc;
    } else {
      return this.images[this.state.currentImageIndex].lowRezSrc;
    }
  }

  render() {
    try {
      var altText = "One of Papay Solomon's Works"; 
      let image = <ImageWithLoading class="visibleImage" divId="homePageImage" useSpinner={false} customStyle={this.getCustomStyle()} height={this.getImageHeight()} width={this.getImageWidth()} highRezImageUrl={this.getImageSrc()} lowRezImageUrl={this.getLowRezImageSrc()} imageOrientation={this.images[this.state.currentImageIndex].orientation}  alt={altText} sizes='' />;
      return (
        <div style={{height:"100vh"}}>
          {image}
        </div>
      );
    } catch(error) {
      console.log(error);
      return (
        <div></div>
      );
    }
  }
}

export default withRouter(HomePage);

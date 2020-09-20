import React from 'react'; 
import { withRouter } from 'react-router-dom';
import homepageJson from '../json/homepage.json';  
import '../css/homepage.css';
import ImageWithLoading from '../components/ImageWithLoading'
import ImageCarouselDots from '../components/imageCarouselDots'
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
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextPhoto = () => {
    var nextPhoto = this.nextPhotoPos();  
    var currentPhoto = this.state.currentImageIndex; 
    var nextNextPhoto = this.nextNextPhotoPos();
    console.log(`current photo: ${currentPhoto} nextPhoto: ${nextPhoto} nextNextPhoto: ${nextNextPhoto}`)
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
    if (window.screen.height > window.screen.width) {
      return 2 * window.screen.height / 3; 
    }
    return "100%";
  }

  getImageWidth = () => {
    return "100%"; 
  }

  getCustomStyle = () => {
    if (window.screen.height > window.screen.width) {
      return {height: this.getImageHeight(), width: "auto"} 
    } else {
      return undefined; 
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
      var customStyle = this.getCustomStyle()
      var imageCarouselDots = <ImageCarouselDots numberOfImages={this.images.length} currentImageIndex={this.state.currentImageIndex}/>
      let image = <ImageWithLoading class="visibleImage" divId="homePageImage" useSpinner={false} height={this.getImageHeight()} width={this.getImageWidth()} highRezImageUrl={this.getImageSrc()} lowRezImageUrl={this.getLowRezImageSrc()} imageOrientation={this.images[this.state.currentImageIndex].orientation}  alt={altText} sizes='' />;
      return (
        <div>
          {image}
          <div>
          {imageCarouselDots}
          </div>
          <div width="0px" height="0px" class="hiddenImage">
            <img width="0px" height="0px" src={this.getLowRezImageSrc()} />
          </div>
        </div>
      );
    } catch(error) {
      console.log(error)
      //this.props.history.push("/")
      return (
        <div></div>
      );
    }
  }
}

export default withRouter(HomePage);

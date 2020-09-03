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
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.nextPhoto, 7000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextPhoto = () => {
    var nextPhoto = this.nextPhotoPos();  
    this.setState({currentImageIndex: nextPhoto}); 
    return nextPhoto; 
  }

  nextPhotoPos = () => {
    var numPhotos = this.images.length;
    var nextPhoto = (this.state.currentImageIndex + 1) % numPhotos;
    return nextPhoto; 
  }

  previousPhotoPos() {
    var numPhotos = this.images.length;
    var nextPhoto = (this.state.currentImageIndex - 1);
    if (nextPhoto < 0) {
      nextPhoto = numPhotos - 1; 
    }
    return nextPhoto; 
  }

  previousPhoto = () => {
    var nextPhoto = this.previousPhotoPos(); 
    this.setState({currentImageIndex: nextPhoto}); 
    return nextPhoto; 
  }

  getImageHeight = () => {
    if (window.innerHeight > window.innerWidth) {
      //return window.innerHeight; 
    }
    //return window.innerHeight;
    return "100%";
  }

  getImageWidth = () => {
    return "100%"; 
  }


  render() {
    try {
      var altText = "One of Papay Solomon's Works";
      var imageCarouselDots = <ImageCarouselDots numberOfImages={this.images.length} currentImageIndex={this.state.currentImageIndex}/>
      let image = <ImageWithLoading id="viewingimage" divId="homePageImage" useSpinner={false} height={this.getImageHeight()} width={this.getImageWidth()} highRezImageUrl={this.images[this.state.currentImageIndex].src} lowRezImageUrl={this.images[this.state.currentImageIndex].lowRezSrc} imageOrientation={this.images[this.state.currentImageIndex].orientation}  alt={altText} sizes='' />
      return (
        <div> 
          {image}
          <div>
          {imageCarouselDots}
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

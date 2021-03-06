import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import '../css/Exhibition.css';
import ImageCarouselDots from './imageCarouselDots';
import ImageWithLoading from './ImageWithLoading'
import "../css/base.css";

class Exhibition extends React.Component {
  
  constructor(props) {
    super(props);
    
    let currentImageIndex = 0; 
    let images = this.props.exhibitionJson['images'];
    this.images = images; 
    this.state = {
      currentImageIndex: currentImageIndex,
    }
  }

  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 37) { // Arrow Left 
      var imgIndex = this.previousPhoto(); 
      //this.props.history.push(`/${this.props.pathName}/${this.props.images[imgIndex].id}`)
    } else if (event.keyCode === 39) { // Arrow Right 
      var imgIndex = this.nextPhoto(); 
      //this.props.history.push(`/${this.props.pathName}/${this.props.images[imgIndex].id}`)
    }
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
      return window.innerHeight/3; 
    }
    return 4 * window.innerHeight / 6;
  }

  getImageWidth = () => {
    var width = 2 * window.innerWidth / 3;
    return width; 
  }


  render() {
    try {
      var altText = "Photo " + String(this.state.currentImageIndex + 1) + " of " + this.props.exhibitionJson['name'];
      let image = <div className="viewingimagecontainer"><ImageWithLoading id="viewingimage" height={this.getImageHeight()} width={this.getImageWidth()} useSpinner={true} highRezImageUrl={this.images[this.state.currentImageIndex].src} lowRezImageUrl={this.images[this.state.currentImageIndex].lowRezSrc} imageOrientation={this.images[this.state.currentImageIndex].orientation}  alt={altText} sizes='(max-width: 480px) 70vw, (max-width: 1000px) 40vw, 400px' /></div>
      return (
        <div>
          <div style={{height: "30px", width: "100vw"}}></div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center",  textAlign: "center", width: "100vw", height: this.getImageHeight() }}>
                <div style={{width: "15vw"}} > 
                    <div className="directionarrowscontainer" style={{height: this.getImageHeight(), textAlign:"right", width: "15vw"}}>
                        <img className="directionarrowsplz" src="/img/icons/left.svg" onClick={this.previousPhoto} alt="previous" />
                    </div>
                </div> 
                <div id="imagewall" style={{width: "70vw"}}> {image} </div>
                <div style={{width: "15vw"}}> 
                    <div className="directionarrowscontainer" style={{height: this.getImageHeight(), textAlign: "left", width: "15vw"}}>
                        <img className="directionarrowsplz" src="/img/icons/right.svg" onClick={this.nextPhoto} alt="next" />
                    </div>
                </div> 
            </div>
            <div style={{marginTop: '20px'}}></div>
            <ImageCarouselDots currentImageIndex={this.state.currentImageIndex} numberOfImages={this.images.length} />
            <div style={{textAlign: "center"}}>
                <br/>
                {this.props.exhibitionJson["startDate"]} - {this.props.exhibitionJson["endDate"]} <br/>
                <a style={{fontStyle: "italic"}}>{this.props.exhibitionJson["name"]}</a> <br/>
                {this.props.exhibitionJson["gallery"]}<br/>
                {this.props.exhibitionJson["acknowledgements"] || ""} 
            </div>   
        </div> 
      );
    } catch(error) {
      console.log(error)
      this.props.history.push("/")
      return (
        <div></div>
      );
    }
  }
}

Exhibition.defaultProps = {
    exhibitionJson: {"name": "null", "images": []}
}

export default withRouter(Exhibition);

import React from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 
import Base from './base'; 
import './ImageView.css';
import "./base.css";

class Exhibitions extends React.Component {
  
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
      showImageZoom: false, 
      infoOpen: false
    }
  }

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

  render() {
    try {
      var image = <div className="viewingimagecontainer"><img id="viewingimage" src={this.props.images[this.state.currentImageIndex].src} alt={this.props.images[this.state.currentImageIndex].name} srcSet={this.props.images[this.state.currentImageIndex].srcset} sizes='(max-width: 480px) 70vw, (max-width: 1000px) 40vw, 400px' /> </div>
    
      const pageContent =  <div>

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
        <Base content={pageContent} doNotIncludeFooter={true} sectionHeader={"EXHIBITIONS"} />
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

Exhibitions.defaultProps = {
    pathName: "exhibitions", 
    images: []
}

export default withRouter(Exhibitions);

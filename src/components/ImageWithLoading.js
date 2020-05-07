import React from "react";
import './ImageView.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux"; 
import * as imageLoadActions from '../actions/imageLoadActions';

class ImageWithLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { highRezClass: "hiddenImage", lowRezClass: "visibleImage", loadingClass: "visibleImage", lowRezLoaded: false, highRezLoaded:false};
    this.handleLowRezImageLoaded = this.handleLowRezImageLoaded.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.getMaxHeightWidth = this.getMaxHeightWidth.bind(this);
  }

  handleImageLoaded() {
    this.getMaxHeightWidth();
    this.setState({ highRezClass: "visibleImage", lowRezClass: "hiddenImage", loadingClass: "hiddenImage", highRezLoaded: true });
  }

  handleLowRezImageLoaded() {
    if (!this.state.highRezLoaded) {
      this.setState({lowRezLoaded: true, lowRezClass: "visibleImage", loadingClass: "hiddenImage"});
    }
    this.props.actions.arrowKeyPressed(false); 
    this.getMaxHeightWidth();
  }
 
  handleImageErrored() {
    this.setState({ highRezClass: "hiddenImage", lowRezClass: "hiddenImage", loadingClass: "hiddenImage" });
  }
  
  getMaxHeightWidth() {
    var width= 0; 
    var height = 0;
    width =  2 * window.innerWidth / 3;
    height = 5 * window.innerHeight / 6;
    
    this.setState({divBoxWidth: width, divBoxHeight: height});     
  }  

  render() {
    var fullHighRezClassName = this.state.highRezClass; 
    if (this.state.classNameAgain) {
        fullHighRezClassName = fullHighRezClassName + " " + this.state.classNameAgain;
    }
    if (this.props.imageStatus.arrowKeyPressed && !this.state.highRezLoaded && !this.state.lowRezLoaded) {
      this.setState({loadingClass: "visibleImage", lowRezClass: "hiddenImage", highRezClass: "hiddenImage"});
    }
    return (
      <div id="imagedivboxcontainer" style={{maxWidth: this.state.divBoxWidth, maxHeight: this.state.divBoxHeight, height: this.props.height, width: this.props.width}}>
        <img 
          className={fullHighRezClassName}
          style={{objectFit: "contain"}}
          src={this.props.highRezImageUrl}
          alt={this.props.alt}
          id="highRezImage"
          srcSet={this.props.srcSet}
          sizes={this.props.sizes}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored.bind(this)}
        />
        <img 
          style={{objectFit: "contain"}}
          alt={this.props.alt}
          className={this.state.lowRezClass}
          srcSet={this.props.srcSet}
          sizes={this.props.sizes}
          id="lowRezImage"
          onLoad={this.handleLowRezImageLoaded}
          src={this.props.lowRezImageUrl}
        />
        <img
          alt="loading..."
          className={this.state.loadingClass}
          id="loadingImage"
          src="./img/icons/loading-spinner.svg"
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators({...imageLoadActions }, dispatch),
  }
}

const mapStateToProps = state => ({
  imageStatus: state.imageStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageWithLoading);
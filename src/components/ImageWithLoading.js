import React from "react";
import './ImageView.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux"; 
import * as imageLoadActions from '../actions/imageLoadActions';

class ImageWithLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { highRezClass: "hiddenImage", lowRezClass: "hiddenImage", loadingClass: "visibleImage", lowRezLoaded: false, highRezLoaded:false};
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.getMaxHeightWidth = this.getMaxHeightWidth.bind(this);
    if (typeof navigator !== 'undefined' && typeof navigator.connection !== 'undefined' && typeof navigator.connection.downlink !== 'undefined') {
      this.internetSpeed = navigator.connection.downlink; 
    } else {
      this.internetSpeed = 1; 
    }
  }

  componentWillUnmount() {
    this.setState({highRezClass: "hiddenImage", lowRezClass: "hiddenImage", loadingClass: "visibleImage", highRezLoaded: false, lowRezLoaded: false }); 
  }

  componentDidUpdate(previousProps) {
    if (previousProps.lowRezImageUrl != this.props.lowRezImageUrl && this.internetSpeed < 7) {
      this.setState({highRezClass: "hiddenImage", lowRezClass: "hiddenImage", loadingClass: "visibleImage", highRezLoaded: false, lowRezLoaded: false }); 
    }
    if (typeof navigator !== 'undefined' && typeof navigator.connection !== 'undefined' && typeof navigator.connection.downlink !== 'undefined') {
      this.internetSpeed = navigator.connection.downlink; 
    } else {
      this.internetSpeed = 1; 
    }
  }

  handleImageLoaded() {
    this.getMaxHeightWidth();
    this.setState({ highRezClass: "visibleImage", lowRezClass: "hiddenImage", loadingClass: "hiddenImage", highRezLoaded: true });
  }

  handleLowRezImageLoaded = () => {
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
    var highRezClass = this.state.highRezClass;
    var lowRezClass = this.state.lowRezClass; 
    var loadingClass = this.state.loadingClass; 
    if (this.props.imageStatus.arrowKeyPressed) {
      highRezClass = "hiddenImage"; 
      lowRezClass = "hiddenImage"; 
      loadingClass = "visibleImage"; 
    }
    console.log(this.internetSpeed);
    if (this.internetSpeed > 7) {
      loadingClass = 'hiddenImage';
    }

    var highRezImage = ""; 

    if (this.state.lowRezLoaded) {
      highRezImage = <img 
          className={highRezClass}
          style={{objectFit: "contain"}}
          src={this.props.highRezImageUrl}
          alt={this.props.alt}
          id="highRezImage"
          srcSet={this.props.srcSet}
          sizes={this.props.sizes}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored.bind(this)}
        />; 
    }
  
    return (
      <div id="imagedivboxcontainer" style={{maxWidth: this.state.divBoxWidth, maxHeight: this.state.divBoxHeight, height: this.props.height, width: this.props.width}}>
        { highRezImage }
        <img 
          style={{objectFit: "contain"}}
          alt={this.props.alt}
          className={lowRezClass}
          srcSet={this.props.srcSet}
          sizes={this.props.sizes}
          id="lowRezImage"
          onLoad={this.handleLowRezImageLoaded}
          src={this.props.lowRezImageUrl}
        />
        <img
          alt="loading..."
          className={loadingClass}
          id="loadingImage"
          src="/img/icons/loading-spinner.svg"
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...imageLoadActions }, dispatch),
  }
}

const mapStateToProps = state => ({
  imageStatus: state.imageStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageWithLoading);
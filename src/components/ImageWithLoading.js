import React from "react";
import './ImageWithLoading.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux"; 
import * as imageLoadActions from '../actions/imageLoadActions';


class ImageWithLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { highRezClass: "hiddenImage", lowRezClass: "hiddenImage", loadingClass: "visibleImage loadingImage", lowRezLoaded: false, highRezLoaded:false};
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.getMaxHeightWidth = this.getMaxHeightWidth.bind(this);
    if (typeof navigator !== 'undefined' && typeof navigator.connection !== 'undefined' && typeof navigator.connection.downlink !== 'undefined') {
      this.internetSpeed = navigator.connection.downlink; 
    } else {
      this.internetSpeed = 1; 
    }
    this.useSpinnerGif = true; 
    this.parser = require('ua-parser-js');
    this.userAgent = this.parser(navigator.userAgent); 
    this.oldBrowser = false;
    console.log(this.userAgent.browser); 
    try {
      if(this.userAgent.browser.name.includes("Chrome") || this.userAgent.browser.name.includes("Chromium") || this.userAgent.browser.name.includes("Firefox")) {
        this.useSpinnerGif = false; 
      }
    } catch (ex) {
      console.log(ex); 
      this.useSpinnerGif = true; 
      this.oldBrowser = true; 
    }
  }

  componentWillUnmount() {
    this.setState({highRezClass: "hiddenImage", lowRezClass: "hiddenImage", loadingClass: "visibleImage loadingImage", highRezLoaded: false, lowRezLoaded: false }); 
  }

  componentDidUpdate(previousProps) {
    if (previousProps.lowRezImageUrl != this.props.lowRezImageUrl && this.internetSpeed < 8) {
      this.setState({highRezClass: "hiddenImage", lowRezClass: "hiddenImage", loadingClass: "visibleImage loadingImage", highRezLoaded: false, lowRezLoaded: false }); 
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
      loadingClass = "visibleImage loadingImage"; 
    }
    if (this.internetSpeed > 8) {
      loadingClass = 'hiddenImage';
    }

    var oldBrowserImageStyle = {height: "100%", width: "auto"}; 
    if (this.props.imageOrientation === "landscape") {
      oldBrowserImageStyle = {height: "auto", width: "100%"}; 
    }

    var highRezImage = ""; 

    if (this.state.lowRezLoaded && !this.oldBrowser) {
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
    } else if(this.state.lowRezLoaded && this.oldBrowser) {
        highRezImage = <img 
          className={highRezClass}
          style={oldBrowserImageStyle}
          src={this.props.highRezImageUrl}
          alt={this.props.alt}
          id="highRezImage"
          srcSet={this.props.srcSet}
          sizes={this.props.sizes}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored.bind(this)}
        />; 
    }

    var lowRezImage = <img 
      style={{objectFit: "contain"}}
      alt={this.props.alt}
      className={lowRezClass}
      srcSet={this.props.srcSet}
      sizes={this.props.sizes}
      id="lowRezImage"
      onLoad={this.handleLowRezImageLoaded}
      src={this.props.lowRezImageUrl}
    />;
    if (this.oldBrowser) {
      lowRezImage = <img 
      style={oldBrowserImageStyle}
      alt={this.props.alt}
      className={lowRezClass}
      srcSet={this.props.srcSet}
      sizes={this.props.sizes}
      id="lowRezImage"
      onLoad={this.handleLowRezImageLoaded}
      src={this.props.lowRezImageUrl}
    />;
    }

    var loadingSpinner = <img
                            alt="loading..."
                            className={loadingClass}
                            id="loadingImage"
                            src="/img/icons/loading-spinner.svg"
                          />;
    
    if (this.useSpinnerGif && !this.oldBrowser) {
      loadingSpinner = <img
                          alt="loading..."
                          style={{objectFit: "contain"}}
                          className={loadingClass}
                          id="loadingImage"
                          src="/img/icons/loading-spinner.gif"
                        />;
    } else if (this.useSpinnerGif && this.oldBrowser) {
      loadingSpinner = <img
        alt="loading..."
        style={{height: "100%", width: "auto"}}
        className={loadingClass}
        id="loadingImage"
        src="/img/icons/loading-spinner.gif"
      />;
    }



    return (    
    <div id="imagedivboxcontainer" style={{maxWidth: this.state.divBoxWidth, maxHeight: this.state.divBoxHeight, height: this.props.height, width: this.props.width}}>
      { highRezImage }
      { lowRezImage }
      { loadingSpinner }
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
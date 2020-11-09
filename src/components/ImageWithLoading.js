import React from "react";
import '../css/ImageWithLoading.css'; 


class ImageWithLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { highRezClass: "hiddenImage", lowRezClass: "hiddenImage", loadingClass: "visibleImage loadingImage", lowRezLoaded: false, highRezLoaded:false};
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    if (typeof navigator !== 'undefined' && typeof navigator.connection !== 'undefined' && typeof navigator.connection.downlink !== 'undefined') {
      this.internetSpeed = navigator.connection.downlink; 
    } else {
      this.internetSpeed = 1; 
    }
    this.useSpinnerGif = true; 
    this.parser = require('ua-parser-js');
    this.userAgent = this.parser(navigator.userAgent); 
    this.oldBrowser = false;
    this.divId = ("divId" in this.props ? this.props.divId : "imagedivboxcontainer"); 
    
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
    if (previousProps.lowRezImageUrl != this.props.lowRezImageUrl) {
      if (this.useSpinner()) {
        this.setState({highRezClass: "hiddenImage", lowRezClass: "hiddenImage", loadingClass: "visibleImage loadingImage", highRezLoaded: false, lowRezLoaded: false, previousImageUrl: previousProps.lowRezImageUrl }); 
      } else {
        var lowRezClass = "visibleImage"; 
        var highRezClass = "hiddenImage";
        if (this.state.highRezLoaded) {
          lowRezClass = "hiddenImage"; 
          highRezClass = "visibleImage";
        }
        this.setState({highRezClass: highRezClass, lowRezClass: lowRezClass, loadingClass: "hiddenImage", highRezLoaded: false, lowRezLoaded: false, previousImageUrl: previousProps.lowRezImageUrl }); 
      }
    }
    if (typeof navigator !== 'undefined' && typeof navigator.connection !== 'undefined' && typeof navigator.connection.downlink !== 'undefined') {
      this.internetSpeed = navigator.connection.downlink; 
    } else {
      this.internetSpeed = 1; 
    }
  }

  useSpinner = () => {
    if (('useSpinner' in this.props && this.props.useSpinner) || !'useSpinner' in this.props) {
      if (this.internetSpeed < 8.5) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  handleImageLoaded() {
    this.setState({ highRezClass: "visibleImage", lowRezClass: "hiddenImage", loadingClass: "hiddenImage", highRezLoaded: true });
  }

  handleLowRezImageLoaded = () => {
    if (!this.state.highRezLoaded) {
      this.setState({lowRezLoaded: true, lowRezClass: "visibleImage", loadingClass: "hiddenImage", highRezClass: "hiddenImage"});
    }
  }
 
  handleImageErrored() {
    this.setState({ highRezClass: "hiddenImage", lowRezClass: "hiddenImage", loadingClass: "hiddenImage" });
  }

  render() {
    var highRezClass = this.state.highRezClass;
    var lowRezClass = this.state.lowRezClass; 
    var loadingClass = this.state.loadingClass;     

    var oldBrowserImageStyle = {height: "100%", width: "auto"}; 
    if (this.props.imageOrientation === "landscape") {
      oldBrowserImageStyle = {height: "auto", width: "100%"}; 
    }

    var style = {objectFit: "contain"}
    if (this.props.customStyle) {
      style = this.props.customStyle;
    }

    var highRezImage = ""; 

    if (this.state.lowRezLoaded && !this.oldBrowser) {
      highRezImage = <img 
          className={highRezClass}
          style={style}
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
      style={style}
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

    var loadingSpinner = ""; 

    if (this.useSpinner()) {
      loadingSpinner = <img
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
    }

    var divHeight = ((typeof this.props.height === 'number') ? `${this.props.height}px` : this.props.height);
    
    var divStyle = {height: divHeight}
    if (window.screen.height > window.screen.width) {
      let maxHeight = ((typeof this.props.height === 'number') ? `${this.props.height + 10}px` : this.props.height); 
      divStyle = {maxHeight: `${maxHeight}`}
    } 
    return (    
    <div id={this.divId} style={divStyle}>
      { highRezImage }
      { lowRezImage }
      { loadingSpinner }
    </div>
    );
  }
}

export default ImageWithLoading;
import React from "react";

class ImageCarouselDots extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      currentImageIndex: (this.props.currentImageIndex ? this.props.currentImageIndex : 0), 
      numberOfImages: (this.props.numberOfImages ? this.props.numberOfImages : 0) 
    };
   
  }

  componentDidUpdate(previousProps) {
    if (previousProps.currentImageIndex !== this.props.currentImageIndex) {
      this.setState({currentImageIndex: this.props.currentImageIndex }); 
    } 
    if (previousProps.numberOfImages !== this.props.numberOfImages) {
      this.setState({numberOfImages: this.props.numberOfImages })
    }
  }

  lightCircle = () => {
    return (
        <svg height="20" width="30">
          <circle cx="7" cy="7" r="5" stroke="#474747" strokeWidth="1" fill="#fcfbf5" />
        </svg> 
    )
  }

  darkCircle = () => {
    return ( 
      <svg height="20" width="30">
        <circle cx="7" cy="7" r="5" stroke="#474747" strokeWidth="1" fill="#6e6e6b" />  
      </svg> 
    )
  }

  render() {
    var circles = []; 
    var i;
    for (i = 0; i < this.state.numberOfImages; i++) {
      if (i === this.state.currentImageIndex) {
        circles.push(this.darkCircle())
      } else {
        circles.push(this.lightCircle())
      }
    }
    return (    
    <div id="imagedivboxcontainer" style={{marginTop: "5px"}}>
      {circles}
    </div>
    );
  }
}

export default ImageCarouselDots;
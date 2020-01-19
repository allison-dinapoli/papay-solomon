import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import NavHeader from './navheader';
import './about.css';
import './base.css';

class About extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      isSticky: false
    }
    this.backgroundImage = React.createRef();
  }

  componentDidMount() {
    const cachedRef = this.backgroundImage.current;
    this.observer = new IntersectionObserver(
      ([e]) => {this.setState({isSticky: e.intersectionRatio < 0.01})},
      {threshold: [0], delay: 100}
    )
    this.observer.observe(cachedRef);
  }

  componentWillUnmount() {
    this.observer.unobserve(this.backgroundImage.current);
  }

  render() {
    const aboutText = <span><a style={{fontWeight: "bold", fontSize: "1.1em"}}>Award-winning</a><a> Phoenix-based painter and Liberian war refugee, Papay Solomon lives in the space between two worlds, the world of his adopted home in America and that of his African heritage. His work boldly attempts to reconcile the two into a cohesive whole, with an artistic vision tempered by his formal education in the West and at the same time wildly alive with the indelible imprint of his home country. Known for his paintings of fellow members of the African diaspora, Solomon uses the vocabulary of classical works of art with a modern spin. </a><br/><br/> 
    <a>In his paintings, faces of African immigrants are meticulously rendered with reverence that echoes the grandeur of classical Western art. Through his paintings he aims to honor his sitter’s dignity and cultural identity by representing their stories and experiences. In doing so, Solomon manages to invigorate the structures and techniques of Western art with an African soul.</a> <br/><br/>
    <a>Solomon was born in Guinea in 1993, his mother having fled the First Liberian Civil War while she was still pregnant with him and crossed the border to the neighboring country on foot. At age 5, growing political unrest forced Solomon and his family to once again relocate, this time from the Guinean city of Gueckedou to the refugee camps built several hundred miles away, where he would spend much of his childhood. </a><br/><br/>
    <a>At the age of 14, Solomon migrated with his family to the United States, where he attended High School and then completed his college education at Herberger Institute of Design and the Arts at Arizona State University, receiving the honor of Outstanding Undergraduate of his class. In 2018, shortly after graduating from ASU, Solomon received the 2018 Friends of Contemporary Art Artists’ Grants Award from the Phoenix Art Museum and the Erni Cabat Award from the Tucson Museum of Art. </a>
    </span>;
    
    var navbar = <NavHeader doNotIncludeNavbarBrand={true} useLightNavbar={true} />;

    if (this.state.isSticky) {
      navbar = <NavHeader doNotIncludeNavbarBrand={true} useLightNavbar={false} useTransparentDarkNavbar={true} />;
    }


    return (
        <div>
            {navbar}
            <div> <div id="backgroundimage" ref={this.backgroundImage}></div> </div>
            <div id="aboutcontent">
                <div className="sticky" style={{height: "11vh", width: "100vw", marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                  <h2 style={{alignSelf: "center"}}>ABOUT</h2>
                </div>
                <div id="abouttext"> {aboutText} </div>
            </div>
        </div>
        
    );
  }
}

export default withRouter(About);

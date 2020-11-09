import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import '../css/about.css';
import '../css/base.css';
import Base from '../components/base';
import { navbarTypes } from '../enums/navbarTypes';

class About extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      
    }
  }

  render() {
    let papayPhoto = <img className="papaypicture" src="/img/PapayPortrait.jpg" />
    let aboutInfo = <span> <div className="aboutparagraph" style={{textAlign: "center"}}>{papayPhoto}</div> <div className="aboutparagraph"><a>Papay Solomon</a><br/>
    (b. 1993, Guinea of Liberian descent; lives and works in Phoenix, AZ)</div> 
      <div className="aboutparagraph"><a>Liberian-American artist Papay Solomon lives between two worlds: his adopted home in America and that of his African heritage. His work boldly attempts to reconcile the two with an artistic vision enhanced by his formal education in the West and at the same time wildly alive with the indelible imprint of his home country. </a> </div>
      <div className="aboutparagraph"><a>Solomon paints hyperrealist figures, with traces of non finito and color field qualities, to amplify stories and experiences of the African diaspora. With this approach to the figurative tradition Solomon attentively renders his sitters with dignity, complexity, and beauty. Faces of African immigrants are meticulously imbued with reverence that echoes the grandeur of Renaissance and Baroque portraiture. In doing so, Solomon invigorates the structures and techniques of Western art with an African soul.</a></div>
      <div className="aboutparagraph"><a>Born in Guinea in 1993, Solomon’s mother fled the First Liberian Civil War while she was still pregnant with him and crossed into the neighboring country on foot. At age 5, growing political unrest in the Guinean city of Gueckedou forced Solomon and his family to again relocate hundreds of miles away to refugee camps, where he would spend much of his childhood.</a></div>
      <div className="aboutparagraph"><a>At 14, Solomon resettled with his family in the United States, where he attended high school and the Herberger Institute of Design and the Arts at Arizona State University, graduating with a BFA and being awarded Outstanding Undergraduate in 2018. Solomon received the 2018 Friends of Contemporary Art Artists’ Grants Award from the Phoenix Art Museum and the Erni Cabat Award from the Tucson Museum of Art.</a> </div>
      </span>;

    let pageContent = <span><div className="topHeader"></div><div className="abouttext">{aboutInfo}</div></span>;
    return (
      <Base content={pageContent} sectionHeader={"ABOUT"} navbarType={navbarTypes.DEFAULT} />
    )
  }
}

export default withRouter(About);
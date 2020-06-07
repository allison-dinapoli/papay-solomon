import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import Exhibition from './Exhibition';
import Base from './base'; 
import './ImageView.css';
import "./base.css";
import exhibitionJson from '../json/exhibition1.json'; 
import { navbarTypes } from '../enums/navbarTypes';

class Exhibitions extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    try {
      var pageContent = <div style={{width: "100vw"}}>
          <div style={{width: "100vw", height: "10vh", maxHeight: "75px"}}></div>
          <Exhibition exhibitionJson={exhibitionJson} />
        </div>
      return (
        <Base content={pageContent} doNotIncludeFooter={true} sectionHeader={"EXHIBITIONS"} navbarType={navbarTypes.DEFAULT} />
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
    pathName: "exhibitions"
}

export default withRouter(Exhibitions);

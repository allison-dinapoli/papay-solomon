import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import Exhibition from '../components/Exhibition';
import Base from '../components/base'; 
import '../css/ImageView.css';
import "../css/base.css";
import exhibitionJson from '../json/exhibitionAFTFT.json'; 
import { navbarTypes } from '../enums/navbarTypes';

class Exhibitions extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    try {
      var pageContent = <div style={{width: "100vw"}}>
          <Exhibition exhibitionJson={exhibitionJson} />
        </div>
      return (
        <Base content={pageContent} doNotIncludeFooter={true} noTopMargin={true} navbarType={navbarTypes.NO_HEADER} />
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

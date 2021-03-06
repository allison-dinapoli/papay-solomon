import React from 'react';
import Footer from './footer';
import NavHeader from './navheader';
import '../css/base.css';

export default class Base extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      
    }; 
  }
  render() {
    var navbar = ''; 
    if (!this.props.doNotIncludeNavBar) {
      navbar = <NavHeader doNotIncludeNavbarBrand={this.props.doNotIncludeNavbarBrand} navbarType={this.props.navbarType} sectionHeader={this.props.sectionHeader} includeCvDownload={this.props.includeCvDownload} />
    }
    var styles = {}; 
    if (this.props.noTopMargin) {
      styles = {marginTop: "0px"};
    }
    if (this.props.doNotIncludeFooter) {
      styles = {height: "100vh", ...styles}
    }
    var content = <div className="content" style={styles}>{this.props.content}</div>
    if (this.props.doNotIncludeContentClassName) {
      content = <div>{this.props.content}</div>
    }

    var elementsToReturn = <div style={{position: "absolute", width: "100vw", marginBottom: "150px"}}>
        {navbar}
        {content}
        <div style={{marginBottom: "100px", position: "relative"}}></div>
        <Footer/>
      </div>;

    if (this.props.doNotIncludeFooter) {
      elementsToReturn = <div style={{position: "absolute", width: "100vw", height: "100vh"}}>
        {navbar}
        {content}
      </div>;
    }

    return (
      elementsToReturn
    );
  }
};

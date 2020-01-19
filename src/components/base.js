import React from 'react';
import Footer from './footer';
import NavHeader from './navheader';
import './base.css';

export default class Base extends React.Component {

  constructor(props) {
    super(props); 
    
    this.state = {
      
    }; 
  }
  render() {
    var navbar = ''; 
    if (!this.props.doNotIncludeNavBar) {
      navbar = <NavHeader doNotIncludeNavbarBrand={this.props.doNotIncludeNavbarBrand} useLightNavbar={this.props.useLightNavbar} sectionHeader={this.props.sectionHeader} includeCvDownload={this.props.includeCvDownload} useTransparentDarkNavbar={this.props.useTransparentDarkNavbar} useDarkNavbar={this.props.useDarkNavbar} />
    }
    
    var content = <div className="content" style={{marginTop: "1vh"}}>{this.props.content}</div>
    if (this.props.doNotIncludeContentClassName) {
      content = <div>{this.props.content}</div>
    }

    var elementsToReturn = <div style={{position: "absolute", width: "100vw", marginBottom: "3vh"}}>
        {navbar}
        {content}
        <div style={{marginBottom: "30vh", position: "relative"}}></div>
        <Footer/>
      </div>;

    if (this.props.doNotIncludeFooter) {
      elementsToReturn = <div style={{position: "absolute", width: "100vw", marginBottom: "3vh"}}>
        {navbar}
        {content}
      </div>;
    }

    return (
      elementsToReturn
    );
  }
};

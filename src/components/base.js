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
    
    var content = <div className="content" style={{marginTop: "10px"}}>{this.props.content}</div>
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
      elementsToReturn = <div style={{position: "absolute", width: "100vw", marginBottom: "100px"}}>
        {navbar}
        {content}
      </div>;
    }

    return (
      elementsToReturn
    );
  }
};

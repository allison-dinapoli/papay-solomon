import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import {navbarTypes} from '../enums/navbarTypes';

import { Link } from 'react-router-dom';
import '../css/base.css';

export default class NavHeader extends React.Component {

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    window.onscroll = this.collapseMenu; 
    document.addEventListener('mousedown', this.handleMouseClick); 
  }

  componentWillUnmount() {
    window.onscroll = null; 
    document.removeEventListener('mousedown', this.handleMouseClick)
  }

  handleMouseClick = (event) => {
    let className = event.srcElement.className; 
    try {
      if (!(className.includes("nav-link") || className.includes("navbar"))) {
        this.collapseMenu(); 
      } 
    } catch (error) {
      // this error is almost always caused by being run on IE6... :(
    }

  }

  resetScrollBar = () => {
    window.scrollTo(0,0);
  }

  eventFire = (el, etype) => {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false); 
      el.dispatchEvent(evObj); 
    }
  }

  menuIsExpanded = () => { 
    try {
      var hamburger = document.getElementsByClassName("navbar-toggler"); 
      if (hamburger.length > 0) {
        hamburger = hamburger[0];
        if (hamburger.className) { 
          return hamburger.className.includes("collapsed"); 
        }
      }
    } catch (error) {
      // do nothing this error is caused by ie6 :(
    }

    return false; 
  }  

  collapseMenu = () => {
    if (this.menuIsExpanded()) {
      this.eventFire(document.getElementsByClassName("navbar-toggler")[0], 'click'); 
    }
  }

  render() {
    var navbarBrand = <Link to='/' className="headerLink"><a className="headerLink">PAPAY SOLOMON</a></Link>;

    if (this.props.doNotIncludeNavbarBrand) {
      navbarBrand = "";
    }

    var cvDownload = "";
    if (this.props.includeCvDownload) {
      cvDownload = <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="downloadicon"><img src="./img/icons/download.svg" alt="download" className="downloadIcon" ></img></a>
    }

    var navbarType = this.props.navbarType; 
    if (!this.props.navbarType) {
      navbarType = navbarTypes.DEFAULT;
    }

    var navbarBrandStyle = {};
    var navbarProps = {}; 
    var navbarSectionHeader = ""; 
    var navbarToggle = "";
    var navbarCollapseStyle = {};
    var dropdownToggleStyle = {};
    var dropdownNavLinkStyle = {backgroundColor: "transparent"};
    var navLinkStyle = {};
    
    switch (navbarType) {
      case navbarTypes.WHITE: // ABOUT page over picture
        navbarProps['varient'] = 'dark';
        navbarProps['fixed'] = 'top';
        navbarProps['collapseOnSelect'] = true; 
        navbarProps['expand'] = false; 
        navbarProps['style'] = {zIndex: "1", position: "fixed", color: "white", paddingBottom: "0px", alignItems: "flex-start"};
        
        navbarBrandStyle = {};

        navbarToggle = <Navbar.Toggle> <div className={'test navbar-not'}/> </Navbar.Toggle>; 

        navbarCollapseStyle = {textAlign: 'right', marginRight: "15px", backgroundColor: "transparent"}; 
        
        dropdownToggleStyle = {color: "white"};
        dropdownNavLinkStyle["color"] = "white";
        navLinkStyle["color"] = "white";
        break;

      case navbarTypes.TRANSPARENT: // ABOUT page over white background 
        navbarProps['varient'] = 'light';
        navbarProps['fixed'] = 'top';
        navbarProps['collapseOnSelect'] = true; 
        navbarProps['expand'] = false; 
        navbarProps['style'] = {alignItems: "flex-start"};

        navbarBrandStyle = {zIndex: 2, marginLeft: "0.75rem"}; 

        navbarToggle = <Navbar.Toggle style={{zIndex: 2}} />; 

        navbarCollapseStyle = {textAlign: 'right', zIndex: 2}; 
        break;

      case navbarTypes.NO_HEADER: // Image view and news 
        navbarProps['varient'] = 'light';
        navbarProps['className'] = 'sticky';
        navbarProps['sticky'] = 'top';
        navbarProps['collapseOnSelect'] = true; 
        navbarProps['expand'] = false; 
        navbarProps['style'] = {alignItems: "flex-start"};

        navbarBrandStyle = {zIndex: 2, marginLeft: "0.75rem"}; 

        navbarSectionHeader =  <Navbar.Text className="sectionheadernotext"><div></div></Navbar.Text>;

        navbarToggle = <Navbar.Toggle style={{zIndex: 2}} />;

        navbarCollapseStyle = {textAlign: 'right', zIndex: 2}; 
        break;
      case navbarTypes.DEFAULT: // default ie: CV, Exhibitions, etc
        navbarProps['varient'] = 'light';
        navbarProps['className'] = 'sticky';
        navbarProps['sticky'] = 'top';
        navbarProps['collapseOnSelect'] = true; 
        navbarProps['expand'] = false; 
        navbarProps['style'] = {alignItems: "flex-start"};

        navbarBrandStyle = {zIndex: 2, marginLeft: "0.75rem"};

        navbarSectionHeader = <Navbar.Text className="sectionheader"><span style={{color: "darkslategrey"}}>{this.props.sectionHeader}{cvDownload}</span></Navbar.Text>;
        
        navbarToggle = <Navbar.Toggle style={{zIndex: 2}} />; 

        navbarCollapseStyle = {textAlign: 'right', zIndex: 2, marginRight: "15px"}; 
        break;
    }
    
    return (
      <Navbar {...navbarProps}>
        <Navbar.Brand style={navbarBrandStyle}>
          {navbarBrand}
        </Navbar.Brand>
        {navbarSectionHeader}
        {navbarToggle}
        <Navbar.Collapse style={navbarCollapseStyle}>
          <Nav className="justify-content-end" defaultActiveKey="/">
            <Nav.Item eventKey={1}>
              <Link className={'nav-link'} style={navLinkStyle} onClick={this.resetScrollBar} to='/work'>WORK</Link>
            </Nav.Item>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} style={dropdownToggleStyle}>EXHIBITIONS</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item style={{textAlign: 'right', backgroundColor:'transparent'}}>
                  <Link className={'nav-link'} onClick={this.resetScrollBar} style={dropdownNavLinkStyle} to='/exhibitions/2018friendsofcontemporaryartawards'>2018 Friends of<br/>Contemporary Art Awards</Link>
                  <Link className={'nav-link'} onClick={this.resetScrollBar} style={dropdownNavLinkStyle} to='/exhibitions/africanforthefirsttime'>African for the First Time</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item eventKey={3}>
              <Link className={'nav-link'} style={navLinkStyle} onClick={this.resetScrollBar} to='/about'>ABOUT</Link>
            </Nav.Item>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} style={dropdownToggleStyle}>NEWS</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item style={{textAlign: 'right', backgroundColor:'transparent'}}>
                  <Link className={'nav-link'} onClick={this.resetScrollBar} style={dropdownNavLinkStyle} to='/upcomingexhibitions'>UPCOMING EXHIBITIONS</Link>
                  <Link className={'nav-link'} onClick={this.resetScrollBar} style={dropdownNavLinkStyle} to='/news'>IN THE NEWS</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item eventKey={5}>
              <Link className={'nav-link'} style={navLinkStyle} onClick={this.resetScrollBar} to='/cv'>CV</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

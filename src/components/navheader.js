import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

import { Link } from 'react-router-dom';
import './base.css';

export default class NavHeader extends React.Component {

  constructor(props) {
    super(props); 
    
    this.state = {
      
    }; 
  }
  render() {
    var navbarBrand = <Link to='/' className="headerLink"><a className="headerLink">PAPAY SOLOMON</a></Link>;

    if (this.props.doNotIncludeNavbarBrand) {
      var navbarBrand = "";
    }

    var navbar = 
      <Navbar scrolling light sticky="top" className="sticky" collapseOnSelect={true} expand={false}>
        <Navbar.Brand style={{zIndex: 2}}>
          {navbarBrand}
        </Navbar.Brand>
        <Navbar.Text className="sectionheader"><span>{this.props.sectionHeader}</span></Navbar.Text>
        <Navbar.Toggle style={{zIndex: 2}} />
        <Navbar.Collapse style={{textAlign: 'right', zIndex: 2}}>
          <Nav className="justify-content-end" defaultActiveKey="/">
          <Dropdown as={Nav.Item}>
          <Dropdown.Toggle as={Nav.Link}>WORKS</Dropdown.Toggle>
           <Dropdown.Menu style={{backgroundColor: 'transparent'}}>
              <Dropdown.Item style={{textAlign: 'right', backgroundColor: 'transparent'}}>
                <Link className={'nav-link'} style={{backgroundColor: 'transparent'}} to='/chapter1'>CHAPTER &#8544;</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Item eventKey={2}>
            <Link className={'nav-link'} to='/about'>ABOUT</Link>
          </Nav.Item>
          <Nav.Item eventKey={3}>
            <Link className={'nav-link'} to='/news'>NEWS</Link>
          </Nav.Item>
          <Nav.Item eventKey={4}>
            <Link className={'nav-link'} to='/cv'>CV</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>; 

    if (this.props.useLightNavbar) {
      navbar = 
      <Navbar scrolling varient="dark" fixed="top" collapseOnSelect={true} expand={false} style={{zIndex: "1", position: "fixed", color: "white", paddingBottom: "0px"}}>
        <Navbar.Brand>
          {navbarBrand}
        </Navbar.Brand>
        <Navbar.Toggle> <div className={'test'}/> </Navbar.Toggle>
        <Navbar.Collapse style={{textAlign: 'right'}}>
          <Nav className="justify-content-end" defaultActiveKey="/">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} style={{color: 'white'}} >WORKS</Dropdown.Toggle>
              <Dropdown.Menu style={{backgroundColor: 'transparent'}}>
                <Dropdown.Item style={{textAlign: 'right', backgroundColor: 'transparent'}}>
                  <Link className={'nav-link'} style={{backgroundColor: 'transparent', color: 'white'}} to='/chapter1'>CHAPTER &#8544;</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
         
            <Nav.Item eventKey={2}>
              <Link className={'nav-link'} style={{color: 'white'}} to='/about'>ABOUT</Link>
            </Nav.Item>
            <Nav.Item eventKey={3}>
              <Link className={'nav-link'} style={{color: 'white'}} to='/news'>NEWS</Link>
            </Nav.Item>
            <Nav.Item eventKey={4}>
              <Link className={'nav-link'} style={{color: 'white'}} to='/cv'>CV</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>; 
    }

    return (
      navbar
    );
  }
};

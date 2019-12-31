import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from './footer';
//import { Nav, NavDropdown, NavItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './base.css';

export default class Base extends React.Component {

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
      <Navbar scrolling light bg="transparent" fixed="top" collapseOnSelect={true} expand={false} style={{zIndex: "1", position: "fixed", paddingBottom: "0px"}}>
        <Navbar.Brand>
          {navbarBrand}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{textAlign: 'right'}}>
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


    var content = <div className="content" style={{marginTop: "20px"}}>{this.props.content}</div>
    if (this.props.doNotIncludeContentClassName) {
      content = <div>{this.props.content}</div>
    }

    var elementsToReturn = <div style={{position: "absolute", width: "100vw", overflowX: "hidden", marginBottom: "3vh"}}>
        {navbar}
        {content}
        <div style={{marginBottom: "30vh", position: "relative"}}></div>
        <Footer/>
      </div>;

    if (this.props.doNotIncludeFooter) {
      elementsToReturn = <div style={{position: "absolute", width: "100vw", overflowX: "hidden", marginBottom: "3vh"}}>
        {navbar}
        {content}
      </div>;
    }

    return (
      elementsToReturn
    );
  }
};

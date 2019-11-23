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
    var navbar = 
      <Navbar scrolling light bg="transparent" fixed="top" collapseOnSelect={true} expand={false} style={{zIndex: "1", position: "fixed"}}>
        <Navbar.Brand>
          <Link to='/'><img src="/img/icons/PapaySolomon_Logo-01.png" height="32px" alt="Logo- Papay Solomon"/></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{textAlign: 'right', padding: '20px'}}>
          <Nav className="justify-content-end" defaultActiveKey="/">
          <Dropdown as={Nav.Item}>
          <Dropdown.Toggle as={Nav.Link}>Works</Dropdown.Toggle>
           <Dropdown.Menu style={{backgroundColor: 'transparent'}}>
              <Dropdown.Item style={{textAlign: 'right', backgroundColor: 'transparent'}}>
                <Link className={'nav-link'} style={{backgroundColor: 'transparent'}} to='/chapter1'>Chapter 1</Link>
              </Dropdown.Item>
              <Dropdown.Item style={{textAlign: 'right', backgroundColor: 'transparent'}}>
                <Link className={'nav-link'} style={{backgroundColor: 'transparent'}} to='/chapter2'>Chapter2</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Item eventKey={2}>
            <Link className={'nav-link'} to='/about'>About</Link>
          </Nav.Item>
          <Nav.Item eventKey={3}>
            <Link className={'nav-link'} to='/news'>News</Link>
          </Nav.Item>
          <Nav.Item eventKey={4}>
            <Link className={'nav-link'} to='/cv'>CV</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>; 

    if (this.props.useLightNavbar) {
      navbar = 
      <Navbar scrolling varient="dark" fixed="top" collapseOnSelect={true} expand={false} style={{zIndex: "1", position: "fixed", color: "white"}}>
        <Navbar.Brand>
          <Link to='/'><img src="/img/icons/PapaySolomon_Logo-01.png" height="32px" alt="Logo- Papay Solomon"/></Link>
        </Navbar.Brand>
        <Navbar.Toggle> <div className={'test'}/> </Navbar.Toggle>
        <Navbar.Collapse style={{textAlign: 'right', padding: '20px'}}>
          <Nav className="justify-content-end" defaultActiveKey="/">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} style={{color: 'white'}} >Works</Dropdown.Toggle>
              <Dropdown.Menu style={{backgroundColor: 'transparent'}}>
                <Dropdown.Item style={{textAlign: 'right', backgroundColor: 'transparent'}}>
                  <Link className={'nav-link'} style={{backgroundColor: 'transparent', color: 'white'}} to='/chapter1'>Chapter 1</Link>
                </Dropdown.Item>
                <Dropdown.Item style={{textAlign: 'right', backgroundColor: 'transparent'}}>
                  <Link className={'nav-link'} style={{backgroundColor: 'transparent', color: 'white'}} to='/chapter2'>Chapter 2</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
         
            <Nav.Item eventKey={2}>
              <Link className={'nav-link'} style={{color: 'white'}} to='/about'>About</Link>
            </Nav.Item>
            <Nav.Item eventKey={3}>
              <Link className={'nav-link'} style={{color: 'white'}} to='/news'>News</Link>
            </Nav.Item>
            <Nav.Item eventKey={4}>
              <Link className={'nav-link'} style={{color: 'white'}} to='/cv'>CV</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>; 
    }


    var content = <div className="content">{this.props.content}</div>
    if (this.props.doNotIncludeContentClassName) {
      content = <div>{this.props.content}</div>
    }

    return (
      <div style={{position: "absolute", width: "100vw", overflowX: "hidden"}}>{navbar}{content}<div style={{paddingBottom: "30vh", position: "relative"}}></div><Footer/></div>
    );
  }
};

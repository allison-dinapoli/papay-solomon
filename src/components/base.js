import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
      <Navbar collapseOnSelect={true} expand={false}>
        <Navbar.Brand>
          <Link to='/'><img src="/img/icons/PapaySolomon_Logo-01.png" height="32px"/></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-end" defaultActiveKey="/">
          <NavDropdown title="Works">
            <NavDropdown.Item eventKey="1.1">
              <Link className={'nav-link'} to='/paintings'>Paintings</Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="1.2">
              <Link  className={'nav-link'} to='/sculptures'>Sculptures</Link>
            </NavDropdown.Item>
            </NavDropdown>
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


    var content = <div className="content">{this.props.content}</div>
    console.dir(this.props.content)

    return (
      <div>{navbar}{content}<Footer/></div>
    );
  }
};

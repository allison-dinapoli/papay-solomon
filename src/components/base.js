import React from 'react'; 
import { Nav, Navbar, NavItem } from 'react-bootstrap'; 
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
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Papay Solomon</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <Link to='/gallery'>Gallery</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to='/about'>About</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to='/news'>News</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>; 

    var content = <div className="content">{this.props.content}</div>
    console.dir(this.props.content)

    return (
      <div>{navbar}{content}</div>
    );
  }
};

import React from 'react';
import MenuOption from './MenuOption';
import UserIcon from './UserIcon';
import MoreApps from './MoreApps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand='lg' fixed='top' className='header'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <Nav className=''>
          <Nav.Link href='#home'>
            <MenuOption
              aClassName='header-link'
              url='https://google.com'
              text='Gmail'
            />
          </Nav.Link>
          <Nav.Link href='#home'>
            <MenuOption
              aClassName='header-link'
              url='https://google.com'
              text='Images'
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href='#home' className='moreApps'>
        <MoreApps />
      </Navbar.Brand>
      <Navbar.Brand href='#home'>
        <UserIcon letter='E' />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;

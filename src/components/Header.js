import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/NavLink';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
export class Header extends Component {
  render() {
    return (

      
      <Navbar bg="dark" variant="dark" sticky="top" >
      
        
          <NavLink href="/">Home</NavLink>
          <NavLink href="/profile">Profile</NavLink>
          <Navbar.Brand href="#home"  style={{color: "red" , paddingLeft: "37%"} }> 📚  Books List 📚</Navbar.Brand>
          <LoginButton  />
          <LogoutButton  />
      </Navbar>
      
    )
  }
}

export default Header
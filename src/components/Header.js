import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand href="#home"  style={{color: "red" , paddingLeft: "45%"} }> 📚  Books List 📚</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default Header
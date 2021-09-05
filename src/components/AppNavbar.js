import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';



export default function AppNavbar() {

	return (
		<Navbar bg="info" expand="lg">
		  <Container>
		    <Navbar.Brand href="#home">TMDB</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      <Nav className="me-auto">
		        <Nav.Link href="#home">Home</Nav.Link>
		        <Nav.Link href="#link">TV Shows</Nav.Link>
		        <Nav.Link href="#link">People</Nav.Link>
		        <Nav.Link href="#link">More</Nav.Link>
		      </Nav>
		    </Navbar.Collapse>
		  </Container>
		</Navbar>

	)
}
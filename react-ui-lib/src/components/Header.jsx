import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(fondo-cabecera.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
      }}
    >
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <img src="logo.png" alt="Logo Librería" className="me-3" style={{height: '60px', width: 'auto'}} />
          <h1 className="h3 mb-0 text-white">Librería El Saber</h1>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/inicio" end>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/ficcion">Ficción</Nav.Link>
            <Nav.Link as={NavLink} to="/ciencia">Ciencia</Nav.Link>
            <Nav.Link as={NavLink} to="/historia">Historia</Nav.Link>
            <Nav.Link as={NavLink} to="/infantil">Infantil</Nav.Link>
            <Nav.Link as={NavLink} to="/catalogo">Catálogo</Nav.Link>
            <Nav.Link as={NavLink} to="/agregar-libro">Agregar Libro</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

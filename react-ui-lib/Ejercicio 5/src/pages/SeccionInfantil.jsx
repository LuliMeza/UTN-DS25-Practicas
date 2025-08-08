import React, { useState } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';

const SeccionInfantil = ({ catalogo, buscarLibros }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  
  // Filtrar libros de infantil
  const librosInfantil = catalogo.filter(libro => libro.categoria === 'infantil');
  
  // Aplicar búsqueda adicional si hay término
  const librosFiltrados = terminoBusqueda 
    ? buscarLibros(terminoBusqueda, 'infantil')
    : librosInfantil;

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center mb-4">Sección: Infantil</h2>
        </Col>
      </Row>

      {/* Barra de búsqueda */}
      <Row className="mb-4">
        <Col md={8} lg={6} className="mx-auto">
          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Buscar en libros infantiles..."
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
            />
            <Button variant="outline-secondary">
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Col>
      </Row>
        
      {/* Resultados */}
      <Row className="mb-3">
        <Col>
          <p className="text-muted text-center">
            {librosFiltrados.length} libro{librosFiltrados.length !== 1 ? 's' : ''} infantil{librosFiltrados.length !== 1 ? 'es' : ''}
            {terminoBusqueda && ` que coinciden con "${terminoBusqueda}"`}
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {librosFiltrados.map((libro) => (
          <Col md={6} lg={4} key={libro.id}>
            <Card className="h-100 shadow-sm hover-lift">
              <Card.Img 
                variant="top" 
                src={libro.imagen} 
                alt={libro.titulo}
                style={{maxHeight: '700px', objectFit: 'cover'}}
              />
              <Card.Body className="text-center d-flex flex-column">
                <Card.Title className="h5">{libro.titulo}</Card.Title>
                <Card.Text className="text-muted fst-italic">{libro.autor}</Card.Text>
                <Card.Text className="flex-grow-1">{libro.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Mensaje cuando no hay resultados */}
      {librosFiltrados.length === 0 && (
        <Row className="mt-5">
          <Col className="text-center">
            <i className="bi bi-search display-1 text-muted"></i>
            <h3 className="mt-3">No se encontraron libros</h3>
            <p className="text-muted">
              {terminoBusqueda 
                ? `No hay libros infantiles que coincidan con "${terminoBusqueda}"`
                : 'No hay libros infantiles disponibles'
              }
            </p>
            {terminoBusqueda && (
              <Button 
                variant="outline-primary" 
                onClick={() => setTerminoBusqueda('')}
              >
                Limpiar búsqueda
              </Button>
            )}
          </Col>
        </Row>
      )}   
    </Container>
  );
};

export default SeccionInfantil;

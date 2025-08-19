import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button, Badge } from 'react-bootstrap';

const Catalogo = ({ catalogo, buscarLibros }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');

  // Filtrar libros basado en búsqueda y categoría
  const librosFiltrados = buscarLibros(terminoBusqueda, categoriaFiltro || null);

  const categorias = [
    { value: '', label: 'Todas las categorías' },
    { value: 'ciencia', label: 'Ciencia' },
    { value: 'ficcion', label: 'Ficción' },
    { value: 'historia', label: 'Historia' },
    { value: 'infantil', label: 'Infantil' }
  ];


  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center mb-4">Catálogo</h1>
          <p className="text-center text-muted mb-4">
            Explora nuestra colección completa de libros
          </p>
        </Col>
      </Row>

      {/* Filtros de búsqueda */}
      <Row className="mb-4">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Buscar por título, autor o descripción..."
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <Form.Select
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {/* Resultados de búsqueda */}
      <Row className="mb-3">
        <Col>
          <p className="text-muted">
            {librosFiltrados.length} libro{librosFiltrados.length !== 1 ? 's' : ''} encontrado{librosFiltrados.length !== 1 ? 's' : ''}
            {terminoBusqueda && ` para "${terminoBusqueda}"`}
            {categoriaFiltro && ` en ${categorias.find(c => c.value === categoriaFiltro)?.label}`}
          </p>
        </Col>
      </Row>

      {/* Grid de libros */}
      <Row className="g-4">
        {librosFiltrados.map((libro) => (
          <Col key={libro.id} md={6} lg={4} xl={3}>
            <Card className="h-100 shadow-sm hover-lift">
              <Card.Img
                variant="top"
                src={libro.imagen}
                alt={libro.titulo}
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                  <Badge 
                    bg={
                      libro.categoria === 'ciencia' ? 'primary' :
                      libro.categoria === 'ficcion' ? 'success' :
                      libro.categoria === 'historia' ? 'warning' : 'info'
                    }
                    className="mb-2"
                  >
                    {libro.categoria.charAt(0).toUpperCase() + libro.categoria.slice(1)}
                  </Badge>
                </div>
                <Card.Title className="h6 mb-2">{libro.titulo}</Card.Title>
                <Card.Text className="text-muted fst-italic mb-2">
                  {libro.autor}
                </Card.Text>
                <Card.Text className="flex-grow-1 small">
                  {libro.descripcion}
                </Card.Text>
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
              Intenta con otros términos de búsqueda o cambia los filtros
            </p>
            <Button 
              variant="outline-primary" 
              onClick={() => {
                setTerminoBusqueda('');
                setCategoriaFiltro('');
              }}
            >
              Limpiar filtros
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Catalogo;

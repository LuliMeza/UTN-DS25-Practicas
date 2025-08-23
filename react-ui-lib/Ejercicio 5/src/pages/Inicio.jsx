import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Inicio({ catalogo, buscarLibros }) {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [librosDestacados, setLibrosDestacados] = useState([]);

  // Buscar libros cuando cambie el término de búsqueda
  useEffect(() => {
    if (terminoBusqueda.trim()) {
      const resultados = buscarLibros(terminoBusqueda);
      setLibrosDestacados(resultados.slice(0, 4)); // Mostrar solo 4 resultados
    } else {
      setLibrosDestacados([]);
    }
  }, [terminoBusqueda, buscarLibros]);

  // Sacar un libro por categoría
  const categorias = ['FICCION', 'CIENCIA', 'HISTORIA', 'INFANTIL'];
  const librosPorCategoria = categorias.map(cat =>
    catalogo.find(libro => libro.categoria === cat)
  ).filter(Boolean); // filtra los undefined si alguna categoría no tiene libros

  return (
    <Container className="py-5">
      {/* Hero Section con búsqueda */}
      <Row className="mb-5">
        <Col className="text-center">
          <h1 className="display-4 mb-4">Bienvenido a Librería El Saber</h1>
          <p className="lead mb-4">Descubre miles de libros en nuestro catálogo</p>

          {/* Barra de búsqueda */}
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <InputGroup size="lg">
                <InputGroup.Text>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Buscar libros por título, autor..."
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                />
                <Button variant="primary">
                  <i className="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Col>
          </Row>

          {/* Resultados de búsqueda rápida */}
          {librosDestacados.length > 0 && (
            <Row className="mt-4">
              <Col>
                <h5 className="mb-3">Resultados de búsqueda:</h5>
                <Row className="g-3">
                  {librosDestacados.map((libro) => (
                    <Col key={libro.id} md={6} lg={3}>
                      <Card className="h-100 shadow-sm hover-lift">
                        <Card.Img
                          variant="top"
                          src={`http://localhost:3000${libro.imagen}`}
                          alt={libro.titulo}
                          style={{ maxHeight: '300px', objectFit: 'cover' }}
                        />
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="h6">{libro.titulo}</Card.Title>
                          <Card.Text className="text-muted fst-italic">{libro.autor}</Card.Text>
                          <Card.Text className="flex-grow-1 small">{libro.descripcion}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <div className="text-center mt-3">
                  <Link to="/catalogo" className="btn btn-outline-primary">
                    Ver todos los resultados
                  </Link>
                </div>
              </Col>
            </Row>
          )}
        </Col>
      </Row>

      {/* Libros destacados por categoría */}
      <Row className="g-4">
        {librosPorCategoria.map((libro) => (
          <Col key={libro.id} lg={6} xl={3}>
            <Card className="h-100 shadow-sm hover-lift">
              <Card.Body className="text-center">
                <Card.Title>
                  <Link to={`/${libro.categoria.toLowerCase()}`} className="text-decoration-none text-dark">
                    {libro.categoria.charAt(0) + libro.categoria.slice(1).toLowerCase()}
                  </Link>
                </Card.Title>
                <div className="libro">
                  <Card.Img
                    variant="top"
                    src={`http://localhost:3000${libro.imagen}`}
                    alt={libro.titulo}
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                  />
                  <Card.Title className="h5 mt-3">{libro.titulo}</Card.Title>
                  <Card.Text className="text-muted fst-italic">{libro.autor}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Inicio;

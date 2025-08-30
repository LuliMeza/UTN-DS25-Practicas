import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Inicio() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [catalogo, setCatalogo] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Traer todos los libros del backend
  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/books');
        if (!res.ok) throw new Error('Error al cargar libros');
        const data = await res.json();
        setCatalogo(data.books || []);
      } catch (error) {
        console.error(error);
        setCatalogo([]);
      } finally {
        setCargando(false);
      }
    };
    fetchLibros();
  }, []);

  // Filtrar libros según el término de búsqueda
  const buscarLibros = (termino) => {
    if (!termino) return catalogo;
    return catalogo.filter(libro =>
      libro.title.toLowerCase().includes(termino.toLowerCase()) ||
      libro.autor.toLowerCase().includes(termino.toLowerCase()) ||
      libro.descripcion.toLowerCase().includes(termino.toLowerCase())
    );
  };

  const librosFiltrados = buscarLibros(terminoBusqueda);

  // Destacados por categoría (solo el primer libro de cada categoría)
  const categorias = ['FICCION', 'CIENCIA', 'HISTORIA', 'INFANTIL'];
  const librosPorCategoria = Array.isArray(catalogo)
    ? categorias
        .map(cat => catalogo.find(libro => libro.categoria === cat))
        .filter(Boolean)
    : [];

  if (cargando) return <p className="text-center mt-5">Cargando catálogo...</p>;

  return (
    <>
      <Header />
      <Container className="py-5">
        {/* Hero Section con búsqueda */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 mb-4">Bienvenido a Librería El Saber</h1>
            <p className="lead mb-4">Descubre nuestra colección completa de libros</p>

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

            {/* Resultados de búsqueda */}
            {terminoBusqueda && librosFiltrados.length > 0 && (
              <Row className="mt-4">
                <Col>
                  <h5 className="mb-3">Resultados de búsqueda:</h5>
                  <Row className="g-3">
                    {librosFiltrados.map((libro) => (
                      <Col key={libro.id} md={6} lg={3}>
                        <Card className="h-100 shadow-sm hover-lift">
                          <Card.Img
                            variant="top"
                            src={`http://localhost:3000${libro.imagen}`}
                            alt={libro.title}
                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                          />
                          <Card.Body className="d-flex flex-column">
                            <Card.Title className="h6">{libro.title}</Card.Title>
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
                    <Link
                      to={`/${libro.categoria.toLowerCase()}`}
                      className="text-decoration-none text-dark"
                    >
                      {libro.categoria.charAt(0) + libro.categoria.slice(1).toLowerCase()}
                    </Link>
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:3000${libro.imagen}`}
                    alt={libro.title}
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                  />
                  <Card.Title className="h5 mt-3">{libro.title}</Card.Title>
                  <Card.Text className="text-muted fst-italic">{libro.autor}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Inicio;

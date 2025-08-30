import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import Header from '../components/Header';
const Ficcion = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
    const [catalogo, setCatalogo] = useState([]);
    const [cargando, setCargando] = useState(true);
  
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
  
    if (cargando) return <p className="text-center mt-5">Cargando libros de ficcion...</p>;
  
    const librosFiccion = catalogo.filter(libro => libro.categoria === 'FICCION');
  
    const librosFiltrados = terminoBusqueda
      ? librosFiccion.filter(libro =>
          libro.title.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
          libro.autor.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
          libro.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase())
        )
      : librosFiccion;
  return (
    <>
    <Header />
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center mb-4">Sección: Ficción</h2>
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
              placeholder="Buscar en libros de ficción..."
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
            />
            <Button variant="outline-secondary" onClick={() => { /* opcional */ }}>
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {/* Resultados */}
      <Row className="mb-3">
        <Col>
          <p className="text-muted text-center">
            {librosFiltrados.length} libro{librosFiltrados.length !== 1 ? 's' : ''} de ficción
            {terminoBusqueda && ` que coinciden con "${terminoBusqueda}"`}
          </p>
        </Col>
      </Row>

      {/* Grid de libros */}
      <Row className="g-4">
        {librosFiltrados.map(libro => (
          <Col md={6} lg={4} key={libro.id}>
            <Card className="shadow-sm hover-lift">
              <Card.Img 
                variant="top" 
                src={`http://localhost:3000${libro.imagen}`} 
                alt={libro.title}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
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
                ? `No hay libros de ficción que coincidan con "${terminoBusqueda}"`
                : 'No hay libros de ficción disponibles'}
            </p>
            {terminoBusqueda && (
              <Button variant="outline-primary" onClick={() => setTerminoBusqueda('')}>
                Limpiar búsqueda
              </Button>
            )}
          </Col>
        </Row>
      )}
    </Container>
    </>
  );
};

export default Ficcion;

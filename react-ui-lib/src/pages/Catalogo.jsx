import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button, Badge } from 'react-bootstrap';
import Header from '../components/Header';

const Catalogo = () => {
  const [catalogo, setCatalogo] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');

  const categorias = [
    { value: '', label: 'Todas las categorías' },
    { value: 'FICCION', label: 'Ficción' },
    { value: 'HISTORIA', label: 'Historia' },
    { value: 'INFANTIL', label: 'Infantil' },
    { value: 'CIENCIA', label: 'Ciencia' }
  ];

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/books');
        if (!res.ok) throw new Error('Error al cargar libros');
        const data = await res.json();
        setCatalogo(data.books); // <--- usar data.books, no data
      } catch (error) {
        console.error(error);
      }
    };

    fetchLibros();
  }, []);

  // Función para filtrar libros
  const buscarLibros = (termino, categoria) => {
    return catalogo.filter(libro => {
      const matchesTermino =
        libro.title.toLowerCase().includes(termino.toLowerCase()) ||
        libro.autor.toLowerCase().includes(termino.toLowerCase()) ||
        libro.descripcion.toLowerCase().includes(termino.toLowerCase());
      const matchesCategoria = categoria ? libro.categoria === categoria : true;
      return matchesTermino && matchesCategoria;
    });
  };

  const librosFiltrados = buscarLibros(terminoBusqueda, categoriaFiltro || null);

  return (
    <>
      <Header />
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
                  src={`http://localhost:3000${libro.imagen}`} // URL completa del backend
                  alt={libro.title}
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <Badge 
                      bg={
                        libro.categoria === 'CIENCIA' ? 'primary' :
                        libro.categoria === 'FICCION' ? 'success' :
                        libro.categoria === 'HISTORIA' ? 'warning' :
                        libro.categoria === 'INFANTIL' ? 'info' : 'secondary'
                      }
                      className="mb-2"
                    >
                      {libro.categoria.charAt(0) + libro.categoria.slice(1).toLowerCase()}
                    </Badge>
                  </div>
                  <Card.Title className="h6 mb-2">{libro.title}</Card.Title>
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
    </>
  );
};

export default Catalogo;

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AgregarLibro = ({ agregarLibro }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: '',
    autor: '',
    categoria: '',
    descripcion: '',
    imagen: 'libro-placeholder.jpg' // Imagen placeholder por defecto
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [imagenArchivo, setImagenArchivo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.titulo || !formData.autor || !formData.categoria || !formData.descripcion) {
      alert('Por favor completa todos los campos');
      return;
    }
    let imagenUrl = formData.imagen;

    if (imagenArchivo) {
      const formDataImagen = new FormData();
      formDataImagen.append('imagen', imagenArchivo);

      const res = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formDataImagen,
      });

      if (res.ok) {
        const data = await res.json();
        imagenUrl = data.url;
      } else {
        alert('Error al subir la imagen');
        return;
      }
    }
    const libroNuevo = { ...formData, imagen: imagenUrl };

    try {
      await agregarLibro(libroNuevo);

      setShowSuccess(true);

      setFormData({
        titulo: '',
        autor: '',
        categoria: '',
        descripcion: '',
        imagen: 'libro-placeholder.jpg'
      });
      setImagenArchivo(null);

      setTimeout(() => {
        navigate('/catalogo');
      }, 2000);
    } catch (error) {
      alert('Hubo un error al agregar el libro.');
    }
  };

  const handleCancelar = () => {
    setFormData({
      titulo: '',
      autor: '',
      categoria: '',
      descripcion: '',
      imagen: 'libro-placeholder.jpg'
    });
    setImagenArchivo(null);
    setShowSuccess(false);
  };
  const handleArchivoChange = (e) => {
    setImagenArchivo(e.target.files[0]);
  };
  

  const categorias = [
    { value: '', label: 'Selecciona una categoría' },
    { value: 'ciencia', label: 'Ciencia' },
    { value: 'ficcion', label: 'Ficción' },
    { value: 'historia', label: 'Historia' },
    { value: 'infantil', label: 'Infantil' }
  ];

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center h3 mb-4">
                <i className="bi bi-plus-circle text-primary me-2"></i>
                Agregar Nuevo Libro
              </Card.Title>

              {showSuccess && (
                <Alert variant="success" className="mb-4">
                  <i className="bi bi-check-circle me-2"></i>
                  ¡Libro agregado exitosamente! Redirigiendo al catálogo...
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  {/* Título */}
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Título del libro *</Form.Label>
                      <Form.Control
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        placeholder="Ingresa el título del libro"
                        required
                      />
                    </Form.Group>
                  </Col>

                  {/* Autor */}
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Autor *</Form.Label>
                      <Form.Control
                        type="text"
                        name="autor"
                        value={formData.autor}
                        onChange={handleChange}
                        placeholder="Ingresa el nombre del autor"
                        required
                      />
                    </Form.Group>
                  </Col>

                  {/* Categoría */}
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Categoría *</Form.Label>
                      <Form.Select
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        required
                      >
                        {categorias.map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.label}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  {/* Descripción */}
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Descripción *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        placeholder="Describe brevemente el contenido del libro..."
                        required
                      />
                    </Form.Group>
                  </Col>

                  {/* Imagen */}
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Imagen</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleArchivoChange}
                      />
                    </Form.Group>
                  </Col>

                  {/* Botones */}
                  <Col xs={12} className="d-flex gap-3 justify-content-center">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      disabled={showSuccess}
                    >
                      <i className="bi bi-plus-circle me-2"></i>
                      Agregar Libro
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline-secondary" 
                      size="lg"
                      onClick={handleCancelar}
                    >
                      <i className="bi bi-arrow-left me-2"></i>
                      Cancelar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AgregarLibro;

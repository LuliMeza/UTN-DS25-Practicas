import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
const AgregarLibro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: '',
    autor: '',
    categoria: '',
    descripcion: '',
    imagen: 'libro-placeholder.jpg' // placeholder por defecto
  });
  const [imagenArchivo, setImagenArchivo] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const categorias = [
    { value: '', label: 'Selecciona una categoría' },
    { value: 'FICCION', label: 'Ficción' },
    { value: 'HISTORIA', label: 'Historia' },
    { value: 'INFANTIL', label: 'Infantil' },
    { value: 'CIENCIA', label: 'Ciencia' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArchivoChange = (e) => {
    setImagenArchivo(e.target.files[0]);
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

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validar campos obligatorios
  if (!formData.titulo || !formData.autor || !formData.categoria || !formData.descripcion) {
    alert('Por favor completa todos los campos');
    return;
  }

  let imagenUrl = formData.imagen;

  // Subir imagen si hay archivo seleccionado
  if (imagenArchivo) {
    const formDataImagen = new FormData();
    formDataImagen.append('imagen', imagenArchivo);

    try {
      const res = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formDataImagen,
      });

      if (!res.ok) throw new Error('No se pudo subir la imagen');

      const data = await res.json();
      imagenUrl = data.url;
    } catch (err) {
      alert('Error al subir la imagen');
      console.error(err);
      return;
    }
  }

  // Crear objeto a enviar al backend
  const libroNuevo = {
    title: formData.titulo,
    autor: formData.autor,
    categoria: formData.categoria, // <-- ahora sí llega correctamente
    descripcion: formData.descripcion,
    imagen: imagenUrl || null,     // asegurarse de que nunca sea undefined
  };

  console.log("Libro a enviar:", libroNuevo); // para depuración

  try {
    const res = await fetch('http://localhost:3000/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(libroNuevo),
    });

    if (!res.ok) throw new Error('Error al crear libro');

    // Éxito
    setShowSuccess(true);
    setFormData({
      titulo: '',
      autor: '',
      categoria: '',
      descripcion: '',
      imagen: 'libro-placeholder.jpg'
    });
    setImagenArchivo(null);

    // Redirigir al catálogo
    setTimeout(() => navigate('/catalogo'), 2000);

  } catch (error) {
    alert('No se pudo agregar el libro, intenta de nuevo.');
    console.error(error);
  }
};



  return (
    <>
    <Header />
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

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Imagen</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleArchivoChange}
                      />
                      {imagenArchivo && (
                        <img
                          src={URL.createObjectURL(imagenArchivo)}
                          alt="Preview"
                          className="img-fluid rounded my-3"
                          style={{ maxHeight: "200px" }}
                        />
                      )}
                    </Form.Group>
                  </Col>

                  <Col xs={12} className="d-flex gap-3 justify-content-center">
                    <Button type="submit" variant="primary" size="lg" disabled={showSuccess}>
                      <i className="bi bi-plus-circle me-2"></i>
                      Agregar Libro
                    </Button>
                    <Button type="button" variant="outline-secondary" size="lg" onClick={handleCancelar}>
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
  </>
  );
};

export default AgregarLibro;

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header_inicio';

function Registracion() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fecha: '',
    email: '',
    password: '',
    sexo: '',
    tema: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('http://localhost:3000/api/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fecha: new Date(formData.fecha) // aseguramos que sea tipo Date
        })
      });

      const data = await res.json();

      if (res.ok && data.estadoIngreso === 'ingresoExitoso') {
        setSuccess('Registro exitoso! Redirigiendo al login...');
        setTimeout(() => {
          navigate('/'); // redirige al login
        }, 1500);
      } else {
        setError(data.mensaje || 'Error al registrarse');
      }
    } catch (err) {
      console.error(err);
      setError('Error al conectarse con el servidor');
    }
  };

  return (
    <>
      <Header />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="form-container">
              <Card.Body>
                <Card.Title className="text-center mb-4">Registración</Card.Title>

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    {/* Nombre y Apellido */}
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="nombre" 
                          required 
                          value={formData.nombre} 
                          onChange={handleChange} 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="apellido" 
                          required 
                          value={formData.apellido} 
                          onChange={handleChange} 
                        />
                      </Form.Group>
                    </Col>

                    {/* Fecha de Nacimiento */}
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Fecha de Nacimiento:</Form.Label>
                        <Form.Control 
                          type="date" 
                          name="fecha" 
                          required 
                          value={formData.fecha} 
                          onChange={handleChange} 
                        />
                      </Form.Group>
                    </Col>

                    {/* Email */}
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email" 
                          required 
                          value={formData.email} 
                          onChange={handleChange} 
                        />
                      </Form.Group>
                    </Col>

                    {/* Contraseña */}
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control 
                          type="password" 
                          name="password" 
                          required 
                          value={formData.password} 
                          onChange={handleChange} 
                        />
                      </Form.Group>
                    </Col>

                    {/* Sexo */}
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Sexo:</Form.Label>
                        <div className="d-flex gap-4">
                          <Form.Check 
                            type="radio" 
                            id="masculino" 
                            name="sexo" 
                            value="MASCULINO" 
                            label="Masculino"
                            checked={formData.sexo === 'MASCULINO'} 
                            onChange={handleChange} 
                          />
                          <Form.Check 
                            type="radio" 
                            id="femenino" 
                            name="sexo" 
                            value="FEMENINO" 
                            label="Femenino"
                            checked={formData.sexo === 'FEMENINO'} 
                            onChange={handleChange} 
                          />
                          <Form.Check 
                            type="radio" 
                            id="otro" 
                            name="sexo" 
                            value="OTRO" 
                            label="Otro"
                            checked={formData.sexo === 'OTRO'} 
                            onChange={handleChange} 
                          />
                        </div>
                      </Form.Group>
                    </Col>

                    {/* Tema Favorito */}
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Tema Favorito:</Form.Label>
                        <Form.Select 
                          name="tema" 
                          required 
                          value={formData.tema} 
                          onChange={handleChange}
                        >
                          <option value="">--Seleccione un tema--</option>
                          <option value="CIENCIA">Ciencia</option>
                          <option value="FICCION">Ficción</option>
                          <option value="INFANTIL">Infantil</option>
                          <option value="HISTORIA">Historia</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    {/* Botón de envío */}
                    <Col xs={12} className="text-center">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="btn-custom"
                      >
                        Registrarse
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
}

export default Registracion;

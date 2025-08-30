import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Header from '../components/Header';
const Contacto = () => {
  return (
    <>
    <Header />
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <Card.Title className="h2 mb-4">Contacto</Card.Title>
              
              <ListGroup className="mb-4">
                <ListGroupItem className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-envelope-fill me-3 text-primary"></i>
                  <div>
                    <strong>Email:</strong><br />
                      LibreriaElSaber@gmail.com
                  </div>
                </ListGroupItem>
                
                <ListGroupItem className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-telephone-fill me-3 text-success"></i>
                  <div>
                    <strong>Teléfono:</strong><br />
                      (0221) 156-1528
                  </div>
                </ListGroupItem>
                
                <ListGroupItem className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-geo-alt-fill me-3 text-danger"></i>
                  <div>
                    <strong>Dirección:</strong><br />
                    Av. 7 N° 1234, La Plata<br />
                    Buenos Aires, Argentina
                  </div>
                </ListGroupItem>
                
                <ListGroupItem className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-clock-fill me-3 text-warning"></i>
                  <div>
                    <strong>Horarios:</strong><br />
                    Lunes a Viernes: 9:00 - 20:00<br />
                    Sábados: 9:00 - 18:00
                  </div>
                </ListGroupItem>
              </ListGroup>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Contacto;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-2">
            <Container>
                <Row className="text-center text-md-start">
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5 className="text-uppercase mb-4">Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Inicio</a></li>
                            <li><a href="#" className="text-light">Sobre Mí</a></li>
                            <li><a href="#" className="text-light">Servicios</a></li>
                            <li><a href="#" className="text-light">Portafolio</a></li>
                            <li><a href="#" className="text-light">Contacto</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5 className="text-uppercase mb-4">Contacto</h5>
                        <p>Teléfono: (123) 456-7890</p>
                        <p>Correo: contacto@ejemplo.com</p>
                        <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5 className="text-uppercase mb-4">Sígueme</h5>
                        <div className="social-icons">
                            <a href="#" className="text-light me-3"><i className="fa fa-facebook-f"></i></a>
                            <a href="#" className="text-light me-3"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="text-light me-3"><i className="fa fa-instagram"></i></a>
                            <a href="#" className="text-light me-3"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p className="mb-0">&copy; 2024 Tu Nombre. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

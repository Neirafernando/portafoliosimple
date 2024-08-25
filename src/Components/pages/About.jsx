import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cardtabs from '../Common/Cardtabs';
import Acordeon from '../Common/Acordeon';
import { LiaReact } from 'react-icons/lia'; // Asegúrate de que esta ruta sea correcta
import '../css/About.css'; // Asegúrate de que este archivo exista y esté en la ruta correcta

const AboutMe = () => {
    return (
        <Container fluid className="px-4 mt-5"> {/* Márgenes laterales reducidos */}
            {/* Sección del título y párrafo */}
            <Row className="mb-4">
                <Col xs={12} className="text-center text-md-start">
                    <h1>Sobre Mí <LiaReact /></h1>
                    <p>
                        ¡Hola! Soy Fernando, un desarrollador web apasionado por crear soluciones innovadoras y efectivas. Con una sólida formación en tecnología y un enfoque en el diseño funcional, me dedico a construir experiencias web que sean tanto atractivas como eficientes.
                    </p>
                </Col>
            </Row>

            {/* Sección de Cardtabs y Acordeon */}
            <Row className="mb-4">
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <Cardtabs />
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <Acordeon />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;

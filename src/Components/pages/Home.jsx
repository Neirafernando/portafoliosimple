import React from 'react';
import Avatar from '../Common/Avatar';
import Hero from '../Common/Hero';
import { Container, Row, Col } from 'react-bootstrap';
import Carrusel from '../Common/Carrusel';

const Home = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={3} className="text-center mt-3">
                    <Avatar />
                </Col>
                <Col md={9}>
                    <Hero />
                    <Carrusel />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;

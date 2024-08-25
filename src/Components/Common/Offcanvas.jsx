import React, { useState } from 'react';
import { Button, Container, Form, Offcanvas, Card, Alert } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';

const ContactMeOffcanvas = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowAlert(true);
        setFormData({ name: '', email: '', message: '', subject: '' });
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Contactame
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end" className="p-">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <FaEnvelope /> Contacto
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center mb-4">Envíame un Mensaje</Card.Title>
                                <Card.Text>
                                    <p className="text-muted mb-4">
                                        Completa el formulario a continuación para ponerte en contacto conmigo. ¡Estoy aquí para ayudarte!
                                    </p>
                                    <p className="text-muted mb-4">
                                        Si tienes alguna pregunta, comentario o necesitas soporte, no dudes en escribirme. ¡Espero tu mensaje!
                                    </p>
                                </Card.Text>
                                {showAlert && (
                                    <Alert variant="success">
                                        ¡Gracias por tu mensaje! Me pondre en contacto contigo pronto.
                                    </Alert>
                                )}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ingrese su nombre"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formEmail" className="mt-3">
                                        <Form.Label>Correo Electrónico</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Ingrese su correo electrónico"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formSubject" className="mt-3">
                                        <Form.Label>Asunto</Form.Label>
                                        <Form.Select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            <option value="">Seleccione un asunto</option>
                                            <option value="Consulta General">Consulta General</option>
                                            <option value="Soporte Técnico">Soporte Técnico</option>
                                            <option value="Otra">Otra</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group controlId="formMessage" className="mt-3">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Ingrese su mensaje"
                                            required
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="mt-3"
                                    >
                                        Enviar Mensaje
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        className="mt-3 ms-2"
                                        onClick={handleClose}
                                    >
                                        Cancelar
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default ContactMeOffcanvas;

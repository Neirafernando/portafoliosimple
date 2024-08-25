import React from 'react';
import { Card, Tabs, Tab, ListGroup } from 'react-bootstrap';

const CardWithTabs = () => {
    return (
        <Card>
            <Card.Header>
                <h3 className="text-center">Tecnologías</h3>
                <Tabs defaultActiveKey="frontend" id="card-tabs" className="mt-3">
                    <Tab eventKey="frontend" title="Frontend">
                        <Card.Body>
                            <h5 className="mb-3">Tecnologías que Uso:</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>HTML5</strong></ListGroup.Item>
                                <ListGroup.Item><strong>CSS3</strong></ListGroup.Item>
                                <ListGroup.Item><strong>JavaScript</strong></ListGroup.Item>
                                <ListGroup.Item><strong>React</strong> ( Bootstrap)</ListGroup.Item>
                            </ListGroup>
                            <h5 className="mt-4 mb-3">Proyectos Destacados:</h5>
                            <p>Aquí puedes incluir una breve descripción de proyectos relevantes que has desarrollado utilizando estas tecnologías.</p>
                            <h5 className="mt-4 mb-3">Competencias Clave:</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Diseño responsivo</ListGroup.Item>
                                <ListGroup.Item>Optimización del rendimiento</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Tab>
                    <Tab eventKey="backend" title="Backend">
                        <Card.Body>
                            <h5 className="mb-3">Tecnologías que Uso:</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Node.js</strong> (con Express)</ListGroup.Item>
                                <ListGroup.Item><strong>Python</strong> (con Django, Flask)</ListGroup.Item>
                                <ListGroup.Item><strong>PHP</strong> (con Laravel)</ListGroup.Item>
                                <ListGroup.Item><strong>MongoDB</strong></ListGroup.Item>
                                <ListGroup.Item><strong>MySQL</strong></ListGroup.Item>
                                <ListGroup.Item><strong>PostgreSQL</strong></ListGroup.Item>
                            </ListGroup>
                            <h5 className="mt-4 mb-3">Proyectos Destacados:</h5>
                            <p>Aquí puedes incluir una breve descripción de proyectos backend que has desarrollado.</p>
                            <h5 className="mt-4 mb-3">Competencias Clave:</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Diseño y desarrollo de APIs REST</ListGroup.Item>
                                <ListGroup.Item>GraphQL</ListGroup.Item>
                                <ListGroup.Item>Gestión de bases de datos</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Tab>
                </Tabs>
            </Card.Header>
        </Card>
    );
};

export default CardWithTabs;

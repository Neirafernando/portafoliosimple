import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import { FaBriefcase } from 'react-icons/fa';
import { FcCircuit } from 'react-icons/fc';

const Acordeon = () => {
    // Función para detectar el tamaño de la pantalla
    const isMobile = window.innerWidth <= 768;

    return (
        <div>
            <Card style={{ minWidth: '780px', width: '100%' }}> {/* Establece un ancho mínimo para la tarjeta */}
                <Card.Header>
                    <FaBriefcase /> Experiencia
                </Card.Header>
                <Accordion defaultActiveKey="0" alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Tunichefruits <FcCircuit /></Accordion.Header>
                        <Accordion.Body style={{ minHeight: '100px' }}>
                            Soporte informático integral a una empresa en el sector de agroalimentos.
                            Asistí a todo el personal de la planta en la resolución de problemas técnicos, incluyendo hardware, software y conectividad.<br /><br />
                            - Manejo de firewall para garantizar una conexión segura a la red wifi de la empresa.<br />
                            - Realicé asistencia remota para la configuración de equipos y la verificación de su funcionalidad.<br />
                            - Gestión de nube interna de la empresa.<br />
                            - Preparación de equipos para personal de la planta.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Freelancer</Accordion.Header>
                        <Accordion.Body style={{ minHeight: '100px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    );
}

export default Acordeon;

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';// importante importar el hook 
import { LiaDev } from "react-icons/lia";
import Offcanvas from '../Common/Offcanvas'
import { FcMultipleDevices } from "react-icons/fc";


const HeroSection = () => {
    const navigate = useNavigate(); //Hook para para redirigir al usuario a diferentes rutas en respuesta a eventos

    const handleClick = () => {
        navigate('/contact'); // Redirige a la vista de contacto
    };

    return (
        <div className="hero-section mx-5 mt-5">
            <Container>
                <h1 className="display-1"><FcMultipleDevices />

                    ¡Hola, soy Fernando Bueno, desarrollador full stack Jr!
                </h1>
                <p className='lead'>
                    Soy un desarrollador web versátil y freelancer dedicado a crear experiencias dinámicas en línea. Trayendo una mezcla de creatividad y destreza técnica a cada proyecto, me especializo en la elaboración de soluciones únicas y fáciles de usar. Colaboremos para elevar su presencia digital.
                </p>
                <Offcanvas />
            </Container>
        </div>
    );
};

export default HeroSection;

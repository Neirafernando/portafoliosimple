import React from 'react';
import { Lumiflex } from 'uvcanvas';
import { Opulento } from "uvcanvas"
import { Zenitho } from "uvcanvas"


const GlobalBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden'
        }}>
            <Lumiflex />


            {/* Puedes cambiar a otro componente de UVCanvas si lo prefieres */}
        </div>
    );
}

export default GlobalBackground;

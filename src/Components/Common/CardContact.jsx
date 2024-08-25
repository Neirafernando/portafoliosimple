import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Offcanvas from '../Common/Offcanvas'


const CardContact = () => {
    return (
        <div>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Let's connect!   </Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Offcanvas />
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardContact
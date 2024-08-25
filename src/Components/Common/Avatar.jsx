import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import avatarimage from '../../assets/avatar.png'; // Ajusta la ruta según la ubicación correcta

function ShapeExample() {
    return (
        <Container>
            <Row>

                <Col xs={6} md={4}>
                    <Image src={avatarimage} roundedCircle className="w-30 h-auto" />
                </Col>

            </Row>
        </Container>
    );
}

export default ShapeExample;

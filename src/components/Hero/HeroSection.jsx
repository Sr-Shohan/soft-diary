import { Container, Row, Col, Image, CardGroup } from 'react-bootstrap';
import hero from '../../assets/blogging.svg';
export default function HeroSection(){
    return (
        <Container fluid style={{ border: '2px', padding: '0px 5%' }}>
                <Row security>
                    <Col xs={12} md={6} lg={8} style={{ padding: '0rem', padding: '10% 10% 0% 10%' }}>
                        <div>
                            <h1 style={{ textAlign: 'center' }}>Learn Software Testing with Us</h1>
                            <p style={{ fontSize: '0.8rem', textAlign: 'center' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={4} >
                        <div>
                            <Image src={hero}></Image>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
}
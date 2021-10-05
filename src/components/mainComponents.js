import React, { useState } from 'react';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl, Row, Col, Image, CardGroup } from 'react-bootstrap';
import TutorialCard from './Cards/TutorialCard'
import ThemeToggle from './ThemeToggle/ThemeToggle.js';
import hero from "../assets/blogging.svg";
import cardSvg from "../assets/mobileApp.svg";
import './../stylesheets/blog.css'
import Buttons from './Button/Button.js'
const MainComponents = (props) => {
    const cardHead = {
        borderRadius: '1rem 1rem 0rem 0rem',
        background: 'red'
    };


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const arr = ["Mobile App Testing", "Web App Testing", "API Testing"];
    return (
        <div className='font-link'>
            {/* Menu */}
            <Navbar style={{ background: '#0B5ED7' }} expand="lg">
                <Container fluid>
                    <Navbar.Brand style={{ color: 'white' }} href="#">SOFT DIARY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                style={{ borderRadius: "25px" }}
                                type="search"
                                placeholder="Search"
                                className="me-2"

                                aria-label="Search"
                            />
                            <Button className="me-2"><div><i className="fa fa-search"></i></div></Button>
                            {/* Dark Toggle  */}
                        </Form>
                        <Button className="me-2 ">
                            <div><i class="fa fa-user"></i></div>
                        </Button>


                        <ThemeToggle />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Menu End */}
            <Container fluid style={{ border: '2px', padding: '0px 5%' }}>
                <Row security>
                    <Col xs={12} md={8} style={{ padding: '7rem' }}>
                        <h1>Learn Software Testing with Us</h1>
                    </Col>
                    <Col xs={6} md={4} style={{}}>
                        <Image src={hero}></Image>
                    </Col>
                </Row>
            </Container>

            {/* Card section */}





            <Container fluid style={{ padding: ' 0 5%', marginTop: '8rem' }}>


                <div className="tutorialHeader">
                    <h1>Tutorials : </h1>
                    <button type="button" className="slide">
                        <div>Slide</div>
                        <i class="icon-arrow-right"></i>
                    </button>
                </div>
                {/* button start */}

                {/* Button End */}


                <CardGroup>
                    {/* <Card border="primary" style={{ width: '18rem' }} className='cards'>
                        <Card.Header className="text-center">Mobile App Testing</Card.Header>
                        <Card.Body>
                            <img src={cardSvg} className="fitImage"></img>
                        </Card.Body>
                    </Card> */}
                    {arr.map((value, idx) => { <TutorialCard val={value} key={idx} /> })}
                    {arr.map((value) => { return (<li>{value}</li>) })}

                </CardGroup>

            </Container>
        </div >
    );
}

export default MainComponents;
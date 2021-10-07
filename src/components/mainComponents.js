import React, { useState } from 'react';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl, Row, Col, Image, CardGroup } from 'react-bootstrap';
import TutorialCard from './Cards/TutorialCard'
import ThemeToggle from './ThemeToggle/ThemeToggle.js';
import hero from "../assets/blogging.svg";
import cardSvg from "../assets/mobileApp.svg";
import './../stylesheets/blog.css'
import Buttons from './Button/Button.js'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import FooterPage from './Footer/footer';
import DropdownButton from './ProfileButton/dropdown';
import NavbarPage from './NavBar/Nav';


// import dropdownButton from './ProfileButton/dropdown';

const MainComponents = (props) => {
    const cardHead = {
        borderRadius: '1rem 1rem 0rem 0rem',
        background: 'red'
    };


    const [isOpen, setIsOpen] = useState(false);
    const [isDropDownButtonOn, setDropDownButtonOn] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const cards = ["Mobile App Testing", "Web App Testing", "API Testing"];
    const toggleHandle = () => {

        if (isDropDownButtonOn) {
            setDropDownButtonOn(false);
        } else {
            setDropDownButtonOn(true);
        }
    }
    return (
        <div className='font-link'>
            {/* Menu */}
            <Navbar style={{ background: '#0F172A' }} expand="lg">
                <Container fluid>
                    <Navbar.Brand style={{ color: 'white' }} href="#">SOFT DIARY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                style={{ borderRadius: "25px", background: 'red' }}
                                type="search"
                                placeholder="Search"
                                className="me-2"


                                aria-label="Search"
                            />
                            <Button style={{ background: '#F0A500' }} className="me-2"><div><i className="fa fa-search"></i></div></Button>

                        </Form>

                        <div className="profileDarkGroup">
                            <DropdownButton toggle={isDropDownButtonOn} toggleEvent={toggleHandle} />
                            <ThemeToggle />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Menu End */}

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

            {/* Card section */}





            <Container fluid style={{ padding: ' 0 5%', marginTop: '1rem', background: '#e8e8e8', paddingTop: '2rem', paddingBottom: '2rem' }}>


                <div className="tutorialHeader">
                    <h3 style={{}}>Tutorials : </h3>
                    <button type="button" className="slide">
                        <div>View All</div>
                        <i class="icon-arrow-right"></i>
                    </button>
                </div>
                {/* button start */}

                {/* Button End */}


                <CardGroup>
                    {cards.map((value) => { return <TutorialCard val={value} /> })}
                </CardGroup>

            </Container>

            <Container fluid style={{ padding: ' 0 5%', marginTop: '1rem', background: '#e8e8e8', paddingTop: '2rem', paddingBottom: '2rem' }}>


                <div className="tutorialHeader">
                    <h3 >Interview Questions : </h3>
                    <button type="button" className="slide">
                        <div>View All</div>
                        <i class="icon-arrow-right"></i>
                    </button>
                </div>
                {/* button start */}

                {/* Button End */}


                <CardGroup>
                    {cards.map((value) => { return <TutorialCard val={value} /> })}
                </CardGroup>

            </Container>


            {/* //mbd testing */}

            <FooterPage />
        </div >
    );
}

export default MainComponents;
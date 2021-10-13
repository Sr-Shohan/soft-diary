import { useState } from 'react';
import { Button, Navbar, Container, Nav,Form, FormControl } from 'react-bootstrap';
import DropdownButton from '../ProfileButton/dropdown';
import ThemeToggle from '../ThemeToggle/ThemeToggle.js';
export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const [isDropDownButtonOn, setDropDownButtonOn] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleHandle = () => {

        if (isDropDownButtonOn) {
            setDropDownButtonOn(false);
        } else {
            setDropDownButtonOn(true);
        }
    }
    return(
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
    );
}
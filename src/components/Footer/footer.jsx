import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, Image } from "mdbreact";
import contactsvg from "./../../assets/contact.svg";
import IconSection from './../FooterIconSection/IconSection';

const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4" style={{
            backgroundColor: '#ffff'
        }}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6" >
                        {/* <h5 className="title">Footer Content</h5>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </p> */}

                        <img style={{ width: '50%', padding: '0px auto' }} src={contactsvg}></img>

                    </MDBCol>
                    <MDBCol md="6" style={{ display: 'block', padding: '0rem auto' }} >
                        {/* <h5 className="title">Links</h5> */}
                        {/* <ul style={{ padding: "auto", visibility: 'hidden' }}>
                            <li className="list-unstyled">
                                <a href="#!">About us</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Contact us</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul> */}
                        <IconSection style={{ transform: `translate(${0}%, ${100}%)` }} />
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.crusherslab.tech"> CrushersLab </a>
                </MDBContainer>
            </div>
        </MDBFooter >
    );
}

export default FooterPage;
import React, { useState } from 'react';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl, Row, Col, Image, Card, CardGroup } from 'react-bootstrap';
import cardSvg from '../../assets/mobileApp.svg';

export default function tutorialCard({ val }) {
    return (

        <Card border="primary" style={{ width: '18rem' }} className='cards'>
            <Card.Header className="text-center">{val}</Card.Header>
            <Card.Body>
                <img src={cardSvg} className="fitImage"></img>
            </Card.Body>
        </Card>


    );
}
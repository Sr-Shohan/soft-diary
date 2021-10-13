import React, { useState } from 'react';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl, Row, Col, Image, Card, CardGroup } from 'react-bootstrap';
import cardSvg from '../../assets/mobileApp.svg';

// react router import start
import {
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  // react router import end

export default function TutorialCard({ val,link,type }) {
    return (
        <Card border="primary" style={{ width: '18rem' }} className='cards'>
                
            <NavLink exact to={`/${type}/${link}`}>
                <Card.Header className="text-center"> <h6>{val}</h6>   </Card.Header>
                <Card.Body>
                    <img src={cardSvg} className="fitImage"></img>
                </Card.Body>
            </NavLink>
                
        </Card>
    );
}
import React from 'react';
import { Container } from 'react-bootstrap';


export const Footer = () => {
    return(
        <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
            <Container className="d-flex justify-content-center align-items-center">
                <p className="m-10">Web Developer Blog</p>
            </Container>
        </Container>
    );
}
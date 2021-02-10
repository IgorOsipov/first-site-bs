import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &:hover{
            color: white;
        }
    }
    .navbar{
        z-index: 1000;
    }
`

export default function NaviBar(){
    return(
        <>
            <Styles>
                <Navbar collapseOnSelect expand='lg' bg="dark" variant='dark' className="navbar">
                    <Container>
                        <Navbar.Brand>WebDev Blog</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className="mr-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant="primary" className="mr-2">Log In</Button>
                                <Button variant="primary">Sign Out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
        </>
    )
}
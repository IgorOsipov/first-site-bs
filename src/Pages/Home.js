import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Slider from '../Components/Slider';
import styled from 'styled-components';
import autumn from '../Img/autumn.jpg';
import spring from '../Img/spring.jpg';
import winter from '../Img/winter.jpg';
import summer from '../Img/summer.jpg';

const Styles = styled.div`
    .card-tile {
        max-width: 300px;
        margin: 10px auto;
    }
    .row{
        padding: 20px 0;
    }
    
`

export const Home = () => (
    <>
        <Slider/>
        <Styles>
            <Container>
                <Row>
                    <Col xs={12} sm={6} lg={3}>
                        <Card className="card-tile">
                            <Card.Img variant="top" src={autumn}/>
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card className="card-tile">
                            <Card.Img variant="top" src={winter}/>
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card className="card-tile">
                            <Card.Img variant="top" src={spring}/>
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card className="card-tile">
                            <Card.Img variant="top" src={summer}/>
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Styles>
    </>
    
)
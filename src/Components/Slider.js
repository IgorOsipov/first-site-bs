
import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import autumn from '../Img/autumn.jpg';
import spring from '../Img/spring.jpg';
import winter from '../Img/winter.jpg';
import summer from '../Img/summer.jpg';

const Styles = styled.div `
    img {
        height: 100vh;
    }

    .main-carousel{
        margin-top: -56px;
    }
`

export default function Slider(){
    return(
        <Styles>
            <Carousel className="main-carousel">
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={autumn}
                        alt="autumn slide"
                    />
                    <Carousel.Caption>
                        <h2>Autumn</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={winter}
                        alt="winter slide"
                    />
                    <Carousel.Caption>
                        <h2>Winter</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={spring}
                        alt="spring slide"
                    />
                    <Carousel.Caption>
                        <h2>Spring</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={summer}
                        alt="summer slide"
                    />
                    <Carousel.Caption>
                        <h2>Summer</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Styles>
    )
}
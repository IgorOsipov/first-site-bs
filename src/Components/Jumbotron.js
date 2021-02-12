import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import summer from '../Img/summer.jpg';

const Styles = styled.div`
    .jumbo{
        background: url(${summer}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index:2;

        .overlay{
            background-color: #000;
            opacity: 0.7;
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index:-1;
        }
    }

`

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Web Developer Blog</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at tortor id tortor venenatis lacinia. Integer eget dignissim velit. Phasellus at velit non enim maximus dictum. Morbi in vulputate purus, et tempus quam. Curabitur rhoncus volutpat volutpat. Phasellus sed euismod purus, ac varius nisl. Integer nec viverra quam. Suspendisse sagittis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at tortor id tortor venenatis lacinia. Integer eget dignissim velit. Phasellus at velit non enim maximus dictum. Morbi in vulputate purus, et tempus quam. Curabitur rhoncus volutpat volutpat. Phasellus sed euismod purus, ac varius nisl. Integer nec viverra quam. Suspendisse sagittis.
                    </p>
    
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron;
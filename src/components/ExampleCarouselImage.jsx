import { useState } from 'react';
import { Container } from 'react-bootstrap';

export function ExampleCarouselImage(props) {
    return (
        <Container style={{ height: "500px" }} className='d-lg-flex justify-content-center align-items-center'>
            <img src={props.source}></img>
        </Container>

    );
}

export default ExampleCarouselImage;
import { useState } from 'react';
import { Container } from 'react-bootstrap';

export function CarouselImage(props) {
    return (
        <Container style={{ height: "500px", width:"auto", overflow: "hidden" }} className='mb-4'>
            <img style={{height: "auto", width:"100%", objectFit:"fill"}} src={props.source}></img>
        </Container>

    );
}

export default CarouselImage;
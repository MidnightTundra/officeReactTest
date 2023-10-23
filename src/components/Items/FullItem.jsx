import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const FullItemDisplay = (props) => {

    const objectID = props.oid;
    const [index, setIndex] = useState(0);

    const handleChange = (e) => {

    }
    return (
        <Container>
            <Row>
                <h1>{props.title}</h1>
            </Row>
        </Container>
    );
}
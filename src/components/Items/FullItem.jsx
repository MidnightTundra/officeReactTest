import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

async function pullProductData(req) {
    try {
        //https://www.boredapi.com/api/activity
        //'/api/items/findid?id=' + req.query.id
        //window.location.href
        const response = await fetch(req, {
            method: 'GET',
            credentials: "same-origin"
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Could not receive data.');
        return 'Could not receive data.'
    }
}

export const FullItem = (props) => {

    console.log(window.location.search);
    const item = pullProductData(`${import.meta.env.VITE_API_URL}/items/findid${window.location.search}`);

    const objectID = props.oid;

    //For Gallery active index
    const [index, setIndex] = useState(0);

    const handleChange = (e) => {

    }
    return (
        <Container>
            <Row>
                <h1>{item.title}</h1>
            </Row>
            <Row>
                <Col><img></img></Col>
            </Row>
        </Container>
    );
}

export default FullItem;
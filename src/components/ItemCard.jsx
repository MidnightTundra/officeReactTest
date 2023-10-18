import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import { handleAddToCart } from '../scripts/cartController.js'

function ItemCard(props) {
  const [count, setCount] = useState(1);

  return (
    <Container fluid>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.source} />
      <Card.Body>
        <div style={{ minHeight: '150px' }}>
          <div className='' style={{ minHeight: '20px' }}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle>${props.price}</Card.Subtitle>
          </div>
          <div style={{ minHeight: '40px' }}>
            <Card.Text>
              {props.content}
            </Card.Text>
          </div>
        </div>
        <Row className='justify-content-md-center'>
          <Col ><Button variant="primary">
            Add Cart </Button></Col>
          <Col><Button onClick={() => setCount(count + 1)}>+</Button></Col>
          <Col><p style={{textAlign: "center"}}>{count}</p></Col>
          <Col><Button onClick={() => setCount(() => {
            let set = count - 1;
            if(set == 0) {
              return 1;
            } else {
              return set;
            }
          })}>-</Button></Col>
        </Row>
      </Card.Body>
    </Card>
    </Container>
  );
}
{ /*
  {
      "content" : "Nvidia 4070 w/ Intel 13700HX",
      "title" : "ASUS Gaming PC",
      "price" : 2689.99,
      "source" : "https://c1.neweggimages.com/ProductImageCompressAll300/AZEBS2302020KJ4I860.jpg?ex=2"
  }*/}

export default ItemCard;
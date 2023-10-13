import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { handleAddToCart } from '../scripts/cartController.js'

function ItemCard(props) {
  const [count, setCount] = useState(1)

  return (
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
        <div>
          <Button style variant="primary"
            onClick={handleAddToCart(props)}>Add Cart </Button>
          <Button onClick={() => setCount(count + 1)}>+</Button>
          <p>{count}</p>
          <Button onClick={() => setCount(count - 1)}>-</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
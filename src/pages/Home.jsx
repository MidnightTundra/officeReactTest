import { Carousel, Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import CarouselImage from '../components/CarouselImage';
import ItemCard from '../components/ItemCard';

const mockDB = require('../mockDatabase.json');  // Test to demonstrate how to filter server json data to site content.




export function Home() {
  {/*State Manager for the promotional carousel for the front page. */ }
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    /* This is the front page carousel */
    <Container fluid="md" md="auto" className="justify-content-center align-items-center">

      <Row md="auto">
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <CarouselImage className="d-flex justify-content-center" source="https://i.pinimg.com/originals/60/a2/28/60a2285e52cb3323b80a56b0de38e0cc.jpg " text="First slide" />
            <Carousel.Caption>
              <h3>MSI BRAND</h3>
              <p>PC Gaming's Champion</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage source="https://macplus.shop/wp-content/uploads/2021/03/Banner-Mac-4.jpg" text="Second slide" />
            <Carousel.Caption>
              <h3>Apple</h3>
              <p>Think Differently</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage source="https://en.shiftdelete.net/wp-content/uploads/2023/03/asus-unveils-exciting-rog-strix-scar-16-18-gaming-laptops-in-india-1.jpeg" text="Third slide" />
            <Carousel.Caption>
              <h3>ASUS BRAND</h3>
              <p>
                The Republic of Gamers
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>

      {/*Grid content*/}
      <Row>
        <Col></Col>
        <Col>
        </Col>
        <Col>
        </Col>

      </Row>
      <br></br>

      {/* Filtering to have a flexbox that displays cards horizontally */}
      <br></br>
      <Row md="auto" className="d-flex justify-content-center"><Col><h1>Featured Items</h1></Col></Row>
      <br></br>
      <Row className="d-inline-flex p-2">
        {/*Creates item cards based on Database contect*/}
        {Object.keys(mockDB["promotions"]).map((item, i) => (
          <Col md="auto" className="">
            <ItemCard price={mockDB["promotions"][i].price} source={mockDB["promotions"][i].source} content={mockDB["promotions"][i].content} title={mockDB["promotions"][i].title} />
          </Col>
        ))}

        {/* Reference JSON data through props in the elements to populate site with JSON data.  Server passes */}
      </Row>
    </Container>

  );
}
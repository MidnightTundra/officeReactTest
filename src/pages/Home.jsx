import { Carousel } from "react-bootstrap";
import { useState } from 'react';
import ExampleCarouselImage from '../components/ExampleCarouselImage';


export function Home() {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage source="https://media.istockphoto.com/id/1409236261/photo/healthy-food-healthy-eating-background-fruit-vegetable-berry-vegetarian-eating-superfood.webp?s=2048x2048&w=is&k=20&c=AOJUGUDXqr7aYJhvW4-6sf1vzaUmBO1q3bRE5HBcEVs=" text="First slide" />
        <Carousel.Caption>
          <h3>An entire tropical selection</h3>
          <p>Just for you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage source="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Culinary_fruits_front_view.jpg/1920px-Culinary_fruits_front_view.jpg" text="Second slide" />
        <Carousel.Caption>
          <h3>Enjoy our subscription of Essential Fruits</h3>
          <p>$10.99 Every 30 days from activation**</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage source="https://media.istockphoto.com/id/1178343665/photo/mid-adult-man-cross-country-running.webp?s=2048x2048&w=is&k=20&c=I-WSEmzVfNCr1bvws-lsy6YitvSIUnqruhAjdZLXSXE=" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
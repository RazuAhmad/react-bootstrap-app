import React from "react";
import "./Another.css";
// import { Jumbotron } from "react-bootstrap/Jumbotron";
import { Card, Button, Carousel } from "react-bootstrap";
import img1 from "../../Images/20210228_150728.jpg";
import img2 from "../../Images/20210228_150730.jpg";
import img3 from "../../Images/20211226_223609.jpg";
import img4 from "../../Images/saint martin1.JPG";
const Another = () => {
  return (
    <div className="anotherStyle">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={img4} />
        <Card.Body>
          <Card.Title>Welcome to My Portfolio</Card.Title>
          <Card.Text>
            Hi there, This is Mohammed Abdur Rahman Razu. A full Stack developer
            from Bangladesh. Though i'm basically a law student but i'm having a
            deep passion for coding and i'm a self taught programmer you can
            say.
          </Card.Text>
          <a href="https://twitter.com/abdur_rahman247">
            <Button variant="primary">See Details</Button>
          </a>
        </Card.Body>
      </Card>

      <Carousel>
        <Carousel.Item>
          <img className="d-block" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Another;

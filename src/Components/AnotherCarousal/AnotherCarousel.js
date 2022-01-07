import React from "react";
// import "./AnotherCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import motivation1 from "../../imageMotivation/save-time-save-money-concept.jpg";
import motivation2 from "../../imageMotivation/negative-mind-will-never-give-you-positive-life-motivation-attitude-graphic-words.jpg";
import motivation3 from "../../imageMotivation/life-motivation-inspiratin-positive-vibes-quote-nature-leaf-background.jpg";

const AnotherCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src={motivation1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={motivation2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={motivation3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col>
            <h3>Wanna know top daily headlines??</h3>
          </Col>
          <Col>
            <h3>
              Here it is i'm putting, several top daily news from BBC. Let's
              check them out??{" "}
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AnotherCarousel;

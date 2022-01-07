import React from "react";
import Button from "react-bootstrap/Button";

import Another from "./Components/Another/Another";
import Accordion from "react-bootstrap/Accordion";
import AnotherCarousel from "./Components/AnotherCarousal/AnotherCarousel";
import Navbar from "./Components/Navbar/Navbar";
import TopHeadlines from "./Components/TopHeadlines/TopHeadlines";
const App = () => {
  return (
    <div>
      <Navbar />
      <Another />
      <a href="https://www.linkedin.com/in/abdur-rahman-razu-1303b4183/">
        <Button variant="danger">My-Linkdin-Profile</Button>
      </a>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Law Student At Jagannath University,Dhaka
          </Accordion.Header>
          <Accordion.Body>
            Hey? I'm a Law Student at Jagannath University from 2018 and i'm
            about to finish my graduation. Though i'm a law student coding is my
            passion from the beginning of Hsc stage from when i was familiar
            with this in my ICT book.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>I'm also an Amateur Photographer</Accordion.Header>
          <Accordion.Body>
            It's also my pleasure to inform you that i'm in chain of taking wild
            life photos you can say me an Amateur photographer also. Though i've
            not yet reached at that level of expertise to be called as a pro
            level photographer. But i believe passion is everything and if
            anyone stick to his/her passion till the end surely the perseverance
            will bring success. Wanna see my Photography?..
            <a href="https://www.flickr.com/photos/mohammedabdurrahman/">
              Visit here
            </a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <AnotherCarousel />
      <TopHeadlines />
    </div>
  );
};

export default App;

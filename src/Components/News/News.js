import Button from "react-bootstrap/Button";
import React from "react";
import { Card } from "react-bootstrap";

const News = (props) => {
  const { description, url, urlToImage, title } = props.allNews;
  return (
    <Card style={{ width: "38rem", margin: "auto" }}>
      <Card.Img
        variant="top"
        src={urlToImage}
        alt="Pictures of the headlines"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={url}>
          <Button variant="primary">See Details</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default News;

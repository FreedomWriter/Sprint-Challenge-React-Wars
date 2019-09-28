import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const MovieComp = ({ title, opening_crawl }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h3>You might have seen us in our epic film:</h3>
          <h3> {title}</h3>
        </CardTitle>
        <CardText>{opening_crawl}</CardText>
      </CardBody>
    </Card>
  );
};

export default MovieComp;

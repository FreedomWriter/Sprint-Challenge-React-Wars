import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const CardComp = ({ name, birthyear, eye }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>Born in the great year of {birthyear}</CardSubtitle>
        <CardText>
          You don't know fear until you have stared into my steely {eye} eyes!
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CardComp;

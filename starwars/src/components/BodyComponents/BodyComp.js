import React from "react";
import { Jumbotron, Container } from "reactstrap";
import styled from "styled-components";

const Padding = styled.div`
  width: 80%;
  margin: 1% auto;
  color: brown;
`;

const Pulse = styled.div`
  border-radius: 10%;
  box-shadow: 0 0 0 0 rgba(0,0,0,1)
  trasform: scale(1);
  animation: pulse 2s infinite;
  text-align:center;
`;
const PulseKeyFrames = styled.div`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;
const BodyComp = props => {
  return (
    <Padding>
      <Jumbotron fluid>
        <Container fluid>
          <Pulse>
            <PulseKeyFrames>
              <h1>Chill, it's just an App</h1>
            </PulseKeyFrames>
          </Pulse>

          <p>
            Are you having a strong REACTion to how awesome this app is,
            considering the builder thought a library was just that really cool
            place with all of the books two weeks ago? I don't blame you but you
            have to chill, it's just an app!
          </p>
        </Container>
      </Jumbotron>
    </Padding>
  );
};

export default BodyComp;

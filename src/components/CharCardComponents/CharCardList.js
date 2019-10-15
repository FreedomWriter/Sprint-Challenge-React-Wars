import React, { useEffect, useState } from "react";
import axios from "axios";
import CharCardComp from "./CharCardComp";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

export default function CharCardList(props) {
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(result => {
        setChar(result.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const Wrapper = styled.div`
    paddingtop: 56.25%;
    margin: 10%;
  `;

  return (
    <Container>
      <Row>
        {char.map((character, index) => {
          return (
            <Col xs="6">
              <Wrapper>
                <CharCardComp
                  //   key={character.id}
                  name={character.name}
                  birthyear={character.birth_year}
                  eye={character.eye_color}
                  key={index}
                />
              </Wrapper>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

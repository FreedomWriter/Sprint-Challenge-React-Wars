import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieCardComp from "./MovieCardComp";
import { Container, Row, Col } from "reactstrap";

export default function MovCardList(props) {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/films/")
      .then(result => {
        setFilm(result.data.results);
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
        {film.map((f, index) => {
          // if (f.title) {
          return (
            <Col xs="12">
              <Wrapper>
                <MovieCardComp
                  title={f.title}
                  opening_crawl={f.opening_crawl}
                  key={index}
                />
              </Wrapper>
            </Col>
          );
          // }
        })}
      </Row>
    </Container>
  );
}

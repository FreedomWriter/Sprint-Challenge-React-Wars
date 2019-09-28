import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComp from "./CardComp";
import MovieComp from "../MovieComp";
import { Container, Row, Col } from "reactstrap";

export default function CardList(props) {
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

  return (
    <Container>
      <Row>
        {char.map(character => {
          return (
            <Col xs="6">
              <CardComp
                //   key={character.id}
                name={character.name}
                birthyear={character.birth_year}
                home={character.home}
                eye={character.eye_color}
                film={film}
                opening={film.opening_crawl}
              />
            </Col>
          );
        })}

        {film.map(f => {
          if (f.title) {
            return (
              <Col xs="6">
                <MovieComp title={f.title} opening_crawl={f.opening_crawl} />
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
}

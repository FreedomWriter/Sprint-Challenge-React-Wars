import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
// import CardComp from "../CardComponents/CardComp";

export default function Find(props) {
  const [selectFilm, setSelectFilm] = useState(props);
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

  function selectFilmHandler() {
    const doesShow = selectFilm;
    setSelectFilm(!doesShow);
  }

  return (
    <Form>
      <FormGroup>
        <Label for="exampleSelect">Find Your Favorite!</Label>
        <Input
          onClick={selectFilmHandler}
          type="select"
          name="select"
          id="exampleSelect"
        >
          {char.map(name => {
            return <option>{name.name}</option>;
          })}
        </Input>
      </FormGroup>
    </Form>
  );
}

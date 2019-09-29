import React, { useEffect, useState } from "react";
import { DropdownItem } from "reactstrap";
import axios from "axios";

export default function FindChar(props) {
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

  return (
    <div>
      {char.map((name, index) => {
        let thisName = name.name;
        let thisLink = "https://en.wikipedia.org/wiki/" + thisName;
        return (
          <DropdownItem key={index}>
            <a href={thisLink}>{name.name}</a>
          </DropdownItem>
        );
      })}
    </div>
  );
}

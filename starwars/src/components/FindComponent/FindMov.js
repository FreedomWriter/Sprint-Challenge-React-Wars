import React, { useEffect, useState } from "react";
import { DropdownItem } from "reactstrap";
import axios from "axios";

export default function FindMov(props) {
  const [selectFilm, setSelectFilm] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/films/")
      .then(result => {
        setSelectFilm(result.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {selectFilm.map((title, index) => {
        //helper variables set to aid in making a call to wiki
        let thisTitle = title.title;
        let thisLink = "https://en.wikipedia.org/wiki/" + thisTitle;
        return (
          <DropdownItem key={index}>
            <a href={thisLink}>{title.title}</a>
          </DropdownItem>
        );
      })}
    </div>
  );
}

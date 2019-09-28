import React, { useState } from "react";
import "./App.css";
import CardList from "./components/CardComponents/CardList";
import { Button } from "reactstrap";
import Find from "../src/components/FindComponent/Find";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [showContent, setShowContent] = useState(false);

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2%;
  `;

  function toggleContentHandler() {
    const doesShow = showContent;
    setShowContent(!doesShow);
  }

  return (
    <div>
      <Wrapper>
        <Button onClick={toggleContentHandler}>Explore the Characters</Button>
        <Find />
      </Wrapper>

      {showContent ? (
        <div>
          <CardList />
        </div>
      ) : null}
    </div>
  );
};

export default App;

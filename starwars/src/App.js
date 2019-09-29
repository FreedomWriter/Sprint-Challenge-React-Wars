import React from "react";
import "./App.css";
import HeaderComp from "./components/HeaderComponet/Header";
import Crawl from "./components/CrawlComponent/Crawl";
import BodyComp from "./components/BodyComponents/BodyComp";

const App = () => {
  return (
    <div>
      <HeaderComp />

      <div>
        <Crawl />
      </div>
      <div>
        <BodyComp />
      </div>
    </div>
  );
};

export default App;

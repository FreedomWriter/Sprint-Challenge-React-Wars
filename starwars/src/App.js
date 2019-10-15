import React from "react";
import "./App.css";
import HeaderComp from "./components/HeaderComponet/Header";
import Crawl from "./components/CrawlComponent/Crawl";
import BodyComp from "./components/BodyComponents/BodyComp";
import Footer from "../src/components/FooterComponent/Footer";

const App = () => {
  return (
    <div>
      <div>
        <HeaderComp />
      </div>
      <div>
        <Crawl />
      </div>
      <div>
        <BodyComp />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

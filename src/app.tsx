import React from "react";
import Minam from "../src/minam";
import List from "./list";
import minam from "../static/basic-data";
import hoyeong from "../static/hy";
import Bin from "./Bin";
import bae from "../static/bae";

const App: React.FC = () => {
  return (
    <div>
      <Minam textNode={minam} />
      <h1>안녕?</h1>
      <List hoyeong={hoyeong} />
      <Bin h1TextNode={bae} />
    </div>
  );
};

export default App;

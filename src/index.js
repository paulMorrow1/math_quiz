import React from "react";
import ReactDOM from "react-dom/client";
// import Accordion from "./Accordion";
// import App from "./App";
// import CounterContainer from "./Counter/CounterContainer";
// import StarWarsWrapper from "./StarWars/StarWarsWrapper";
// import Practice from "./Practice";
// import Page from "./Modal";
import Quiz from "./Quiz/index2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CounterContainer /> */}
    {/* <PokemonWrapper /> */}
    {/* <Accordion question="What is the cost?" answer="This is the answer" /> */}
    {/* <Page /> */}
    <Quiz />
  </React.StrictMode>
);

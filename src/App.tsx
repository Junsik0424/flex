import React from "react";
import styled from "styled-components";

import Banks from "./components/Banks";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

const EntireDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f4f6;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

const App = () => (
  <EntireDiv>
    <Navbar />

    <Banner />

    <Banks />

    <Cards />
  </EntireDiv>
);

export default App;

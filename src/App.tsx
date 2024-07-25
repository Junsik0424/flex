import React from "react";
import styled from "styled-components";

import Banks from "./components/Banks";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

// 지금 레이아웃을 구성하신 방식은, EntireDiv를 flex align-items: center로 잡고,
// 각각의 FirstDiv, SecondDiv 등 div의 width를 고정해서 중앙정렬하는 방식이었군요!

// 이렇게 하기보다는 EntireDiv 안에 "스크린 사이즈가 400px 이상이면 400px의 크기를 가지는" div를 하나 만들고,
// 그 div 안에 FirstDIv, SecondDiv를 넣는 방식으로 해보면 어떨까요?
const EntireDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f4f6;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

const CenterScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%; // 보통 때는 전체 사이즈를 갖도록 합니다.
  @media screen and (min-width: 400px) {
    width: 400px; // 스크린 사이즈가 400px이 넘어갈 때는 이 CenterScreen의 width를 400px로 고정합니다.
  }

  // 사실 위 코드는 max-width: 400px로 퉁칠 수 있습니다. 🤟
`;

// Navbar을 제외한 요소들은 내용에 해당하므로 하나로 묶고, 모두 좌우 패딩이 들어가므로 이걸로 감싸주도록 할게요.
const Content = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  padding: 0 16px;
`;

const App = () => (
  <EntireDiv>
    <CenterScreen>
      <Navbar />

      <Content>
        <Banner />

        <Banks />

        <Cards />
      </Content>
    </CenterScreen>
  </EntireDiv>
);

export default App;

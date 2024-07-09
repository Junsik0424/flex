import React from "react";
import Arrow from "src/assets/arrow.svg";
import Cloud from "src/assets/cloud.svg";
import Dollar from "src/assets/dollar.svg";
import Flyingmoney from "src/assets/flyingmoney.png";
import image from "src/assets/image.png";
import Logo from "src/assets/logo.svg";
import Money from "src/assets/money.png";
import Moneybag from "src/assets/moneybag.png";
import Pin from "src/assets/pin.svg";
import Questionmark from "src/assets/questionmark.svg";
import Send from "src/assets/send.svg";
import Won from "src/assets/won.svg";
import styled from "styled-components";

const EntireDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f4f6;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;
const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 400px) {
    gap: 0px 50vw;
  }
  width: 100%;
`;
const LogoContainer = styled.div`
  width: 86px;
  height: 54px;
  display: flex;
  align-self: center;
  @media (min-width: 400px) {
    margin-right: 200px;
  }
`;
const GapDiv = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
`;
const CloudContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-self: center;
`;
const PinContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-self: center;
`;
const SecondDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 368px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageText = styled.h1`
  position: absolute;
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 250px;
  height: 24px;
  @media (min-width: 400px) {
    margin-left: 59px;
  }
  margin-top: 63px;
  @media (max-width: 400px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
const ThirdDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  width: 368px;
  height: 302px;
  align-self: center;
  @media (min-width: 400px) {
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 26px 0px;
  }
  margin-top: 20px; //바꿔
  margin-bottom: 20px; //바꿔
  gap: 26px 0px; //바꿔
`;
const BankFirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BankText = styled.h1`
  color: black;
  font-size: 20px;
  font-weight: bold;
  width: 80px;
  height: 29px;
  margin-left: 23.5px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  width: 5px;
  height: 10px;
  align-self: center;
  @media (min-width: 400px) {
    margin-right: 23.5px;
  }
  margin-right: 23.5px; //바꿔
  img {
    object-fit: cover;
  }
`;
const BankMiddleDiv = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;
const WonContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: 23.5px;

  img {
    object-fit: cover;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  height: 41px;
  flex-direction: column;
  gap: 1px 0px;
  padding-left: 14px;
`;
const MoneyText = styled.text`
  height: 16px;
  width: 214px;
  font-size: 13px;
  color: #8790a1;
  font-weight: 600;
`;
const MoneyAmount = styled.text`
  height: 24px;
  width: 214px;
  font-size: 20px;
  color: black;
  font-weight: 700;
`;
const SendContainer = styled.div`
  position: relative;
  display: flex;
  width: 53px;
  height: 30px;
`;
const DollarContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: 23.5px;

  img {
    object-fit: cover;
  }
`;
const LineDiv = styled.div`
  display: flex;
  background-color: #f2f4f6;
  margin-left: 23.5px;
  @media (min-width: 400px) {
    width: 321px;
  }
  height: 1px;

  width: 321px; //바꿔
`;
const QuestionContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: 23.5px;

  img {
    object-fit: cover;
  }
`;

const FourthDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  width: 457px;
  height: 168px;
  margin-left: 52px;
  position: static;
  position: sticky;
`;
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  width: 135px;
  height: 168px;
  justify-content: space-between;
`;
const MoneyAccount = styled.text`
  height: 24px;
  width: 214px;
  font-size: 20px;
  color: black;
  font-weight: 700;
  word-break: break-all;
`;
const MoneyContainer = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 55px;
  margin-left: 60px;
  margin-bottom: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const MoneyGapDiv = styled.div`
  gap: 1px;
  flex-direction: column;
  display: flex;
  margin-left: 15px;
  margin-top: 25px;
`;

const App: React.FC = () => (
  <EntireDiv>
    <FirstDiv>
      <LogoContainer>
        <img src={Logo} />
      </LogoContainer>
      <GapDiv>
        <CloudContainer>
          <img src={Cloud} />
        </CloudContainer>
        <PinContainer>
          <img src={Pin} />
        </PinContainer>
      </GapDiv>
    </FirstDiv>
    <SecondDiv>
      <ImageContainer>
        <img src={image} />
        <ImageText>새로운 두부를 만나보세요.</ImageText>
      </ImageContainer>
    </SecondDiv>
    <ThirdDiv>
      <BankFirstDiv>
        <BankText>두부뱅크</BankText>
        <ArrowContainer>
          <img src={Arrow} />
        </ArrowContainer>
      </BankFirstDiv>
      <BankMiddleDiv>
        <WonContainer>
          <img src={Won} />
        </WonContainer>
        <ContentContainer>
          <MoneyText>두부머니</MoneyText>
          <MoneyAmount>2,000,000원</MoneyAmount>
        </ContentContainer>
        <SendContainer>
          <img src={Send} />
        </SendContainer>
      </BankMiddleDiv>
      <BankMiddleDiv>
        <DollarContainer>
          <img src={Dollar} />
        </DollarContainer>
        <ContentContainer>
          <MoneyText>두부머니</MoneyText>
          <MoneyAmount>800원</MoneyAmount>
        </ContentContainer>
        <SendContainer>
          <img src={Send} />
        </SendContainer>
      </BankMiddleDiv>
      <LineDiv></LineDiv>
      <BankMiddleDiv>
        <QuestionContainer>
          <img src={Questionmark} />
        </QuestionContainer>
        <ContentContainer>
          <MoneyText>공인중개사 합격은</MoneyText>
          <MoneyAmount>에듀윌</MoneyAmount>
        </ContentContainer>
      </BankMiddleDiv>
    </ThirdDiv>
    <FourthDiv>
      <CardDiv>
        <MoneyGapDiv>
          <MoneyText>내 자산</MoneyText>
          <MoneyAccount>
            두부자산 <br />
            취합해 보기
          </MoneyAccount>
        </MoneyGapDiv>
        <MoneyContainer>
          <img src={Moneybag} />
        </MoneyContainer>
      </CardDiv>
      <CardDiv>
        <MoneyGapDiv>
          <MoneyText>내 자산 아님</MoneyText>
          <MoneyAccount>
            두부자산 <br />
            취합해 보기
          </MoneyAccount>
        </MoneyGapDiv>
        <MoneyContainer>
          <img src={Money} />
        </MoneyContainer>
      </CardDiv>
      <CardDiv>
        <MoneyGapDiv>
          <MoneyText>사실 네 자산임</MoneyText>
          <MoneyAccount>
            두부자산 <br />
            취합해 보기
          </MoneyAccount>
        </MoneyGapDiv>
        <MoneyContainer>
          <img src={Flyingmoney} />
        </MoneyContainer>
      </CardDiv>
    </FourthDiv>
  </EntireDiv>
);

export default App;

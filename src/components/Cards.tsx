import Flyingmoney from "src/assets/flyingmoney.png";
import Money from "src/assets/money.png";
import Moneybag from "src/assets/moneybag.png";
import styled from "styled-components";

import { MoneyText } from "./Banks";

const Cards = () => {
  return (
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
  );
};

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

export default Cards;

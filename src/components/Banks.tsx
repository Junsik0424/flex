import Arrow from "src/assets/arrow.svg";
import Dollar from "src/assets/dollar.svg";
import Questionmark from "src/assets/questionmark.svg";
import Send from "src/assets/send.svg";
import Won from "src/assets/won.svg";
import styled from "styled-components";

const Banks = () => {
  return (
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
  );
};

const ThirdDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 20px;

  /* width: 368px; */
  /* height: 302px; */
  width: 100%;

  align-self: center;

  margin-top: 20px; //바꿔
  margin-bottom: 20px; //바꿔
  gap: 26px 0px; //바꿔
  // 음 사실 굳이 이 부분을 바꿀 필요는 없어..보이네요 ㅎㅎ

  padding: 20px 22px 30px 25px; // ThirdDiv 내의 상하좌우 여백을 이렇게 넣었습니다.
  box-sizing: border-box;
`;

// 이 밑 부분은 건드리지 않았는데,
// 1. BankFirstDiv, BankMiddleDiv안 아이콘에 적용된 margin 없애기
// 2. MoneyAmount, MoneyText의 width를 고정시키지 말고 flex-grow 방식으로 늘리기
// 이렇게 적용해보시면 좋을 것 같아요!
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
export const MoneyText = styled.text`
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

export default Banks;

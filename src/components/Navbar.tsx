import Cloud from "src/assets/cloud.svg";
import Logo from "src/assets/logo.svg";
import Pin from "src/assets/pin.svg";
import styled from "styled-components";

const Navbar = () => {
  return (
    <FirstDiv>
      <LogoContainer>
        <img src={Logo} />
      </LogoContainer>
      <GapDiv>
        <IconContainer>
          <img src={Cloud} />
        </IconContainer>
        <IconContainer>
          <img src={Pin} />
        </IconContainer>
      </GapDiv>
    </FirstDiv>
  );
};

const FirstDiv = styled.div`
  display: flex;
  /* flex-direction: row; - flex-direction은 사실 기본 설정이 row이므로 이걸 따로 적어줄필요는 없을것같아요 */
  justify-content: center;
  width: 100%;

  padding: 20px 16px 15px 16px;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  width: 86px;
  height: 54px;
  display: flex;
  align-self: center;

  /* margin-right: 200px; - 여백을 유동적으로 주려면, flex-grow 속성을 이용해보면 좋습니다 */
  flex-grow: 1;
`;

const GapDiv = styled.div`
  gap: 20px;
  display: flex;
  /* flex-direction: row; */
`;

// CloudContainer와 PinContainer는 완전히 기능이 중복되므로 그냥 IconContainer로 합쳤습니다.
const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-self: center;
`;

export default Navbar;

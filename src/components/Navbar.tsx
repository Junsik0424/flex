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
        <CloudContainer>
          <img src={Cloud} />
        </CloudContainer>
        <PinContainer>
          <img src={Pin} />
        </PinContainer>
      </GapDiv>
    </FirstDiv>
  );
};

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

export default Navbar;

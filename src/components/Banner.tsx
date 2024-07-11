import image from "src/assets/image.png";
import styled from "styled-components";

const Banner = () => {
  return (
    <SecondDiv>
      <ImageContainer>
        <img src={image} />
        <ImageText>새로운 두부를 만나보세요.</ImageText>
      </ImageContainer>
    </SecondDiv>
  );
};

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

export default Banner;

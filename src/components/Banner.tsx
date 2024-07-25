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
  width: 100%;
`;

// 이 부분에서는 ImageContainer로 이미지를 입힌 다음에, 그 위에 position:absolute로 텍스트를 입히셨군요.
// 이렇게 하면 텍스트 중앙정렬이 힘들어지니, background-image 속성을 활용해보면 어떨까요??
// 직접 찾아보시고 해 보시면 좋을 것 같아요!
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

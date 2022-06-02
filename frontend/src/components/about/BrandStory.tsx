import styled from "styled-components";
import media from "styles/media";
import { BrandStoryImg } from "assets/images";

function BrandStory() {
  return (
    <BrandStoryWrapper>
      <Title>Brand Story</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
        enim sit amet arcu posuere dapibus. Maecenas scelerisque iaculis eros,
        in viverra quam. Morbi eget ante nisi. In molestie ornare erat id
        fermentum. Vivamus luctus nec nulla vitae euismod. Donec lectus metus,
        rhoncus a ante lacinia, viverra sodales justo. Suspendisse tincidunt
        purus nec diam sodales dictum. Suspendisse tristique augue nec enim
        egestas
      </Description>
      <MainImage src={BrandStoryImg} alt="brand-story-main"></MainImage>
    </BrandStoryWrapper>
  );
}

export default BrandStory;

const BrandStoryWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.medium} {
    margin-top: 60px;
    width: 100%;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  margin-bottom: 20px;

  ${media.medium} {
    font-size: ${({ theme }) => theme.fontSize.subTitle}px;
    width: 100%;
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;

const Description = styled.span`
  width: 60%;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  text-align: center;
  ${media.medium} {
    width: 100%;
    margin-left: 10px;
    text-align: start;
  }
`;

const MainImage = styled.img`
  width: 50%;
  ${media.medium} {
    width: 100%;
  }
`;

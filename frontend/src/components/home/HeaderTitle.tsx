import styled from "styled-components";
import media from "styles/media";

interface IHeaderTitleProps {
  title?: string;
}
function HeaderTitle({ title }: IHeaderTitleProps) {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  );
}

export default HeaderTitle;

const TitleContainer = styled.div`
  display: none;
  ${media.medium} {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.subTitle}px;
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    margin-top: 60px;
    justify-content: center;
    border-bottom: #d3d3d3 1px solid;
  }
`;
const Title = styled.h1``;

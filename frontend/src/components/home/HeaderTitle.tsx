import { useNavigate } from "react-router";
import styled from "styled-components";
import media from "styles/media";
interface IHeaderTitleProps {
  title?: string;
}
function HeaderTitle({ title }: IHeaderTitleProps) {
  const navigate = useNavigate();

  return (
    <TitleContainer>
      <BackIcon onClick={() => navigate(-1)}>🔙</BackIcon>
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

const BackIcon = styled.div`
  position: absolute;
  left: 0;
  margin-left: 10px;
  cursor: pointer;
`;

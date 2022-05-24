import styled from "styled-components";
import media from "styles/media";

function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <MainLogo>Pulkkot Village</MainLogo>
        <Information>사업자 등록번호: 123-45-67890</Information>
        <Information>소재지: 광주 광산구 수완로10번길 28</Information>
        <Description>
          고객센터: 0507-1476-8842 (평일 10:00-13:00, 14:00-18:00)
        </Description>
        <Description>© 2022 Pulkkot Village All rights reserved.</Description>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  height: 200px;
  bottom: 0;
  width: 100%;
  position: relative;
  transform: translateY(100%);
  background-color: ${({ theme }) => theme.colors.black};
  ${media.medium} {
    height: 250px;
  }
  color: #e2dfdff4;
`;

const FooterInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const MainLogo = styled.div`
  font-size: ${({ theme }) => theme.fontSize.subTitle}px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize.text}px;
  margin-bottom: 10px;
`;

const Information = styled.span`
  width: 80%;
  font-size: ${({ theme }) => theme.fontSize.text}px;
  margin-bottom: 10px;
`;

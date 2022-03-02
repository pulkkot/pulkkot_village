import styled from "styled-components";
import main_page_img_1 from "assets/images/main_page_img_1.jpg";
import main_page_img_5 from "assets/images/main_page_img_5.jpg";
import main_page_img_4 from "assets/images/main_page_img_4.jpg";
import main_page_img_2 from "assets/images/main_page_img_2.jpg";

function MainContents() {
  return (
    <MainContentsContainer>
      <MainContentItem href="/">
        <MainImage src={main_page_img_1} />
      </MainContentItem>
      <MainContentItem href="/products">
        <MainImage src={main_page_img_5} />
      </MainContentItem>
      <MainContentItem href="/articles">
        <MainImage src={main_page_img_4} />
      </MainContentItem>
      <MainContentItem href="/">
        <MainImage src={main_page_img_2} />
      </MainContentItem>
    </MainContentsContainer>
  );
}

export default MainContents;

const MainContentsContainer = styled.div``;
const MainImage = styled.img`
  width: 100%;
  margin-bottom: 200px;
  margin-top: 50px;
  box-shadow: 5px 5px 20px #f1ecec;
`;

const MainContentItem = styled.a``;

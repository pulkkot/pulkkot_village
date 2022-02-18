import styled from "styled-components";
import main_page_img_1 from "assets/img/main_page_img_1.jpg";
import main_page_img_5 from "assets/img/main_page_img_5.jpg";
import main_page_img_4 from "assets/img/main_page_img_4.jpg";
import main_page_img_2 from "assets/img/main_page_img_2.jpg";

function MainContents() {
  return (
    <MainContentsContainer>
      <MainImage src={main_page_img_1} />
      <MainImage src={main_page_img_5} />
      <MainImage src={main_page_img_4} />
      <MainImage src={main_page_img_2} />
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

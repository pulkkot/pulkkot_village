import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import main_page_img_3 from "assets/images/main_page_img_3.jpg";
import main_page_img_4 from "assets/images/main_page_img_4.jpg";
import main_page_img_2 from "assets/images/main_page_img_2.jpg";

function MainCarousel() {
  return (
    <CarouselWrapper>
      <Carousel
        autoPlay={true}
        interval={3000}
        transitionTime={1000}
        emulateTouch={true}
        infiniteLoop={true}
      >
        <div>
          <img src={main_page_img_3} alt="img" />
          <p className="legend">flower class</p>
        </div>
        <div>
          <img src={main_page_img_2} alt="img" />
          <p className="legend">flower project</p>
        </div>
        <div>
          <img src={main_page_img_4} alt="img" />
          <p className="legend">flower products</p>
        </div>
      </Carousel>
    </CarouselWrapper>
  );
}

export default MainCarousel;

const CarouselWrapper = styled.div`
  margin-top: 100px;
  cursor: pointer;
`;

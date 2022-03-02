import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { MainImg_2 } from "assets/images";
import { MainImg_4 } from "assets/images";
import media from "styles/media";

function MainCarousel() {
  return (
    <CarouselWrapper>
      <Carousel
        autoPlay={true}
        interval={3000}
        transitionTime={1000}
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={MainImg_4} alt="img" />
          <p className="legend">flower class</p>
        </div>
        <div>
          <img src={MainImg_2} alt="img" />
          <p className="legend">flower project</p>
        </div>
        <div>
          <img src={MainImg_4} alt="img" />
          <p className="legend">flower products</p>
        </div>
        <div>
          <img src={MainImg_2} alt="img" />
          <p className="legend">flower project</p>
        </div>
      </Carousel>
    </CarouselWrapper>
  );
}

export default MainCarousel;

const CarouselWrapper = styled.div`
  margin-top: 100px;
  cursor: pointer;
  width: 900px;
  ${media.medium} {
    margin-top: 60px;
    width: 100%;
  }
`;

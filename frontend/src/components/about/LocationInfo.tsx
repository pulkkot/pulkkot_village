import styled from "styled-components";
import { StoreLocation } from "assets/images";
import media from "styles/media";

function LocationInfo() {
  return (
    <LocationInfoWrapper>
      <LocationTitle>Store Location</LocationTitle>
      <LocationSubTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </LocationSubTitle>
      <MapAnchor
        href="http://naver.me/5U1F2JUu"
        rel="noreferrer"
        target="_blank"
      >
        <LocationImage src={StoreLocation} />
      </MapAnchor>
    </LocationInfoWrapper>
  );
}

export default LocationInfo;

const LocationInfoWrapper = styled.div`
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

const LocationTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  margin-bottom: 20px;

  ${media.medium} {
    font-size: ${({ theme }) => theme.fontSize.subTitle}px;
    width: 100%;
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;

const MapAnchor = styled.a`
  display: flex;
  justify-content: center;
`;

const LocationSubTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  ${media.medium} {
    margin-left: 10px;
  }
`;

const LocationImage = styled.img`
  width: 70%;
  cursor: pointer;
  ${media.medium} {
    width: 100%;
  }
`;

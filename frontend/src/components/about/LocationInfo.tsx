import styled from "styled-components";
import { StoreLocation } from "assets/images";
import media from "styles/media";

function LocationInfo() {
  return (
    <LocationInfoWrapper>
      <LocationTitle>Store Location</LocationTitle>
      <LocationSubTitle>
        풀꽃빌리지 OPEN 월요일-일요일, 오전 11시 - 오후 8시
      </LocationSubTitle>
      <LocationSubTitle>
        ADDRESS 광주광역시 광산구 수완로10번길 28
      </LocationSubTitle>
      <LocationSubTitle>
        E-MAIL hipulkkot@gmail.com INSTAGRAM 쇼룸계정 @pulkkot_village 식물계정
        @pulkkot_village_plant
      </LocationSubTitle>
      <LocationSubTitle>TEL 062-962-8813</LocationSubTitle>
      <LocationSubTitle>
        PULKKOT VILLAGE OPEN MONDAY-SUNDAY, 11AM - 8PM ADDRESS 28, 10BEON-GIL
        SUWAN-RO GWANGSAN-GU, GWANGJU REPUBLIC OF KOREA E-MAIL
        hipulkkot@gmail.com INSTAGRAM SHOWROOM @pulkkot_village PLANT
        @pulkkot_village_plant
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
  width: 60%;
  text-align: center;
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

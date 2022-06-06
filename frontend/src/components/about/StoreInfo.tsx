import styled from "styled-components";
import { StoreLocation } from "assets/images";
import media from "styles/media";
import { IStoreInfo } from "types/storeInfo";

const infos: IStoreInfo[] = [
  {
    open: "월요일-일요일, 오전 11시 - 오후 8시",
    address: "광주광역시 광산구 수완로10번길 28",
    email: "hipulkkot@gmail.com",
    instagram: "@pulkkot_village  / @pulkkot_village_plant",
    tel: "062-962-8813",
  },
  {
    open: "MONDAY-SUNDAY, 11AM - 8PM",
    address: "28, 10BEON-GILSUWAN-RO GWANGSAN-GU",
    email: "hipulkkot@gmail.com",
    instagram: "@pulkkot_village  / @pulkkot_village_plant",
    tel: "062-962-8813",
  },
];

function StoreInfo() {
  return (
    <StoreInfoWrapper>
      <StoreInfoTitle>Store Info</StoreInfoTitle>
      {infos?.map((info: IStoreInfo) =>
        Object.keys(info).map((key: string) => (
          <StoreInfoBox>
            <StoreInfoSubtitle>{key.toUpperCase()}</StoreInfoSubtitle>
            <StoreInfoContent>{info[key]}</StoreInfoContent>
          </StoreInfoBox>
        ))
      )}

      <MapAnchor
        href="http://naver.me/5U1F2JUu"
        rel="noreferrer"
        target="_blank"
      >
        <LocationImage src={StoreLocation} />
      </MapAnchor>
    </StoreInfoWrapper>
  );
}

export default StoreInfo;

const StoreInfoWrapper = styled.div`
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

const StoreInfoTitle = styled.h1`
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

const StoreInfoBox = styled.div`
  width: 50%;
  display: flex;
  ${media.medium} {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;

const StoreInfoSubtitle = styled.span`
  margin-right: 10px;
`;

const StoreInfoContent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 10px;
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

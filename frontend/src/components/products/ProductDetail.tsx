import { Viewer } from "@toast-ui/react-editor";
import axios from "axios";
import Button from "components/common/Button";
import { Toggle } from "components/common/Toggle";
import HeaderTitle from "components/HeaderTitle";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import media from "styles/media";
import { IProduct } from "types/product";
import { comma } from "utils/comma";

function ProductDetail() {
  const [productInfo, setProductInfo] = useState<IProduct>();
  const [quantity, setQuantity] = useState(1);
  const [toggleChecked, setToggleChecked] = useState(true);

  const params = useParams();
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/products/${params.id}`
      );
      setProductInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <ProductDetailContainer>
        <HeaderTitle title={productInfo?.name} />
        <ImageContainer>
          <ThumbnailImg src={productInfo?.thumbnail_image} />
        </ImageContainer>

        <ProductInfo>
          <Title>{productInfo?.name}</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SubTitle>
        </ProductInfo>
        {/* <SubTitle>
            {productInfo ? comma(productInfo.price * quantity) : null}원
          </SubTitle>

          <Quantity>
            <Content> 수량 : {quantity} </Content>
            <PairButton>
              <Button
                variant="secondary"
                width="30px"
                height="30px"
                borderRadius="50px"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </Button>
              <Button
                variant="secondary"
                width="30px"
                height="30px"
                borderRadius="50px"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </PairButton>
          </Quantity>

          <ReceiverWay>
            <SubTitle>
              수령 방법 : {toggleChecked ? "택배 배송" : "매장 픽업"}
            </SubTitle>

            <Toggle
              checked={toggleChecked}
              onChange={() => setToggleChecked(!toggleChecked)}
            />
          </ReceiverWay>

          <ButtonWrapper>
            <Button variant="primary" width="200px" height="50px">
              구매하기
            </Button>
            <Button variant="primary" width="200px" height="50px">
              장바구니
            </Button>
          </ButtonWrapper> */}
      </ProductDetailContainer>
      <Description>
        {productInfo && <Viewer initialValue={productInfo.description} />}
      </Description>
    </Wrapper>
  );
}

export default ProductDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const ProductDetailContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.medium} {
    margin-top: 0;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  ${media.medium} {
    width: 100%;
  }
`;
const ThumbnailImg = styled.img`
  width: 100%;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 300px;
  padding-left: 40px;
  ${media.medium} {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #363636;
  height: 20%;
`;
const SubTitle = styled.h3`
  font-size: 22px;
  color: #363636;
  height: 20%;
`;

const Content = styled.h3`
  font-size: 22px;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;

const Description = styled.div`
  margin-top: 200px;
  width: 70%;
`;

const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20%;
`;

const PairButton = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;

const ReceiverWay = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
`;

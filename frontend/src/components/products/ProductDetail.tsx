import { Viewer } from "@toast-ui/react-editor";
import axios from "axios";
import Button from "components/common/Button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { IProduct } from "types/product";
import { comma } from "utils/comma";

function ProductDetail() {
  const [productInfo, setProductInfo] = useState<IProduct>();
  const [quantity, setQuantity] = useState(0);
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

  const onClickQuntity = (e: React.MouseEvent<HTMLButtonElement>) => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <ProductDetailContainer>
        <ImageContainer>
          <ThumbnailImg src={productInfo?.thumbnail_image} />
        </ImageContainer>

        <ProductInfo>
          <Title>{productInfo?.name}</Title>
          <Price>{productInfo ? comma(productInfo.price) : null}원</Price>
          <Quantity>
            <Content> 수량 {quantity} </Content>
            <Button
              variant="secondary"
              width="30px"
              height="30px"
              borderRadius="50px"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
            <Button
              variant="secondary"
              width="30px"
              height="30px"
              borderRadius="50px"
              onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
            >
              -
            </Button>
          </Quantity>
          <ButtonWrapper>
            <Button variant="primary" width="200px" height="50px">
              구매하기
            </Button>
            <Button variant="primary" width="200px" height="50px">
              장바구니
            </Button>
          </ButtonWrapper>
        </ProductInfo>
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
`;
const ProductDetailContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div``;
const ThumbnailImg = styled.img`
  width: 550px;
  height: 550px;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 550px;
  height: 300px;
  padding-left: 40px;
  /* border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #e9e5e5; */
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #363636;
`;
const Price = styled.h3`
  font-size: 22px;
  color: #363636;
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

const Quantity = styled.div``;

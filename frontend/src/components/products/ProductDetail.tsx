/* eslint-disable react-hooks/exhaustive-deps */
import { Viewer } from "@toast-ui/react-editor";
import axios from "axios";
import HeaderTitle from "components/home/HeaderTitle";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import media from "styles/media";
import { IProduct } from "types/product";

function ProductDetail() {
  const [productInfo, setProductInfo] = useState<IProduct>();
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
    padding-left: 20px;
    height: 90px;
    width: 100%;
    justify-content: center;
    padding-top: 10px;
  }
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  font-weight: 600;
  color: #363636;
  height: 20%;
  ${media.medium} {
    height: 50%;
  }
`;
const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.content}px;
  color: ${({ theme }) => theme.colors.primary};
  height: 20%;
  ${media.medium} {
    height: 30%;
  }
`;

const Description = styled.div`
  margin-top: 200px;
  width: 70%;
`;

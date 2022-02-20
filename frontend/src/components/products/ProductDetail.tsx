import { Viewer } from "@toast-ui/react-editor";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled, { ThemeConsumer } from "styled-components";
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
    <ProductDetailContainer>
      <Title>{productInfo?.name}</Title>
      <ThumbnailImg src={productInfo?.thumbnail_image} />
      <Price>{productInfo?.price}won</Price>
      <Description>
        {productInfo && <Viewer initialValue={productInfo.description} />}
      </Description>
    </ProductDetailContainer>
  );
}

export default ProductDetail;

const ProductDetailContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ThumbnailImg = styled.img`
  width: 200px;
  height: 250px;
`;

const Title = styled.h1`
  font-size: 20px;
`;
const Price = styled.h1`
  font-size: 20px;
`;

const Description = styled.div`
  margin-top: 100px;
`;

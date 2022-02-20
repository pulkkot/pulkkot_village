import styled from "styled-components";
import { IProduct } from "types/product";

function ProductItem({
  name,
  thumbnail_image,
  description,
  price,
  stock,
}: IProduct) {
  return (
    <ProductContainer>
      <ProductImage src={thumbnail_image} />
      <ProductInfoBox>
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>{price}won</ProductPrice>
      </ProductInfoBox>
    </ProductContainer>
  );
}

export default ProductItem;

const ProductContainer = styled.div`
  width: 400px;
  height: 480px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 380px;
  height: 380px;
`;

const ProductInfoBox = styled.div`
  width: 380px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.text}px;
`;

const ProductPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallText}px;
`;

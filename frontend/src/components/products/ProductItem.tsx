import { Link } from "react-router-dom";
import styled from "styled-components";
import { IProduct } from "types/product";
import { comma } from "utils/comma";

function ProductItem({
  id,
  name,
  thumbnail_image,
  description,
  price,
  stock,
}: IProduct) {
  return (
    <Link to={`/products/${id}`}>
      <ProductContainer>
        <ProductImage src={thumbnail_image} />
        <ProductInfoBox>
          <ProductTitle>{name}</ProductTitle>
          <ProductPrice>{comma(price)}won</ProductPrice>
        </ProductInfoBox>
      </ProductContainer>
    </Link>
  );
}

export default ProductItem;

const ProductContainer = styled.div`
  width: 410px;
  height: 480px;
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
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.text}px;
  font-weight: 600;
  color: #363636;
`;

const ProductPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallText}px;
  margin-top: 15px;
`;

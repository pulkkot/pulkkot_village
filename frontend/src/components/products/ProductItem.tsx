import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styles/media";
import { IProduct } from "types/product";

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
          <ProductSubTitle> Lorem ipsum dolor sit amet</ProductSubTitle>
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
  ${media.medium} {
    width: 210px;
    height: 260px;
    margin-bottom: 20px;
  }
`;

const ProductImage = styled.img`
  width: 380px;
  height: 380px;
  ${media.medium} {
    width: 200px;
    height: 200px;
  }
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

const ProductSubTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.smallText}px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.primary};
  ${media.medium} {
    margin-top: 5px;
  }
`;

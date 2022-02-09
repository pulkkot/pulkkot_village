import styled from "styled-components";
import flower from "assets/img/flower.jpg";
// @props 받아서 상품 정보 보여주기
function ProductItem() {
  return (
    <ProductContainer>
      <ProductImage src={flower} />
      <ProductInfoBox>
        <ProductTitle>베로나 블랙 꽃다발</ProductTitle>
        <ProductPrice>88,000 won</ProductPrice>
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

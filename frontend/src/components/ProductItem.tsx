import styled from "styled-components";

function ProductItem() {
  return (
    <ProductContainer>
      <ProductImage />
      <ProductInfo />
    </ProductContainer>
  );
}

export default ProductItem;

const ProductContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid gray;
`;

const ProductImage = styled.div`
  width: 100px;
  height: 50px;
  border: 3px solid red;
`;

const ProductInfo = styled.div`
  width: 100px;
  height: 50px;
  border: 3px solid blue;
`;

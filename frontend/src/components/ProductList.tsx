import styled from "styled-components";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <ProductListContainer>
      <ProductListRow>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductListRow>
      <ProductListRow>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductListRow>
    </ProductListContainer>
  );
}

export default ProductList;

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductListRow = styled.div`
  display: flex;
`;

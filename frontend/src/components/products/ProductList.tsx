import styled from "styled-components";
import ProductItem from "./ProductItem";
import axios from "axios";

function ProductList() {
  
  const getArticles = async () => {
    const response = await axios.get('articles')
    console.log(response)
  }
  return (
    <ProductListContainer>
      <button onClick={getArticles} >GET</button>
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

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { IProduct } from "types/product";
import ProductItem from "./ProductItem";

function ProductList() {
  const [productList, setProductList] = useState<IProduct[]>();
  const getProductList = async () => {
    const response = await axios.get("/products");
    setProductList(response.data);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <ProductListWrapper>
      {/* <Title>Products</Title> */}
      <ProductListContainer>
        {productList?.map((item) => (
          <ProductItem
            key={`product_list_${item.id}`}
            id={item.id}
            name={item.name}
            description={item.description}
            thumbnail_image={item.thumbnail_image}
            price={item.price}
            stock={item.stock}
          ></ProductItem>
        ))}
      </ProductListContainer>
    </ProductListWrapper>
  );
}

export default ProductList;

const ProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

const Title = styled.h1`
  font-size: 25px;
`;

const ProductListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

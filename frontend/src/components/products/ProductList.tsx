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
    <ProductListContainer>
      <ProductListRow>
        {productList?.map((item) => (
          <ProductItem
            name={item.name}
            description={item.description}
            thumbnail_image={item.thumbnail_image}
            price={item.price}
            stock={item.stock}
          ></ProductItem>
        ))}
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

const ProductListRow = styled.ul`
  display: flex;
`;

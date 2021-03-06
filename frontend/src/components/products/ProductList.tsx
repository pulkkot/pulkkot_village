import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { IProduct } from "types/product";
import ProductItem from "./ProductItem";
import media from "styles/media";
import HeaderTitle from "components/home/HeaderTitle";

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
      <Title>
        <h1>Flowers</h1>
      </Title>
      <HeaderTitle title="Flowers" />
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
  margin-top: 100px;
  ${media.medium} {
    margin-top: 0;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.medium} {
    display: none;
  }
`;

const ProductListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

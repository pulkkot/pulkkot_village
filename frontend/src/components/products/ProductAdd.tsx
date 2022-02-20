import axios from "axios";
import Button from "components/common/Button";
import Input from "components/common/Input";
import ToastEditor from "components/editor/ToastEditor";
import { useState } from "react";
import styled from "styled-components";

function ProductAdd() {
  const [productName, setProductName] = useState("");
  const [thumbnailImg, setThumbnailImg] = useState<File>();
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [content, setContent] = useState<string | undefined>("");

  const onChangeContent = (e: string | undefined) => {
    setContent(e);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct();
  };

  const addProduct = async () => {
    const formData = new FormData();
    formData.append("name", productName);
    thumbnailImg && formData.append("thumbnail_image", thumbnailImg);
    content && formData.append("description", content);
    formData.append("price", price);
    formData.append("stock", stock);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/products/",
        formData,
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductAddContainer>
      <Form onSubmit={onSubmit}>
        <Label>
          상품명
          <Input
            width="400px"
            height="50px"
            placeholder="상품명을 입력하세요"
            onChange={(e) => setProductName(e.target.value)}
          />
        </Label>
        <Label>
          썸네일 이미지
          <Input
            width="400px"
            height="50px"
            placeholder="썸네일을 입력하세요"
            type="file"
            onChange={(e) =>
              e.target.files && setThumbnailImg(e.target.files[0])
            }
          />
        </Label>

        <Label>
          가격
          <Input
            width="400px"
            height="50px"
            placeholder="가격을 입력하세요"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Label>
        <Label>
          재고
          <Input
            width="400px"
            height="50px"
            placeholder="재고를 입력하세요"
            onChange={(e) => setStock(e.target.value)}
          />
        </Label>
        <Button variant="secondary" width="100px" height="50px">
          작성 완료
        </Button>
      </Form>
      <ToastEditor onChangeContent={onChangeContent} />
    </ProductAddContainer>
  );
}

export default ProductAdd;

const ProductAddContainer = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label``;

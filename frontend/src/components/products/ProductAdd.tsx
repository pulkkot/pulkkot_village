import axios from "axios";
import Button from "components/common/Button";
import Input from "components/common/Input";
import ToastEditor from "components/editor/ToastEditor";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function ProductAdd() {
  const [productName, setProductName] = useState("");
  const [thumbnailImg, setThumbnailImg] = useState<File>();
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [content, setContent] = useState<string | undefined>("");
  const navigate = useNavigate();

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
      alert("상품 정보가 등록됐습니다.");
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductAddContainer>
      <Form onSubmit={onSubmit}>
        <Input
          height="50px"
          placeholder="상품명을 입력하세요"
          onChange={(e) => setProductName(e.target.value)}
        />
        <Input
          height="50px"
          placeholder="가격을 입력하세요"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          height="50px"
          placeholder="재고를 입력하세요"
          onChange={(e) => setStock(e.target.value)}
        />
        <ImageInputBox>
          <Label htmlFor="thumbnail">썸네일 선택</Label>
          {thumbnailImg && <ImagePreview>{thumbnailImg.name}</ImagePreview>}
          <ImageInput
            height="50px"
            placeholder="썸네일을 입력하세요"
            type="file"
            id="thumbnail"
            onChange={(e) =>
              e.target.files && setThumbnailImg(e.target.files[0])
            }
          />
        </ImageInputBox>

        <Button variant="secondary" height="50px">
          작성 완료
        </Button>
      </Form>
      <ToastEditor onChangeContent={onChangeContent} />
    </ProductAddContainer>
  );
}

export default ProductAdd;

const ProductAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 100px;
  width: 500px;
`;
const Label = styled.label`
  display: inline-block;
  padding: 0.75em 0.75em;
  color: #999;
  font-size: inherit;
  line-height: normal;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25em;
  width: 30%;
  text-align: center;
  height: 50px;
`;
const ImageInput = styled(Input)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const ImageInputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImagePreview = styled.div`
  width: 100%;
`;

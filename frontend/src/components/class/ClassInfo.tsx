import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
import ToastEditor from "../editor/ToastEditor";

function ClassInfo() {
  const [content, setContent] = useState<string | undefined>("");
  const [className, setClassName] = useState("");
  const [thumbnailImg, setThumbnailImg] = useState<File>();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassName(e.target.value);
  };

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setThumbnailImg(e.target.files[0]);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postClassInfo();
  };

  const onChangeContent = (e: string | undefined) => {
    setContent(e);
  };

  const postClassInfo = async () => {
    const formData = new FormData();
    thumbnailImg && formData.append("thumbnail_image", thumbnailImg);
    formData.append("title", className);
    content && formData.append("content", content);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/articles/",
        formData,
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(thumbnailImg);
  }, [thumbnailImg]);

  return (
    <ClassInfoContainer>
      <Form onSubmit={onSubmit}>
        <Button variant="primary" height="50px">
          작성 완료
        </Button>

        <Input
          height="50px"
          placeholder="클래스명을 입력하세요"
          onChange={onChangeTitle}
          required
        />

        <ImageInputBox>
          <Label htmlFor="thumbnail">썸네일 선택</Label>
          {thumbnailImg && <ImagePreview>{thumbnailImg.name}</ImagePreview>}
          <ImageInput
            height="50px"
            type="file"
            onChange={onUploadImage}
            required
            id="thumbnail"
          />
        </ImageInputBox>
      </Form>
      <ToastEditor onChangeContent={onChangeContent} />
    </ClassInfoContainer>
  );
}

export default ClassInfo;

const ClassInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 200px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 100px;
  width: 500px;
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

const ImageInputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImagePreview = styled.div`
  width: 100%;
`;

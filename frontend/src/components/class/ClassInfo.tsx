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
        <Label>
          클래스명
          <Input
            width="400px"
            height="50px"
            placeholder="클래스명을 입력하세요"
            onChange={onChangeTitle}
          />
        </Label>
        <ThumbnailImage>
          썸네일 이미지
          <ImageInput
            width="400px"
            height="50px"
            type="file"
            onChange={onUploadImage}
          />
        </ThumbnailImage>
        <Button variant="secondary" width="100px" height="50px">
          작성 완료
        </Button>
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
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const ThumbnailImage = styled.div``;

const ImageInput = styled(Input)``;

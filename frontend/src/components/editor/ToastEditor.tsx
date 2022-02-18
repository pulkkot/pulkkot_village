import React, { createRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// Toast UI Editor 모듈 추가
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

// SyntaxHighlight 모듈 추가
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

interface IEditorProps {
  onChangeContent: (e: string | undefined) => void;
}

function ToastEditor({ onChangeContent }: IEditorProps) {
  const editorRef = createRef<Editor>();
  const handleChange = () => {
    // console.log(editorRef.current?.getInstance().getHTML());
    editorRef.current &&
      onChangeContent(editorRef.current?.getInstance().getMarkdown());
  };

  useEffect(() => {
    if (editorRef.current) {
      // 기존에 Image 를 Import 하는 Hook 을 제거한다.
      editorRef.current.getInstance().removeHook("addImageBlobHook");

      // 새롭게 Image 를 Import 하는 Hook 을 생성한다.
      editorRef.current
        .getInstance()
        .addHook("addImageBlobHook", (blob, callback) => {
          (async () => {
            let formData = new FormData();
            formData.append("image", blob);
            console.log("이미지가 업로드 됐습니다.");
            for (var i of formData.keys()) {
              console.log(formData.get(i));
            }
            const { data: filename } = await axios.post(
              "http://localhost:8000/articles/image/",
              formData,
              {
                headers: { "content-type": "multipart/formdata" },
              }
            );
            console.log(filename.image);

            const imageUrl = "http://localhost:8000" + filename.image;

            // Image 를 가져올 수 있는 URL 을 callback 메서드에 넣어주면 자동으로 이미지를 가져온다.
            callback(imageUrl, "image");
          })();

          return false;
        });
    }

    return () => {};
  }, [editorRef]);

  return (
    <EditorContainer>
      <Editor
        initialValue="클래스 정보를 입력해주세요"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        plugins={[colorSyntax]}
        ref={editorRef}
        onChange={handleChange}
      />
    </EditorContainer>
  );
}
export default ToastEditor;

const EditorContainer = styled.div`
  width: 100%;
`;

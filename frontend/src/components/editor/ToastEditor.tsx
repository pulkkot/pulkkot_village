import { useRef, createRef, useEffect } from "react";
import styled from "styled-components";
import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

// Toast UI Editor 모듈 추가
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

// SyntaxHighlight 모듈 추가
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

function ToastEditor() {
  const editorRef = createRef<Editor>();
  const handleChange = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };

  const handleClick = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
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
            formData.append("file", blob);
            console.log("이미지가 업로드 됐습니다.");
            for (var i of formData.keys()) {
              console.log(formData.get(i));
            }
            const data = await axios
              .post("/file/upload", formData, {
                headers: { "content-type": "multipart/formdata" },
              })
              .then((response) => {
                console.log(response);
              });

            // const imageUrl = "http://localhost:8080/file/upload/" + filename;

            // Image 를 가져올 수 있는 URL 을 callback 메서드에 넣어주면 자동으로 이미지를 가져온다.
            // callback(imageUrl, "iamge");
          })();

          return false;
        });
    }

    return () => {};
  }, [editorRef]);

  return (
    <EditorContainer>
      <Editor
        initialValue="hello react editor world!"
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

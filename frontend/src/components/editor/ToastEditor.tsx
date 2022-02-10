import { useRef, createRef } from "react";
import styled from "styled-components";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

function ToastEditor() {
  const editorRef = createRef<Editor>();
  const handleChange = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };
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
  width: "700px";
`;

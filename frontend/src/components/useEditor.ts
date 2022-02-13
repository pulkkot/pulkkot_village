import { useState } from "react";
function useEditor() {
  const [content, setContent] = useState<string | undefined>("");
  const [className, setClassName] = useState("");
  return {
    content,
    setContent,
    className,
    setClassName,
  };
}

export default useEditor;

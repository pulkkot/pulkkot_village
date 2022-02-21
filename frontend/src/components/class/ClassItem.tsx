// import "@toast-ui/editor/dist/toastui-editor-viewer.css";
// import { Viewer } from "@toast-ui/react-editor";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IClass } from "types/class";

function ClassItem({ id, title, thumbnail_image }: IClass) {
  return (
    <Link to={`/articles/${id}`}>
      <ClassContatiner>
        {/* <Viewer initialValue={content} /> */}
        <ThumbnailImage src={thumbnail_image} alt={title}></ThumbnailImage>
        <ClassTitle>{title} </ClassTitle>
      </ClassContatiner>
    </Link>
  );
}

export default ClassItem;

const ClassContatiner = styled.div`
  width: 410px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ClassTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.text}px;
  font-weight: 600;
  color: #363636;
  margin-top: 20px;
`;
const ThumbnailImage = styled.img`
  width: 380px;
  height: 380px;
  /* box-shadow: 5px 5px 20px #dbdada; */
`;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  /* border: 0.5px solid gray; */
`;
const ClassTitle = styled.h2`
  margin-top: 15px;
  font-size: 20px;
`;
const ThumbnailImage = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 5px;
  box-shadow: 5px 5px 20px #f1ecec;
`;

import { useEffect, useState } from "react";
import styled from "styled-components";

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function ProjectDetail() {
  const [photos, setPhotos] = useState<IPhoto[]>();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10")
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);

  useEffect(() => {
    console.log(photos);
  }, [photos]);

  return (
    <ProjectWrapper>
      <ProjectTitle>TEMP PROJECT</ProjectTitle>
      <ProjectContents>
        {photos?.map((photo: IPhoto, index) => {
          return (
            <ProjectBox key={index}>
              <ImageName>{photo.title}</ImageName>
              <Image src={photo.url}></Image>
            </ProjectBox>
          );
        })}
      </ProjectContents>
    </ProjectWrapper>
  );
}

export default ProjectDetail;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.h1`
  margin: 30px;
  font-size: 20px;
`;

const ProjectContents = styled.div``;

const ProjectBox = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageName = styled.p`
  margin: 10px;
`;

const Image = styled.img``;

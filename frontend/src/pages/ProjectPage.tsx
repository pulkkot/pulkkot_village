import MainLayout from "components/home/MainLayout";
import ProjectDetail from "components/projects/ProjectDetail";
import ProjectList from "components/projects/ProjectList";

function ProjectPage() {
  return (
    <MainLayout>
      <ProjectList />
      <ProjectDetail />
    </MainLayout>
  );
}

export default ProjectPage;

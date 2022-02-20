import ClassInfo from "components/class/ClassInfo";
import ClassList from "components/class/ClassList";
import MainLayout from "components/MainLayout";

function ClassPage() {
  return (
    <>
      <MainLayout>
        <ClassInfo />
        <ClassList />
      </MainLayout>
    </>
  );
}

export default ClassPage;

import BrandStory from "components/about/BrandStory";
import StoreInfo from "components/about/StoreInfo";
import HeaderTitle from "components/home/HeaderTitle";
import MainLayout from "components/home/MainLayout";

function AboutPage() {
  return (
    <MainLayout>
      <HeaderTitle title="About" />
      <BrandStory />
      <StoreInfo />
    </MainLayout>
  );
}

export default AboutPage;

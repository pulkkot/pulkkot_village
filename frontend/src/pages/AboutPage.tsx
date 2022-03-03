import BrandStory from "components/about/BrandStory";
import LocationInfo from "components/about/LocationInfo";
import HeaderTitle from "components/home/HeaderTitle";
import MainLayout from "components/home/MainLayout";

function AboutPage() {
  return (
    <MainLayout>
      <HeaderTitle title="About" />
      <BrandStory />
      <LocationInfo />
    </MainLayout>
  );
}

export default AboutPage;

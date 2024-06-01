import PageTitle from "../../components/common/Others/PageTitle";
import HomeAccordion from "./HomeSection/HomeAccordion";
import HomeBanner from "./HomeSection/HomeBanner";
import HomeManagementNumbers from "./HomeSection/HomeManagementNumbers";
import HomeProduct from "./HomeSection/HomeProduct";
import HomeTestimonials from "./HomeSection/HomeTestimonials";

const HomePage = () => {
  return (
    <>
      <PageTitle title="Home" />
      <HomeBanner />
      <HomeProduct />
      <HomeTestimonials />
      <HomeAccordion />
      <HomeManagementNumbers />
    </>
  );
};

export default HomePage;

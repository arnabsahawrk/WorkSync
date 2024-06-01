import PageTitle from "../../components/common/Others/PageTitle";
import HomeBanner from "./HomeSection/HomeBanner";
import HomeProduct from "./HomeSection/HomeProduct";
import HomeTestimonials from "./HomeSection/HomeTestimonials";

const HomePage = () => {
  return (
    <>
      <PageTitle title="Home" />
      <HomeBanner />
      <HomeProduct />
      <HomeTestimonials />
    </>
  );
};

export default HomePage;

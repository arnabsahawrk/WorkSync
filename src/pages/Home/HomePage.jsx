import PageTitle from "../../components/common/Others/PageTitle";
import HomeBanner from "./HomeSection/HomeBanner";
import HomeProduct from "./HomeSection/HomeProduct";

const HomePage = () => {
  return (
    <>
      <PageTitle title="Home" />
      <HomeBanner />
      <HomeProduct />
    </>
  );
};

export default HomePage;

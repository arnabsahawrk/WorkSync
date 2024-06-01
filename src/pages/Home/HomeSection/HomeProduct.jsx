import Products from "../../../components/Products/Products";
import Container from "../../../components/common/Others/Container";

const HomeProduct = () => {
  return (
    <section className="bg-primaryBg dark:bg-darkPrimaryBg py-10 lg:py-20">
      <Container className="space-y-10 md:space-y-14">
        <div className="text-darkPrimary dark:text-common text-center space-y-4">
          <p className="text-base">THE #1 RATED WORKFORCE PLATFORM</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Explore WorkSync By Product
          </h1>
        </div>
        <Products />
      </Container>
    </section>
  );
};

export default HomeProduct;

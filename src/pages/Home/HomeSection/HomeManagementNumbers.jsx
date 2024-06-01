import ManagementCountUp from "../../../components/CountUp/ManagementCountUp";
import Container from "../../../components/common/Others/Container";

const HomeManagementNumbers = () => {
  return (
    <section className="bg-primary py-10 lg:py-20">
      <Container className="space-y-10 md:space-y-14">
        <div className="text-common text-center space-y-4">
          <p className="text-base">#MANAGEMENTS STATS</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Workforce Management In Numbers
          </h1>
        </div>
        <ManagementCountUp />
      </Container>
    </section>
  );
};

export default HomeManagementNumbers;

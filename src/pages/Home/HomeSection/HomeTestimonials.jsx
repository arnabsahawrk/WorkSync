import RatingShowcase from "../../../components/RatingShowcase/RatingShowcase";
import TestimonialSwiper from "../../../components/Swipers/TestimonialSwiper";
import Container from "../../../components/common/Others/Container";

const HomeTestimonials = () => {
  return (
    <section className="bg-primary py-10 lg:py-20">
      <Container className="space-y-10 md:space-y-14">
        <div className="text-common text-center space-y-4">
          <p className="text-base">#REVIEWS FEATURED ON</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Why Customer Love Us
          </h1>
        </div>
        <TestimonialSwiper />
        <RatingShowcase />
      </Container>
    </section>
  );
};

export default HomeTestimonials;

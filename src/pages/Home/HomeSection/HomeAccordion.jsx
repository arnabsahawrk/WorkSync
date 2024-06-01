import FaqAccordion from "../../../components/Accordion/FaqAccordion";
import Container from "../../../components/common/Others/Container";

const HomeAccordion = () => {
  return (
    <section className="bg-primaryBg dark:bg-darkPrimaryBg py-10 lg:py-20">
      <Container className="space-y-10 md:space-y-14">
        <div className="text-darkPrimary dark:text-common text-center space-y-4">
          <p className="text-base">#FAQ</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Frequently Asked Questions
          </h1>
        </div>
        <FaqAccordion />
      </Container>
    </section>
  );
};

export default HomeAccordion;

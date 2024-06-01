import { useSearchParams } from "react-router-dom";
import RatingShowcase from "./RatingShowcase";
import Container from "../../../components/common/Others/Container";

const ContactForm = () => {
  const [params] = useSearchParams();
  const email = params.get("email");
  return (
    <section className="bg-primary">
      <Container className="space-y-5 md:space-y-7 py-10">
        <div className="text-center text-common">
          <p className="text-4xl md:text-5xl font-bold capitalize">
            Contact With Us
          </p>
          <p className="text-sm md:text-base mt-3">
            For your any query or get product demo with expert Q&A.
          </p>
        </div>
        {/* //Form  */}
        <form className="px-10 flex flex-col justify-center items-center gap-3">
          {/* Email  */}
          <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
            <input
              defaultValue={email ? email : ""}
              placeholder="Work email address"
              type="email"
              className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
              required
            />
          </div>
          {/* Name  */}
          <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
            <input
              placeholder="Full name"
              type="text"
              className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
              required
            />
          </div>
          {/* Company Name  */}
          <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
            <input
              placeholder="Company name"
              type="text"
              className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
              required
            />
          </div>
          {/* Location  */}
          <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
            <input
              placeholder="Enter your location"
              type="text"
              className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
              required
            />
          </div>
          {/* Phone  */}
          <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
            <input
              placeholder="Phone"
              type="number"
              className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
              required
            />
          </div>
          {/* Message  */}
          <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
            <textarea
              rows={3}
              placeholder="Your message to us..."
              className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
              required
            ></textarea>
          </div>
          {/* Send  */}
          <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
            <button className="block w-full px-4 py-3 bg-secondary hover:bg-[#fdb71ccc] transition duration-200 text-base md:text-lg rounded dark:text-common text-darkPrimary font-semibold">
              Send
            </button>
          </div>
          <p className="text-center text-xs text-lightPrimary font-semibold mt-2">
            By clicking &quot;Send&quot; you agree to WorkSync&apos;s Privacy
            Notice
          </p>
        </form>
        <RatingShowcase />
      </Container>
    </section>
  );
};

export default ContactForm;

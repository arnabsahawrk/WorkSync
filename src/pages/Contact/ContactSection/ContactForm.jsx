import { useSearchParams } from "react-router-dom";
import RatingShowcase from "../../../components/RatingShowcase/RatingShowcase";
import Container from "../../../components/common/Others/Container";
import CommonInput from "../../../components/common/Inputs/CommonInput";
import CommonTextArea from "../../../components/common/Inputs/CommonTextArea";
import SubmitButton from "../../../components/common/Buttons/SubmitButton";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [params] = useSearchParams();
  const email = params.get("email");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("We'll be in touch with you soon.", {
      style: {
        border: "2px solid #866674",
        padding: "16px",
        color: "#F5F5F5",
        background: "#502D3C",
      },
      iconTheme: {
        primary: "#fdb71c",
        secondary: "#F5F5F5",
      },
    });

    e.target.reset();
  };
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
        <form
          onSubmit={handleSubmit}
          className="px-10 flex flex-col justify-center items-center gap-3"
        >
          {/* Email  */}
          <CommonInput
            value={email}
            placeholder="Work email address"
            type="email"
          />
          {/* Name  */}
          <CommonInput placeholder="Full name" type="text" />
          {/* Company Name  */}
          <CommonInput placeholder="Company name" type="text" />
          {/* Location  */}
          <CommonInput placeholder="Enter your location" type="text" />
          {/* Phone  */}
          <CommonInput placeholder="Phone" type="number" />
          {/* Message  */}
          <CommonTextArea placeholder="Your message to us..." />
          {/* Send  */}
          <SubmitButton text="Send" />
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

import { Button } from "@material-tailwind/react";
import Container from "../../../components/common/Others/Container";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  const navigate = useNavigate();

  const handleContact = () => {
    const url = queryString.stringifyUrl({
      url: "/contact-us",
      query: { email },
    });
    navigate(url);
  };

  return (
    <section className="bg-primary py-20">
      <Container className="space-y-6">
        {/* Upper Part */}
        <div className="text-common text-center space-y-3 md:space-y-5">
          <p className="text-base lg:text-lg uppercase font-semibold">
            STRATEGIC HR
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold capitalize">
            Maximize HR’s impact
          </h1>
          <p className="text-base lg:text-lg w-full max-w-[600px] mx-auto font-medium">
            WorkSync lets you manage your day-to-day operations at scale and
            drive strategic outcomes for your business as a whole.
          </p>
        </div>
        {/* Input Part */}
        <form className="pt-5" onSubmit={handleContact}>
          <div className="relative mx-auto flex w-full max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem]">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={onChange}
              className="min-w-0 pr-20 block w-full px-4 py-3 md:py-5 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
            />
            <Button
              type="submit"
              disabled={!email}
              className={`!absolute right-2 top-[8px] rounded dark:text-common text-darkPrimary capitalize py-1.5 md:py-3 text-base md:text-lg ${
                email ? "bg-secondary" : "bg-[#fdb71ccc]"
              }`}
            >
              Contact Us
            </Button>
          </div>
          <p className="text-center text-xs text-lightPrimary font-semibold mt-2">
            By clicking &quot;Contact Us&quot; you agree to WorkSync&apos;s
            Privacy Notice
          </p>
        </form>
        {/* Below Part  */}
        <div className="pt-10">
          <Marquee>
            <img
              src="https://rippling2.imgix.net/blaze-Pizza.png"
              loading="lazy"
              className="mx-6"
            />
            <img
              src="https://rippling2.imgix.net/Taskrabbit-logo-2022-2.svg"
              loading="lazy"
              className="mx-6"
            />
            <img
              src="https://rippling2.imgix.net/Anthropic_logo-1-1.svg"
              loading="lazy"
              className="mx-6"
            />
            <img
              src="https://rippling2.imgix.net/logo__white-1-1.svg"
              loading="lazy"
              className="mx-6"
            />
            <img
              src="https://rippling2.imgix.net/64494a8998f3226445697d4b_Logo-1-1.svg"
              loading="lazy"
              className="mx-6"
            />
            <img
              src="https://rippling.imgix.net/images/Decathlon.png?fm=png&s=e03f0083ee35b01af880beae76026bf8"
              loading="lazy"
              className="mx-6"
            />
            <img
              src="https://rippling2.imgix.net/Anthropic_logo-1-1.svg"
              loading="lazy"
              className="mx-6"
            />
          </Marquee>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;

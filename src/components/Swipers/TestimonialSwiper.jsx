import { Carousel, IconButton } from "@material-tailwind/react";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";

const TestimonialSwiper = () => {
  return (
    <Carousel
      className="rounded-xl overflow-hidden py-3 md:py-5 space-y-2"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute invisible xl:visible xl:top-2/4 xl:left-4 xl:-translate-y-2/4 border border-common w-10 h-10 rounded-full z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute invisible xl:visible xl:top-2/4 xl:!right-4 xl:-translate-y-2/4 border border-common w-10 h-10 rounded-full z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute -bottom-0 left-2/4 z-50 -translate-x-2/4 gap-2 flex xl:hidden">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      autoplay={true}
      autoplayDelay={5000}
      transition={{
        type: "tween",
        duration: 1,
      }}
      loop={true}
    >
      {/* testimonial 1  */}
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-secondary flex items-center gap-2 mb-1 animate-bounce text-xl">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </p>
        <p className="text-common text-3xl font-bold">
          &quot;WorkSync Saves Time, Money and Headaches&quot;
        </p>
      </div>
      {/* testimonial 2  */}
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-secondary flex items-center gap-2 mb-1 animate-bounce text-xl">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoStarHalf />
        </p>
        <p className="text-common text-3xl font-bold">
          &quot;WorkSync is A+ for Companies Scaling Fast&quot;
        </p>
      </div>
      {/* testimonial 3 */}
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-secondary flex items-center gap-2 mb-1 animate-bounce text-xl">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </p>
        <p className="text-common text-3xl font-bold">
          &quot;WorkSync makes it easy to manage my global team&quot;
        </p>
      </div>
      {/* testimonial 4 */}
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-secondary flex items-center gap-2 mb-1 animate-bounce text-xl">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </p>
        <p className="text-common text-3xl font-bold">
          &quot;WorkSync is the great choice for remote teams&quot;
        </p>
      </div>
      {/* testimonial 5  */}
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-secondary flex items-center gap-2 mb-1 animate-bounce text-xl">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoStarHalf />
        </p>
        <p className="text-common text-3xl font-bold">
          &quot;Amazing products for our small businesses&quot;
        </p>
      </div>
    </Carousel>
  );
};

export default TestimonialSwiper;

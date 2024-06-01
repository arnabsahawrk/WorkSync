import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";

const RatingShowcase = () => {
  return (
    <div className="px-4 flex justify-center lg:justify-between items-center flex-wrap pt-10 gap-6">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-secondary flex items-center gap-2 mb-1">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </p>
        <p className="text-common font-bold">SOFTWARE ADVICE</p>
        <p className="text-common italic">5 Star Rating</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-secondary flex items-center gap-2 mb-1">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoStarHalf />
        </p>
        <p className="text-common font-bold">G2</p>
        <p className="text-common italic">4.9 Star Rating</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-secondary flex items-center gap-2 mb-1">
          <FaTrophy />
        </p>
        <p className="text-common font-bold">PC MAGAZINE</p>
        <p className="text-common italic">Editor&apos;s Choice</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-secondary flex items-center gap-2 mb-1">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </p>
        <p className="text-common font-bold">CAPTERRA</p>
        <p className="text-common italic">5 Star Rating</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-secondary flex items-center gap-2 mb-1">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoStarHalf />
        </p>
        <p className="text-common font-bold">GET APP</p>
        <p className="text-common italic">4.9 Star Rating</p>
      </div>
    </div>
  );
};

export default RatingShowcase;

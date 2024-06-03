import { ScaleLoader } from "react-spinners";

const CommonSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mr-5 md:mr-10 py-10">
        <ScaleLoader color="#fdb71c" loading={true} size={100} />
      </div>
    </div>
  );
};

export default CommonSpinner;

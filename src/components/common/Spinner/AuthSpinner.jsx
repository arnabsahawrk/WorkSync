import { ClockLoader } from "react-spinners";

const AuthSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mr-5 md:mr-10 py-10">
        <ClockLoader color="#402530" loading={true} size={200} />
      </div>
    </div>
  );
};

export default AuthSpinner;

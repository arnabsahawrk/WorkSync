import { FcGoogle } from "react-icons/fc";
import { TbEyeCancel, TbEyeCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import Container from "../../../components/common/Others/Container";
import SubmitButton from "../../../components/common/Buttons/SubmitButton";
import { useState } from "react";

const SignUpForm = () => {
  const [passVisible, setPassVisible] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-screen py-10 lg:py-20">
      <Container>
        <div className="flex flex-col max-w-xl mx-auto p-6 rounded-md sm:p-10 bg-primary">
          <div className="mb-8 text-center">
            <Link
              to="/"
              className="flex justify-center items-center gap-2 w-fit mx-auto"
            >
              <img
                src="https://i.postimg.cc/8PXkRHGy/work-sync.png"
                alt="WorkSync"
                className="size-8 object-cover"
              />
              <h1 className="text-common text-2xl font-bold">WorkSync</h1>
            </Link>
            <h1 className="my-3 text-4xl font-bold text-common">Sign Up</h1>
            <p className="text-sm text-gray-400">Welcome to WorkSync</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Full Name</label>
                <input
                  placeholder="Your full name"
                  type="text"
                  className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
                />
              </div>
              {/* Your Role  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Your Role</label>
                <select className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none">
                  <option value="Employee">Employee</option>
                  <option value="HR">HR</option>
                </select>
              </div>
              {/* Account No.  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">
                  Bank Account Number
                </label>
                <input
                  placeholder="Your account number"
                  type="number"
                  className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
                />
              </div>
              {/* Salary  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Salary</label>
                <input
                  placeholder="Your salary amount"
                  type="number"
                  className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
                />
              </div>
              {/* Designation  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Your Designation</label>
                <select className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none">
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Marketing Specialist">
                    Marketing Specialist
                  </option>
                  <option value="Sales Manager">Sales Manager</option>
                  <option value="Product Designer">Product Designer</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Photo  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Photo</label>

                <input
                  type="file"
                  className="block w-full px-4 py-2 border-2 text-lightPrimary bg-mildPrimary border-lightPrimary rounded-md file:bg-mildPrimary file:text-lightPrimary  file:border-lightPrimary file:rounded-md   focus:outline-none"
                  accept="image/jpeg, image/jpg, image/png"
                />
              </div>
              {/* Email  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Email Address</label>
                <input
                  placeholder="Work Email Address"
                  type="email"
                  className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
                />
              </div>
              {/* Password  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Password</label>
                <div className="relative">
                  <input
                    placeholder="*********"
                    type={passVisible ? "text" : "password"}
                    className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
                  />
                  <span
                    onClick={() => setPassVisible(!passVisible)}
                    className="text-common text-xl absolute right-2.5 bottom-4"
                  >
                    {passVisible ? <TbEyeCheck /> : <TbEyeCancel />}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <SubmitButton text="Sign Up" />
            </div>
          </form>
          <div className="space-y-1">
            <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
          </div>
          <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-400 border-rounded cursor-pointer">
            <FcGoogle size={32} />

            <p className="text-common">Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Joining an existing account?
            <Link to="/sign-in" className="hover:underline text-secondary ml-1">
              Click here
            </Link>
            .
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SignUpForm;

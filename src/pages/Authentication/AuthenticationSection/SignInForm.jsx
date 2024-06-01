import { FcGoogle } from "react-icons/fc";
import { TbEyeCancel, TbEyeCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import Container from "../../../components/common/Others/Container";
import SubmitButton from "../../../components/common/Buttons/SubmitButton";
import { useState } from "react";

const SignInForm = () => {
  const [passVisible, setPassVisible] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Container>
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-primary">
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
            <h1 className="my-3 text-4xl font-bold text-common">Sign In</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form className="space-y-6">
            <div className="space-y-4">
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
              <SubmitButton text="Sign In" />
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
            Don&apos;t have an account?
            <Link to="/sign-up" className="hover:underline text-secondary ml-1">
              Create one now
            </Link>
            .
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SignInForm;

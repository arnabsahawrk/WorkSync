import { FcGoogle } from "react-icons/fc";
import { TbEyeCancel, TbEyeCheck } from "react-icons/tb";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Container from "../../../components/common/Others/Container";
import { useState } from "react";
import { ImSpinner10 } from "react-icons/im";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { usePutStaffData } from "../../../hooks/query/usePut";

const SignInForm = () => {
  const [passVisible, setPassVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { staffAsync, staffAsyncPending } = usePutStaffData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { authLoading, setAuthLoading, signInWithGoogle, signInUser } =
    useAuth();

  const designationArray = [
    "Software Engineer",
    "Project Manager",
    "Marketing Specialist",
    "Sales Manager",
    "Product Designer",
    "Other",
  ];
  // get a random salary digit 20000 to 100000
  const randomSalary = Math.floor(Math.random() * (100000 - 20000 + 1)) + 20000;
  // get a random account number
  const randomAccountNumber = Math.floor(
    Math.random() * (90489345844 - 20489345844 + 1) + 20489345844
  );
  //get a random designation
  const randomDesignation = Math.floor(Math.random() * designationArray.length);

  //Authenticate User
  const handleFormSubmit = async (e) => {
    const { email, password } = e;

    //Login New User
    try {
      await signInUser(email, password);
      toast.success("Sign In Successful.", {
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
      reset();
      navigate(location?.state || "/");
    } catch {
      toast.error("Invalid User.", {
        style: {
          border: "2px solid #866674",
          padding: "16px",
          color: "#F5F5F5",
          background: "#502D3C",
        },
        iconTheme: {
          primary: "#CD2728",
          secondary: "#F5F5F5",
        },
      });
    }
  };

  //Sign In with Google
  const googleSignIn = async () => {
    try {
      const userInfo = await signInWithGoogle();
      setAuthLoading(true);

      const userData = {
        uid: userInfo?.user?.uid,
        email: userInfo?.user?.email,
        name: userInfo?.user?.displayName,
        photoURL: userInfo?.user?.photoURL,
        role: "Employee",
        accountNumber: parseFloat(randomAccountNumber),
        salary: parseFloat(randomSalary),
        designation: designationArray[randomDesignation],
        isVerified: false,
        join: new Date().toLocaleString(),
        update: false,
      };

      //if the user is new save the data in database
      staffAsync(userData);

      toast.success("Sign In Successful.", {
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
      setAuthLoading(false);
      navigate(location?.state || "/");
    } catch {
      toast.error("Sign In Failed, Try Again.", {
        style: {
          border: "2px solid #866674",
          padding: "16px",
          color: "#F5F5F5",
          background: "#502D3C",
        },
        iconTheme: {
          primary: "#CD2728",
          secondary: "#F5F5F5",
        },
      });
      setAuthLoading(false);
    }
  };

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
          <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="space-y-4">
              {/* Email  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Email Address</label>
                <input
                  placeholder="Work Email Address"
                  type="email"
                  className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 italic">{errors.email?.message}</p>
                )}
              </div>
              {/* Password  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Password</label>
                <div className="relative">
                  <input
                    placeholder="*********"
                    type={passVisible ? "text" : "password"}
                    className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required.",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z]).{6,16}$/,
                        message: "Invalid password.",
                      },
                    })}
                  />
                  <span
                    onClick={() => setPassVisible(!passVisible)}
                    className="text-common text-xl absolute right-2.5 bottom-4"
                  >
                    {passVisible ? <TbEyeCheck /> : <TbEyeCancel />}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-red-500 italic">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Sign In Button  */}
            <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
              <button
                disabled={authLoading || staffAsyncPending}
                type="submit"
                className="block w-full px-4 py-3 bg-secondary hover:bg-[#fdb71ccc] transition duration-200 text-base md:text-lg rounded text-common font-semibold"
              >
                {authLoading || staffAsyncPending ? (
                  <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>
          {/* Forget Password  */}
          {/* <div className="space-y-1">
            <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
              Forgot password?
            </button>
          </div> */}
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
          </div>
          <button
            disabled={authLoading || staffAsyncPending}
            onClick={() => googleSignIn()}
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-400 border-rounded cursor-pointer"
          >
            {authLoading || staffAsyncPending ? (
              <ImSpinner10 className="text-2xl text-secondary animate-spin mx-auto" />
            ) : (
              <>
                <FcGoogle size={32} />
                <p className="text-common">Continue with Google</p>
              </>
            )}
          </button>
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

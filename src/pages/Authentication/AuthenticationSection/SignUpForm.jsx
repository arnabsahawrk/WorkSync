import { FcGoogle } from "react-icons/fc";
import { TbEyeCancel, TbEyeCheck } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../components/common/Others/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useStorage from "../../../hooks/useStorage";
import toast from "react-hot-toast";
import { ImSpinner10 } from "react-icons/im";
import { usePutStaffData } from "../../../hooks/query/usePut";

const SignUpForm = () => {
  const [passVisible, setPassVisible] = useState(false);
  const navigate = useNavigate();
  const { staffAsync, staffAsyncPending } = usePutStaffData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    authLoading,
    setUser,
    setAuthLoading,
    createUser,
    updateUserProfile,
    signInWithGoogle,
  } = useAuth();
  const { storageLoading, Storage } = useStorage();

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

  //Authenticate New User
  const handleFormSubmit = async (e) => {
    //Take all the input
    const { name, role, accountNumber, salary, designation, email, password } =
      e;
    const photoFile = e.photo[0];

    //Get a photoURL from firebase.
    const photoURL = await Storage(photoFile, `profile/${photoFile.name}`);

    //Create New User
    try {
      const userInfo = await createUser(email, password);
      setAuthLoading(true);
      //Set the value according to role
      let totalSalary = parseFloat(salary);
      let verifiedValue = false;
      if (role === "HR") {
        totalSalary = totalSalary * 3 + 40001;
        verifiedValue = true;
      }

      const userData = {
        uid: userInfo?.user?.uid,
        email: userInfo?.user?.email,
        name,
        photoURL,
        role,
        accountNumber: parseFloat(accountNumber),
        salary: totalSalary,
        designation,
        isVerified: verifiedValue,
        join: new Date().toLocaleString(),
        update: false,
      };

      //save new user data in database
      staffAsync(userData);

      //Update Profile
      await updateUserProfile(name, photoURL);
      setUser((user) => ({
        ...user,
        displayName: name,
        photoURL: photoURL,
      }));

      toast.success("Registration Successful.", {
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

      reset();
      navigate("/");
    } catch {
      toast.error("Registration Denied.", {
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
      navigate("/");
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
          {/* Form  */}
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Full Name</label>
                <input
                  placeholder="Your full name"
                  type="text"
                  className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Required Field.",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 italic">{errors.name?.message}</p>
                )}
              </div>
              {/* Your Role  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Your Role</label>
                <select
                  className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none"
                  {...register("role")}
                >
                  <option value="Employee">Employee</option>
                  <option value="HR">HR</option>
                </select>
              </div>
              {/* Account No.  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Account Number</label>
                <input
                  defaultValue={randomAccountNumber}
                  placeholder="Your account number"
                  type="number"
                  className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
                  {...register("accountNumber")}
                  readOnly
                />
                {errors.accountNumber && (
                  <p className="text-red-500 italic">
                    {errors.accountNumber?.message}
                  </p>
                )}
              </div>
              {/* Salary  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Salary</label>
                <input
                  defaultValue={randomSalary}
                  placeholder="Your salary amount"
                  type="number"
                  className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
                  {...register("salary")}
                  readOnly
                />
              </div>
              {/* Designation  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Your Designation</label>
                <select
                  defaultValue={designationArray[randomDesignation]}
                  className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none"
                  {...register("designation")}
                >
                  {designationArray.map((designation, idx) => (
                    <option key={idx} value={designation}>
                      {designation}
                    </option>
                  ))}
                </select>
              </div>
              {/* Photo  */}
              <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
                <label className="text-sm text-common">Photo</label>

                <input
                  type="file"
                  className="block w-full px-4 py-2 border-2 text-lightPrimary bg-mildPrimary border-lightPrimary rounded-md file:bg-mildPrimary file:text-lightPrimary  file:border-lightPrimary file:rounded-md   focus:outline-none"
                  {...register("photo", {
                    required: "Please select an image",
                    validate: {
                      fileType: (value) => {
                        const fileExtension = value[0]?.type.split("/")[1];
                        return (
                          ["jpeg", "jpg", "png"].includes(
                            fileExtension.toLowerCase()
                          ) || "Only JPEG, JPG, and PNG files are allowed"
                        );
                      },
                    },
                  })}
                />
                {errors.photo && (
                  <p className="text-red-500 italic">{errors.photo?.message}</p>
                )}
              </div>
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
                {errors.photo && (
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
                        value: /^(?=.*[A-Z])(?=.*[a-z])/,
                        message:
                          "Password must contain 1 upper & lower case letter.",
                      },
                      minLength: {
                        value: 6,
                        message:
                          "Password must have been at least 6 characters.",
                      },
                      maxLength: {
                        value: 16,
                        message: "Password must have been in 16 characters.",
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
            {/* Sign Up Button  */}
            <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
              <button
                disabled={authLoading || storageLoading || staffAsyncPending}
                type="submit"
                className="block w-full px-4 py-3 bg-secondary hover:bg-[#fdb71ccc] transition duration-200 text-base md:text-lg rounded text-common font-semibold"
              >
                {authLoading || storageLoading || staffAsyncPending ? (
                  <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
          </div>
          <button
            disabled={authLoading || storageLoading || staffAsyncPending}
            onClick={() => googleSignIn()}
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-400 border-rounded cursor-pointer"
          >
            {authLoading || storageLoading || staffAsyncPending ? (
              <ImSpinner10 className="text-2xl text-secondary animate-spin mx-auto" />
            ) : (
              <>
                <FcGoogle size={32} />
                <p className="text-common">Continue with Google</p>
              </>
            )}
          </button>
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

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog } from "@material-tailwind/react";
import { useGetStaff } from "../../hooks/query/useGet";
import useAuth from "../../hooks/useAuth";
import useStorage from "../../hooks/useStorage";
import { ImSpinner10 } from "react-icons/im";
import CommonSpinner from "../common/Spinner/CommonSpinner";
import toast from "react-hot-toast";
import { usePutStaffData } from "../../hooks/query/usePut";

const UpdateProfileModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { staff, staffIsLoading } = useGetStaff();
  const staffAsync = usePutStaffData();

  const { authLoading, setUser, setAuthLoading, updateUserProfile } = useAuth();
  const { storageLoading, Storage } = useStorage();

  //Input Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (e) => {
    const { name, designation } = e;
    const photoFile = e.photo[0];
    let photoURL;

    if (photoFile) {
      photoURL = await Storage(photoFile, `profile/${photoFile.name}`);
    } else {
      photoURL = staff?.photoURL;
    }

    //Update User Data
    try {
      setAuthLoading(true);

      const userData = {
        uid: staff?.uid,
        name: name,
        designation: designation,
        photoURL: photoURL,
        update: true,
      };

      staffAsync(userData);

      //Update Profile
      await updateUserProfile(name, photoURL);
      setUser((user) => ({
        ...user,
        displayName: name,
        photoURL: photoURL,
      }));

      toast.success("Profile Updated.", {
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
      handleOpen();
    } catch {
      toast.error("Failed to Update Profile.", {
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
    <div>
      <div className="text-center">
        <button
          onClick={handleOpen}
          className="px-4 py-2 text-common bg-secondary dark:bg-primary rounded-md hover:scale-105 transition duration-300"
        >
          Update
        </button>
      </div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none lg:ml-64"
      >
        {staffIsLoading ? (
          <CommonSpinner />
        ) : (
          <form
            className="bg-primary rounded-lg shadow-lg p-6 space-y-3"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            {/* Name  */}
            <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
              <label className="text-sm text-common">Full Name:</label>
              <input
                defaultValue={staff?.name}
                placeholder="Your full name"
                type="text"
                className="block w-full px-4 py-1 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
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
            {/* Designation  */}
            <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
              <label className="text-sm text-common">Your Designation:</label>
              <select
                defaultValue={staff?.designation}
                className="block w-full px-4 py-1 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none"
                {...register("designation")}
              >
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
              <label className="text-sm text-common">Your Photo:</label>
              <input
                type="file"
                className="block w-full px-4 py-1 border-2 text-lightPrimary bg-mildPrimary border-lightPrimary rounded-md file:bg-mildPrimary file:text-lightPrimary  file:border-lightPrimary file:rounded-md   focus:outline-none"
                {...register("photo", {
                  validate: {
                    fileType: (value) => {
                      if (!value[0]) {
                        return true;
                      }
                      const fileExtension = value[0]?.type.split("/")[1];
                      return (
                        ["jpeg", "jpg", "png"].includes(
                          fileExtension?.toLowerCase()
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
            {/* Update Button  */}
            <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
              <button
                disabled={authLoading || storageLoading}
                type="submit"
                className="block w-full px-4 py-1 bg-secondary hover:bg-[#fdb71ccc] transition duration-200 text-base md:text-lg rounded text-common font-semibold"
              >
                {authLoading || storageLoading ? (
                  <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        )}
      </Dialog>
    </div>
  );
};

export default UpdateProfileModal;

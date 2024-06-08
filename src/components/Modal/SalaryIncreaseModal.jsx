import { Dialog } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner10 } from "react-icons/im";
import toast from "react-hot-toast";

const SalaryIncreaseModal = ({ staff, staffAsync, staffAsyncPending }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  //Salary Form
  const handleFormSubmit = async (e) => {
    const { salary } = e;

    //Increasing The Salary
    try {
      staffAsync({ uid: staff?.uid, salary: parseFloat(salary), update: true });

      reset();
      toast.success("Salary Increased.", {
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
    } catch {
      toast.error("Failed to Increase Salary, Try Again.", {
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

    handleOpen();
  };

  return (
    <div>
      {
        <button
          disabled={staffAsyncPending || staff?.isFired}
          onClick={handleOpen}
          className={`p-1 rounded text-xs ${
            staff?.isFired
              ? "bg-[#fdb71c80] text-[#F5F5F5CC] cursor-not-allowed"
              : "bg-secondary text-common"
          }`}
        >
          {staffAsyncPending ? (
            <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
          ) : (
            "Increase"
          )}
        </button>
      }
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none lg:ml-64"
      >
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-primary rounded-lg shadow-lg p-6 space-y-3"
        >
          {/* Salary  */}
          <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full space-y-2">
            <label className="text-sm text-common">Salary:</label>
            <input
              defaultValue={staff?.salary}
              placeholder="Increasing amount"
              type="number"
              className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
              {...register("salary", {
                required: {
                  value: true,
                  message: "Please Enter The Amount.",
                },
                min: {
                  value: staff?.salary + 1,
                  message: "Increase The Amount.",
                },
              })}
            />
            {errors.salary && (
              <p className="text-red-500 italic">{errors.salary?.message}</p>
            )}
          </div>
          {/* Increase Button  */}
          <div className="max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem] w-full">
            <button
              disabled={staffAsyncPending}
              type="submit"
              className="block w-full px-4 py-1 bg-secondary hover:bg-[#fdb71ccc] transition duration-200 text-base md:text-lg rounded text-common font-semibold"
            >
              {staffAsyncPending ? (
                <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
              ) : (
                "Increase"
              )}
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

SalaryIncreaseModal.propTypes = {
  staff: PropTypes.object.isRequired,
  staffAsync: PropTypes.func.isRequired,
  staffAsyncPending: PropTypes.bool.isRequired,
};

export default SalaryIncreaseModal;

import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useTaskPost } from "../../hooks/query/usePost";
import { ImSpinner10 } from "react-icons/im";
import toast from "react-hot-toast";
import { useGetStaff } from "../../hooks/query/useGet";
import CommonSpinner from "../common/Spinner/CommonSpinner";

const WorkSheetForm = () => {
  const [startDate, setStartDate] = useState(new Date().toDateString());
  const { taskAsync, taskPending } = useTaskPost();
  const { staff, staffIsLoading } = useGetStaff();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const tasksArray = ["Development", "Testing", "Design", "Paper Work"];
  //get a random digit
  const randomTask = Math.floor(Math.random() * tasksArray.length);

  const handleFormSubmit = async (e) => {
    const { task, hours } = e;

    const workData = {
      ...staff,
      task: task,
      hours: parseFloat(hours),
      date: startDate,
    };
    delete workData._id;

    try {
      await taskAsync(workData);
      toast.success("Submission Successful.", {
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
      toast.error("Submission Failed, Try Again.", {
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

    reset();
  };

  return (
    <>
      {staffIsLoading ? (
        <CommonSpinner />
      ) : (
        <form
          className="w-full max-w-md space-y-6 p-6 rounded-md sm:p-10 bg-primary border-2 border-darkPrimary dark:border-primaryBg mt-8"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          {/* Tasks  */}
          <div className="max-w-[24rem] w-full space-y-2">
            <label className="text-sm text-common">Tasks: </label>
            <select
              defaultValue={tasksArray[randomTask]}
              className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none"
              {...register("task")}
            >
              {tasksArray.map((task, idx) => (
                <option key={idx} value={task}>
                  {task}
                </option>
              ))}
            </select>
          </div>
          {/* Work Hours  */}
          <div className="max-w-[24rem] w-full space-y-2">
            <label className="text-sm text-common">Work Hours: </label>
            <input
              placeholder="Work Hours"
              type="number"
              className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
              {...register("hours", {
                required: {
                  value: true,
                  message: "Include work hour",
                },
                min: {
                  value: 1,
                  message: "Work hour cannot be less than 1",
                },
              })}
            />
            {errors.hours && (
              <p className="text-red-500 italic">{errors.hours?.message}</p>
            )}
          </div>
          {/* Date */}
          <div className="max-w-[24rem] w-full space-y-2">
            <label className="text-sm text-common">Date: </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date.toDateString())}
              className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
            />
          </div>

          {/* Submit Button */}
          <div className="max-w-[24rem] w-full">
            <button
              disabled={taskPending}
              type="submit"
              className="block w-full px-4 py-3 bg-secondary hover:bg-[#fdb71ccc] transition duration-200 text-base md:text-lg rounded text-common font-semibold"
            >
              {taskPending ? (
                <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default WorkSheetForm;

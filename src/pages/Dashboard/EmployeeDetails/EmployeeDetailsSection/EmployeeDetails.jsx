import { useParams } from "react-router-dom";
import { useGetEmployeeDetails } from "../../../../hooks/query/useGet";
import Container from "../../../../components/common/Others/Container";
import { ImSpinner10 } from "react-icons/im";
import { IoIosTime } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaAddressCard, FaRupeeSign } from "react-icons/fa";
import { formatDistance } from "date-fns";
import CommonSpinner from "../../../../components/common/Spinner/CommonSpinner";
import Empty from "../../../../components/common/Empty/Empty";
import TasksChart from "../../../../components/Charts/TasksChart";
import { LiaRupeeSignSolid } from "react-icons/lia";

const EmployeeDetails = () => {
  const { slug } = useParams();
  const { employeeDetails, employeeDetailsIsLoading } =
    useGetEmployeeDetails(slug);

  const { task, salary, staff } = employeeDetails || {};
  let joined = "none";
  if (staff?.join) {
    joined = formatDistance(staff?.join, new Date().toLocaleString());
  }

  return (
    <Container>
      <p className="text-darkPrimary dark:text-primaryBg font-bold text-3xl md:text-4xl text-center underline">
        Employee Details
      </p>
      {/* Profile  */}
      {employeeDetailsIsLoading ? (
        <CommonSpinner />
      ) : (
        <div className="mt-10 mx-auto max-w-sm w-full p-5 rounded bg-darkPrimaryBg dark:bg-primaryBg py-5 text-center text-base text-common dark:text-darkPrimary font-bold space-y-1">
          <img
            src={staff?.photoURL}
            alt="profile"
            referrerPolicy="no-referrer"
            className="size-20 rounded-full object-cover mx-auto border border-secondary dark:border-primary shadow-lg hover:shadow-sm transition duration-300"
          />
          <p>
            Name: <span className="font-medium text-sm">{staff?.name}</span>
          </p>
          <p>
            Email: <span className="font-medium text-sm">{staff?.email}</span>
          </p>
          <p>
            Role: <span className="font-medium text-sm">{staff?.role}</span>
          </p>
          <p>
            Account Number:
            <span className="font-medium text-sm"> {staff?.accountNumber}</span>
          </p>
          <p className="flex items-center gap-1 justify-center">
            Salary:
            <span className="font-medium text-sm">{staff?.salary}</span>
            <LiaRupeeSignSolid />
          </p>
          <p>
            Designation:
            <span className="font-medium text-sm"> {staff?.designation}</span>
          </p>
          <p>
            Status:
            <span className="font-medium text-sm">
              {staff?.isVerified ? " Verified" : " Not Verified"}
            </span>
          </p>
        </div>
      )}

      {/* Statistics  */}
      <div className="flex justify-center items-center flex-wrap gap-4 text-center mt-10">
        {/* Total Tasks */}
        <div className="max-w-[250px] h-[150px] size-full rounded-lg bg-mildPrimary border border-primaryBg flex flex-col justify-center items-center gap-3 text-common font-bold">
          <p className="text-4xl">
            <IoCheckmarkDoneCircle />
          </p>
          <div className="space-y-1">
            <p className="text-3xl leading-none">
              {employeeDetailsIsLoading ? (
                <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
              ) : (
                `${task?.totalTasks}`
              )}
            </p>
            <p className="font-normal italic">Completed Tasks</p>
          </div>
        </div>
        {/* Total Hours */}
        <div className="max-w-[250px] h-[150px] size-full rounded-lg bg-secondary border border-primaryBg flex flex-col justify-center items-center gap-3 text-common font-bold">
          <p className="text-4xl">
            <IoIosTime />
          </p>
          <div className="space-y-1">
            <p className="text-3xl leading-none">
              {employeeDetailsIsLoading ? (
                <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
              ) : (
                `${task?.totalHours}`
              )}
            </p>
            <p className="font-normal italic">Total Hours</p>
          </div>
        </div>
        {/* Total Payments */}
        <div className="max-w-[250px] h-[150px] size-full rounded-lg bg-rareColor border border-primaryBg flex flex-col justify-center items-center gap-3 text-common font-bold">
          <p className="text-4xl">
            <FaRupeeSign />
          </p>
          <div className="space-y-1">
            <p className="text-3xl leading-none">
              {employeeDetailsIsLoading ? (
                <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
              ) : (
                `${salary?.totalPayments}`
              )}
            </p>
            <p className="font-normal italic">Total Payments</p>
          </div>
        </div>
        {/* Joined */}
        <div className="max-w-[250px] h-[150px] size-full rounded-lg bg-lightPrimary border border-primaryBg flex flex-col justify-center items-center gap-3 text-common font-bold">
          <p className="text-4xl">
            <FaAddressCard />
          </p>
          <div className="space-y-1">
            <p className="text-3xl leading-none">
              {employeeDetailsIsLoading ? (
                <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
              ) : (
                `${joined}`
              )}
            </p>
            <p className="font-normal italic">Joined</p>
          </div>
        </div>
      </div>

      {/* Bar Chart Statistics */}
      {employeeDetailsIsLoading ? (
        <CommonSpinner />
      ) : task.tasks.length > 0 ? (
        <div className="h-[400px] mt-10">
          <TasksChart data={task?.tasks} />
        </div>
      ) : (
        <Empty text="No work sheet accomplish yet" />
      )}
    </Container>
  );
};

export default EmployeeDetails;

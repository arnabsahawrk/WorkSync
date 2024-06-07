import Container from "../../../../components/common/Others/Container";
import { useGetAllTasks } from "../../../../hooks/query/useGet";
import { ImSpinner10 } from "react-icons/im";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import CommonSpinner from "../../../../components/common/Spinner/CommonSpinner";
import CommonTable from "../../../../components/Table/CommonTable";
import Empty from "../../../../components/common/Empty/Empty";

const Progress = () => {
  const { allTasks, allTasksIsLoading } = useGetAllTasks();

  const tasksColumn = [
    {
      header: "No.",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Task",
      accessorKey: "task",
    },
    {
      header: "Time",
      accessorKey: "hours",
      cell: (e) => `${e.row.original.hours}h`,
    },
    {
      header: "Date",
      accessorKey: "date",
    },
  ];

  return (
    <Container>
      <p className="text-darkPrimary dark:text-primaryBg font-bold text-3xl md:text-4xl text-center underline">
        Progress
      </p>
      {/* Statistics  */}
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-10">
        {/* Total Tasks */}
        <div className="max-w-[250px] h-[150px] size-full rounded-lg bg-rareColor border border-primaryBg flex flex-col justify-center items-center gap-3 text-common font-bold text-center">
          <p className="text-4xl">
            <IoCheckmarkDoneCircle />
          </p>
          <div className="space-y-1">
            <p className="text-3xl leading-none">
              {allTasksIsLoading ? (
                <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
              ) : (
                `${allTasks?.totalTasks}`
              )}
            </p>
            <p className="font-normal italic">Total Tasks</p>
          </div>
        </div>
        {/* Total Hours */}
        <div className="max-w-[250px] h-[150px] size-full rounded-lg bg-secondary border border-primaryBg flex flex-col justify-center items-center gap-3 text-common font-bold text-center">
          <p className="text-4xl">
            <IoIosTime />
          </p>
          <div className="space-y-1">
            <p className="text-3xl leading-none">
              {allTasksIsLoading ? (
                <ImSpinner10 className="text-2xl text-common animate-spin mx-auto" />
              ) : (
                `${allTasks?.totalHours}`
              )}
            </p>
            <p className="font-normal italic">Total Hours</p>
          </div>
        </div>
      </div>
      {/* Tasks Table  */}
      {allTasksIsLoading ? (
        <CommonSpinner />
      ) : allTasks.allTasks.length > 0 ? (
        <CommonTable data={allTasks.allTasks} columns={tasksColumn} />
      ) : (
        <Empty text="No work sheet accomplish yet" />
      )}
    </Container>
  );
};

export default Progress;

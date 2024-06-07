import WorkSheetForm from "../../../../components/Form/WorkSheetForm";
import CommonTable from "../../../../components/Table/CommonTable";
import Empty from "../../../../components/common/Empty/Empty";
import Container from "../../../../components/common/Others/Container";
import CommonSpinner from "../../../../components/common/Spinner/CommonSpinner";
import { useGetTasks } from "../../../../hooks/query/useGet";

const WorkSheet = () => {
  const { tasks, tasksIsLoading } = useGetTasks();

  const tasksColumn = [
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
    <Container className="flex flex-col items-center gap-4">
      <p className="text-darkPrimary dark:text-primaryBg font-bold text-3xl md:text-4xl text-center underline">
        Work Sheet
      </p>
      {/* <WorkSheetForm /> */}
      <WorkSheetForm />
      {/* <WorkSheetTable /> */}
      {tasksIsLoading ? (
        <CommonSpinner />
      ) : tasks.length > 0 ? (
        <CommonTable data={tasks} columns={tasksColumn} />
      ) : (
        <Empty text="No work sheet accomplish yet" />
      )}
    </Container>
  );
};

export default WorkSheet;

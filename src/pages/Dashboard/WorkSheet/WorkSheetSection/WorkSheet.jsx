import WorkSheetForm from "../../../../components/Form/WorkSheetForm";
import CommonTable from "../../../../components/Table/CommonTable";
import Container from "../../../../components/common/Others/Container";
import CommonSpinner from "../../../../components/common/Spinner/CommonSpinner";
import { useGetTasks } from "../../../../hooks/query/useGet";

const WorkSheet = () => {
  const { tasks, tasksIsLoading } = useGetTasks();

  const tasksColumn = [
    {
      header: "No.",
      accessorKey: "id",
    },
    {
      header: "Task",
      accessorKey: "task",
    },
    {
      header: "Time",
      accessorKey: "hours",
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
      ) : (
        tasks.length > 0 && <CommonTable data={tasks} columns={tasksColumn} />
      )}
    </Container>
  );
};

export default WorkSheet;

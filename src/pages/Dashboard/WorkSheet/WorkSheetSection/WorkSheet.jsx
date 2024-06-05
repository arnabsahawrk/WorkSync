import WorkSheetForm from "../../../../components/Form/WorkSheetForm";
import WorkSheetTable from "../../../../components/Table/WorkSheetTable";
import Container from "../../../../components/common/Others/Container";

const WorkSheet = () => {
  return (
    <Container className="flex flex-col items-center gap-4">
      <p className="text-darkPrimary dark:text-primaryBg font-bold text-3xl md:text-4xl text-center underline">
        Work Sheet
      </p>
      <WorkSheetForm />
      <WorkSheetTable />
    </Container>
  );
};

export default WorkSheet;

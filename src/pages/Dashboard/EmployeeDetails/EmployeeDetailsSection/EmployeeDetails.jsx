import { useParams } from "react-router-dom";
import { useGetEmployeeDetails } from "../../../../hooks/query/useGet";
import Container from "../../../../components/common/Others/Container";

const EmployeeDetails = () => {
  const { slug } = useParams();
  useGetEmployeeDetails(slug);

  return (
    <Container>
      <p className="text-darkPrimary dark:text-primaryBg font-bold text-3xl md:text-4xl text-center underline">
        Employee Details
      </p>
    </Container>
  );
};

export default EmployeeDetails;

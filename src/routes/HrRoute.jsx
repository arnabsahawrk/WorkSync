import PropTypes from "prop-types";
import { useGetStaff } from "../hooks/query/useGet";
import AuthSpinner from "../components/common/Spinner/AuthSpinner";
import { Navigate } from "react-router-dom";

const HrRoute = ({ children }) => {
  const { staff, staffIsLoading } = useGetStaff();

  if (staffIsLoading) return <AuthSpinner />;
  else if (staff?.role === "HR") return children;

  return <Navigate to="/dashboard" replace={true} />;
};

HrRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HrRoute;

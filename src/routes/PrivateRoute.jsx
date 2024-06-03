import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import AuthSpinner from "../components/common/Spinner/AuthSpinner";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) return <AuthSpinner />;
  else if (user) return children;

  return <Navigate to="/sign-in" state={location.pathname} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;

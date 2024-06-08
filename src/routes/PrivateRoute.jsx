import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import AuthSpinner from "../components/common/Spinner/AuthSpinner";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) return <AuthSpinner />;
  else if (user) return children;
  else
    toast.error("Sign In First.", {
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

  return <Navigate to="/sign-in" state={location.pathname} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;

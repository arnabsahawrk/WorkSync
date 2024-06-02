import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const GuestOnlyRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user, navigate]);
  if (user) return null;

  return children;
};

GuestOnlyRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestOnlyRoute;

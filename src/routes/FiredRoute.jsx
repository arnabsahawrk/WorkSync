import PropTypes from "prop-types";
import { useGetStaff } from "..//hooks/query/useGet";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FiredRoute = ({ children }) => {
  const { signOutUser } = useAuth();
  const { staff } = useGetStaff();
  const navigate = useNavigate();

  useEffect(() => {
    if (staff?.isFired) {
      signOutUser();
      navigate("/sign-in");
      toast.error("You Are Fired.", {
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
    }
  }, [staff, signOutUser, navigate]);

  return children;
};

FiredRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FiredRoute;

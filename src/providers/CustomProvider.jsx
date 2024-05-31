import PropTypes from "prop-types";
import AuthContextProvider from "../contexts/AuthContextProvider";

const CustomProvider = ({ children }) => {
  //wrap all the contexts provider
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

CustomProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomProvider;

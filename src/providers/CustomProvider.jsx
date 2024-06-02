import PropTypes from "prop-types";
import AuthContextProvider from "../contexts/AuthContextProvider";
import StorageContextProvider from "../contexts/StorageContextProvider";

const CustomProvider = ({ children }) => {
  //wrap all the contexts provider
  return (
    <StorageContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </StorageContextProvider>
  );
};

CustomProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomProvider;

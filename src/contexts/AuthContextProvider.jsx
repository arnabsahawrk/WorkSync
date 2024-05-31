import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  //pass all the auth value
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;

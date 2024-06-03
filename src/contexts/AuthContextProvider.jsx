import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useAxiosCommon from "../hooks/fetch/useAxiosCommon";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const axiosCommon = useAxiosCommon();

  //Create User
  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sing-In User
  const signInUser = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Sign-Out User
  const signOutUser = () => {
    setAuthLoading(true);
    return signOut(auth);
  };

  //Update Profile
  const updateUserProfile = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name || user?.displayName,
      photoURL: url || user?.photoURL,
    });
  };

  //Google Log In
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Observer On User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // get token and store client
        const userInfo = { uid: currentUser.uid };
        const { data } = await axiosCommon.post("/jwt", userInfo);
        localStorage.setItem("access-token", data.token);
        setAuthLoading(false);
      } else {
        localStorage.removeItem("access-token");
        setAuthLoading(false);
      }
    });

    return () => unsubscribe();
  }, [axiosCommon]);

  //pass all the auth value
  const authInfo = {
    user,
    authLoading,
    setUser,
    setAuthLoading,
    createUser,
    signInUser,
    signOutUser,
    updateUserProfile,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;

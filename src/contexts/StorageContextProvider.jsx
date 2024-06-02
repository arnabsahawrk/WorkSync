import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { storage } from "../firebase/firebase.config";

export const StorageContext = createContext(null);
const StorageContextProvider = ({ children }) => {
  const [storageLoading, setStorageLoading] = useState(false);

  const Storage = async (imageFile, fileName) => {
    setStorageLoading(true);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytes(storageRef, imageFile);
    try {
      await uploadTask;
      const downloadURL = await getDownloadURL(storageRef);
      setStorageLoading(false);
      return downloadURL;
    } catch {
      setStorageLoading(false);
      toast.error("Failed To Upload Photo, Try Again.", {
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
  };

  //pass all the auth value
  const storageInfo = {
    storageLoading,
    Storage,
  };
  return (
    <StorageContext.Provider value={storageInfo}>
      {children}
    </StorageContext.Provider>
  );
};

StorageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StorageContextProvider;

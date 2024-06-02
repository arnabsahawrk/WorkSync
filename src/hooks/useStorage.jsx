import { useContext } from "react";
import { StorageContext } from "../contexts/StorageContextProvider";

const useStorage = () => {
  const storageInfo = useContext(StorageContext);
  return storageInfo;
};

export default useStorage;

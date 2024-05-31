import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_serverURL,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_serverURL,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          localStorage.removeItem("access-token");
          await signOutUser();
          navigate("/sign-in");
        }
        return Promise.reject(err);
      }
    );
  }, [signOutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;

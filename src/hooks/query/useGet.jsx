import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../fetch/useAxiosSecure";
import useAuth from "../useAuth";

//get staff data by uid
export const useGetStaff = () => {
  const { user, authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const getStaff = async () => {
    try {
      const { data } = await axiosSecure(`/staff?uid=${user.uid}`);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to fetch get staff");
    }
  };

  const { data: staff = {}, isLoading: staffIsLoading } = useQuery({
    queryKey: ["staff", user?.uid],
    enabled: !!user?.uid && !authLoading,
    queryFn: getStaff,
  });

  return { staff, staffIsLoading };
};

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
    enabled:
      !!user?.uid && !authLoading && !!localStorage.getItem("access-token"),
    queryFn: getStaff,
  });

  return { staff, staffIsLoading };
};

//get task data by uid
export const useGetTasks = () => {
  const { user, authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const getTasks = async () => {
    try {
      const { data } = await axiosSecure(`/tasks?uid=${user.uid}`);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to fetch get tasks");
    }
  };

  const { data: tasks = [], isLoading: tasksIsLoading } = useQuery({
    queryKey: ["tasks", user?.uid],
    enabled:
      !!user?.uid && !authLoading && !!localStorage.getItem("access-token"),
    queryFn: getTasks,
  });

  return { tasks, tasksIsLoading };
};

//get employee list for HR
export const useGetEmployees = () => {
  const axiosSecure = useAxiosSecure();

  const getEmployees = async () => {
    try {
      const { data } = await axiosSecure("/employees");
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to fetch get employees"
      );
    }
  };

  const {
    data: employees = [],
    isLoading: employeesIsLoading,
    refetch: employeesRefetch,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  return { employees, employeesIsLoading, employeesRefetch };
};

//get single employee list for HR only
export const useGetEmployeeDetails = (uid) => {
  const axiosSecure = useAxiosSecure();

  const getEmployeeDetails = async () => {
    try {
      const { data } = await axiosSecure(`/employeeDetails?uid=${uid}`);
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to fetch get employee details"
      );
    }
  };

  const { data: employeeDetails = [], isLoading: employeeDetailsIsLoading } =
    useQuery({
      queryKey: ["employeeDetails"],
      queryFn: getEmployeeDetails,
    });

  return { employeeDetails, employeeDetailsIsLoading };
};

// get salary list
export const useGetAllTasks = () => {
  const axiosSecure = useAxiosSecure();

  const getAllTasks = async () => {
    try {
      const { data } = await axiosSecure("/allTasks");
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to fetch get all tasks"
      );
    }
  };

  const { data: allTasks = [], isLoading: allTasksIsLoading } = useQuery({
    queryKey: ["allTasks"],
    queryFn: getAllTasks,
  });

  return { allTasks, allTasksIsLoading };
};

//get payment history
export const useGetPaymentHistory = () => {
  const { user, authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const getPaymentHistory = async () => {
    try {
      const { data } = await axiosSecure(`/paymentHistory?uid=${user.uid}`);
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to fetch get Payment History"
      );
    }
  };

  const { data: history = [], isLoading: historyIsLoading } = useQuery({
    queryKey: ["history", user?.uid],
    enabled:
      !!user?.uid && !authLoading && !!localStorage.getItem("access-token"),
    queryFn: getPaymentHistory,
  });

  return { history, historyIsLoading };
};

//get verified employee list for Admin
export const useGetVerifiedEmployees = () => {
  const axiosSecure = useAxiosSecure();

  const getVerifiedEmployees = async () => {
    try {
      const { data } = await axiosSecure("/verifiedEmployees");
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to fetch get verified employees"
      );
    }
  };

  const {
    data: verifiedEmployees = [],
    isLoading: verifiedEmployeesIsLoading,
    refetch: verifiedEmployeesRefetch,
  } = useQuery({
    queryKey: ["verifiedEmployees"],
    queryFn: getVerifiedEmployees,
  });

  return {
    verifiedEmployees,
    verifiedEmployeesIsLoading,
    verifiedEmployeesRefetch,
  };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../fetch/useAxiosSecure";

export const useTaskPost = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const postTask = async (taskData) => {
    try {
      const { data } = await axiosSecure.post("/task", taskData);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to fetch post task");
    }
  };

  const { mutateAsync: taskAsync, isPending: taskPending } = useMutation({
    mutationFn: postTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { taskAsync, taskPending };
};

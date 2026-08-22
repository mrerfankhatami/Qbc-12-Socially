import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleFollowUserRequest } from "../services/toggleFollowUserServices";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../types/ErrorResponseType";


export const useToggleFollowUser = () => {
  const queryClient = useQueryClient();

  const query = useMutation({
    mutationFn: toggleFollowUserRequest,

    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["recommendedUsers"] });
      toast.success(res.message);
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(
        error.response?.data?.message || "Something went wrong",
      );
    },

    retry: false,
  });

  return query;
};

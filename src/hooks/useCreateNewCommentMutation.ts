import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createNewCommment,
  type createCommentType,
} from "../services/postCreateCommentService";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

type CommentResponse = {
  message: string;
  success: boolean;
};

export const useAddNewCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    CommentResponse,
    AxiosError<CommentResponse>,
    createCommentType
  >({
    mutationFn: (commentType) => createNewCommment(commentType),

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["allPosts"],
      });
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Please try again");
    },
  });
};
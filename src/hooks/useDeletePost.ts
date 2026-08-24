import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../services/DeleteUsersPostService";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => deletePost(postId),

    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["allPosts"],
      });
      toast.success(res.message || "post deleted successfully");
    },

    onError: (error: AxiosError) => {
      toast.error(error.message || "Something went wrong");
    },
  });
}

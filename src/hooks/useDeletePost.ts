import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../services/DeleteUsersPostService";

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => deletePost(postId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-users-posts"],
      });
    },
  });
}

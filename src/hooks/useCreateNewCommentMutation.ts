import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCommment, type createCommentType } from "../services/postCreateCommentService"

export const useAddNewCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentType: createCommentType) => createNewCommment(commentType),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allPosts"],
      });
    },
  });
};
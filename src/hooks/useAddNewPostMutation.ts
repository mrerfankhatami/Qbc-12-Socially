import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewPostRequest, type createPostPayloadType } from "../services/postServices"

export const useAddNewPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: createPostPayloadType) => createNewPostRequest(content),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allPosts"],
      });
    },
  });
};
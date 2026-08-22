import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  toggleLikedPosts,
  type toggleLikedPostsType,
} from "../services/toggleLikedPostsServices";

export const useToggleLikedPostsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: toggleLikedPostsType) => toggleLikedPosts(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allPosts"],
      });
    },
  });
};
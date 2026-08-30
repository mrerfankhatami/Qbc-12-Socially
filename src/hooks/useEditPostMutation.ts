import { useMutation } from "@tanstack/react-query";
import {
  editPostRequest,
  type EditPostPayloadType,
} from "../services/editPostService";

type EditPostMutationData = {
  postId: string;
  payload: EditPostPayloadType;
};

export const useEditPost = () => {
  return useMutation({
    mutationFn: ({ postId, payload }: EditPostMutationData) =>
      editPostRequest({
        postId,
        payload: {
          image: payload.image,
          title: payload.title,
        },
      }),
  });
};

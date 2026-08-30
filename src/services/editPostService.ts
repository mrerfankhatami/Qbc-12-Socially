import api from "./axiosConfig";

export type EditPostPayloadType = {
  image?: string;
  content?: string;
};

type EditPostRequestType = {
  postId: string;
  payload: EditPostPayloadType;
};

export const editPostRequest = async ({
  postId,
  payload,
}: EditPostRequestType) => {
  const res = await api.put(`/posts/${postId}`, {
    image: payload.image,
    title: payload.content,
  });

  return res.data;
};

import api from "./axiosConfig";

export type EditPostPayloadType = {
  title?: string;
  image?: string;
};

type EditPostRequestType = {
  postId: string;
  payload: EditPostPayloadType;
};

export const editPostRequest = async ({
  postId,
  payload,
}: EditPostRequestType) => {
  const res = await api.put(`/posts/${postId}`, payload);
  return res.data;
};

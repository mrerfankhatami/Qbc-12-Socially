import api from "./axiosConfig";

export const getFollowerList = async () => {
  const res = await api.get("/users/followers");
  return res.data;
};

export const getFollowingList = async () => {
  const res = await api.get("/users/followings");
  return res.data;
};

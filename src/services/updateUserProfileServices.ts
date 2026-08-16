import api from "./axiosConfig";

interface UserId {
  id: string;
}

export const updateUserById = async (data: UserId) => {
  const response = await api.put(`/api/users/${data.id}`);

  return response.data;
};
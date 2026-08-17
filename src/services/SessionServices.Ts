import api from "../services/axiosConfig";
import { useAuthStore } from "../store/authStore";
import type { SessionResponse } from "../types/SessionTypes";

export const getSession = async () => {
  const token = useAuthStore.getState().token;
  const response = await api.get<SessionResponse>("/authentication/session");

  return response.data;
};

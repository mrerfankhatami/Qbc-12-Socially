import axios from "axios";
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
export interface ApiRequestConfig extends InternalAxiosRequestConfig {
  requiresAuth?: boolean;
}

const api: AxiosInstance = axios.create({
  baseURL: "https://socially-nextjs-six.vercel.app/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config: ApiRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    const isSessionRequest =
      typeof error?.config?.url === "string" &&
      error.config.url.includes("/authentication/session");

    if (error.response?.status === 401 && isSessionRequest) {
      return Promise.resolve({
        data: {
          message: "No active session",
          success: false,
          data: {
            user: null,
            session: null,
          },
        },
      } as AxiosResponse);
    }

    if (error.response?.status === 401) {
      console.warn("⚠️ Unauthorized - redirecting to login");
    }
    return Promise.reject(error);
  },
);

export default api;

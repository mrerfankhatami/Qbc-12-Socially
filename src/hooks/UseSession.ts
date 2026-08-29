import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "../services/SessionServices";

export const useSession = () => {
  const { setUser, setSession, logout } = useAuthStore();

  const query = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      try {
        const response = await getSession();
        return response?.data ?? { user: null, session: null };
      } catch (error: unknown) {
        const status = (error as { response?: { status?: number } })?.response
          ?.status;

        if (status === 401) {
          return { user: null, session: null };
        }

        throw error;
      }
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (query.isSuccess && query.data?.user) {
      setUser(query.data.user);
      setSession(query.data.session);
      return;
    }

    if (query.isSuccess && !query.data?.user) {
      logout();
      return;
    }

    if (query.isError) {
      logout();
    }
  }, [query.isSuccess, query.isError, query.data, setUser, setSession, logout]);

  return query;
};

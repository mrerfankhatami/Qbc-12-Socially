import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "../services/SessionServices";

export const useSession = () => {
  const { setUser, setSession, logout } = useAuthStore();

  const query = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const response = await getSession();
      return response.data;
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (query.isSuccess && query.data?.user) {
      setUser(query.data.user);
      setSession(query.data.session);
    } else if (query.isError) {
      logout();
    }
  }, [query.isSuccess, query.isError, query.data, setUser, setSession, logout]);

  return query;
};
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { getSession } from "./../services/SessionServices";
import { useQuery } from "@tanstack/react-query";

export const useSession = () => {

  const { setUser, setSession, logout } = useAuthStore();

  const query = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const response = await getSession();
      return response.data;
    },
    retry: false, 
  });

  useEffect(() => {
    if (query.isSuccess && query.data?.user) {
      setUser(query.data.user);
      setSession(query.data.session);
    } else if (query.isError) {
      console.log("Session invalid or expired. Clearing store.");
      logout();
    }
  }, [query.isSuccess, query.isError, query.data, setUser, setSession, logout]);

  return query;
};
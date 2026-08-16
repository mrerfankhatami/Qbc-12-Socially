import { useQuery } from "@tanstack/react-query";
import { getSession } from "../services/SessionService";

export const useSession = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: getSession,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    retry: 3,
    refetchOnReconnect: true,
  });
};

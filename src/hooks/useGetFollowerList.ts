import { useQuery } from "@tanstack/react-query";
import { getFollowerList } from "../services/FollowListService";

export const useGetFollowerList = (id: string) => {
  return useQuery({
    queryKey: ["FollowerList", id],
    queryFn: () => getFollowerList(id),
    enabled: !!id,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};

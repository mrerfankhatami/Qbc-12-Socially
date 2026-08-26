import { useQuery } from "@tanstack/react-query";
import { getFollowingList } from "../services/FollowListService";

export const useGetFollowingList = (id: string) => {
  return useQuery({
    queryKey: ["FollowingList", id],
    queryFn: () => getFollowingList(id),
    enabled: !!id,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};

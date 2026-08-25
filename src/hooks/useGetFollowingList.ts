import { useQuery } from "@tanstack/react-query";
import { getFollowingList } from "../services/FollowListService";

export const useGetAllPosts = () => {
  const query = useQuery({
    queryKey: ["FollowingList"],
    queryFn: getFollowingList,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  return query;
};

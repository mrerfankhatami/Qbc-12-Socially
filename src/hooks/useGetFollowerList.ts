import { useQuery } from "@tanstack/react-query";
import { getFollowerList } from "../services/FollowListService";

export const useGetAllPosts = () => {
  const query = useQuery({
    queryKey: ["FollowerList"],
    queryFn: getFollowerList,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  return query;
};

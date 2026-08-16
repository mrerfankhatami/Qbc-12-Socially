import { useQuery } from "@tanstack/react-query";
import { getUserByUserName } from "../services/GetUserInformationServices";

interface UseUserProfileProps {
  username: string;
}

export const useGetUserNameByUserName = ({ username }: UseUserProfileProps) => {
  return useQuery({
    queryKey: ["get-by-userName", username],
    queryFn: () => getUserByUserName({ username }),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
};
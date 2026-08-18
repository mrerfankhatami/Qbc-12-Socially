import { useQuery } from "@tanstack/react-query";
import { getAllNotifications } from "../services/notificationServices";

export const useGetAllNotifications = () => {

  const query = useQuery({
    queryKey: ["allNotifications"],
    queryFn: getAllNotifications,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  return query;
};
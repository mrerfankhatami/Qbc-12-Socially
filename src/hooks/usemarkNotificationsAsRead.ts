import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markNotificationsAsRead } from "../services/notificationServices";
import toast from "react-hot-toast";

export const useMarkNotificationsAsRead = () => {
  const queryClient = useQueryClient();

  const query = useMutation({
    mutationFn: markNotificationsAsRead,

    onSuccess: (res) => {

      queryClient.invalidateQueries({ queryKey: ["allNotifications"] });
      toast.success(res.message);
    },
    onError: (res) => {
      toast.error(res.message || "Something went wrong");
    },

    retry: false,
  });

  return query;
};

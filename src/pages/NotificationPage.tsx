import NotificationCard from "../components/notification/NotificationCard";
import { useGetAllNotifications } from "../hooks/useGetAllNotification";
import { useMarkNotificationsAsRead } from "../hooks/useMarkNotificationsAsRead";
import type { NotificationTypes } from "../types/NotificationTypes";


export default function NotificationPage() {

  const {data: notifications = []} = useGetAllNotifications();

  const {mutate: readAllNotification} = useMarkNotificationsAsRead();

  const unreadCount = notifications.filter(
    (notification:NotificationTypes) => !notification.read,
  ).length;

  const handleReadAllNotification = () => {

    const ids = notifications.map((notification:NotificationTypes) => notification.id)

    readAllNotification({ids})
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col rounded-2xl border border-[#E5E5E5] bg-white shadow-sm dark:border-[#2F2F2F] dark:bg-[#111111]">
      <div className="flex items-center justify-between gap-4 rounded-t-2xl bg-white px-5 py-5 sm:px-6 dark:bg-[#111111]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Notifications
        </h3>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {unreadCount} unread
          </span>

          <button
            className="text-sm font-bold text-gray-900 transition-colors hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
            onClick={() => handleReadAllNotification()}
            disabled={unreadCount === 0}
          >
            Mark all as read
          </button>
        </div>
      </div>

      <ul className="flex max-h-102 flex-col gap-3 overflow-y-auto px-5 pb-5 sm:px-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 m-0 list-none p-0">
        {notifications.map((notification:NotificationTypes) => (
          <NotificationCard key={notification.id} {...notification} />
        ))}
      </ul>
    </div>
  );
}

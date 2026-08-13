import type { NotificationTypes } from "../../types/NotificationTypes";
import avatar from "../../assets/avatar.png";
import NotificationContent from "./NotificationContent";
import { getTimeAgo } from "../../utils/getTimeAgo";

const NotificationCard = (notification: NotificationTypes) => {
  const cardTheme = notification.read
    ? "border-gray-200 bg-white hover:bg-gray-50 dark:border-[#2F2F2F] dark:bg-[#161616] dark:hover:bg-[#1C1C1C]"
    : "border-transparent bg-[#F5F5F5] hover:bg-[#EEEEEE] dark:bg-[#252525] dark:hover:bg-[#2B2B2B]";

  return (
    <li
      className={`relative flex gap-3 rounded-xl border p-4 transition-colors ${cardTheme}`}
    >
      <img
        src={avatar}
        alt={`${notification.creator.name} avatar`}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />

      <div className="min-w-0 flex-1">
        <NotificationContent {...notification} />

        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
          {getTimeAgo(notification.createdAt)}
        </p>
      </div>

      {!notification.read && (
        <span className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-blue-500" />
      )}
    </li>
  );
};

export default NotificationCard;
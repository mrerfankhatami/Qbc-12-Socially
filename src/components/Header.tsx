import { Bell, House, Sun, UsersRound } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full h-16 border-b border-[#E5E5E5] dark:border-[#262626] dark:bg-[#0A0A0A]">
      <div className="flex justify-around items-center min-w-312 h-full mx-auto">
        <p className="text-[#171717] text-[20px] font-bold dark:text-[#FAFAFA] ">
          Socially
        </p>

        <nav className="w-100 flex items-center justify-between ">
          <div className="w-9 h-9 flex items-center justify-center border border-[#E5E5E5] dark:border-[#262626] rounded-md shadow shadow-[#0000001A]">
            <Sun size={16} className="dark:text-[#FAFAFA]" />
          </div>
          <div className="flex gap-2">
            <House size={16} className="dark:text-[#FAFAFA]" />
            <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
              home
            </p>
          </div>
          <div className="flex gap-2">
            <Bell size={16} className="dark:text-[#FAFAFA]" />
            <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
              Notification
            </p>
          </div>

          <div className="flex gap-2">
            <UsersRound
              size={16}
              strokeWidth={1.75}
              className="dark:text-[#FAFAFA]"
            />
            <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
              Profile
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

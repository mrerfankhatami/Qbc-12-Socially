import { Bell, House, LogOut, Sun, UsersRound } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full h-16 border-b bg-[#FFFFFF] border-[#E5E5E5] dark:border-[#262626] dark:bg-[#0A0A0A]">
      <div className="flex justify-around items-center w-full h-full mx-auto">
        <p className="text-[#171717] text-[20px] font-bold dark:text-[#FAFAFA] ">
          Socially
        </p>

        <nav className="mib-w-150 flex items-center gap-10">
          <div className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[#eeeeee] border border-[#E5E5E5] dark:border-[#262626] rounded-md shadow shadow-[#0000001A] dark:hover:bg-[#262626]">
            <Sun size={16} className="dark:text-[#FAFAFA]" />
          </div>
          <div className="flex items-center justify-around gap-10 h-9">
            <div className="h-9 flex items-center justify-between gap-2 cursor-pointer hover:bg-[#eeeeee] rounded-md px-3 dark:bg-[#0A0A0A] dark:hover:bg-[#262626]">
              <House size={16} className="dark:text-[#FAFAFA]" />
              <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
                Home
              </p>
            </div>
            <div className=" h-9 flex items-center justify-between gap-2 cursor-pointer hover:bg-[#eeeeee] rounded-md px-3 dark:bg-[#0A0A0A] dark:hover:bg-[#262626]">
              <Bell size={16} className="dark:text-[#FAFAFA]" />
              <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
                Notification
              </p>
            </div>

            <div className="h-9 flex items-center justify-between gap-2 cursor-pointer hover:bg-[#eeeeee] rounded-md px-3 dark:bg-[#0A0A0A] dark:hover:bg-[#262626]">
              <UsersRound
                size={16}
                strokeWidth={1.75}
                className="dark:text-[#FAFAFA]"
              />
              <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
                Profile
              </p>
            </div>
          </div>

          <div className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[#eeeeee] rounded-md dark:hover:bg-[#262626] ">
            <LogOut size={16} className="dark:text-[#FAFAFA]" />
          </div>
        </nav>
      </div>
    </div>
  );
}

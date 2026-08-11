import { Bell, House, LogOut, UsersRound, X } from "lucide-react";
import { useState } from "react";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`h-screen z-10 fixed top-0 bottom-0 right-0 w-2xs bg-white dark:bg-black p-5 duration-200 ease-in  ${isOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        <div className="flex items-center justify-between mb-5">
          <p className="font-semibold text-[16px] dark:text-white">Menu</p>

          <X
            size={16}
            className="dark:text-white cursor-pointer"
            onClick={handleToggleSidebar}
          />
        </div>

        <div className=" w-full flex flex-col items-center justify-center bg-white">
          <div className=" w-full flex flex-col items-center justify-around gap-10 h-9 bg-black">
            <div className="w-3/4 h-9 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#eeeeee] rounded-md px-3 py-2  dark:bg-[#3f3f3f] dark:hover:bg-[#262626]">
              <House size={16} className="dark:text-[#FAFAFA]" />
              <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
                Home
              </p>
            </div>
            <div className="w-3/4 h-9 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#eeeeee] rounded-md px-3 py-2  dark:bg-[#3f3f3f] dark:hover:bg-[#262626]">
              <Bell size={16} className="dark:text-[#FAFAFA]" />
              <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
                Notification
              </p>
            </div>

            <div className="w-3/4 h-9 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#eeeeee] rounded-md px-3 py-2 dark:bg-[#3f3f3f] dark:hover:bg-[#262626]">
              <UsersRound
                size={16}
                strokeWidth={1.75}
                className="dark:text-[#FAFAFA]"
              />
              <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
                Profile
              </p>
            </div>
            <div className="w-9 h-9 items-center justify-center cursor-pointer hover:bg-[#eeeeee] rounded-md py-2  dark:hover:bg-[#262626] flex">
              <LogOut size={16} className="dark:text-[#FAFAFA]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

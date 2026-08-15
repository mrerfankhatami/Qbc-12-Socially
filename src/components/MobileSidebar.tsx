import { Bell, House, LogOut, UsersRound, X } from "lucide-react";
import { NavLink } from "react-router";

interface sidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
} 

export default function MobileSidebar(props: sidebarProps) {
  const { isOpen, setIsOpen } = props;

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`h-screen md:hidden z-100 fixed top-0 bottom-0 right-0 w-2xs bg-white dark:bg-[#0A0A0A] p-5 duration-200 ease-in  ${isOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        <div className="flex items-center justify-between mb-5">
          <p className="font-semibold text-[16px] dark:text-white">Menu</p>

          <X
            size={16}
            className="dark:text-white cursor-pointer"
            onClick={handleToggleSidebar}
          />
        </div>

        <div className=" w-full flex flex-col items-center justify-center bg-white dark:bg-transparent">
          <div className=" w-full flex flex-col items-center justify-around gap-10 h-9 bg-transparent dark:bg-transparent">

            <NavLink to={"/"} className="w-3/4 h-9 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#eeeeee] rounded-md px-3 py-2  dark:bg-[#3f3f3f] dark:hover:bg-[#262626]">
              <House size={16} className="dark:text-[#FAFAFA]" />
              <p  className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
                Home
              </p>
            </NavLink>

            <NavLink to={"/notifications"} className="w-3/4 h-9 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#eeeeee] rounded-md px-3 py-2  dark:bg-[#3f3f3f] dark:hover:bg-[#262626]">
              <Bell size={16} className="dark:text-[#FAFAFA]" />
              <p  className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
                Notification
              </p>
            </NavLink>

            <NavLink to={"/profile/1"} className="w-3/4 h-9 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#eeeeee] rounded-md px-3 py-2 dark:bg-[#3f3f3f] dark:hover:bg-[#262626]">
              <UsersRound
                size={16}
                strokeWidth={1.75}
                className="dark:text-[#FAFAFA]"
              />
              <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
                Profile
              </p>
            </NavLink>

            <div className="w-9 h-9 items-center justify-center cursor-pointer hover:bg-[#eeeeee] rounded-md py-2  dark:hover:bg-[#262626] flex">
              <LogOut size={16} className="dark:text-[#FAFAFA]" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

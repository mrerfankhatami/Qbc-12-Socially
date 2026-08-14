import { Bell, House, LogOut, Menu, Moon, Sun, UsersRound } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isLoggesIn, setIsLoggedIn] = useState(true);

  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const themeHandler = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen}></MobileSidebar>
      <div className="w-full h-16 border-b bg-[#FFFFFF] border-[#E5E5E5] dark:border-[#262626] dark:bg-[#0A0A0A]">
        <div className="flex justify-around items-center w-full h-full mx-auto">
          <p className="text-[#171717] text-[20px] font-bold dark:text-[#FAFAFA] ">
            Socially
          </p>

          <nav className="mib-w-150 flex items-center gap-2 md:gap-10">
            <div
              onClick={themeHandler}
              className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[#eeeeee] border border-[#E5E5E5] dark:border-[#262626] rounded-md shadow shadow-[#0000001A] dark:hover:bg-[#262626]"
            >
              {isDark === false ? (
                <Sun size={16} className="dark:text-[#FAFAFA]" />
              ) : (
                <Moon className="dark:text-[#FAFAFA]" size={16} />
              )}
            </div>
            {isLoggesIn ? (
              <div className=" items-center justify-around gap-10 h-9 hidden md:flex">
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
                <div className="w-9 h-9 items-center justify-center cursor-pointer hover:bg-[#eeeeee] rounded-md dark:hover:bg-[#262626] hidden md:flex">
                  <LogOut size={16} className="dark:text-[#FAFAFA]" />
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center justify-between gap-4">
                <div className=" h-9 flex items-center justify-between gap-2 cursor-pointer hover:bg-[#17171780] rounded-md px-3 dark:bg-[#0A0A0A] dark:hover:bg-[#262626]">
                  <House size={16} className="dark:text-[#FAFAFA]" />
                  <p className="text-[14px] text-[#171717] dark:text-[#FAFAFA]">
                    Home
                  </p>
                </div>

                <div className="h-9 bg-[#0A0A0A] text-white flex items-center justify-between gap-2 cursor-pointer rounded-md px-6  hover:bg-[#17171780]">
                  <p className="text-[14px] text-white dark:text-[#FAFAFA]">
                    Sign In
                  </p>
                </div>
              </div>
            )}

            <div className="md:hidden w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[#eeeeee] border border-[#E5E5E5] dark:border-[#262626] rounded-md shadow shadow-[#0000001A] dark:hover:bg-[#262626] ">
              <Menu
                size={16}
                className="dark:text-[#FAFAFA]"
                onClick={handleToggleSidebar}
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

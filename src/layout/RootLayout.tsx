import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import SideSignIn from "../components/SideSignIn";
import SideRecommendedUsers from "../components/SideRecommendedUsers";
import SideProfile from "../components/SideProfile";

export default function RootLayout() {
  const isAuthenticated = false;

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0A0A0A]">
      <header className="mx-auto w-[80%]"><Header /></header>
      <div className="flex mx-auto w-[80%] mt-24 md:gap-5">
        <aside className={`${ !isAuthenticated ? "hidden md:block" : "hidden" } w-full max-w-84`}><SideSignIn /></aside>
        <aside className={`${ isAuthenticated ? "hidden md:block" : "hidden" } w-full max-w-84`}><SideProfile /></aside>
        <main className="w-full">
          <Outlet />
        </main>
        <aside className={`${ isAuthenticated && isHomePage ? "block" : "hidden" } w-full max-w-84`}><SideRecommendedUsers /></aside>
      </div>
    </div>
  );
}

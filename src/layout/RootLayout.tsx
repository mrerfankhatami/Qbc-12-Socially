import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import SideSignIn from "../components/SideSignIn";
import SideRecommendedUsers from "../components/SideRecommendedUsers";
import SideProfile from "../components/SideProfile";
import { useSession } from "../hooks/UseSession";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

export default function RootLayout() {

  const location = useLocation();
  const navigate = useNavigate();

  const { isLoading, isError } = useSession();
  const { isAuthenticated } = useAuthStore()

  
  
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isError) {
      navigate("/login", { replace: true });
    }
  }, [isError, navigate]);


  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-secondary-50 dark:bg-[#262626]">
        <div className="text-center">
          <div className="spinner"></div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            در حال بارگزاری...
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0A0A0A]">
      <header className="sticky top-0 z-10"><Header /></header>
      <div className="flex mx-auto w-[80%] md:w-[80%] mt-24 md:gap-5">
        <aside className={`${ !isAuthenticated ? "hidden md:block" : "hidden" } w-full max-w-84`}><SideSignIn /></aside>
        <aside className={`${ isAuthenticated ? "hidden md:block" : "hidden" } w-full max-w-84`}><SideProfile /></aside>
        <main className="mx-auto md:w-[80%] w-full">
          <Outlet />
        </main>
        <aside className={`${ isAuthenticated && isHomePage ? "hidden lg:block" : "hidden" } w-full max-w-84`}><SideRecommendedUsers /></aside>
      </div>
    </div>
  );
}

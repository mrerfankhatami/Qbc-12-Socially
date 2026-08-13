import React from 'react';

export const SideSignIn: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center transition-colors duration-300">
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
        Welcome Back!
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed max-w-[220px]">
        Login to access your profile and connect with others.
      </p>
      
      <div className="w-full flex flex-col gap-3">
        {/* دکمه اصلی - Log In */}
        <button
          type="button"
          className="w-full py-2.5 px-4 rounded-xl font-medium cursor-pointer transition-all duration-300 ease-in-out
            bg-zinc-900 text-white border border-transparent
            hover:bg-zinc-800 hover:shadow-md hover:-translate-y-0.5
            dark:bg-white dark:text-zinc-950 dark:border-zinc-800
            dark:hover:bg-zinc-200 dark:hover:shadow-lg dark:hover:shadow-zinc-900/50"
        >
          Log In
        </button>
        
        {/* دکمه ثانویه - Sign Up (بهینه‌شده برای هاور تأثیرگذار) */}
        <button
          type="button"
          className="w-full py-2.5 px-4 rounded-xl font-medium cursor-pointer transition-all duration-300 ease-in-out
            /* استایل روز */
            bg-white text-zinc-900 border border-zinc-300
            hover:bg-zinc-100 hover:border-zinc-400 hover:shadow-md hover:-translate-y-0.5
            /* استایل شب */
            dark:bg-zinc-900/50 dark:text-zinc-100 dark:border-zinc-800
            dark:hover:bg-zinc-800 dark:hover:border-zinc-600 dark:hover:text-white dark:hover:shadow-md dark:hover:-translate-y-0.5"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SideSignIn;
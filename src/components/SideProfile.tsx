import React from 'react';

interface UserProfile {
  name: string;
  username: string;
  followingsCount: number;
  followersCount: number;
  postsCount: number;
  location?: string;
  website?: string;
  joinedDate: string;
  avatarUrl?: string;
}

interface SideProfileProps {
  user?: UserProfile;
  onEditProfile?: () => void;
}

export const SideProfile: React.FC<SideProfileProps> = ({
  user = {
    name: 'salar',
    username: 'salargasemi40',
    followingsCount: 4,
    followersCount: 0,
    postsCount: 0,
    location: 'No location',
    website: 'No website',
    joinedDate: '17 minutes ago',
  },
  onEditProfile,
}) => {
  return (
    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
      {/* آواتار کاربر */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white overflow-hidden mb-4 shrink-0 shadow-sm">
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
        ) : (
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )}
      </div>

      {/* نام و نام کاربری */}
      <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-0.5">
        {user.name}
      </h3>
      <span className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
        {user.username}
      </span>

      {/* آمار (Following, Followers, Posts) */}
      <div className="w-full grid grid-cols-3 gap-2 mb-6 text-center">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-zinc-900 dark:text-white">
            {user.followingsCount}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Followings
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-zinc-900 dark:text-white">
            {user.followersCount}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Followers
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-zinc-900 dark:text-white">
            {user.postsCount}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Posts
          </span>
        </div>
      </div>

      {/* دکمه ویرایش پروفایل */}
      <button
        type="button"
        onClick={onEditProfile}
        className="w-full py-2.5 px-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-xl hover:opacity-90 transition-all cursor-pointer mb-6 text-sm"
      >
        Edit Profile
      </button>

      {/* اطلاعات تکمیلی (موقعیت، وب‌سایت، زمان عضویت) */}
      <div className="w-full flex flex-col gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-900 pt-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{user.location || 'No location'}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span className="truncate">{user.website || 'No website'}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{user.joinedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
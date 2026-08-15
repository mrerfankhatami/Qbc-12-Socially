import React, { useState } from 'react';

interface User {
  id: string;
  name: string;
  followers: number;
  avatarUrl?: string;
  isFollowing?: boolean;
}

export const SideRecommendedUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'PEDRAM', followers: 0, isFollowing: false },
    { id: '2', name: 'bardia', followers: 1, isFollowing: false },
    { id: '3', name: 'Reza', followers: 0, isFollowing: false },
  ]);

  const handleFollowToggle = (id: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              isFollowing: !user.isFollowing,
              followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
            }
          : user
      )
    );
  };

  return (
    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm flex flex-col">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
        Recommended users
      </h3>

      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white overflow-hidden shrink-0">
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {user.name}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {user.followers} followers
                </span>
              </div>
            </div>

            {/* دکمه فالو داینامیک */}
            <button
              type="button"
              onClick={() => handleFollowToggle(user.id)}
              className={`py-1.5 px-4 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                user.isFollowing
                  ? 'bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  : 'bg-white dark:bg-transparent border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900'
              }`}
            >
              {user.isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideRecommendedUsers;
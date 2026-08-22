import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useGetRecommendedUsers } from "../hooks/useGetRecommendedUsers";
import { useToggleFollowUser } from "../hooks/useToggleFollowUser";
import type { RecommendedUserTypes } from "../types/RecommendedUserTypes";

export const SideRecommendedUsers: React.FC = () => {
  const [followingUserId, setFollowingUserId] = useState<string | null>(null);

  const { data: recommendedUsers, isLoading: isLoadingRecommendedUsers } =
    useGetRecommendedUsers();

  const { mutate: toggleFollowUser, isPending: isFollowingUser } =
    useToggleFollowUser();

  const handleFollowToggle = (id: string) => {
    setFollowingUserId(id);

    toggleFollowUser(id, {
      onSettled: () => {
        setFollowingUserId(null);
      },
    });
  };

  return (
    <div className="bg-white dark:bg-[#0A0A0A] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm flex flex-col">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
        Recommended users
      </h3>

      <div className="flex flex-col gap-4">
        {isLoadingRecommendedUsers ? (
          <div className="flex min-h-32 items-center justify-center">
            <LoaderCircle className="h-6 w-6 animate-spin text-zinc-400" />
          </div>
        ) : (
          recommendedUsers?.data.map((user: RecommendedUserTypes) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white overflow-hidden shrink-0">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {user.name}
                  </span>

                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {user._count.followers} followers
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleFollowToggle(user.id)}
                disabled={isFollowingUser && followingUserId === user.id}
                className="py-1.5 px-4 text-xs font-medium rounded-xl border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isFollowingUser && followingUserId === user.id ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  "Follow"
                )}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SideRecommendedUsers;
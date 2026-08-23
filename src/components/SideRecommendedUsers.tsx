import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import avatar from "../assets/avatar.png";
import { useGetRecommendedUsers } from "../hooks/useGetRecommendedUsers";
import { useToggleFollowUser } from "../hooks/useToggleFollowUser";
import type { RecommendedUserTypes } from "../types/RecommendedUserTypes";
import { splitUsername } from "../utils/splitUsername";
import { Link } from "react-router";

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
          recommendedUsers?.data.map((user: RecommendedUserTypes) => {
            const userName = splitUsername(user.email);

            return (
              <div key={user.id} className="flex items-center justify-between">
                <Link
                  to={`/profile/${userName}`}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-linear-to-tr from-blue-600 to-indigo-500 text-white">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={avatar}
                        alt={`${user.name} avatar`}
                        className="h-10 w-10 shrink-0 rounded-full object-cover"
                      />
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
                </Link>

                <button
                  type="button"
                  onClick={() => handleFollowToggle(user.id)}
                  disabled={isFollowingUser && followingUserId === user.id}
                  className="cursor-pointer rounded-xl border border-zinc-300 px-4 py-1.5 text-xs font-medium text-zinc-900 transition-all disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-800 dark:text-white"
                >
                  {isFollowingUser && followingUserId === user.id ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                  ) : (
                    "Follow"
                  )}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SideRecommendedUsers;
import { useGetFollowerList } from "../../hooks/useGetFollowerList";
import { useGetFollowingList } from "../../hooks/useGetFollowingList";
import type { FollowerType, FollowingType } from "../../types/ProfileTypes";
import FollowItem from "./FollowItem";

type FollowModalProps = {
  followType: "followers" | "following";
  onClose: () => void;
  id: string;
};

export default function FollowModal({
  followType,
  onClose,
  id,
}: FollowModalProps) {
  const followersQuery = useGetFollowerList(id, {
    enabled: followType === "followers",
  });

  const followingQuery = useGetFollowingList(id, {
    enabled: followType === "following",
  });

  const followList =
    followType === "followers" ? followersQuery : followingQuery;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[80vh] w-full max-w-md overflow-y-auto rounded-lg dark:bg-[#0A0A0A] bg-white p-6 dark:border dark:border-[#262626]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-xl text-gray-500 hover:bg-gray-100"
          aria-label="Close modal"
        >
          ×
        </button>

        {followList.isLoading && (
          <p className="text-center text-sm text-zinc-500">
            Loading...
          </p>
        )}

        {followList.isError && (
          <p className="text-center text-sm text-red-500">
            Failed to load users.
          </p>
        )}

        {followList.isSuccess && (
          <div className="flex flex-col">
            {followType === "followers"
              ? followList.data.data.map((item : FollowerType) => (
                  <FollowItem
                    key={item.follower.id}
                    item={item.follower}
                  />
                ))
              : followList.data.data.map((item : FollowingType) => (
                  <FollowItem
                    key={item.following.id}
                    item={item.following}
                  />
                ))}
          </div>
        )}
      </div>
    </div>
  );
}
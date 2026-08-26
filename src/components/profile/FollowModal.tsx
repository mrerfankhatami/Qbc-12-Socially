import { useGetFollowerList } from "../../hooks/useGetFollowerList";
import { useGetFollowingList } from "../../hooks/useGetFollowingList";
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
  const followers = useGetFollowerList(id);
  const following = useGetFollowingList(id);

  const followList = followType === "followers" ? followers : following;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[80vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 pt-12 shadow-xl"
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
          <p className="text-center text-sm text-zinc-500">Loading...</p>
        )}

        {followList.isError && (
          <p className="text-center text-sm text-red-500">
            Failed to load users.
          </p>
        )}

        {followList.isSuccess && (
          <div className="flex flex-col">
            {followList.data?.map((item: any) => (
              <FollowItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

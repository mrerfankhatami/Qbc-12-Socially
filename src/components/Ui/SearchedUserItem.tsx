import { Anchor, MapPin } from "lucide-react";
import { useNavigate } from "react-router";
import avatar from "../../assets/avatar.png";
import { splitUsername } from "../../utils/splitUsername";

type SearchUser = {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  bio?: string | null;
  location?: string | null;
  website?: string | null;
};

type SearchUserItemProps = {
  user: SearchUser;
};

export default function SearchUserItem({ user }: SearchUserItemProps) {
  const navigate = useNavigate();

  const username = splitUsername(user.email);

  const handleClick = () => {
    navigate(`/profile/${username}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        group flex w-full items-start gap-4
        rounded-xl
        border border-transparent
        p-4
        text-left
        transition-all
        hover:border-zinc-200
        hover:bg-zinc-50
        dark:hover:border-zinc-800
        dark:hover:bg-zinc-900/70
      "
    >
      <img
        src={user.image || avatar}
        alt={user.name || "User"}
        className="
          h-12 w-12 shrink-0 rounded-full
          border border-zinc-200 object-cover
          dark:border-zinc-800
        "
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-zinc-900 dark:text-white">
          {user.name || "Unknown user"}
        </p>

        <p className="mt-0.5 truncate text-xs text-zinc-500 dark:text-zinc-400">
          {user.email || "No email"}
        </p>

        {user.bio && (
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
            {user.bio}
          </p>
        )}

        {(user.location || user.website) && (
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
            {user.location && (
              <div className="flex min-w-0 items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-zinc-400 dark:text-zinc-500" />
                <span className="max-w-40 truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                  {user.location}
                </span>
              </div>
            )}

            {user.website && (
              <div className="flex min-w-0 items-center gap-1.5">
                <Anchor className="h-3.5 w-3.5 shrink-0 text-zinc-400 dark:text-zinc-500" />
                <span className="max-w-40 truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                  {user.website}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <span className="mt-1 shrink-0 text-lg text-zinc-300 transition-transform group-hover:translate-x-1 group-hover:text-zinc-500 dark:text-zinc-700 dark:group-hover:text-zinc-400">
        →
      </span>
    </button>
  );
}

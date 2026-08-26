import { Link } from "react-router";
import avatar from "../../assets/avatar.png";
import { splitUsername } from "../../utils/splitUsername";

type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

type FollowItemProps = {
  item: User;
};

export default function FollowItem({ item }: FollowItemProps) {
  const { name, email, image } = item;

  return (
    <div className="flex w-full items-center gap-3 rounded-lg p-2 transition hover:bg-zinc-50 dark:hover:bg-zinc-900">
      <img
        src={image || avatar}
        alt={name || "User"}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />

      <Link to={`/profile/${splitUsername(email ? email : "")}`} className="min-w-0 flex-1 text-left">
        <p className="truncate text-sm font-semibold text-zinc-900 dark:text-white">
          {name || "Unknown user"}
        </p>

        <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
          {email || "No email"}
        </p>
      </Link>
    </div>
  );
}

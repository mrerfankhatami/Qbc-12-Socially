import SearchUserItem from "../components/Ui/SearchedUserItem";
import { useSearchUsers } from "../hooks/useSearch";
import { useSearchParams } from "react-router";

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const { data, isLoading, isError } = useSearchUsers(query);

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="mb-5 text-xl font-semibold text-zinc-900 dark:text-white">
        Search results
      </h1>

      {isLoading && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Searching...</p>
      )}

      {isError && (
        <p className="text-sm text-red-500">Failed to search users.</p>
      )}

      {!isLoading && !isError && (
        <div className="flex w-full flex-col gap-1">
          {data?.data?.map((user: any) => (
            <SearchUserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

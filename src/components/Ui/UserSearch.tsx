import { Search } from "lucide-react";
import { useState } from "react";
import { useSearchUsers } from "../../hooks/useSearch";

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError } = useSearchUsers(searchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const value = query.trim();

    if (!value) return;

    // This triggers the React Query request
    setSearchQuery(value);
  };

  console.log("Search response:", data);

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-3 w-[clamp(140px,45vw,288px)] sm:mx-4"
    >
      <div
        className="
          flex h-9 items-center
          rounded-lg
          border border-zinc-200
          bg-zinc-50
          px-1
          transition-all
          focus-within:border-zinc-300
          focus-within:bg-white
          focus-within:ring-2
          focus-within:ring-zinc-100
          dark:border-zinc-800
          dark:bg-zinc-900/50
          dark:focus-within:border-zinc-700
          dark:focus-within:bg-zinc-900
          dark:focus-within:ring-zinc-800
        "
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users..."
          className="
            min-w-0 flex-1
            bg-transparent
            px-2
            text-xs
            text-zinc-900
            outline-none
            placeholder:text-zinc-400
            dark:text-white
            dark:placeholder:text-zinc-500
          "
        />

        <button
          type="submit"
          aria-label="Search users"
          className="
            flex h-7 w-7 shrink-0
            items-center justify-center
            rounded-md
            text-zinc-500
            transition
            hover:bg-zinc-200
            hover:text-zinc-900
            dark:hover:bg-zinc-800
            dark:hover:text-white
          "
        >
          <Search className="h-3.5 w-3.5" />
        </button>
      </div>

      {isLoading && <p className="mt-1 text-xs text-zinc-400">Searching...</p>}

      {isError && <p className="mt-1 text-xs text-red-500">Search failed.</p>}
    </form>
  );
}

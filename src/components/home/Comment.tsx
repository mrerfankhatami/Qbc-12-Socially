import { useState } from "react";
import { Send } from "lucide-react";
import avatar from "../../assets/avatar.png";

export default function Comment() {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) return;

    console.log(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 pt-4 border-t  border-[#E5E5E5] dark:border-[#262626] "
    >
      <div className="flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full">
          <img
            src={avatar}
            alt="User avatar"
            className="size-10 rounded-full"
          />
        </div>

        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment..."
            rows={4}
            className="
            shadow-[0_1px_3px_rgba(0,0,0,0.08)]
              w-full
              resize-none
              rounded-lg
              border
              border-[#E5E5E5]
              bg-transparent
              p-3
              text-sm
              leading-5
              text-[#171717]
              outline-none
              placeholder:text-[#737373]
              focus:border-[#3B82F6]
              dark:border-[#404040]
              dark:text-[#FAFAFA]
              dark:placeholder:text-[#A3A3A3]
              dark:focus:border-[#3B82F6]
            "
          />

          <div className="mt-3 flex justify-end">
            <button
              type="submit"
              disabled={!text.trim()}
              className="
  flex
  h-9
  min-w-25
  items-center
  justify-center
  gap-2
  rounded-md
  bg-[#262626]
  px-4
  text-sm
  text-white
  transition
  hover:bg-[#171717]

  disabled:cursor-not-allowed
  disabled:bg-[#737373]
  disabled:text-[#404040]

  dark:bg-white
  dark:text-black
  dark:hover:bg-[#E5E5E5]

  dark:disabled:bg-[#737373]
  dark:disabled:text-[#404040]
"
            >
              <Send size={15} strokeWidth={1.8} />
              <span>Comment</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

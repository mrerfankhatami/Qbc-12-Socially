import React, { useState } from "react";
import { Send } from "lucide-react";
import avatar from "../../assets/avatar.png";

export default function PostInput() {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) return;

    console.log(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-6 min-h-60 w-3/5 min-w-50 max-w-150 rounded-2xl border border-[#E3E3E3]  p-6 shadow-[0_2px_5px_rgba(0,0,0,0.08)] dark:border-[#3A3A3A] dark:bg-[#0A0A0A] dark:shadow-[0_2px_5px_rgba(0,0,0,0.25)]"
    >
      <div className="flex items-start gap-4.5">
        <div className="relative flex size-12.5 shrink-0 items-center justify-center overflow-hidden rounded-full">
          <img src={avatar} alt="User avatar" className="w-10 rounded-full" />
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          rows={1}
          className="mt-2 field-sizing-content min-h-12.5 w-full resize-none border-0 bg-transparent px-0 py-1 text-base leading-6 text-[#222] outline-none placeholder:text-[#858585] focus:ring-0 dark:text-white dark:placeholder:text-[#999]"
        />
      </div>

      <div className="mt-15.5 h-px w-full bg-[#DEDEDE] dark:bg-[#3A3A3A]" />

      <div className="mt-5 flex justify-end">
        <button
          type="submit"
          disabled={!text.trim()}
          className="flex h-10.5 min-w-25.5 items-center justify-center gap-2 rounded-[7px] bg-[#262626] text-base text-white transition-colors hover:bg-[#171717] disabled:cursor-not-allowed disabled:bg-grey-700 disabled:text-gray-500  dark:bg-white dark:text-black dark:hover:bg-[#E5E5E5] dark:disabled:bg-[#555] dark:disabled:text-[#999]"
        >
          <Send size={19} strokeWidth={1.8} />
          <span>Post</span>
        </button>
      </div>
    </form>
  );
}

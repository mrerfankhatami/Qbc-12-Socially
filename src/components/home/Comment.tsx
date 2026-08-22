import { useState } from "react";
import { Send } from "lucide-react";
import avatar from "../../assets/avatar.png";
import { useAddNewCommentMutation } from "../../hooks/useCreateNewCommentMutation";
import type { PostType } from "../../types/AllPostsTypes";

type CommentProps = {
  post: PostType;
};

export default function Comment({ post }: CommentProps) {
  const [text, setText] = useState("");

  const { mutate: addNewCommentMutation } = useAddNewCommentMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) return;

    addNewCommentMutation({
      id: post.id,
      content: text.trim(),
    });

    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 pt-4 border-t  border-[#E5E5E5] dark:border-[#262626] "
    >
     {post.comments?.map((comment) => (
  <div key={comment.id} className="flex flex-col mb-7">
    <div className="flex items-center gap-5">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={comment.author.image || avatar}
        alt={`${comment.author.name}'s profile`}
      />

      <div>
        <div className="flex justify-start items-center gap-5">
          <p className="font-bold text-[#171717] dark:text-[#FAFAFA]">
            {comment.author.name}
          </p>

          <p className="text-[#737373] dark:text-[#A3A3A3] text-[14px] font-light">
            @{comment.author.name.toLowerCase().replace(/\s+/g, "")}
          </p>

          <p className="text-[#737373] dark:text-[#A3A3A3] text-[14px] font-light hidden md:block">
            . {new Date(comment.createdAt).toLocaleDateString()}
          </p>
        </div>

        <p className="mt-2 text-[#171717] dark:text-[#FAFAFA]">
          {comment.content}
        </p>
      </div>
    </div>
  </div>
  ))}

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
            className="shadow-[0_1px_3px_rgba(0,0,0,0.08)] w-full resize-none rounded-lg border border-[#E5E5E5] bg-transparent p-3 
                        text-sm leading-5 text-[#171717] outline-none placeholder:text-[#737373] focus:border-[#3B82F6] 
                        dark:border-[#404040] dark:text-[#FAFAFA] dark:placeholder:text-[#A3A3A3] dark:focus:border-[#3B82F6]"
          />

          <div className="mt-3 flex justify-end">
            <button
              type="submit"
              disabled={!text.trim()}
              className=" flex h-9 min-w-25 items-center justify-center gap-2 rounded-md bg-[#262626] px-4 text-sm text-white transition 
                        hover:bg-[#171717] disabled:cursor-not-allowed disabled:bg-[#737373] disabled:text-[#404040]
                        dark:bg-white dark:text-black dark:hover:bg-[#E5E5E5] dark:disabled:bg-[#737373] 
                        dark:disabled:text-[#404040]"
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

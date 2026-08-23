import avatar from "../../assets/avatar.png";
import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import Comment from "./Comment";
import type { PostType } from "../../types/AllPostsTypes";
import { useToggleLikedPostsMutation } from "../../hooks/useToggleLikedPostsMutation";
import { useAuthStore } from "../../store/authStore";
import { Link } from "react-router";
import { splitUsername } from "../../utils/splitUsername";

type PostProps = {
  post: PostType;
};

export default function Post({ post }: PostProps) {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const { user } = useAuthStore();

  const isLiked = post.likes.some((like) => like.userId === user?.id);

  const { mutate: toggleLikedPostMutation } = useToggleLikedPostsMutation();

  const toggleComment = () => {
    setIsCommentOpen((prev) => !prev);
  };

  const toggleLikeHandler = () => {
    toggleLikedPostMutation({
      id: post.id,
    });
  };

  return (
    <div className="my-5 px-4 md:min-w-100 min-h-40 p-6 rounded-2xl border border-[#E5E5E5] shadow-sm dark:border-[#262626] dark:bg-[#0A0A0A]">
      {/* Author */}
      <div className="flex items-center gap-5">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={post.author.image || avatar}
          alt={`${post.author.name}'s profile`}
        />

        <div>
          <div className="flex justify-start items-center gap-5">
            <Link to={`/profile/${splitUsername(post.author.email)}`} className="font-bold text-[#171717] dark:text-[#FAFAFA]">
              {post.author.name}
            </Link>

            <p className="text-[#737373] dark:text-[#A3A3A3] text-[14px] font-light">
              @{post.author.name.toLowerCase().replace(/\s+/g, "")}
            </p>

            <p className="text-[#737373] dark:text-[#A3A3A3] text-[14px] font-light hidden md:block">
              . {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="dark:text-[#FAFAFA] mt-5 whitespace-pre-line">
        {post.content}
      </p>

      {/* Actions */}
      <div className="flex items-center justify-start gap-8 mt-6">
        {/* Like */}
        <button
          type="button"
          onClick={toggleLikeHandler}
          className="flex items-center justify-between gap-2 cursor-pointer"
        >
          <Heart
            size={16}
            className={
              isLiked ? "text-[#EF4444]" : "text-[#171717] dark:text-[#FAFAFA]"
            }
            fill={isLiked ? "#EF4444" : "none"}
          />

          <p
            className={
              isLiked ? "text-[#EF4444]" : "text-[#171717] dark:text-[#FAFAFA]"
            }
          >
            {post._count.likes}
          </p>
        </button>

        {/* Comments */}
        <button
          type="button"
          onClick={toggleComment}
          className="flex items-center justify-between gap-2 cursor-pointer"
        >
          <MessageCircle
            size={16}
            className={
              isCommentOpen
                ? "text-[#3B82F6]"
                : "text-[#171717] dark:text-[#FAFAFA]"
            }
            fill={isCommentOpen ? "#3B82F6" : "none"}
          />

          <p
            className={
              isCommentOpen
                ? "text-[#3B82F6]"
                : "text-[#171717] dark:text-[#FAFAFA]"
            }
          >
            {post._count.comments}
          </p>
        </button>
      </div>

      {/* Comments */}
      {isCommentOpen && <Comment post={post} />}
    </div>
  );
}

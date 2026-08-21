import avatar from "../../assets/avatar.png";
import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import Comment from "./Comment";

export default function Post() {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleComment = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (  
    <>
      <div className="px-4 md:min-w-100 min-h-40 p-6 rounded-2xl border border-[#E5E5E5] shadow-sm dark:border-[#262626] dark:bg-[#0A0A0A]">
        {" "}
        <div className="flex items-center gap-5">
          <img
            className="w-10 rounded-full"
            src={avatar}
            alt="Profile Picture"
          />
          <div>
            <div className="flex justify-start items-center gap-5">
              <p className="font-bold text-[#171717] dark:text-[#FAFAFA]">
                Farshad Hosseini
              </p>
              <p className="text-[#737373] dark:text-[#A3A3A3] text-[14px] font-light">
                @f.e.h.farshad
              </p>
              <p className="text-[#737373] dark:text-[#A3A3A3] text-[14px] font-light hidden md:block">
                . 8 days ago
              </p>
            </div>
          </div>
        </div>
        <p className="dark:text-[#FAFAFA] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
          eligendi!
        </p>
        <div className="flex items-center justify-start gap-8 mt-6">
          <div
            onClick={toggleLike}
            className="flex items-center justify-between gap-2"
          >
            <Heart
              size={16}
              className={
                isLiked
                  ? "text-[#EF4444] dark:text-[#EF4444]"
                  : "text-[#171717] dark:text-[#FAFAFA]"
              }
              fill={isLiked ? "#EF4444" : "none"}
            />

            <p
              className={
                isLiked
                  ? "text-[#EF4444] dark:text-[#EF4444]"
                  : "text-[#171717] dark:text-[#FAFAFA]"
              }
            >
              3
            </p>
          </div>

          <div
            onClick={toggleComment}
            className="flex items-center justify-between gap-2"
          >
            <MessageCircle
              size={16}
              className={
                isCommentOpen
                  ? "text-[#3B82F6] dark:text-[#3B82F6]"
                  : "text-[#171717] dark:text-[#FAFAFA]"
              }
              fill={isCommentOpen ? "#3B82F6" : "none"}
            />

            <p
              className={
                isCommentOpen
                  ? "text-[#3B82F6] dark:text-[#3B82F6]"
                  : "text-[#171717] dark:text-[#FAFAFA]"
              }
            >
              1
            </p>
          </div>
        </div>
        {isCommentOpen && <Comment />}
      </div>
    </>
  );
}

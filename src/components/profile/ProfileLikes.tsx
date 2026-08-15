import { Heart, MessageCircle, Send } from "lucide-react";
import Avatar from "../Ui/Avatar";
import avatar from "../../assets/avatar.png";
import Button from "../Ui/Button";
import { useState } from "react";

export default function ProfileLikes() {
  const [isOpenComment, setIsOpenComment] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>(false);

  function handleCommentClick() {
    setIsOpenComment(!isOpenComment);
  }

  function handleLikeClick() {
    setIsLike(!isLike);
  }

  return (
    <div className="flex flex-col">
      <div className="w-[calc(100%-2rem)] max-w-250 mt-4 bg-[#0A0A0A] dark:bg-[#FAFAFA] rounded-lg p-3">
        <h2 className="text-white text-lg dark:text-black">There is no like</h2>
        <p className="text-white text-[14px] dark:text-black">
          This user not liked enything
        </p>
      </div>
      <div className="border-2 flex flex-col gap-4 border-[#E5E5E5] dark:bg-[#0A0A0A] dark:border-[#262626] rounded-xl w-[calc(100%-2rem)] max-w-250 mt-4 p-6">
        <div className="flex gap-3 items-center">
          <Avatar src={avatar} width={24} height={24} />
          <p className="dark:text-white">Pedram</p>
          <p className="text-[#737373] text-sm">@iran</p>
          <p className="text-[#737373] text-sm">21 hours ago</p>
        </div>
        <div className="p-1">
          <p className="text-sm dark:text-white">آقای کفاشیان</p>
        </div>
        <div className="flex gap-11">
          <div className="flex px-1 gap-2">
            <Heart
              onClick={handleLikeClick}
              width="16px"
              height="16px"
              className={`transition-colors duration-300 cursor-pointer ${
                isLike ? "fill-red-600 text-red-600 dark:fill-red-600" : "text-[#737373] dark:text-white"
              }`}
            />
            <p className={`text-sm transition-colors duration-300 ${
                isLike ? "text-red-600  dark:text-red-600" : "text-[#737373] dark:text-white "}`}>1</p>
          </div>
          <div className="flex gap-2">
            <MessageCircle
              onClick={handleCommentClick}
              width="16px"
              height="16px"
              className={`transition-colors duration-300 cursor-pointer ${
                isOpenComment ? "fill-blue-500 text-blue-500 dark:fill-blue-500 p-0" : "text-[#737373] dark:text-white"
              }`}
            />
            <p
              className={`text-sm ${
                isOpenComment ? "text-blue-500 dark:text-blue-500" : "text-[#737373] dark:text-white"
              }`}
            >
              1
            </p>
          </div>
        </div>
        {isOpenComment && (
          <div>
            <hr />
            <div className="mt-6 flex gap-2 shrink-0">
              <div className="shrink-0">
                <Avatar src={avatar} />
              </div>
              <textarea
                name="comment"
                placeholder="Write comment..."
                className="flex-1 resize-none rounded-lg border-2 border-[#E5E5E5] p-2 text-sm 
                 outline-none focus:border-[#737373]
                 dark:border-neutral-700 dark:bg-[#0A0A0A] dark:text-white"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button className="flex gap-2 mt-3 bg-[#0A0A0A] items-center py-1 px-3 rounded-lg dark:bg-[#f5f5f5]">
                <Send
                  className="text-white dark:text-black"
                  width="16px"
                  height="16px"
                />{" "}
                <h3 className="text-white dark:text-black text-[16px]">
                  Comment
                </h3>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

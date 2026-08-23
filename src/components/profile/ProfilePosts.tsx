import Avatar from "../Ui/Avatar";
import avatar from "../../assets/avatar.png";
import { Heart, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import Button from "../Ui/Button";
import { useGetUsersPosts } from "../../hooks/useGetUsersPosts";
import { splitUsername } from "../../utils/splitUsername";
import { getTimeAgo } from "../../utils/getTimeAgo";

type ProfilePostsProps = {
  profileId : string
}


export default function ProfilePosts({profileId} : ProfilePostsProps) {

  const [isOpenComment, setIsOpenComment] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>(false);


  const { data, isLoading, isError } = useGetUsersPosts({
    id: profileId,
  });

  const posts = data?.data ?? [];

  function handleCommentClick() {
    setIsOpenComment((prev) => !prev);
  }

  function handleLikeClick() {
    setIsLike((prev) => !prev);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load profile</div>;
  }

  return (
    <div className="flex flex-col">
      {posts.length === 0 ? (
        <div className="w-[calc(100%-2rem)] max-w-250 mt-4 dark:bg-[#FAFAFA] dark:border-[#262626] rounded-lg p-3">
          <h2 className="text-white text-lg dark:text-black">
            There is no post
          </h2>

          <p className="text-white text-[14px] dark:text-black">
            This user hasn't posted anything
          </p>
        </div>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="border-2 flex flex-col gap-4 border-[#E5E5E5] dark:bg-[#0A0A0A] dark:border-[#262626] rounded-xl w-[calc(100%-2rem)] max-w-250 mt-4 p-6"
          >
            <div className="flex gap-3 items-center">
              <Avatar src={avatar} width={24} height={24} />

              <p className="dark:text-white">
                {post.author?.name}
              </p>

              <p className="text-[#737373] text-sm">
                @{splitUsername(post.author?.email)}
              </p>

              <p className="text-[#737373] text-sm">
                {getTimeAgo(post.createdAt)}
              </p>
            </div>

            <div className="p-1 mt-3">
              <p className="text-sm dark:text-white">
                {post.content}
              </p>
            </div>

            <div className="flex gap-11 mt-3">
              <div className="flex px-1 gap-2">
                <Heart
                  onClick={handleLikeClick}
                  width={16}
                  height={16}
                  className={`transition-colors duration-300 cursor-pointer ${
                    isLike
                      ? "fill-red-600 text-red-600"
                      : "text-[#737373] dark:text-white"
                  }`}
                />

                <p
                  className={`text-sm ${
                    isLike
                      ? "text-red-600"
                      : "text-[#737373] dark:text-white"
                  }`}
                >
                  1
                </p>
              </div>

              <div className="flex gap-2">
                <MessageCircle
                  onClick={handleCommentClick}
                  width={16}
                  height={16}
                  className={`transition-colors duration-300 cursor-pointer ${
                    isOpenComment
                      ? "fill-blue-500 text-blue-500"
                      : "text-[#737373] dark:text-white"
                  }`}
                />

                <p
                  className={`text-sm ${
                    isOpenComment
                      ? "text-blue-500"
                      : "text-[#737373] dark:text-white"
                  }`}
                >
                  1
                </p>
              </div>
            </div>

            {isOpenComment && (
              <div className="mt-4">
                <hr />

                <div className="mt-6 flex gap-2">
                  <div className="shrink-0"><Avatar src={avatar} /></div>
                  

                  <textarea
                    name="comment"
                    placeholder="Write comment..."
                    className="flex-1 resize-none rounded-lg border-2 border-[#E5E5E5] p-2 text-sm outline-none focus:border-[#737373] dark:border-neutral-700 dark:bg-[#0A0A0A] dark:text-white"
                  />
                </div>

                <div className="flex justify-end">
                  <Button className="mt-3 flex items-center gap-2 rounded-lg bg-[#0A0A0A] px-3 py-1 dark:bg-[#f5f5f5]">
                    <Send
                      className="text-white dark:text-black"
                      width={16}
                      height={16}
                    />

                    <span className="text-[16px] text-white dark:text-black">
                      Comment
                    </span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
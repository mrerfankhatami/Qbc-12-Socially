import Avatar from "../Ui/Avatar";
import Button from "../Ui/Button";
import { Heart, LoaderCircle, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { splitUsername } from "../../utils/splitUsername";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { useGetUsersLikedPosts } from "../../hooks/useGetUsersLikedPosts";
import { useAddNewCommentMutation } from "../../hooks/useCreateNewCommentMutation";
import { useToggleLikedPostsMutation } from "../../hooks/useToggleLikedPostsMutation";
import { useAuthStore } from "../../store/authStore";
import type { LikedPost } from "../../types/ProfileTypes";

type ProfileLikesProps = {
  profileId: string;
};

export default function ProfileLikes({ profileId }: ProfileLikesProps) {
  const [openCommentPostId, setOpenCommentPostId] = useState<string | null>(
    null,
  );
  const [likingPostId, setLikingPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState("");
  const { data, isLoading, isError } = useGetUsersLikedPosts({
    id: profileId,
  });

  const { mutate: LikedPosts, isPending: isLikeingPosts } =
    useToggleLikedPostsMutation();
  const { mutate: addComment, isPending: isCommenting } =
    useAddNewCommentMutation();
  const { user } = useAuthStore();

  const likes = data?.data ?? [];

  function handleCommentClick(postId: string) {
    setCommentText("");

    setOpenCommentPostId((prev) => (prev === postId ? null : postId));
  }

  function handleLikeClick(postId: string) {
    setLikingPostId(postId);

    LikedPosts(
      { id: postId },
      {
        onSettled: () => {
          setLikingPostId(null);
        },
      },
    );
  }

  function handleAddComment(postId: string) {
    const text = commentText.trim();

    if (!text) return;

    addComment(
      {
        id: postId,
        content: text,
      },
      {
        onSuccess: () => {
          setCommentText("");
        },
      },
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load profile</div>;
  }

  return (
    <div className="flex flex-col">
      {likes.length === 0 ? (
        <div className="mt-4 w-[calc(100%-2rem)] max-w-250 rounded-lg p-3 dark:border-[#262626] bg-gray-300 dark:bg-gray-900  text-black dark:text-white">
          <h2 className="text-lg ">
            There is no like
          </h2>

          <p className="text-[14px]  text-black dark:text-white" >
            This user hasn't liked anything
          </p>
        </div>
      ) : (
        likes.map((like: LikedPost) => {
          const post = like.post;
          const isLiked = post.likes?.some((item) => item.userId === user?.id);
          const isCommented = post.id === openCommentPostId;

          return (
            <div
              key={like.id}
              className="mt-4 flex w-[calc(100%-2rem)] max-w-250 flex-col gap-4 rounded-xl border-2 border-[#E5E5E5] p-6 dark:border-[#262626] dark:bg-[#0A0A0A]"
            >
              <div className="flex items-center gap-3">
                <Avatar src={post.author?.image} width={24} height={24} />

                <p className="dark:text-white">{post.author?.name}</p>

                <p className="text-sm text-[#737373]">
                  @{splitUsername(post.author?.email)}
                </p>

                <p className="text-sm text-[#737373]">
                  {getTimeAgo(post.createdAt)}
                </p>
              </div>

              <div className="mt-3 p-1">
                <div className="mt-5 overflow-hidden rounded-2xl">
                  {post.image && (
                    <img
                      src={`https://79gcelddzk.ucarecd.net/${post.image}/`}
                      alt="Post image"
                      className="max-h-96 w-full object-contain"
                    />
                  )}
                </div>
                <p className="text-sm dark:text-white">{post.content}</p>
              </div>

              <div className="mt-3 flex gap-11">
                <div className="flex gap-2 px-1">
                  {isLikeingPosts && likingPostId === post.id ? (
                    <LoaderCircle
                      width={16}
                      height={16}
                      className="animate-spin text-[#737373] dark:text-white"
                    />
                  ) : (
                    <Heart
                      onClick={() => handleLikeClick(post.id)}
                      width={16}
                      height={16}
                      className={`cursor-pointer transition-colors duration-300 ${
                        isLiked
                          ? "fill-red-600 text-red-600"
                          : "text-[#737373] dark:text-white"
                      }`}
                    />
                  )}

                  <p
                    className={`text-sm ${
                      isLiked
                        ? "text-red-600"
                        : "text-[#737373] dark:text-white"
                    }`}
                  >
                    {post._count.likes}
                  </p>
                </div>

                <div className="flex gap-2">
                  <MessageCircle
                    onClick={() => handleCommentClick(post.id)}
                    width={16}
                    height={16}
                    className={`cursor-pointer transition-colors duration-300 ${
                      isCommented
                        ? "fill-blue-500 text-blue-500"
                        : "text-[#737373] dark:text-white"
                    }`}
                  />

                  <p
                    className={`text-sm ${
                      isCommented
                        ? "text-blue-500"
                        : "text-[#737373] dark:text-white"
                    }`}
                  >
                    {post._count.comments}
                  </p>
                </div>
              </div>

              {isCommented && (
                <div className="mt-2 overflow-hidden">
                  <div className="border-t border-[#E5E5E5] pt-5 dark:border-[#262626]">
                    <div className="flex flex-col gap-5">
                      {post.comments?.length > 0 ? (
                        post.comments.map((comment) => (
                          <div key={comment.id} className="flex w-full gap-3">
                            <div className="shrink-0">
                              <Avatar
                                src={comment.author.image}
                                width={34}
                                height={34}
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                                  {comment.author.name}
                                </p>

                                <p className="break-all text-xs text-[#737373]">
                                  @{splitUsername(comment.author.email)}
                                </p>

                                <p className="text-xs text-[#737373]">
                                  {getTimeAgo(comment.createdAt)}
                                </p>
                              </div>

                              <p className="mt-1 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                                {comment.content}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="py-2 text-sm text-[#737373]">
                          No comments yet.
                        </p>
                      )}

                      <div className="flex w-full gap-3 border-t border-[#E5E5E5] pt-5 dark:border-[#262626]">
                        <div className="shrink-0">
                          <Avatar src={user?.image} width={34} height={34} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <textarea
                            name={`comment-${post.id}`}
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Write a comment..."
                            rows={3}
                            disabled={isCommenting}
                            className="w-full resize-none rounded-xl border border-[#E5E5E5] bg-transparent p-3 text-sm leading-5 outline-none transition-colors placeholder:text-[#737373] focus:border-[#737373] disabled:cursor-not-allowed disabled:opacity-60 dark:border-[#262626] dark:bg-[#0A0A0A] dark:text-white dark:focus:border-[#525252]"
                          />

                          <div className="mt-3 flex justify-end">
                            <Button
                              type="button"
                              onClick={() => handleAddComment(post.id)}
                              disabled={isCommenting || !commentText.trim()}
                              className="flex items-center gap-2 rounded-lg bg-[#f5f5f5] px-3 py-2 text-sm transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#0A0A0A]"
                            >
                              {isCommenting ? (
                                <LoaderCircle
                                  width={15}
                                  height={15}
                                  className="animate-spin text-black dark:text-white"
                                />
                              ) : (
                                <Send
                                  width={15}
                                  height={15}
                                  className="text-black dark:text-white"
                                />
                              )}

                              <span className="text-sm text-black dark:text-white">
                                {isCommenting ? "Commenting..." : "Comment"}
                              </span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

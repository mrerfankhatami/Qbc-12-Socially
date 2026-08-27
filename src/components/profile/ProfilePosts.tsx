import Avatar from "../Ui/Avatar";
import Button from "../Ui/Button";
import { Heart, LoaderCircle, MessageCircle, Send, Trash2 } from "lucide-react";
import { useState } from "react";
import { useGetUsersPosts } from "../../hooks/useGetUsersPosts";
import { splitUsername } from "../../utils/splitUsername";
import { getTimeAgo } from "../../utils/getTimeAgo";
import DeleteModal from "./DeleteModal";
import { useDeletePost } from "../../hooks/useDeletePost";
import type { Post } from "../../types/ProfileTypes";
import { useToggleLikedPostsMutation } from "../../hooks/useToggleLikedPostsMutation";
import { useAuthStore } from "../../store/authStore";
import { useAddNewCommentMutation } from "../../hooks/useCreateNewCommentMutation";

type ProfilePostsProps = {
  profileId: string;
};

export default function ProfilePosts({ profileId }: ProfilePostsProps) {
  const [likingPostId, setLikingPostId] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [openCommentPostId, setOpenCommentPostId] = useState<string | null>(
    null,
  );
  const [commentText, setCommentText] = useState("");

  const { mutate: deletePost, isPending: isDeleting } = useDeletePost();
  const { mutate: LikedPosts, isPending: isLikeingPosts } =
    useToggleLikedPostsMutation();
  const { mutate: addComment, isPending: isCommenting } =
    useAddNewCommentMutation();
  const { data, isLoading, isError } = useGetUsersPosts({ id: profileId });
  const { user } = useAuthStore();

  const posts = data?.data ?? [];

  function handleCommentClick(id: string) {
    setCommentText("");

    setOpenCommentPostId((prev) => (prev === id ? null : id));
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

  function handleDeletePost(postId: string) {
    setSelectedPostId(postId);
    setIsDeleteModalOpen(true);
  }

  function handleConfirmDelete() {
    if (!selectedPostId) return;

    deletePost(selectedPostId, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
        setSelectedPostId(null);
      },
    });
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
    setSelectedPostId(null);
  }

  function handleLikeClick(id: string) {
    setLikingPostId(id);

    LikedPosts(
      { id },
      {
        onSettled: () => {
          setLikingPostId(null);
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
      {posts.length === 0 ? (
        <div className="mt-4 w-[calc(100%-2rem)] max-w-250 rounded-lg p-3 dark:border-[#262626] dark:bg-[#FAFAFA]">
          <h2 className="text-lg text-white dark:text-black">
            There is no post
          </h2>

          <p className="text-[14px] text-white dark:text-black">
            This user hasn't posted anything
          </p>
        </div>
      ) : (
        posts.map((post: Post) => {
          const isLiked = post.likes.some((like) => like.userId === user?.id);
          const isCommented = post.id === openCommentPostId;

          return (
            <div
              key={post.id}
              className="mt-4 flex w-[calc(100%-2rem)] max-w-250 flex-col gap-4 rounded-xl border-2 border-[#E5E5E5] p-6 dark:border-[#262626] dark:bg-[#0A0A0A]"
            >
              <div className="flex items-center justify-between">
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

                <div>
                  <Trash2
                    onClick={() => handleDeletePost(post.id)}
                    width={17}
                    height={17}
                    className="ml-auto cursor-pointer text-[#737373] transition-colors hover:text-red-600"
                  />
                </div>
              </div>

              <div className="mt-3 p-1">
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
                      {post.comments.length > 0 ? (
                        post.comments.map((comment) => (
                          <div key={comment.id} className="flex w-full gap-3">
                            <div className="shrink-0">
                              <Avatar src={comment.author.image} width={34} height={34} />
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
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        isDeleting={isDeleting}
      />
    </div>
  );
}

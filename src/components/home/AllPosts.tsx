import SendPost from "./SendPost";
import { useGetAllPosts } from "../../hooks/useGetAllPosts";
import type { PostType } from "../../types/AllPostsTypes";
import Post from "./Post";

export default function AllPosts() {
  const posts = useGetAllPosts();

  return (
    <div>
      <SendPost />

      {posts.data.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

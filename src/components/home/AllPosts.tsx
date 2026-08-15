import Post from "./Post";
import SendPost from "./SendPost";

export default function AllPosts() {
  return (
    <div className="max-w-160 mx-auto">
      <SendPost />
      <Post /> 
    </div>
  );
}

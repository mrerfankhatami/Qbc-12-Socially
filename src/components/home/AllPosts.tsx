import Post from "./Post";
import SendPost from "./SendPost";

export default function AllPosts() {
  return (
    <div className="">
      <SendPost />
      <Post /> 
    </div>
  );
}

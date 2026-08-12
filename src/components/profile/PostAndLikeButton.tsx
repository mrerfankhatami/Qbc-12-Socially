import Button from "../Ui/Button";
import { useState } from "react";


const PostAndLikeButton = () => {

    const [activeTab, setActiveTab] = useState<"posts" | "likes">("posts");

  return (
    <div className="w-[calc(100%-2rem)] max-w-250 mt-8 mx-auto bg-[#f5f5f5] dark:bg-[#0A0A0A] dark:border dark:border-white rounded-2xl p-1.5 flex">
    <Button
      onClick={() => setActiveTab("posts")}
      className={`w-1/2 rounded-2xl p-1.5 dark:text-white ${
        activeTab === "posts" ? "bg-white dark:bg-[#0A0A0A] transition-all dark:border-white dark:border dark:transition-none" : "bg-transparent"
      }`}
    >
      Posts
    </Button>

    <Button
      onClick={() => setActiveTab("likes")}
      className={`w-1/2 rounded-2xl p-1.5  dark:text-white ${
        activeTab === "likes" ? "bg-white dark:bg-[#0A0A0A] transition-all dark:border-white dark:border dark:transition-none" : "bg-transparent"
      }`}
    >
      Likes
    </Button>
  </div>
  );
};

export default PostAndLikeButton;

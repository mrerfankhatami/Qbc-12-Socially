import PostAndLikeButton from "../components/profile/PostAndLikeButton";
import ProfileCardDetails from "../components/profile/ProfileCardDetails";

export default function ProfilePage() {
  return (
    <>
      <div className="flex w-[calc(100%-2rem)] max-w-250 justify-center">
        <ProfileCardDetails />
      </div>
      <PostAndLikeButton />
    </>
  );
}

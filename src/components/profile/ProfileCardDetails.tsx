import { Anchor, Calendar, MapPin, SquarePen, UserPlus } from "lucide-react";
import avatar from "../../assets/avatar.png";
import Button from "../Ui/Button";
import type { UserProfile } from "../../types/ProfileTypes";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { useGetUserByUserName } from "../../hooks/useGetUserByUserName";
import { useSession } from "../../hooks/UseSession";
import { useParams } from "react-router";

const ProfileCardDetails = ({
  name = "Seyed Ali Mousavi",
  email = "@samb.1376",
  bio = "nenfnnnfn",
  image = avatar,
  location = "No location",
  website = "No website",
  _count = {
    followers: 0,
    followings: 0,
    posts: 0,
  },
  createdAt = "",
}: UserProfile) => {
  const [isOpenModal, setIsModalOpen] = useState<boolean>(false);

  function handleClick() {
    setIsModalOpen(true);
  }

  function handleFollow() {}

  const { username } = useParams<{ username: string }>();

  const { data: sessionData } = useSession();

  const { data: profileData } = useGetUserByUserName({ username });

  const isMyProfile = sessionData?.user?.id === profileData?.data?.id;

  return (
    <div className="flex flex-col items-center dark:bg-[#0A0A0A] bg-white border border-[#E5E5E5] dark:border-[#262626] shadow-[0px_1px_2px_-1px_#0000001A] max-w-137.5 w-full gap-4 rounded-xl p-6">
      <img src={image} alt="avatar" className="w-24 h-24 rounded-[9999px]" />
      <h1 className="pt-2 text-2xl dark:text-white text-justify">{name}</h1>
      <h3 className="text-[#737373]">{email}</h3>
      <h3 className="text-[#737373]">{bio}</h3>
      <div className="max-w-125.5 w-full h-21 flex items-center justify-between">
        <div className="w-16 h-11 flex flex-col items-center">
          <p className="dark:text-white">{_count.followings}</p>
          <p className="text-[#737373]">Following</p>
        </div>
        <div className="w-16 h-11 flex flex-col items-center">
          <p className="dark:text-white">{_count.followers}</p>
          <p className="text-[#737373]">Followers</p>
        </div>
        <div className="w-16 h-11 flex flex-col items-center">
          <p className="dark:text-white">{_count.posts}</p>
          <p className="text-[#737373]">Posts</p>
        </div>
      </div>
      {isMyProfile ? (
        <Button
          onClick={handleClick}
          className="flex w-[95%] hover:bg-emerald-950 dark:hover:bg-gray-200 items-center dark:bg-[#FAFAFA] justify-center gap-2 bg-[#0A0A0A] rounded-md py-2"
        >
          <SquarePen className="h-4 w-4 shrink-0 text-white dark:text-black" />
          <span className="text-white text-[14px] dark:text-black">
            Edit Profile
          </span>
        </Button>
      ) : (
        <Button
          onClick={handleFollow}
          className="flex w-[95%] hover:bg-emerald-950 dark:hover:bg-gray-200 items-center dark:bg-[#FAFAFA] justify-center gap-2 bg-[#0A0A0A] rounded-md py-2"
        >
          <UserPlus className="h-4 w-4 shrink-0 text-white dark:text-black" />
          <span className="text-white text-[14px] dark:text-black">Follow</span>
        </Button>
      )}

      <div className="flex max-w-[95%] w-full gap-4 flex-col items-start pt-2">
        <div className="flex gap-2">
          <MapPin className="text-[#737373]" />
          <p className="text-[#737373]">{location}</p>
        </div>
        <div className="flex gap-2">
          <Anchor className="text-[#737373]" />
          <p className="text-[#737373]">{website}</p>
        </div>
        <div className="flex gap-2">
          <Calendar className="text-[#737373]" />
          <p className="text-[#737373]">{getTimeAgo(createdAt)}</p>
        </div>
      </div>

      {isOpenModal && (
        <ProfileModal
          prevName={name}
          prevBio={bio}
          prevLocation={location}
          prevWebsite={website}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default ProfileCardDetails;

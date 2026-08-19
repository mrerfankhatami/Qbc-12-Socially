import { X } from "lucide-react";
import { useState } from "react";
import Button from "../Ui/Button";
import { useUpdateUserProfile } from "../../hooks/useUpdateUserProfile";
import { useAuthStore } from "../../store/authStore";

type ProfileModalProp = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  prevName: string;
  prevBio: string;
  prevLocation: string;
  prevWebsite: string;
};

const ProfileModal = ({ setIsModalOpen , prevName , prevBio , prevLocation , prevWebsite }: ProfileModalProp) => {
  const { user } = useAuthStore();

  const [name, setName] = useState(prevName);
  const [bio, setBio] = useState(prevBio);
  const [location, setLocation] = useState(prevLocation);
  const [website, setWebsite] = useState(prevWebsite);

  const { mutate, isPending } = useUpdateUserProfile();

  function handleCancel() {
    setIsModalOpen(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);

    mutate({
      id: user!.id,
      name,
      bio,
      location,
      website,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="w-137.5 rounded-lg dark:bg-[#0A0A0A] bg-white p-6 dark:border dark:border-[#262626]">
        <div className="bg-white dark:bg-[#0A0A0A] flex flex-col w-full p-3 rounded-2xl">
          <div className="flex justify-end">
            <X
              onClick={handleCancel}
              className="w-4 h-4 dark:text-white cursor-pointer"
            />
          </div>

          <div className="flex flex-col items-start mb-3">
            <h2 className="text-lg dark:text-white">Edit Profile</h2>

            <p className="text-[#737373] text-[14px]">
              Make changes to your profile here. Click save when you're done.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label htmlFor="name" className="dark:text-white">
              Name
            </label>

            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 w-full rounded-lg border dark:border-[#737373] border-gray-200 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 dark:text-white"
              type="text"
              placeholder="Enter your name"
            />

            <label htmlFor="bio" className="mt-1 dark:text-white">
              Bio
            </label>

            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter your bio"
              className="h-16 w-full resize-none rounded-lg border dark:border-[#737373] dark:text-white border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            />

            <label
              htmlFor="location"
              className="mt-1 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>

            <input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Enter your location"
              className="h-10 w-full rounded-lg border dark:border-[#737373] border-gray-200 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 dark:text-white"
            />

            <label
              htmlFor="website"
              className="mt-1 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Website
            </label>

            <input
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              type="text"
              placeholder="Enter your website"
              className="h-10 w-full rounded-lg border dark:border-[#737373] border-gray-200 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 dark:text-white"
            />

            <div className="flex justify-end mt-3 gap-2">
              <Button
                type="button"
                onClick={handleCancel}
                className="h-9 hover:bg-black hover:text-white text-center rounded-lg border dark:bg-[#181818] dark:text-white border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 shadow-sm transition dark:hover:bg-gray-50 dark:hover:text-black"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={isPending}
                className="h-9 hover:bg-white hover:text-black hover:border hover:border-gray-200 text-center rounded-lg dark:bg-white bg-[#181818] dark:text-black px-4 text-sm font-medium text-white transition dark:hover:bg-black dark:hover:text-white"
              >
                {isPending ? "Saving..." : "Save changes"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

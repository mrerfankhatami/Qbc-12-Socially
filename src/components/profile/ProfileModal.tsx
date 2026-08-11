import { X } from "lucide-react"
import Button from "../Ui/Button"

const ProfileModal = () => {
  return (
    <div className="bg-white dark:bg-[#0A0A0A] mx-auto flex flex-col w-full max-w-113 p-3 rounded-2xl">
        <div className="flex justify-end">
            <X className="w-4 h-4 dark:text-white" />
        </div>
        <div className="flex flex-col items-start mb-3">
            <h2 className="text-lg dark:text-white">Edit Profile</h2>
            <p className="text-[#737373] text-[14px]">Make changes to your profile here. Click save when you're done.</p>
        </div>
        <form action="submit" className="flex flex-col gap-1">
            <label htmlFor="name" className="dark:text-white">Name</label>
            <input defaultValue="@shr80atr" className="border border-gray-200 px-3 py-2 text-sm rounded-lg dark:text-white" type="text" placeholder="Enter your name" id="name" />
            <label htmlFor="bio" className="mt-1 dark:text-white">Bio</label>
            <textarea
              id="bio"
              defaultValue="Fvtvtvtyvyyvybybb"
              placeholder="Enter your bio"
              className="h-16 w-full resize-none rounded-lg border dark:text-white border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            />
            <label
              htmlFor="location"
              className="mt-1 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>

            <input
              id="location"
              type="text"
              placeholder="Enter your location"
              className="h-10 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none dark:text-white"
            />
            <label
              htmlFor="website"
              className="mt-1 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Website
            </label>

            <input
              id="website"
              type="text"
              placeholder="Enter your website"
              className="h-10 w-full rounded-lg border border-gray-200 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 dark:text-white"
            />

            <div className="flex justify-end mt-1 gap-2">
                <Button className="h-9 text-center rounded-lg border dark:bg-[#181818] dark:text-white border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 dark:hover:text-black">Cancel</Button>
                <Button className="h-9 text-center rounded-lg dark:bg-white bg-[#181818] dark:text-black px-4 text-sm font-medium text-white transition hover:bg-black dark:hover:text-white">Save changes</Button>
            </div>
        </form>
    </div>
  )
}

export default ProfileModal

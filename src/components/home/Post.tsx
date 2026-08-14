export default function Post() {
  return (
    <>
      <div className="min-w-50 max-w-150 mx-auto min-h-40 p-6 rounded-2xl border border-[#E5E5E5] shadow-sm drop-shadow-[#0000001A] dark:border-[#262626] dark:bg-[#0A0A0A]">
        <div className="flex items-center gap-5">
          <img
            className="w-10 rounded-full"
            src="../assets/avatar.png"
            alt="Profile Picture"
          />
          <div>
            <div className="flex justify-start items-center gap-5">
              <p className="font-bold text-[#171717] dark:text-[#FAFAFA]">
                Farshad Hosseini
              </p>
              <p className="text-[#737373] dark:text-[#A3A3A3] text-[14px] font-light">
                @f.e.h.farshad
              </p>
              <p className="text-[#737373] dark:text-[#A3A3A3] text-[14px] font-light">
                . 8 days ago
              </p>
            </div>
          </div>
        </div>
        <p className="dark:text-[#FAFAFA]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
          eligendi!
        </p>
      </div>
    </>
  );
}

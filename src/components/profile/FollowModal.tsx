import FollowItem from "./FollowItem";

type FollowModalProps = {
  followType: string;
  onClose: () => void;
};

export default function FollowModal(props: FollowModalProps) {
  const { followType, onClose } = props;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="pt-10 relative min-h-12 w-full max-w-sm rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Empty modal content */}

        <FollowItem></FollowItem>
      </div>
    </div>
  );
}

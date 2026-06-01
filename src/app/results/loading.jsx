import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">

      {/* Loading Icon */}
      <FaSpinner className="text-5xl animate-spin text-blue-500" />

      {/* Text */}
      <h2 className="text-lg font-semibold">
        ফলাফল লোড হচ্ছে...
      </h2>

      {/* Progress */}
      <div className="w-64 h-2 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-1/2 animate-pulse bg-blue-500"></div>
      </div>

    </div>
  );
}
"use client";

import Marquee from "react-fast-marquee";

export default function BreakingNews() {
  const messages = [
    "আসসালামু আলাইকুম।",
    "গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয়ে স্বাগতম।",
    "সম্মানিত অভিভাবক ও স্নেহের শিক্ষার্থীদের অবগতির জন্য জানানো যাচ্ছে যে, আগামী ১০ জুন, ২০২৬ তারিখে ২০২৬ শিক্ষাবর্ষের প্রথম প্রান্তিকের ফলাফল ঘোষণা করা হবে।",
    "নিয়মিত উপস্থিতি শিক্ষার্থীর সাফল্যের মূল চাবিকাঠি।",
    "বিদ্যালয়ের সকল কার্যক্রম সম্পর্কে জানতে আমাদের সাথে যোগাযোগ করুন।",
    "পরিচ্ছন্নতা ও শৃঙ্খলা বজায় রাখতে সবাইকে সহযোগিতা করার অনুরোধ করা হচ্ছে।",
    "শিক্ষার্থীদের উজ্জ্বল ভবিষ্যৎ গড়তে আমরা প্রতিশ্রুতিবদ্ধ।",
  ];

  return (
    <div className="flex items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white border dark:border-gray-700 py-2 px-2 sm:px-4">

      {/* Label */}
      <span className="shrink-0 bg-blue-600 dark:bg-red-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold">
        📢 ঘোষণা
      </span>

      {/* Marquee */}
      <div className="flex-1 min-w-0 ml-2 sm:ml-4 overflow-hidden">
        <Marquee
          speed={70}
          gradient={false}
          pauseOnHover
        >
          {messages.map((message, index) => (
            <span
              key={index}
              className="mx-4 sm:mx-8 whitespace-nowrap text-xs sm:text-sm md:text-base"
            >
              🔹 {message}
              <span className="mx-3 sm:mx-4 text-blue-500 dark:text-yellow-400">
                |
              </span>
            </span>
          ))}
        </Marquee>
      </div>

    </div>
  );
}
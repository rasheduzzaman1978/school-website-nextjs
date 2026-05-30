"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const slides = [
  {
    id: 1,
    title: "গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয়",
    highlight: "জ্ঞান, শৃঙ্খলা ও মানবিকতা",
    description:
      "আধুনিক ও মানসম্মত প্রাথমিক শিক্ষা প্রদানের মাধ্যমে শিক্ষার্থীদের উজ্জ্বল ভবিষ্যৎ গড়ে তুলতে আমরা প্রতিশ্রুতিবদ্ধ।",
    image: "/images/school-1.jpg",
  },
  {
    id: 2,
    title: "মনোরম শিক্ষার পরিবেশ",
    highlight: "শেখার আনন্দময় যাত্রা",
    description:
      "প্রাকৃতিক পরিবেশে শিক্ষার্থীদের জন্য নিরাপদ ও আনন্দময় শিক্ষার সুযোগ নিশ্চিত করা হয়।",
    image: "/images/school-2.jpg",
  },
  {
    id: 3,
    title: "সহশিক্ষা কার্যক্রম",
    highlight: "মেধা ও সৃজনশীলতার বিকাশ",
    description:
      "ক্রীড়া, সাংস্কৃতিক অনুষ্ঠান ও বিভিন্ন প্রতিযোগিতার মাধ্যমে শিক্ষার্থীদের প্রতিভা বিকশিত করা হয়।",
    image: "/images/school-3.jpg",
  },
  {
    id: 4,
    title: "ডিজিটাল শিক্ষা ব্যবস্থা",
    highlight: "প্রযুক্তির সাথে এগিয়ে চলা",
    description:
      "মাল্টিমিডিয়া ক্লাসরুম ও আধুনিক শিক্ষাসামগ্রীর মাধ্যমে পাঠদান কার্যক্রম পরিচালিত হয়।",
    image: "/images/school-4.jpg",
  },
  {
    id: 5,
    title: "সাফল্যের ধারাবাহিকতা",
    highlight: "উজ্জ্বল ভবিষ্যতের পথে",
    description:
      "শিক্ষার্থীদের নৈতিক ও একাডেমিক উৎকর্ষ অর্জনে বিদ্যালয় সর্বদা সচেষ্ট।",
    image: "/images/school-5.jpg",
  },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

  return (
    <section className="w-full overflow-hidden px-2 sm:px-4 md:px-6 py-4 md:py-8">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          spaceBetween={16}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="rounded-2xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="
                  grid
                  lg:grid-cols-2
                  gap-5 lg:gap-10
                  items-center
                  bg-white
                  dark:bg-slate-900
                  border
                  border-gray-200
                  dark:border-slate-700
                  rounded-2xl
                  shadow-lg
                  p-4
                  sm:p-6
                  md:p-8
                  lg:p-12
                  min-w-0
                "
              >
                {/* IMAGE */}
                <div className="order-1 lg:order-2 w-full overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={700}
                    height={500}
                    priority={slide.id === 1}
                    className="
                      w-full
                      max-w-full
                      h-[220px]
                      sm:h-[280px]
                      md:h-[350px]
                      lg:h-[450px]
                      object-cover
                      rounded-xl
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="order-2 lg:order-1 min-w-0">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm mb-3">
                    গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয়
                  </p>

                  <h1
                    className="
                      text-xl
                      sm:text-2xl
                      md:text-4xl
                      lg:text-5xl
                      font-extrabold
                      leading-tight
                      break-words
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {slide.title}

                    <span className="block mt-2 text-blue-600 dark:text-blue-400">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p
                    className="
                      mt-4
                      text-sm
                      sm:text-base
                      md:text-lg
                      text-gray-600
                      dark:text-gray-300
                      leading-relaxed
                    "
                  >
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Link
                      href="/about"
                      className="
                        w-full
                        sm:w-auto
                        text-center
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-5
                        py-3
                        rounded-xl
                        font-medium
                        transition
                      "
                    >
                      বিদ্যালয় পরিচিতি
                    </Link>

                    <Link
                      href="/contact"
                      className="
                        w-full
                        sm:w-auto
                        text-center
                        border
                        border-gray-300
                        dark:border-slate-600
                        hover:border-blue-500
                        text-gray-800
                        dark:text-white
                        px-5
                        py-3
                        rounded-xl
                        font-medium
                        transition
                      "
                    >
                      যোগাযোগ করুন
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
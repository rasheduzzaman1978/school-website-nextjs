export default function SchoolInfoPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-10 px-4 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            🏫 বিদ্যালয়ের তথ্য
          </h1>
          <p className="mt-2 text-white/90">
            গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয়
          </p>
        </div>

        <div className="space-y-6">
          {/* History */}
          <section className="rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-md border border-slate-200 dark:border-zinc-800 transition-all">
            <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-slate-100">
              📖 বিদ্যালয়ের ইতিহাস
            </h2>

            <div className="mb-4 h-px bg-slate-200 dark:bg-zinc-700" />

            <p className="text-justify leading-8 text-slate-700 dark:text-slate-300">
              গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয় ১৯২৯ সালে গ্রামবাসীর আন্তরিক প্রচেষ্টায় প্রতিষ্ঠিত হয়। প্রথমদিকে এটি ছিল বাঁশ ও টিনের ছাউনিতে নির্মিত একটি ছোট্ট একক শ্রেণির বিদ্যালয়। গ্রামের শিশুদের শিক্ষার আলো ছড়িয়ে দিতে স্থানীয় সমাজসেবক ও শিক্ষানুরাগীরা সম্মিলিতভাবে উদ্যোগ নেন।
            সময় গড়িয়ে বিদ্যালয়টি সরকারি স্বীকৃতি লাভ করে এবং ধীরে ধীরে পূর্ণাঙ্গ প্রাথমিক বিদ্যালয়ে রূপান্তরিত হয়। বর্তমানে বিদ্যালয়টিতে সুন্দর অবকাঠামো, প্রশিক্ষণপ্রাপ্ত শিক্ষকবৃন্দ এবং আধুনিক শিক্ষাসামগ্রী বিদ্যমান, যা এলাকার শিশুদের মানসম্মত শিক্ষার অন্যতম কেন্দ্র হয়ে উঠেছে।
            </p>
          </section>

          {/* Location */}
          <section className="rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-md border border-slate-200 dark:border-zinc-800">
            <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-slate-100">
              📍 বিদ্যালয়ের অবস্থান
            </h2>

            <div className="mb-4 h-px bg-slate-200 dark:bg-zinc-700" />

            <p className="text-slate-700 dark:text-slate-300 leading-8 text-justify">
              গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয়টি সিরাজগঞ্জ জেলার
              উল্লাপাড়া উপজেলার সুপরিচিত গয়হাট্টা গ্রামে অবস্থিত।
            </p>
          </section>

          {/* Goal */}
          <section className="rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-md border border-slate-200 dark:border-zinc-800">
            <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-slate-100">
              🎯 বিদ্যালয়ের লক্ষ্য
            </h2>

            <div className="mb-4 h-px bg-slate-200 dark:bg-zinc-700" />

            <p className="text-slate-700 dark:text-slate-300 leading-8 text-justify">
              বিদ্যালয়ের লক্ষ্য হলো এলাকার সকল শিশুদের মানসম্মত,
              নৈতিক ও সৃজনশীল শিক্ষা প্রদান করা।
            </p>
          </section>

          {/* Objectives */}
          <section className="rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-md border border-slate-200 dark:border-zinc-800">
            <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-slate-100">
              📌 বিদ্যালয়ের উদ্দেশ্য
            </h2>

            <div className="mb-4 h-px bg-slate-200 dark:bg-zinc-700" />

            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li>✅ নিয়মিত ও মানসম্মত পাঠদান নিশ্চিত করা।</li>
              <li>✅ সৃজনশীল পরীক্ষা পদ্ধতি ও কার্যকর শিক্ষণ কৌশল ব্যবহার করা।</li>
              <li>✅ খেলাধুলা, সাংস্কৃতিক অনুষ্ঠান, বিতর্ক ও সহশিক্ষা কার্যক্রমের মাধ্যমে শিক্ষার্থীদের মানসিক ও শারীরিক বিকাশ ঘটানো।</li>
              <li>✅ আধুনিক প্রযুক্তি (কম্পিউটার, প্রজেক্টর ইত্যাদি) ব্যবহার করে শিক্ষার মান বৃদ্ধি করা।</li>
              <li>✅ অভিভাবক ও শিক্ষকদের মধ্যে নিয়মিত যোগাযোগ বজায় রাখা।</li>
              <li>✅ শিক্ষার্থীদের মধ্যে দেশপ্রেম, নৈতিকতা ও সামাজিক দায়বদ্ধতা গড়ে তোলা।</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
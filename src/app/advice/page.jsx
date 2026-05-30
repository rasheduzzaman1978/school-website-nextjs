import React from "react";

const AdvicePage = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-[#04122d] py-12 md:py-20 px-4">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div className="text-center lg:text-left">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-5">
            যোগাযোগ করুন
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            আপনার মতামত ও
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              পরামর্শ আমাদের জানান
            </span>
          </h1>

          <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            আপনার যেকোনো প্রশ্ন, মতামত কিংবা পরামর্শ আমাদের জন্য
            অত্যন্ত গুরুত্বপূর্ণ। নিচের ফর্মটি পূরণ করে সহজেই
            আপনার বার্তা পাঠাতে পারেন।
          </p>

          {/* Contact Cards */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">

            {/* Email Card */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 text-xl">
                  📧
                </div>

                <div className="text-left">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Email
                  </p>

                  <a
                    href="mailto:ggps1929@gmail.com"
                    className="text-sm text-slate-500 hover:text-blue-600 break-all"
                  >
                    ggps1929@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30 text-xl">
                  📞
                </div>

                <div className="text-left">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Phone
                  </p>

                  <a
                    href="tel:+8801716651946"
                    className="text-sm text-slate-500 hover:text-blue-600"
                  >
                    +880 1716-651946
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200 dark:border-slate-700">

          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-2">
            ✉️ বার্তা পাঠান
          </h2>

          <p className="text-center text-slate-500 dark:text-slate-400 mb-8">
            আমরা যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করবো।
          </p>

          <form className="space-y-5">

            <div>
              <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                আপনার নামঃ
              </label>

              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                মোবাইল নাম্বারঃ
              </label>

              <input
                type="tel"
                placeholder="আপনার মোবাইল নাম্বার লিখুন"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                বিষয়ঃ
              </label>

              <input
                type="text"
                placeholder="বিষয় লিখুন"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                বার্তাঃ
              </label>

              <textarea
                rows={5}
                placeholder="আপনার বার্তা লিখুন..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              🚀 বার্তা পাঠান
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdvicePage;


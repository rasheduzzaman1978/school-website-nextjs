import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="bg-slate-50 dark:bg-black min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            যোগাযোগ করুন
          </h1>

          <p className="text-sm md:text-base lg:text-lg mt-4 text-slate-600 dark:text-slate-300 max-w-5xl text-justify mx-auto">
            গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয় সম্পর্কে যেকোনো তথ্য,
            পরামর্শ অথবা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">

          {/* Contact Information */}
          <div className="bg-white dark:bg-[#04122d] rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">

            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
              যোগাযোগের তথ্য
            </h2>

            <div className="space-y-6">

              {/* Address */}
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1 shrink-0" />

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    ঠিকানা
                  </h3>

                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                    গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয়
                  </p>

                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                    EMIS Code: 91115010701
                  </p>

                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                    বিদ্যালয়ের কোড: ১১৭৮৫৩, ক্লাস্টারঃ গয়হাট্টা
                  </p>

                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                    গ্রামঃ পারকুল, ডাকঘরঃ গয়হাট্টা-৬৭৬২
                  </p>

                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                    ইউনিয়নঃ পূর্ণিমাগাতী, উপজেলাঃ উল্লাপাড়া,
                    জেলাঃ সিরাজগঞ্জ
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <FaPhoneAlt className="text-green-600 text-xl mt-1 shrink-0" />

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    ফোন
                  </h3>

                  <a
                    href="tel:+8801716651946"
                    className="text-slate-600 dark:text-slate-300 hover:text-green-600 transition-colors"
                  >
                    +880 1716-651946
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <FaWhatsapp className="text-green-500 text-xl mt-1 shrink-0" />

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    WhatsApp
                  </h3>

                  <a
                    href="https://wa.me/8801716651946"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-300 hover:text-green-600 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <FaEnvelope className="text-red-500 text-xl mt-1 shrink-0" />

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Email
                  </h3>

                  <a
                    href="mailto:ggps1929@gmail.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-red-500 transition-colors break-all"
                  >
                    ggps1929@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white dark:bg-[#04122d] rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">

            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              📍 আমাদের অবস্থান
            </h2>

            <div className="overflow-hidden rounded-xl h-[350px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=Goyhata Government Primary School, Ullapara, Sirajganj,Bangladesh&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                className="border-0 w-full h-full rounded-xl"
                title="School Location"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
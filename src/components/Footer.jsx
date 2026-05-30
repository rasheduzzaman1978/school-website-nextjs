import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    { name: "হোম", href: "/" },
    { name: "শিক্ষকবৃন্দ", href: "/teachers" },
    { name: "শিক্ষার্থী", href: "/students" },
    { name: "ফলাফল", href: "/results" },
    { name: "নোটিশ", href: "/notices" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  const importantLinks = [
    {
      name: "IPEMIS",
      href: "https://ops.ipemis.dpe.gov.bd/my-school",
    },
    {
      name: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড",
      href: "https://nctb.gov.bd/pages/static-pages/695b9b7cc4774958d7b70a12",
    },
    {
      name: "প্রাথমিক উপবৃত্তি", 
      href: "https://pesp.finance.gov.bd/pesp/login",
    },
    {
      name: "প্রভিডেন্ট ফান্ড চেক", 
      href: "https://www.cafopfm.gov.bd",
    },
  ];

  return (
    <footer className="bg-white dark:bg-[#04122d] border-t border-slate-200 dark:border-slate-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/school-logo.jpg"
                alt="School Logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-yellow-400"
              />

              <div>
                <h2 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  গয়হাট্টা মডেল সরকারি
                  <br />
                  <span className="text-blue-600 dark:text-sky-400">প্রাথমিক বিদ্যালয়</span>
                </h2>
              </div>
            </div>

            <p className="text-sm md:text-base mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              মানসম্মত প্রাথমিক শিক্ষা, নৈতিক মূল্যবোধ এবং
              আধুনিক প্রযুক্তিনির্ভর শিক্ষার মাধ্যমে শিক্ষার্থীদের
              উজ্জ্বল ভবিষ্যৎ গড়ে তুলতে আমরা প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Websites */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              গুরুত্বপূর্ণ ওয়েবসাইট
            </h3>

            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={12} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              যোগাযোগ
            </h3>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" />
                <span>
                  গ্রামঃ পারকুল,
                  ডাকঘরঃ গয়হাট্টা-৬৭৬২,
                  উপজেলাঃ উল্লাপাড়া,
                  জেলাঃ সিরাজগঞ্জ।
                </span>
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600 shrink-0" />
                <a
                  href="tel:8801716651946"
                  className="hover:text-blue-600"
                >
                  +880 1716-651946
                </a>
              </p>
              
              <p className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500 shrink-0" />

                <a
                    href="https://wa.me/8801716651946"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-600 transition-colors"
                >
                    WhatsApp: +880 1716-651946
                </a>
                </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 shrink-0" />
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ggps1929@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 break-all"
                >
                ggps1929@gmail.com
                </a>
                </p>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                <FaFacebookF />
                Facebook Page
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
              © {new Date().getFullYear()} গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয়।
              সর্বস্বত্ব সংরক্ষিত।
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
              Developed by{" "}
              <span className="font-semibold text-blue-600">
                Md. Rasheduzzaman
              </span>
              , Head Teacher (Acting), Goyhatta MGPS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
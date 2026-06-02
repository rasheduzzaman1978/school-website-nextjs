import BreakingNews from "@/components/BreakingNews";
import "./globals.css";
import CustomNavbar from "@/components/Navbar";
import Providers from "@/components/ThemeProvider";
import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Goyhatta MGPS",
  description: "গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয়",
  icons: {
    icon: "/school-logo.jpg",
    shortcut: "/school-logo.jpg",
    apple: "/school-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansBengali.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden flex flex-col bg-slate-100 text-slate-900 dark:bg-[#020817] dark:text-white transition-colors duration-300 font-sans">
        <Providers>
          <CustomNavbar />
          <BreakingNews />

          <main className="flex-1 bg-slate-100 dark:bg-[#020817] transition-colors duration-300">
            {children}
          </main>

          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={1200}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
          />
        </Providers>
      </body>
    </html>
  );
}
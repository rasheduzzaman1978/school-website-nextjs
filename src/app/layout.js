import BreakingNews from "@/components/BreakingNews";
import "./globals.css";
import CustomNavbar from "@/components/Navbar";
import Providers from "@/components/ThemeProvider";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden flex flex-col bg-slate-100 text-slate-900 dark:bg-[#020817] dark:text-white transition-colors duration-300">
        <Providers>
          <CustomNavbar />
          <BreakingNews />
          <main className="flex-1 bg-slate-100 dark:bg-[#020817] transition-colors duration-300">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
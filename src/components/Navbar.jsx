"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import ThemeToggle from "@/components/ThemeToggle";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function CustomNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "বিদ্যালয়ের তথ্য", path: "/" },
    { name: "শিক্ষক", path: "/teachers" },
    { name: "শিক্ষার্থী", path: "/students" },
    { name: "ফলাফল", path: "/results" },
    { name: "ভর্তি", path: "/admissions" },
    { name: "গ্যালারি", path: "/gallery" },
    { name: "নোটিশ", path: "/notices" },
    { name: "পরামর্শ", path: "/advice" },
    { name: "অন্যান্য", path: "/others" },
    { name: "যোগাযোগ", path: "/contact" },
  ];

  const session = authClient.useSession();
  const user = session.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-[#04122d] shadow-md dark:shadow-lg">
        <Navbar
        maxWidth="full"
        className="bg-white dark:bg-[#04122d] text-slate-900 dark:text-white  px-3 md:px-6 xl:px-10
    h-16 md:h-[74px] transition-colors duration-300"
        >
          
          {/* Logo */}
          <NavbarContent justify="start" className="flex-1">
            <NavbarBrand>
              <Link href="/" className="flex items-center gap-2 md:gap-3">
                <Image
                  src="/school-logo.jpg"
                  alt="School Logo"
                  width={44}
                  height={44}
                  className="rounded-full border-2 border-yellow-400"
                />

                <div className="hidden lg:block leading-none">
                  <h1 className="text-slate-900 dark:text-white text-xl font-extrabold">
                    গয়হাট্টা মডেল
                  </h1>

                  <p className="text-blue-600 dark:text-sky-400 text-sm font-semibold mt-1">
                    সরকারি প্রাথমিক বিদ্যালয়
                  </p>
                </div>
              </Link>
            </NavbarBrand>
          </NavbarContent>

          {/* Desktop Menu */}
          <NavbarContent justify="center" className="hidden xl:flex flex-1 gap-0.5 ml-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <NavbarItem key={link.path}>
                  <Link
                    href={link.path}
                    className={`px-3 py-2 text-[15px] font-medium rounded-lg whitespace-nowrap transition-all duration-300 ${
                    isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-sky-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </NavbarItem>
              );
            })}
          </NavbarContent>

          {/* Right Side */}
          <NavbarContent justify="end" className="flex-1 flex items-center justify-end gap-2 md:gap-3">
            <ThemeToggle />
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden text-slate-800 dark:text-white text-xl p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition"
                >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

             {/* Desktop Auth */}
            <div className="hidden xl:flex items-center gap-3">
              {!user ? (
                <Link href="/login">
                <Button className="bg-[#39d353] hover:bg-[#32c84b] text-white font-bold text-lg px-3 h-10 rounded-md shadow-sm transition-all duration-300 flex items-center justify-center gap-2">
                    <FiLogIn size={20} className="text-white" />
                    Login
                </Button>
                </Link>
              ) : (
                <div className="flex items-center gap-3">
                  <Avatar
                    src={user?.image}
                    name={user?.name}
                    size="sm"
                    className="ring-2 ring-green-500"
                  />

                  <span className="hidden lg:block text-sm text-slate-900 dark:text-white font-medium">
                    {user?.name}
                  </span>

                  <Button
                    color="danger"
                    size="sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </NavbarContent>
        </Navbar>

        {/* Bottom Border */}
        <div className="h-[2px] bg-cyan-400" />
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-[#04122d] text-slate-900 dark:text-white shadow-lg">
          <div className="px-4 py-4 space-y-1">

            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                    isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 dark:text-gray-100 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="border-t border-slate-300 dark:border-slate-700 mt-4 pt-4">
              {!user ? (
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-[#39d353] hover:bg-[#32c84b] text-white font-bold text-lg h-11 rounded-md shadow-sm transition-all duration-300 flex items-center justify-center gap-2">
                    <FiLogIn size={18} />
                    Login
                    </Button>
                </Link>
              ) : (
                <Button
                  color="danger"
                  className="w-full"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
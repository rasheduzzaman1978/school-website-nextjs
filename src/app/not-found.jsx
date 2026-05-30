"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 sm:px-6">
      <div className="w-full max-w-2xl text-center">

        {/* 404 */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-indigo-600">
          404
        </h1>

        {/* Content */}
        <div className="mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
            Oops! Page Not Found
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist, has been moved,
            or is temporarily unavailable.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-indigo-700"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Go Back
          </button>
        </div>

        {/* Illustration */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="inline-flex h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 items-center justify-center rounded-full bg-indigo-100">
            <span className="text-4xl sm:text-5xl md:text-7xl">
              🚀
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}
"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-indigo-600">
          404
        </h1>

        <div className="mt-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Oops! Page Not Found
          </h2>

          <p className="mt-3 text-slate-600 max-w-md mx-auto">
            The page you're looking for doesn't exist, has been moved, or is
            temporarily unavailable.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-indigo-700"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12">
          <div className="inline-flex h-40 w-40 items-center justify-center rounded-full bg-indigo-100">
            <span className="text-7xl">🚀</span>
          </div>
        </div>
      </div>
    </main>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-4 h-4"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const activities = [
    "Aerobic",
    "CrossFit",
    "Zumba",
    "Abs",
    "Yoga",
    "Kick Boxing",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-zinc-900">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="h-[90px] flex items-center justify-between">

          {/* LOGO */}
          <div>
            <Link href="/">
              <img
                src="/logo.png"
                alt="logo"
                className="h-14 object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-12 text-white font-semibold uppercase text-base">

            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link>
            <Link href="/team" className="hover:text-yellow-400 transition-colors">Team</Link>

            {/* ACTIVITIES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                Activities
                <ChevronDownIcon />
              </button>

              {open && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-zinc-800 shadow-2xl">

                  {activities.map((item, index) => {
                    const routePath = "/" + item.toLowerCase().replace(" ", "-");
                    return (
                      <Link
                        key={index}
                        href={routePath}
                        className="block px-5 py-4 border-b border-zinc-800 hover:bg-zinc-900 hover:text-yellow-400 transition-colors"
                      >
                        {item}
                      </Link>
                    );
                  })}

                </div>
              )}
            </div>

            <Link href="/pricing" className="hover:text-yellow-400 transition-colors">Pricing</Link>
            <Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>

          </nav>

          {/* BUTTON */}
          <Link 
            href="/joinnow" 
            className="border border-yellow-500 text-white px-10 py-3.5 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition inline-block text-center"
          >
            JOIN NOW
          </Link>

        </div>
      </div>
    </header>
  );
}
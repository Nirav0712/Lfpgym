"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

import {
  FiClock,
  FiMapPin,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full border-t border-zinc-900">

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-10">

          {/* Left Column */}
          <div>
            <img
              src="/logo.png"
              alt="Life Fitness Pro"
              className="w-28 mb-3 object-contain"
            />

            <p className="text-gray-400 leading-normal text-xs max-w-sm mb-3">
              Upgrade your lifestyle with our professional gym
              services and start your journey to a healthier you.
              We deliver customized programs designed to help you
              reach your fitness goals faster.
            </p>

            <div className="flex gap-2">
              {[FaFacebookF, FaInstagram, FaYoutube, FaGlobe].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition cursor-pointer"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold mb-3 text-white uppercase tracking-wider">
              Company
            </h3>

            <ul className="space-y-1.5 text-xs text-gray-400">
              <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-yellow-400 hover:text-yellow-500 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-yellow-400 transition-colors">Team</Link></li>
              <li><Link href="/pricing" className="hover:text-yellow-400 transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Activities */}
          <div className="lg:pl-3">
            <h3 className="text-xs font-semibold mb-3 text-white uppercase tracking-wider">
              Our Activities
            </h3>

            <ul className="space-y-1.5 text-xs text-gray-400">
              <li><Link href="/aerobic" className="hover:text-yellow-400 transition-colors">Aerobic</Link></li>
              <li><Link href="/crossfit" className="hover:text-yellow-400 transition-colors">CrossFit</Link></li>
              <li><Link href="/zumba" className="hover:text-yellow-400 transition-colors">Zumba</Link></li>
              <li><Link href="/abs" className="hover:text-yellow-400 transition-colors">Abs</Link></li>
              <li><Link href="/yoga" className="hover:text-yellow-400 transition-colors">Yoga</Link></li>
              <li><Link href="/kick-boxing" className="hover:text-yellow-400 transition-colors">Kick Boxing</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:pl-3">
            <h3 className="text-xs font-semibold mb-3 text-white uppercase tracking-wider">
              Contact Details
            </h3>

            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <FiClock className="text-yellow-400 shrink-0" size={14} />
                <span>Mon - Sun: 06:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-start gap-2">
                <FiMapPin className="text-yellow-400 shrink-0 mt-0.5" size={14} />
                <span className="leading-tight">
                  5th Floor, Sidhivinayak Business Hub, Shahibag, Ahmedabad
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-yellow-400 shrink-0" size={14} />
                <span className="hover:text-yellow-400 transition-colors cursor-pointer break-all">
                  lifefitnesspro07@gmail.com
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#111]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">

          <p>
            Copyright 2026 - Developed by The Digital Connect-CE
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
          </div>

        </div>
      </div>

    </footer>
  );
}
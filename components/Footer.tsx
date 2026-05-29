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
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[28%_16%_20%_36%] gap-6 md:gap-8 lg:gap-6">

          {/* Left Column */}
          <div className="md:-ml-16 lg:-ml-24">
            <img
              src="/logo.png"
              alt="Life Fitness Pro"
              className="w-28 mb-4 object-contain"
            />

            <p className="text-white font-medium leading-relaxed text-[15px] sm:text-[17px] max-w-sm mb-4">
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
                    className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center hover:bg-[#F5E609] hover:text-black transition cursor-pointer"
                  >
                    <Icon size={16} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[17px] sm:text-[19px] font-bold mb-5 text-white uppercase tracking-wider">
              Company
            </h3>

            <ul className="space-y-2.5 text-[15px] sm:text-[17px] text-white font-medium">
              <li><Link href="/" className="hover:text-[#F5E609] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#F5E609] hover:text-[#F5E609]/80 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-[#F5E609] transition-colors">Team</Link></li>
              <li><Link href="/pricing" className="hover:text-[#F5E609] transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-[#F5E609] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#F5E609] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Activities */}
          <div className="lg:pl-2">
            <h3 className="text-[17px] sm:text-[19px] font-bold mb-5 text-white uppercase tracking-wider">
              Our Activities
            </h3>

            <ul className="space-y-2.5 text-[15px] sm:text-[17px] text-white font-medium">
              <li><Link href="/aerobic" className="hover:text-[#F5E609] transition-colors">Aerobic</Link></li>
              <li><Link href="/crossfit" className="hover:text-[#F5E609] transition-colors">CrossFit</Link></li>
              <li><Link href="/zumba" className="hover:text-[#F5E609] transition-colors">Zumba</Link></li>
              <li><Link href="/abs" className="hover:text-[#F5E609] transition-colors">Abs</Link></li>
              <li><Link href="/yoga" className="hover:text-[#F5E609] transition-colors">Yoga</Link></li>
              <li><Link href="/kick-boxing" className="hover:text-[#F5E609] transition-colors">Kick Boxing</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:pl-2">
            <h3 className="text-[17px] sm:text-[19px] font-bold mb-5 text-white uppercase tracking-wider">
              Contact Details
            </h3>

            <div className="space-y-4 text-[15px] sm:text-[17px] text-white font-medium">
              <div className="flex items-center gap-2">
                <FiClock className="text-[#F5E609] shrink-0" size={18} />
                <span>Mon - Sun: 06:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-start gap-2">
                <FiMapPin className="text-[#F5E609] shrink-0 mt-1" size={18} />
                <div className="flex flex-col gap-2.5">
                  <span className="leading-relaxed">
                    5th Floor, Sidhivinayak Business Hub, Shahibag, Ahmedabad.
                  </span>
                  <span className="leading-relaxed text-gray-400">
                    105 to 107, 1st Floor, Ratnanjali Square, Prernatirth Derasar Rd, near Gloria Restaurant, Jodhpur Village, Ahmedabad, Gujarat 380015.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-[#F5E609] shrink-0" size={18} />
                <span className="hover:text-[#F5E609] transition-colors cursor-pointer break-all">
                  lifefitnesspro07@gmail.com
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#111]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[15px] sm:text-[17px] text-gray-400 font-medium">

          <p>
            Copyright 2026 - Developed by The Digital Connect-CE
          </p>

          <div className="flex gap-4 text-white font-medium">
            <a href="#" className="hover:text-[#F5E609] transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-[#F5E609] transition-colors">Privacy Policy</a>
          </div>

        </div>
      </div>

    </footer>
  );
}
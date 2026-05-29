"use client";

import Link from "next/link";
import {
  Check,
  ChevronRight,
  Star,
} from "lucide-react";

export default function CrossfitPage() {
  const programs = [
    { name: "Aerobics", href: "/aerobic" },
    { name: "Zumba", href: "/zumba" },
    { name: "Abs", href: "/abs" },
    { name: "Cross Fit", href: "/crossfit" },
    { name: "Yoga", href: "/yoga" },
    { name: "Kick Boxing", href: "/kick-boxing" },
  ];

  const highlights = [
    {
      title: "Certified Fitness Experts",
      text: "All our trainers are certified professionals with years of experience in strength, conditioning, and body transformation techniques.",
    },
    {
      title: "Personalized Fitness Plans",
      text: "Each client receives a personalized program that aligns with their goals, fitness level, and schedule for maximum results.",
    },
    {
      title: "Science-Based Nutrition Support",
      text: "We help you fuel your body the right way with simple, science-based nutrition advice that complements your training routine.",
    },
    {
      title: "Progress Tracking & Reviews",
      text: "Stay motivated with regular body composition analysis, performance tracking, and monthly goal reviews to measure success.",
    },
    {
      title: "Flexible Training Timings",
      text: "Train at your convenience — our trainers offer flexible session times that fit around your lifestyle and commitments.",
    },
    {
      title: "Complete Fitness Support",
      text: "We go beyond workouts — our trainers keep you motivated, consistent, and confident every step of your fitness journey.",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Mehta",
      date: "12 September 2025",
      review:
        "Life Fitness Pro has completely changed my fitness journey. The trainers are highly professional, the workout programs are well-structured, and the environment keeps me motivated every day.",
    },
    {
      name: "Neha Patel",
      date: "15 June 2024",
      review:
        "Joining Life Fitness Pro was one of the best decisions I've made for my health and fitness. The trainers are knowledgeable and always focus on correct form and steady progress.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[320px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Blue Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-transparent to-black" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl font-bold">CrossFit</h1>

          <div className="flex items-center gap-2 mt-3 text-sm text-white">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Programs</span>
            <ChevronRight size={14} />
            <span className="font-semibold">Personal Training</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12">
          {/* LEFT MENU */}
          <div className="space-y-3">
            {programs.map((item) => {
              const isActive = item.name === "Cross Fit";
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block w-full text-left px-5 py-4 font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-[#F5E609] text-black"
                      : "bg-zinc-800 hover:bg-[#F5E609] hover:text-black text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400"
              alt="Crossfit"
              className="w-full max-w-[850px] h-auto object-cover"
            />

            <h2 className="text-6xl font-bold mt-10 uppercase tracking-tight">
              CrossFit
            </h2>

            <p className="text-gray-300 leading-9 mt-6 max-w-5xl">
              Our CrossFit & Personal Training Program is built to unlock your
              true potential through high-intensity functional workouts, expert
              nutrition advice, and continuous motivation. Whether your goal is
              fat loss, muscle gain, strength building, or boosting endurance,
              our certified CrossFit coaches and personal trainers design a
              customized training plan based on your fitness level and
              objectives. With professional guidance, structured programming,
              and dedicated accountability, you'll achieve real, measurable
              results inside the training zone and in your everyday life.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-24">
              <h2 className="text-5xl font-bold mb-12">
                Program Highlights
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6"
                  >
                    <div className="w-16 h-16 border border-[#F5E609] flex items-center justify-center flex-shrink-0">
                      <Check
                        size={30}
                        className="text-white"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 leading-8">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TESTIMONIALS */}
            <div className="mt-28">
              <h2 className="text-5xl font-bold mb-10">
                Client Testimonials
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800 p-8"
                  >
                    <h4 className="font-bold text-xl">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-300 mt-1">
                      {item.date}
                    </p>

                    <div className="flex items-center gap-1 mt-5 text-[#F5E609]">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <span className="ml-2 text-white">
                        5.0
                      </span>
                    </div>

                    <p className="mt-6 text-gray-300 leading-8">
                      "{item.review}"
                    </p>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-10">
                <div className="w-2 h-2 rounded-full bg-[#F5E609]"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-black overflow-hidden py-8 mt-24">
          <div className="flex w-max animate-marquee">
            {[...Array(6)].map((_, index) => (
              <h2
                key={index}
                className="mx-16 text-4xl md:text-7xl font-bold text-[#F5E609] whitespace-nowrap"
              >
                Ready to take the first step towards your fitness goals?
              </h2>
            ))}
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
                .animate-marquee {
                  animation: marquee 50s linear infinite;
                }
                @keyframes marquee {
                  0% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
              `,
            }}
          />
        </section>

      </section>
    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";

const activities = [
  {
    title: "Zumba",
    desc: "Join vibrant Zumba group sessions filled with energetic dance routines to burn calories, improve stamina, and stay inspired.",
    image: "/whychoose1.jpg",
    link: "/activities/zumba",
    dark: true,
  },
  {
    title: "Abs",
    desc: "Boost your core power with focused ABS training that combines dynamic movements and strength exercises to achieve defined, total-body results quickly.",
    image: "/Abs.jpg",
    link: "/activities/abs",
    dark: false,
  },
  {
    title: "Yoga",
    desc: "Increase flexibility, ease stress, and strengthen mind-body balance with guided Yoga sessions conducted by certified instructors.",
    image: "/whychus.jpg",
    link: "/activities/yoga",
    dark: false,
  },
  {
    title: "Kickboxing",
    desc: "Train your core like a champion with intense ABS drills, stability exercises, and controlled movements designed to improve strength and overall performance.",
    image: "/whychoose1.jpg",
    link: "/activities/kickboxing",
    dark: true,
  },
  {
    title: "Crossfit",
    desc: "Train your core like a champion with intense ABS drills, stability exercises, and controlled movements designed to improve strength and overall performance.",
    image: "/whychus.jpg",
    link: "/activities/crossfit",
    dark: true,
  },
  {
    title: "Aerobics",
    desc: "Train your core like a champion with intense ABS drills, stability exercises, and controlled movements designed to improve strength and overall performance.",
    image: "/whychoose1.jpg",
    link: "/activities/aerobics",
    dark: false,
  },
];

export default function ActivitiesGrid() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">

          {activities.map((item, index) => (
            <div
              key={index}
              className={`relative h-[530px] overflow-hidden flex ${item.dark
                ? "bg-[#232323]"
                : "bg-black border border-yellow-400"
                }`}
            >
              {/* Left Content */}
              <div
                className={`w-[48%] px-8 py-9 flex flex-col justify-between z-20 ${item.dark ? "bg-[#232323]" : "bg-black"
                  }`}
              >
                <div>
                  <h3 className="text-white text-[38px] font-bold mb-5">
                    {item.title}
                  </h3>

                  <p className="text-white text-[18px] leading-[42px]">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="uppercase text-white text-sm font-semibold tracking-wide hover:text-yellow-400 transition"
                >
                  View Details
                </Link>
              </div>

              {/* Slanted Divider */}
              <div
                className={`absolute left-[42%] top-0 w-[90px] h-full skew-x-[-10deg] z-10 ${item.dark ? "bg-[#232323]" : "bg-black"
                  }`}
              />

              {/* Right Image */}
              <div className="relative w-[52%] h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}

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

        <style jsx>{`
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
  `}</style>
      </section>
    </section>
  );
}
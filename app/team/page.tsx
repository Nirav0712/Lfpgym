"use client";

import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Vikram Rathore",
    role: "Founder & Head Coach",
    image: "/whychus.jpg",
  },
  {
    name: "Sarah Jenkins",
    role: "Personal Trainer & Yoga Expert",
    image: "/female-gym.jpg",
  },
  {
    name: "Michael Chang",
    role: "Strength & Conditioning Coach",
    image: "/whychoose1.jpg",
  },
  {
    name: "David Miller",
    role: "CrossFit Specialist",
    image: "/Abs.jpg",
  },
  {
    name: "Elena Rostova",
    role: "Zumba & Aerobics Lead",
    image: "/female-gym.jpg",
  },
  {
    name: "Marcus Aurelius",
    role: "Kick Boxing Instructor",
    image: "/male-gym.jpg",
  },
  {
    name: "Marcus Aurelius",
    role: "Kick Boxing Instructor",
    image: "/male-gym.jpg",
  },
  {
    name: "Marcus Aurelius",
    role: "Kick Boxing Instructor",
    image: "/male-gym.jpg",
  },
  {
    name: "Marcus Aurelius",
    role: "Kick Boxing Instructor",
    image: "/male-gym.jpg",
  },
  // {
  //   name: "Marcus Aurelius",
  //   role: "Kick Boxing Instructor",
  //   image: "/male-gym.jpg",
  // },
  // {
  //   name: "Marcus Aurelius",
  //   role: "Kick Boxing Instructor",
  //   image: "/male-gym.jpg",
  // },

];

export default function TeamPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-[90px]">
      {/* Hero Banner */}
      <section className="relative h-[340px] w-full overflow-hidden">
        <Image
          src="/about-banner.jpg"
          alt="Team Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4 text-center tracking-tight">
            Our Team
          </h1>

          <div className="flex items-center gap-3 text-sm font-medium">
            <Link href="/" className="hover:text-[#F5E609] transition-colors">
              Home
            </Link>

            <span className="text-[#F5E609]">›</span>

            <span className="text-gray-300">Team</span>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[#F5E609] font-semibold text-lg uppercase tracking-wider mb-3">
            Expert Trainers
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
            Meet Our Professionals
          </h2>
          <div className="w-24 h-1.5 bg-[#F5E609] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col h-full border border-[#F5E609] bg-black overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,230,9,0.15)] hover:border-white"
            >
              {/* Image Container */}
              <div className="relative h-[420px] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                {/* Visual Accent/Border overlay inside image */}
                <div className="absolute inset-0 border-[6px] border-black/0 group-hover:border-black/20 transition-all duration-300" />
              </div>

              {/* Text Details */}
              <div className="p-6 text-center flex flex-col justify-center flex-grow bg-[#050505]">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide transition-colors group-hover:text-[#F5E609]">
                  {member.name}
                </h3>
                <p className="text-gray-400 font-semibold text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Footer Accent */}
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
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-black text-white">
      {/* Hero Banner */}
      <div className="relative h-[420px] overflow-hidden">
        <Image
          src="/about-banner.jpg"
          alt="About Banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold">About Us</h1>

          <div className="flex items-center gap-2 mt-4 text-gray-300">
            <span>Home</span>
            <span>/</span>
            <span className="text-[#F5E609]">About</span>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-5 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#F5E609] font-semibold text-lg mb-4">
              About Us
            </p>

            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase">
              Here Gym Fitness
              <br />
              Meets Excellence!
            </h2>

            <p className="text-gray-300 mt-8 text-lg leading-9 max-w-xl">
              At our gym, fitness is more than just a workout—it’s a commitment
              to excellence. We are built for individuals who want real results
              through discipline, consistency, and professional guidance.
            </p>

            <Link
              href="/classes"
              className="inline-flex mt-10 border border-[#F5E609] px-8 py-4 font-semibold transition-all duration-300 hover:bg-[#F5E609] hover:text-black"
            >
              EXPLORE OUR CLASSES
            </Link>
          </div>

          {/* Right Side Grid */}
          <div className="grid grid-cols-2 gap-5">
            {/* Image 1 */}
            <div className="relative h-[300px] overflow-hidden group">
              <Image
                src="/gym1.jpg"
                alt="Gym"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>

            {/* Stat 1 */}
            <div className="border border-[#F5E609] flex flex-col items-center justify-center h-[170px] bg-black">
              <h3 className="text-6xl font-bold">2300+</h3>
              <p className="mt-2 text-gray-300">Active Member</p>
            </div>

            {/* Stat 2 */}
            <div className="border border-[#F5E609] flex flex-col items-center justify-center h-[170px] bg-black">
              <h3 className="text-6xl font-bold">25+</h3>
              <p className="mt-2 text-gray-300">Certified Trainers</p>
            </div>

            {/* Image 2 */}
            <div className="relative h-[300px] overflow-hidden group">
              <Image
                src="/gym2.jpg"
                alt="Gym"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-white text-4xl md:text-6xl font-bold">
              Our Mission & Vision
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="bg-[#050505] border border-[#111] px-10 py-14 text-center transition-all duration-300 hover:border-[#F5E609]">
              <h3 className="text-white text-2xl font-bold mb-6">
                Our Mission
              </h3>

              <p className="text-gray-300 text-lg leading-10">
                Our mission is to empower individuals to achieve their
                fitness goals through expert guidance, structured
                programs, and a motivating environment. We help
                members build strength, improve endurance, and
                develop lifelong healthy habits consistently.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#050505] border border-[#111] px-10 py-14 text-center transition-all duration-300 hover:border-[#F5E609]">
              <h3 className="text-white text-2xl font-bold mb-6">
                Our Vision
              </h3>

              <p className="text-gray-300 text-lg leading-10">
                We aim to inspire a community where fitness becomes
                a lifestyle rather than just a routine, creating an
                environment where every individual feels confident,
                supported, and motivated to become the strongest
                version of themselves.
              </p>
            </div>

          </div>
        </div>
        <section className="bg-black py-24">
          <div className="max-w-7xl mx-auto px-5">

            <h2 className="text-center text-white text-4xl md:text-6xl font-bold mb-16">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

              <div>
                <div className="text-[#F5E609] text-5xl mb-5">❤️</div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  Passion
                </h3>
                <p className="text-gray-300 text-lg leading-8">
                  We live and breathe fitness,
                  every rep, every session.
                </p>
              </div>

              <div>
                <div className="text-[#F5E609] text-5xl mb-5">👥</div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  Community
                </h3>
                <p className="text-gray-300 text-lg leading-8">
                  Together we grow stronger,
                  motivation thrives when shared.
                </p>
              </div>

              <div>
                <div className="text-[#F5E609] text-5xl mb-5">🏋️</div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  Discipline
                </h3>
                <p className="text-gray-300 text-lg leading-8">
                  Consistency is key, we push our
                  members to stay committed.
                </p>
              </div>

              <div>
                <div className="text-[#F5E609] text-5xl mb-5">⭐</div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  Excellence
                </h3>
                <p className="text-gray-300 text-lg leading-8">
                  We strive for the highest quality
                  in training, service, and results.
                </p>
              </div>

            </div>
          </div>
          <section className="bg-black overflow-hidden py-8">
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
      </section>
    </section>
  );
}
"use client";

import Link from "next/link";

export default function ZumbaPage() {
  const activities = [
    { name: "Aerobics", href: "/aerobic" },
    { name: "Zumba", href: "/zumba" },
    { name: "Abs", href: "/abs" },
    { name: "Cross Fit", href: "/crossfit" },
    { name: "Yoga", href: "/yoga" },
    { name: "Kick Boxing", href: "/kick-boxing" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Banner */}
      <div
        className="relative h-[280px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">Zumba</h1>

          <div className="mt-3 flex items-center gap-2 text-xs text-gray-300">
            <span>Home</span>
            <span>&gt;</span>
            <span>Programs</span>
            <span>&gt;</span>
            <span className="text-white">Zumba</span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[180px_1fr]">
          {/* Left Menu */}
          <div className="space-y-2">
            {activities.map((item) => {
              const isActive = item.name === "Zumba";
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block w-full px-4 py-3 text-left text-sm font-semibold transition-colors duration-200 ${
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

          {/* Content */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200"
              alt="Zumba"
              className="w-full max-w-[700px]"
            />

            <h2 className="mt-8 text-5xl font-bold">Zumba</h2>

            <p className="mt-6 max-w-4xl leading-8 text-gray-300">
              Zumba is a fun and energetic fitness program that combines
              dance movements with aerobic exercise. It helps improve
              cardiovascular health, burn calories, increase flexibility,
              and boost overall fitness while enjoying upbeat music and
              exciting choreography. Suitable for all fitness levels,
              Zumba makes working out enjoyable and effective.
            </p>
          </div>
        </div>
        <section className="bg-black py-24 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-16 text-center text-5xl font-bold">
              Program Highlights
            </h2>

            <div className="grid gap-y-16 gap-x-12 md:grid-cols-2">
              {/* Item 1 */}
              <div className="flex gap-6">
                <div className="flex h-16 w-16 items-center justify-center border border-[#F5E609]">
                  <span className="text-4xl font-light">✓</span>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Certified Zumba Experts
                  </h3>

                  <p className="leading-8 text-gray-300">
                    All our Zumba instructors are certified professionals with
                    extensive experience in dance fitness, cardio conditioning,
                    and full-body transformation techniques.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6">
                <div className="flex h-16 w-16 items-center justify-center border border-[#F5E609]">
                  <span className="text-4xl font-light">✓</span>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Customized Zumba Programs
                  </h3>

                  <p className="leading-8 text-gray-300">
                    Each participant receives a customized Zumba program that
                    matches their goals, fitness level, and schedule for
                    optimal results.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6">
                <div className="flex h-16 w-16 items-center justify-center border border-[#F5E609]">
                  <span className="text-4xl font-light">✓</span>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Nutrition Guidance
                  </h3>

                  <p className="leading-8 text-gray-300">
                    We guide you to nourish your body properly with simple,
                    research-based nutrition advice that enhances your Zumba
                    workout routine.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-6">
                <div className="flex h-16 w-16 items-center justify-center border border-[#F5E609]">
                  <span className="text-4xl font-light">✓</span>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Zumba Progress Tracking
                  </h3>

                  <p className="leading-8 text-gray-300">
                    Stay inspired with regular body composition assessments,
                    Zumba performance tracking, and monthly progress reviews
                    to evaluate success.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex gap-6">
                <div className="flex h-16 w-16 items-center justify-center border border-[#F5E609]">
                  <span className="text-4xl font-light">✓</span>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Flexible Zumba Class Timings
                  </h3>

                  <p className="leading-8 text-gray-300">
                    Dance at your convenience — our Zumba instructors provide
                    flexible class times that fit around your lifestyle and
                    commitments.
                  </p>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex gap-6">
                <div className="flex h-16 w-16 items-center justify-center border border-[#F5E609]">
                  <span className="text-4xl font-light">✓</span>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">
                    Motivating Zumba Support
                  </h3>

                  <p className="leading-8 text-gray-300">
                    We offer more than Zumba classes; our instructors keep you
                    motivated, consistent, and confident throughout your
                    entire fitness journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black py-24 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-center text-5xl font-bold">
              Client Testimonials
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Testimonial 1 */}
              <div className="bg-[#2d2d2d] p-8">
                <h3 className="text-lg font-bold">Rahul Mehta</h3>

                <p className="mt-1 text-sm text-gray-300">
                  12 September 2025
                </p>

                <div className="mt-6 flex items-center gap-1">
                  <span className="text-[#F5E609]">★★★★★</span>
                  <span className="ml-2 font-medium">5.0</span>
                </div>

                <p className="mt-6 leading-8 text-gray-200">
                  “Life Fitness Pro has completely changed my fitness journey.
                  The trainers are highly professional, the workout programs
                  are well-structured, and the environment keeps me motivated
                  every day. I feel stronger, healthier, and more confident
                  than ever.”
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-[#2d2d2d] p-8">
                <h3 className="text-lg font-bold">Neha Patel</h3>

                <p className="mt-1 text-sm text-gray-300">
                  15 June 2024
                </p>

                <div className="mt-6 flex items-center gap-1">
                  <span className="text-[#F5E609]">★★★★★</span>
                  <span className="ml-2 font-medium">5.0</span>
                </div>

                <p className="mt-6 leading-8 text-gray-200">
                  “Joining Life Fitness Pro was truly one of the best decisions
                  I've made for my health and fitness. From the very first day,
                  I felt welcomed and supported by the entire team. The trainers
                  are extremely knowledgeable and always focus on correct form,
                  technique, and steady progress.”
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#F5E609]"></div>
              <div className="h-2 w-2 rounded-full bg-zinc-600"></div>
              <div className="h-2 w-2 rounded-full bg-zinc-600"></div>
            </div>
          </div>
        </section>
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
      </div>
    </div>
  );
}
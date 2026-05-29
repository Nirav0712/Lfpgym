"use client";

import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    title: "1 Months Plan",
    subtitle: "Perfect for Starters",
    price: "5000",
    duration: "/1 months",
    benefits: [
      "Unlimited gym access & equipment use.",
      "Access to all group fitness classes.",
      "Free locker & shower usage.",
      "Monthly body composition tracking.",
      "10% discount on personal training.",
    ],
  },
  {
    title: "3 Months Plan",
    subtitle: "Commit to Your Fitness",
    price: "8000",
    duration: "/3 months",
    benefits: [
      "Unlimited gym access & equipment use.",
      "Access to all group fitness classes.",
      "Free locker & shower usage.",
      "Monthly body composition tracking.",
      "15% off on personal training sessions.",
    ],
  },
  {
    title: "6 Months Plan",
    subtitle: "Best Value Package",
    price: "12000",
    duration: "/6 month",
    benefits: [
      "Unlimited gym access & equipment use.",
      "Access to all group fitness classes.",
      "Free locker & shower usage.",
      "Monthly body composition tracking.",
      "25% off on personal training sessions.",
    ],
  },
  {
    title: "12 Months Plan",
    subtitle: "Best Value Package",
    price: "20000",
    duration: "/12 month",
    benefits: [
      "Unlimited gym access & equipment use.",
      "Access to all group fitness classes.",
      "Free locker & shower usage.",
      "Monthly body composition tracking.",
      "25% off on personal training sessions.",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-white text-5xl md:text-7xl font-bold mb-4">
            Pricing
          </h2>

          <div className="text-gray-400">
            Home <span className="mx-2">/</span>
            <span className="text-[#F5E609]">Pricing</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-[#050505] overflow-hidden group flex flex-col h-full border border-zinc-900 transition-all duration-300 hover:border-[#F5E609]"
            >
              {/* Yellow Glow */}
              <div className="absolute bottom-0 left-0 w-full h-40 bg-[#F5E609]/20 blur-3xl opacity-60"></div>

              <div className="relative z-10 p-10 flex flex-col justify-between h-full flex-grow">
                <div>
                  <h3 className="text-white text-4xl font-bold">
                    {plan.title}
                  </h3>

                  <p className="text-gray-300 mt-2 text-lg">
                    {plan.subtitle}
                  </p>

                  <div className="mt-10 flex items-end gap-2">
                    <span className="text-[#F5E609] text-6xl font-bold">
                      {plan.price}
                    </span>

                    <span className="text-[#F5E609] text-xl font-semibold mb-2">
                      {plan.duration}
                    </span>
                  </div>

                  <div className="mt-12">
                    <h4 className="text-white text-xl font-bold mb-6">
                      Benefits:
                    </h4>

                    <ul className="space-y-4">
                      {plan.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-300 text-lg"
                        >
                          <span className="text-[#F5E609] mr-3">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/joinnow"
                  className="mt-10 w-full border border-[#F5E609] py-4 text-white font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#F5E609] hover:text-black block text-center"
                >
                  Join Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-black text-white py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">
            <p className="text-[#FFD000] text-xl font-semibold mb-4">
              Why Choose Us
            </p>

            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              Build Strength, Endurance,
              <br />
              and Confidence with Us
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Images */}
            <div className="relative h-[650px]">

              {/* Main Image */}
              <div className="absolute left-0 top-0 w-[560px] h-[500px] overflow-hidden">
                <Image
                  src="/whychoose1.jpg"
                  alt="Gym Training"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Yellow Gradient */}
              <div className="absolute left-0 bottom-[150px] w-[560px] h-[140px] bg-gradient-to-t from-[#FFD000]/70 to-transparent z-10" />

              {/* Small Image */}
              <div className="absolute right-0 bottom-0 w-[320px] h-[310px] overflow-hidden z-20">
                <Image
                  src="/whychus.jpg"
                  alt="Workout"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Yellow Gradient */}
              <div className="absolute right-0 bottom-0 w-[320px] h-[120px] bg-gradient-to-t from-[#FFD000]/70 to-transparent z-30" />
            </div>

            {/* Right Content */}
            <div className="space-y-12">

              {/* Item 1 */}
              <div className="flex gap-8">

                <div className="w-20 h-20 border border-[#FFD000] flex items-center justify-center text-5xl font-light shrink-0">
                  1
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Structured Training System
                  </h3>

                  <p className="text-gray-300 text-xl leading-10">
                    Our workouts follow a planned training system designed to
                    improve strength, stamina, and overall fitness step by step—
                    no random exercises, only purposeful progress.
                  </p>
                </div>

              </div>

              {/* Item 2 */}
              <div className="flex gap-8">

                <div className="w-20 h-20 border border-[#FFD000] flex items-center justify-center text-5xl font-light shrink-0">
                  2
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Expert Guidance & Support
                  </h3>

                  <p className="text-gray-300 text-xl leading-10">
                    From your first day onward, our trainers guide you through
                    proper techniques, safe movement patterns, and smart workout
                    progression to help you train confidently.
                  </p>
                </div>

              </div>

              {/* Item 3 */}
              <div className="flex gap-8">

                <div className="w-20 h-20 border border-[#FFD000] flex items-center justify-center text-5xl font-light shrink-0">
                  3
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Balanced Fitness Programs
                  </h3>

                  <p className="text-gray-300 text-xl leading-10">
                    We combine strength training, cardio, functional movements,
                    and recovery to create balanced programs that support fat
                    loss, muscle growth, and endurance together.
                  </p>
                </div>

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
  );
}
// app/programs/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";

const programs = [
  { name: "Aerobics", href: "/aerobic" },
  { name: "Zumba", href: "/zumba" },
  { name: "Abs", href: "/abs" },
  { name: "Cross Fit", href: "/crossfit" },
  { name: "Yoga", href: "/yoga" },
  { name: "Kick Boxing", href: "/kick-boxing" },
];

export default function ProgramPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[380px] w-full overflow-hidden">
        <Image
          src="/images/program-banner.jpg" // Hero Background Image
          alt="Program Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-6xl font-bold mb-4">Abs Training</h1>

          <div className="flex items-center gap-3 text-sm font-medium">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>

            <span className="text-yellow-400">›</span>

            <Link href="/programs" className="hover:text-yellow-400">
              Programs
            </Link>

            <span className="text-yellow-400">›</span>

            <span className="text-white">Personal Training</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1200px] mx-auto py-24 px-6">
        <div className="grid lg:grid-cols-[250px_1fr] gap-14">
          {/* Sidebar */}
          <div className="space-y-4">
            {programs.map((item) => {
              const isActive = item.name === "Abs";
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block w-full text-left px-6 py-5 font-semibold transition-all duration-300 ${isActive
                      ? "bg-[#F5E609] text-black"
                      : "text-white bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] hover:bg-[#F5E609] hover:text-black"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Main Image */}
          <div className="w-full">
            <div className="relative w-full h-[650px] bg-white">
              <Image
                src="/images/abs-training.jpg" // Main Content Image
                alt="Abs Training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* Program Highlights Section */}
        <section className="bg-black py-24">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
              Program Highlights
            </h2>

            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {[
                {
                  title: "Certified ABS Training Experts",
                  description:
                    "All our ABS Training coaches are certified experts with years of experience in core strengthening, endurance conditioning, and total body transformation methods.",
                },
                {
                  title: "Customized Workout Plans",
                  description:
                    "Each member receives a personalized ABS Training program that matches their goals, fitness level, and schedule for maximum results.",
                },
                {
                  title: "ABS Nutrition Support",
                  description:
                    "We help you nourish your body properly with simple, science-based nutrition advice that supports your ABS Training routine.",
                },
                {
                  title: "ABS Performance & Progress",
                  description:
                    "Stay motivated with consistent body composition analysis, ABS Training performance tracking, and monthly goal evaluations.",
                },
                {
                  title: "Flexible ABS Training Timings",
                  description:
                    "Train at your convenience; our ABS Training coaches provide flexible session times that fit around your lifestyle and commitments.",
                },
                {
                  title: "Complete ABS Fitness Support",
                  description:
                    "We go beyond ABS workouts; our trainers keep you motivated, consistent, and confident throughout your complete fitness journey.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  {/* Icon Box */}
                  <div className="w-20 h-20 border border-[#F5E609] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-4xl font-light">✓</span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Client Testimonials Section */}
          <section className="bg-black py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
                Client Testimonials
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-[#2f2f2f] p-8">
                  <h3 className="text-white text-xl font-bold mb-1">
                    Rahul Mehta
                  </h3>

                  <p className="text-gray-300 text-sm mb-6">
                    12 September 2025
                  </p>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[#F5E609] text-lg">★★★★★</span>
                    <span className="text-white font-medium">5.0</span>
                  </div>

                  <p className="text-gray-200 text-lg leading-9">
                    “Life Fitness Pro has completely changed my fitness journey.
                    The trainers are highly professional, the workout programs are
                    well-structured, and the environment keeps me motivated every day.
                    I feel stronger, healthier, and more confident than ever.”
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-[#2f2f2f] p-8">
                  <h3 className="text-white text-xl font-bold mb-1">
                    Neha Patel
                  </h3>

                  <p className="text-gray-300 text-sm mb-6">
                    15 June 2024
                  </p>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[#F5E609] text-lg">★★★★★</span>
                    <span className="text-white font-medium">5.0</span>
                  </div>

                  <p className="text-gray-200 text-lg leading-9">
                    “Joining Life Fitness Pro was truly one of the best decisions
                    I've made for my health and fitness. From the very first day,
                    I felt welcomed and supported by the entire team. The trainers
                    are extremely knowledgeable and always focus on correct form,
                    technique, and steady progress.”
                  </p>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-3 mt-10">
                <div className="w-2 h-2 rounded-full bg-[#F5E609]"></div>
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </div>

            {/* Left Side Scroll Indicator */}
            <div className="hidden xl:flex flex-col items-center fixed left-8 top-1/2 -translate-y-1/2">
              <span
                className="text-white text-sm font-medium rotate-180"
                style={{ writingMode: "vertical-rl" }}
              >
                Scroll to top
              </span>

              <div className="w-[2px] h-24 bg-gray-700 mt-4 relative">
                <div className="absolute top-0 left-0 w-full h-16 bg-[#F5E609]"></div>
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
      </section>
    </main>
  );
}
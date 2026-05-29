// app/programs/yoga/page.tsx

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

export default function YogaPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Banner */}
      <section className="relative h-[340px] w-full overflow-hidden">
        <Image
          src="/images/yoga-banner.jpg"
          alt="Yoga Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-5">
            Yoga
          </h1>

          <div className="flex items-center gap-3 text-sm font-medium">
            <Link href="/" className="hover:text-[#F5E609]">
              Home
            </Link>

            <span className="text-[#F5E609]">›</span>

            <Link
              href="/programs"
              className="hover:text-[#F5E609]"
            >
              Programs
            </Link>

            <span className="text-[#F5E609]">›</span>

            <span>Personal Training</span>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12">
          {/* Sidebar */}
          <div className="space-y-3">
            {programs.map((program) => {
              const isActive = program.name === "Yoga";
              return (
                <Link
                  key={program.name}
                  href={program.href}
                  className={`block w-full transition-all duration-300 text-left px-5 py-5 font-semibold ${
                    isActive
                      ? "bg-[#F5E609] text-black"
                      : "bg-[#2d2d2d] text-white hover:bg-[#F5E609] hover:text-black"
                  }`}
                >
                  {program.name}
                </Link>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="relative h-[680px] w-full">
            <Image
              src="/images/yoga-main.jpg"
              alt="Yoga Training"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Yoga Program Highlights Section */}
        <section className="bg-black py-24">
          <div className="max-w-6xl mx-auto px-6">
            {/* Intro */}
            <div className="max-w-4xl mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Yoga
              </h2>

              <p className="text-gray-300 text-lg leading-10">
                Our Yoga Program is designed to help you reach your full potential
                through personalized sessions, mindful nutrition guidance, and
                ongoing support. Whether you want to lose weight, build strength,
                or improve flexibility, our certified yoga instructors create a
                plan tailored to your goals and level. With expert guidance and
                accountability, you'll see steady progress both on the mat and in
                daily life.
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
              Program Highlights
            </h2>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {[
                {
                  title: "Certified Yoga Instructors",
                  description:
                    "All our Yoga instructors are certified professionals with strong experience in flexibility training, mindful conditioning, and holistic transformation techniques.",
                },
                {
                  title: "Personalized Yoga Sessions",
                  description:
                    "Each participant receives a personalized Yoga program that aligns with their goals, skill level, and schedule for maximum results.",
                },
                {
                  title: "Tailored Yoga Programs",
                  description:
                    "We guide you to nourish your body properly with simple, science-based nutrition advice that complements your Yoga practice routine.",
                },
                {
                  title: "Yoga Progress Tracking",
                  description:
                    "Stay inspired with regular body composition assessments, Yoga progress tracking, and monthly goal reviews to measure success.",
                },
                {
                  title: "Convenient Yoga Timings",
                  description:
                    "Practice at your convenience; our Yoga instructors offer flexible session times that fit around your lifestyle and commitments.",
                },
                {
                  title: "Yoga Support & Encouragement",
                  description:
                    "We go beyond Yoga sessions; our instructors keep you motivated, consistent, and confident throughout your fitness journey.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  {/* Check Box */}
                  <div className="w-20 h-20 border border-[#F5E609] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-4xl font-light">✓</span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-lg leading-9">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Client Testimonials */}
          <section className="bg-black py-24">
            <div className="max-w-6xl mx-auto px-6">
              {/* Heading */}
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
                Client Testimonials
              </h2>

              {/* Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-[#2f2f2f] p-8">
                  <h3 className="text-white text-2xl font-bold">
                    Rahul Mehta
                  </h3>

                  <p className="text-white text-sm mt-1 mb-6">
                    12 September 2025
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#F5E609] text-lg">
                      ★★★★★
                    </span>
                    <span className="text-white font-semibold">
                      5.0
                    </span>
                  </div>

                  <p className="text-gray-200 text-lg leading-10">
                    “Life Fitness Pro has completely changed my fitness
                    journey. The trainers are highly professional, the
                    workout programs are well-structured, and the
                    environment keeps me motivated every day. I feel
                    stronger, healthier, and more confident than ever.”
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#2f2f2f] p-8">
                  <h3 className="text-white text-2xl font-bold">
                    Neha Patel
                  </h3>

                  <p className="text-white text-sm mt-1 mb-6">
                    15 June 2024
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#F5E609] text-lg">
                      ★★★★★
                    </span>
                    <span className="text-white font-semibold">
                      5.0
                    </span>
                  </div>

                  <p className="text-gray-200 text-lg leading-10">
                    “Joining Life Fitness Pro was truly one of the best
                    decisions I've made for my health and fitness. From
                    the very first day, I felt welcomed and supported by
                    the entire team. The trainers are extremely
                    knowledgeable and always focus on correct form,
                    technique, and steady progress.”
                  </p>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center items-center gap-3 mt-10">
                <span className="w-2 h-2 rounded-full bg-[#F5E609]"></span>
                <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                <span className="w-2 h-2 rounded-full bg-gray-500"></span>
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
        </section>
      </section>
    </main>
  );
}
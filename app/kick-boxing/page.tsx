// app/kick-boxing/page.tsx

import Image from "next/image";
import Link from "next/link";

const activities = [
  { name: "Aerobics", href: "/aerobic" },
  { name: "Zumba", href: "/zumba" },
  { name: "Abs", href: "/abs" },
  { name: "Cross Fit", href: "/crossfit" },
  { name: "Yoga", href: "/yoga" },
  { name: "Kick Boxing", href: "/kick-boxing" },
];

export default function KickBoxingPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[350px] w-full overflow-hidden">
        <Image
          src="/images/kickboxing-banner.jpg"
          alt="Kickboxing Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/90 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Kickboxing
          </h1>

          <div className="flex items-center gap-3 text-sm font-semibold">
            <Link href="/" className="hover:text-[#F5E609]">
              Home
            </Link>

            <span className="text-[#F5E609]">›</span>

            <Link href="/activities" className="hover:text-[#F5E609]">
              Programs
            </Link>

            <span className="text-[#F5E609]">›</span>

            <span>Personal Training</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12">
          {/* Sidebar */}
          <div className="space-y-3">
            {activities.map((activity) => {
              const isActive = activity.name === "Kick Boxing";
              return (
                <Link
                  key={activity.name}
                  href={activity.href}
                  className={`block w-full text-left px-5 py-5 font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#F5E609] text-black"
                      : "bg-[#333333] text-white hover:bg-[#F5E609] hover:text-black"
                  }`}
                >
                  {activity.name}
                </Link>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="relative h-[700px] w-full overflow-hidden">
            <Image
              src="/images/kickboxing-main.jpg"
              alt="Kick Boxing Training"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Kickboxing Program Highlights */}
        <section className="bg-black py-24">
          <div className="max-w-6xl mx-auto px-6">
            {/* Intro */}
            <div className="max-w-4xl mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Kickboxing
              </h2>

              <p className="text-gray-300 text-lg leading-10">
                Our Kickboxing Program is designed to help you reach your full
                potential through powerful workouts, smart nutrition guidance,
                and ongoing motivation. Whether you want to lose weight, build
                strength, or boost stamina, our certified coaches create a plan
                tailored to your goals and level. With expert support and
                accountability, you'll see steady progress inside and outside
                the gym.
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
              Program Highlights
            </h2>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {[
                {
                  title: "Certified Kickboxing Coaches",
                  description:
                    "All our Kickboxing trainers are certified experts with strong experience in combat conditioning, strength training, and body transformation.",
                },
                {
                  title: "Personalized Kickboxing Programs",
                  description:
                    "Each member receives a personalized Kickboxing program that matches their goals, fitness level, and schedule for maximum results.",
                },
                {
                  title: "Nutrition Guidance",
                  description:
                    "We help you nourish your body properly with simple, science-based nutrition advice that supports your Kickboxing training routine.",
                },
                {
                  title: "Performance Tracking",
                  description:
                    "Stay motivated with regular body composition analysis, Kickboxing performance tracking, and monthly goal reviews to measure success.",
                },
                {
                  title: "Flexible Scheduling",
                  description:
                    "Train at your convenience; our Kickboxing coaches offer flexible session times that fit around your lifestyle and commitments.",
                },
                {
                  title: "Kickboxing Support & Discipline",
                  description:
                    "We go beyond Kickboxing workouts; our trainers keep you motivated, consistent, and confident throughout your fitness journey.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  {/* Icon */}
                  <div className="w-20 h-20 border border-[#F5E609] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-4xl">✓</span>
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
          {/* Client Testimonials Section */}
          <section className="bg-black py-24">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
                Client Testimonials
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Rahul Mehta",
                    date: "12 September 2025",
                    review:
                      "Life Fitness Pro has completely changed my fitness journey. The trainers are highly professional, the workout programs are well-structured, and the environment keeps me motivated every day. I feel stronger, healthier, and more confident than ever.",
                    image: null,
                  },
                  {
                    name: "Neha Patel",
                    date: "15 June 2024",
                    review:
                      "Joining Life Fitness Pro was truly one of the best decisions I've made for my health and fitness. From the very first day, I felt welcomed and supported by the entire team.",
                    image: null,
                  },
                  {
                    name: "Sarah Johnson",
                    date: "12 September 2025",
                    review:
                      "Working with my personal trainer completely changed my fitness journey. I've gained strength, improved posture, and feel more confident than ever!",
                    image: "/images/client-1.jpg",
                  },
                  {
                    name: "Sarah Johnson",
                    date: "12 September 2025",
                    review:
                      "Working with my personal trainer completely changed my fitness journey. I've gained strength, improved posture, and feel more confident than ever!",
                    image: "/images/client-1.jpg",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#2f2f2f] p-8"
                  >
                    {/* Client Info */}
                    <div className="flex items-center gap-4 mb-4">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}

                      <div>
                        <h3 className="text-white text-2xl font-bold">
                          {item.name}
                        </h3>
                        <p className="text-white text-sm">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[#F5E609] text-lg">
                        ★★★★★
                      </span>
                      <span className="text-white font-semibold">
                        5.0
                      </span>
                    </div>

                    {/* Review */}
                    <p className="text-gray-200 text-lg leading-10">
                      "{item.review}"
                    </p>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-3 mt-10">
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
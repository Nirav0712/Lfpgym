"use client";

import Link from "next/link";

export default function ActivitiesPage() {
  const activities = [
    { name: "Aerobics", href: "/activities/aerobics" },
    { name: "Zumba", href: "/activities/zumba" },
    { name: "Abs", href: "/activities/abs" },
    { name: "Cross Fit", href: "/activities/crossfit" },
    { name: "Yoga", href: "/activities/yoga" },
    { name: "Kick Boxing", href: "/activities/kick-boxing" },
  ];

  const highlights = [
    {
      title: "Certified Personal Trainers",
      desc: "Train with experienced fitness professionals who guide your progress.",
    },
    {
      title: "Customized Workout Plans",
      desc: "Programs designed according to your fitness goals and lifestyle.",
    },
    {
      title: "Nutrition Guidance",
      desc: "Get proper nutrition plans to support your training journey.",
    },
    {
      title: "Progress Tracking",
      desc: "Monitor your performance and achieve consistent improvement.",
    },
    {
      title: "Flexible Scheduling",
      desc: "Choose convenient timings that fit your daily routine.",
    },
    {
      title: "Motivational Environment",
      desc: "Stay inspired with expert coaching and a positive atmosphere.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div
        className="h-56 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-center text-5xl font-bold mb-12">
          Aerobics
        </h1>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10">
          {/* Sidebar */}
          <div className="space-y-2">
            {activities.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block bg-[#222] hover:bg-[#333] border border-[#444] px-4 py-3 text-sm font-medium transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Main Content */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200"
              alt="Aerobics"
              className="w-full h-auto object-cover"
            />

            <h2 className="text-4xl font-bold mt-8 mb-4">
              Aerobics
            </h2>

            <p className="text-gray-400 leading-8 mb-10">
              Our Aerobics Program is designed to improve cardiovascular
              endurance, increase energy levels, and support overall health
              through dynamic and engaging workouts led by certified trainers.
            </p>

            <h3 className="text-3xl font-bold mb-8">
              Program Highlights
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="min-w-[50px] h-[50px] border border-yellow-400 flex items-center justify-center text-yellow-400 text-xl font-bold">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 text-sm leading-6">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <h3 className="text-3xl font-bold mt-16 mb-8">
              Client Testimonials
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1d1d1d] p-6 border border-[#333]">
                <h4 className="font-bold mb-2">Rahul Mehta</h4>
                <p className="text-yellow-400 mb-3">★★★★★</p>
                <p className="text-gray-400 text-sm leading-6">
                  The Aerobics program helped me improve my stamina,
                  lose weight, and stay motivated throughout my fitness
                  journey.
                </p>
              </div>

              <div className="bg-[#1d1d1d] p-6 border border-[#333]">
                <h4 className="font-bold mb-2">Neha Patel</h4>
                <p className="text-yellow-400 mb-3">★★★★★</p>
                <p className="text-gray-400 text-sm leading-6">
                  Excellent trainers and a supportive atmosphere.
                  Every session is energetic and productive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
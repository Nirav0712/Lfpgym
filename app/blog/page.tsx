"use client";

import Link from "next/link";

const blogs = [
  {
    image: "/whychoose1.jpg",
    category: "Best Gym In Shahibaug",
    title: "Complete Fitness Strategy to Transform Your Body Faster",
    date: "12",
    month: "Oct",
    link: "/blog/fitness-strategy",
  },
  {
    image: "/whychoose1.jpg",
    category: "Weight Loss & Muscle Gain Plan",
    title: "Expert Training System at the Best Gym in Shahibaug",
    date: "10",
    month: "Oct",
    link: "/blog/weight-loss-plan",
  },
  {
    image: "/whychoose1.jpg",
    category: "Motivation",
    title: "How to Stay Consistent at the Gym Even When You Feel Unmotivated",
    date: "08",
    month: "Oct",
    link: "/blog/motivation",
  },
  {
    image: "/whychoose1.jpg",
    category: "Strength",
    title: "Top 7 Compound Exercises for Building Full-Body Power",
    date: "28",
    month: "Sep",
    link: "/blog/strength-training",
  },
  {
    image: "/whychoose1.jpg",
    category: "Recovery",
    title: "Why Rest Days Are Crucial for Muscle Growth and Performance",
    date: "22",
    month: "Sep",
    link: "/blog/recovery",
  },
  {
    image: "/whychoose1.jpg",
    category: "Lifestyle",
    title: "Balancing Gym, Work, and Life: How to Build a Sustainable Routine",
    date: "18",
    month: "Sep",
    link: "/blog/lifestyle",
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl md:text-6xl font-bold">
            Blog
          </h2>

          <p className="text-gray-400 mt-3">
            Home <span className="mx-2">/</span>
            <span className="text-[#F5E609]">Blog</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Link
              href={blog.link}
              key={index}
              className="group relative overflow-hidden h-[420px] block"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Date */}
              <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm px-4 py-3 text-center">
                <div className="text-white text-3xl font-bold">
                  {blog.date}
                </div>
                <div className="text-white text-sm">
                  {blog.month}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="border border-[#F5E609] text-[#F5E609] px-3 py-1 text-sm">
                  {blog.category}
                </span>

                <h3 className="text-white text-xl font-bold mt-4 leading-relaxed transition duration-300 group-hover:text-[#F5E609]">
                  {blog.title}
                </h3>
              </div>

              {/* Hover Glow */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-[#F5E609]/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
            </Link>
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
  );
}
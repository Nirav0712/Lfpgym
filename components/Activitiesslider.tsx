"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
            />
        </svg>
    );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
        </svg>
    );
}

const activities = [
    {
        title: "Aerobics",
        image: "/activities/aerobics.jpg",
        desc: "Improve stamina and overall fitness with aerobics training.",
    },
    {
        title: "Yoga",
        image: "/activities/yoga.jpg",
        desc: "Enhance flexibility, balance, and mental wellness.",
    },
    {
        title: "Cross Fit",
        image: "/activities/crossfit.jpg",
        desc: "High-intensity workouts designed for real results.",
    },
    {
        title: "Strength",
        image: "/activities/strength.jpg",
        desc: "Build muscle and increase strength effectively.",
    },
    {
        title: "Cardio",
        image: "/activities/cardio.jpg",
        desc: "Boost heart health and burn calories faster.",
    },
    {
        title: "Boxing",
        image: "/activities/boxing.jpg",
        desc: "Train like a fighter and improve endurance.",
    },
    {
        title: "Zumba",
        image: "/activities/zumba.jpg",
        desc: "Fun and energetic dance workouts.",
    },
    {
        title: "Personal Training",
        image: "/activities/personal.jpg",
        desc: "One-on-one coaching for faster progress.",
    },
];

export default function ActivitiesSlider() {
    return (
        <section className="bg-black py-24 border-t border-zinc-900 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                    <div>
                        <p className="text-yellow-400 font-bold text-2xl mb-4 uppercase tracking-widest">
                            Our Activities
                        </p>

                        <h2 className="text-white text-6xl md:text-[5.5rem] font-extrabold leading-none uppercase tracking-tight mb-6">
                            Built for real results
                        </h2>

                        <p className="text-gray-300 text-[1.35rem] max-w-3xl leading-relaxed">
                            We provide professional fitness services designed to
                            build strength, improve endurance, and support a
                            healthy lifestyle for all fitness levels.
                        </p>
                    </div>

                    <div className="flex gap-4 shrink-0">
                        <button className="activities-prev w-14 h-14 border border-yellow-400 text-white flex items-center justify-center hover:bg-yellow-400 hover:text-black transition rounded-xl">
                            <ChevronLeftIcon />
                        </button>

                        <button className="activities-next w-14 h-14 border border-yellow-400 text-white flex items-center justify-center hover:bg-yellow-400 hover:text-black transition rounded-xl">
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                    }}
                    navigation={{
                        prevEl: ".activities-prev",
                        nextEl: ".activities-next",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-4"
                >
                    {activities.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="group relative h-[480px] overflow-hidden cursor-pointer rounded-2xl border border-zinc-900 hover:border-yellow-500/50 transition-all duration-300">

                                {/* IMAGE */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/30 via-transparent to-transparent z-10 pointer-events-none" />

                                <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-black text-4xl z-20 transition-all duration-300 group-hover:opacity-0 uppercase tracking-tight text-center w-full px-4">
                                    {item.title}
                                </h3>

                                {/* HOVER CONTENT */}
                                <div className="absolute inset-0 bg-black border border-yellow-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center px-10 z-30">

                                    <h4 className="text-white text-5xl font-black mb-6 uppercase tracking-tight">
                                        {item.title}
                                    </h4>

                                    <p className="text-gray-300 mb-8 text-[1.35rem] leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <Link
                                        href={`/activities/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="border border-zinc-800 text-white px-10 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition inline-block"
                                    >
                                        VIEW DETAILS
                                    </Link>

                                    <div className="absolute bottom-0 left-0 w-full h-24 bg-yellow-500/20 blur-3xl opacity-50 pointer-events-none" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
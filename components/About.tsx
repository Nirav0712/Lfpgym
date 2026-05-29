"use client";

import Image from "next/image";
import {
    FaHeartbeat,
    FaUsers,
    FaDumbbell,
    FaStar,
} from "react-icons/fa";

export default function AboutSection() {
    return (
        <section className="bg-black text-white py-24 border-t border-zinc-900">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12">

                {/* Top Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <p className="text-[#FFD000] font-bold text-2xl mb-6">
                            About Us
                        </p>

                        <h2 className="text-6xl lg:text-[5.5rem] font-extrabold leading-none uppercase mb-8 tracking-tight">
                            Here Gym Fitness
                            <br />
                            Meets Excellence!
                        </h2>

                        <p className="text-gray-300 text-[1.35rem] leading-relaxed max-w-3xl mb-10">
                            At our gym, fitness is more than just a workout—it's a commitment
                            to excellence. We are built for individuals who want real results
                            through discipline, consistency, and professional guidance. Our
                            goal is to create a powerful training environment where strength,
                            confidence, and performance grow together.
                        </p>

                        <button className="border border-[#FFD000] px-10 py-5 font-bold uppercase hover:bg-[#FFD000] hover:text-black transition tracking-wider text-sm rounded-xl">
                            Explore Our Classes
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="grid grid-cols-2 gap-8">

                        {/* Female Image */}
                        <div className="overflow-hidden rounded-2xl border border-zinc-800">
                            <Image
                                src="/female-gym.jpg"
                                alt="Female Workout"
                                width={500}
                                height={600}
                                className="w-full h-[360px] object-cover hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Member Count */}
                        <div className="border border-[#FFD000] flex flex-col justify-center items-center h-[200px] rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                            <h3 className="text-7xl font-black text-white">
                                2300<span className="text-[#FFD000]">+</span>
                            </h3>

                            <p className="text-2xl font-bold text-gray-300 mt-3 uppercase tracking-wider">
                                Active Members
                            </p>
                        </div>

                        {/* Trainers */}
                        <div className="border border-[#FFD000] flex flex-col justify-center items-center h-[200px] rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                            <h3 className="text-7xl font-black text-white">
                                25<span className="text-[#FFD000]">+</span>
                            </h3>

                            <p className="text-2xl font-bold text-gray-300 mt-3 uppercase tracking-wider">
                                Expert Trainers
                            </p>
                        </div>

                        {/* Male Image */}
                        <div className="overflow-hidden rounded-2xl border border-zinc-800">
                            <Image
                                src="/male-gym.jpg"
                                alt="Male Workout"
                                width={500}
                                height={600}
                                className="w-full h-[360px] object-cover hover:scale-105 transition duration-500"
                            />
                        </div>

                    </div>

                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-28">

                    {/* Passion */}
                    <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-900 hover:border-yellow-500/30 transition-colors">
                        <FaHeartbeat
                            size={50}
                            className="text-[#FFD000] mb-6"
                        />

                        <h3 className="text-[2.2rem] font-bold mb-4 text-white uppercase tracking-tight">
                            Passion
                        </h3>

                        <p className="text-gray-300 text-[1.35rem] leading-relaxed">
                            We are passionate about fitness, strength training,
                            and helping you achieve real transformation results.
                        </p>
                    </div>

                    {/* Community */}
                    <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-900 hover:border-yellow-500/30 transition-colors">
                        <FaUsers
                            size={50}
                            className="text-[#FFD000] mb-6"
                        />

                        <h3 className="text-[2.2rem] font-bold mb-4 text-white uppercase tracking-tight">
                            Community
                        </h3>

                        <p className="text-gray-300 text-[1.35rem] leading-relaxed">
                            Join our supportive gym community where motivation,
                            teamwork, and fitness goals grow together.
                        </p>
                    </div>

                    {/* Discipline */}
                    <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-900 hover:border-yellow-500/30 transition-colors">
                        <FaDumbbell
                            size={50}
                            className="text-[#FFD000] mb-6"
                        />

                        <h3 className="text-[2.2rem] font-bold mb-4 text-white uppercase tracking-tight">
                            Discipline
                        </h3>

                        <p className="text-gray-300 text-[1.35rem] leading-relaxed">
                            Consistency and structured workout programs help
                            you build strength and achieve long-term fitness success.
                        </p>
                    </div>

                    {/* Excellence */}
                    <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-900 hover:border-yellow-500/30 transition-colors">
                        <FaStar
                            size={50}
                            className="text-[#FFD000] mb-6"
                        />

                        <h3 className="text-[2.2rem] font-bold mb-4 text-white uppercase tracking-tight">
                            Excellence
                        </h3>

                        <p className="text-gray-300 text-[1.35rem] leading-relaxed">
                            We provide expert trainers, modern gym equipment,
                            and professional fitness programs for the best results.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
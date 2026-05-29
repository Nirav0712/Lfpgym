"use client";

import Image from "next/image";

export default function WhyChooseUs() {
    return (
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
        </section>
    );
}
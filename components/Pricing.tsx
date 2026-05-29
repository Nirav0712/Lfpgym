"use client";

import { Check } from "lucide-react";

export default function PricingPlans() {
    const plans = [
        {
            title: "1 Month Plan",
            subtitle: "Perfect for Beginners",
            price: "4000/-",
            duration: "/1 month",
        },
        {
            title: "3 Months Plan",
            subtitle: "Most Popular",
            price: "8000/-",
            duration: "/3 months",
        },
        {
            title: "6 Months Plan",
            subtitle: "Best Value",
            price: "12000/-",
            duration: "/6 months",
        },
    ];

    return (
        <section className="bg-black text-white py-24">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#FFD000] font-semibold text-lg mb-3">
                        Pricing Plans
                    </p>

                    <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                        Choose the Perfect Plan
                        <br />
                        That Truly Fits You
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="relative bg-[#050505] border border-[#111] overflow-hidden min-h-[560px]"
                        >
                            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FFD000]/20 to-transparent" />

                            <div className="relative z-10 p-10">
                                <h3 className="text-5xl font-bold mb-2">
                                    {plan.title}
                                </h3>

                                <p className="text-gray-400 text-xl mb-12">
                                    {plan.subtitle}
                                </p>

                                <div className="flex items-end gap-3 mb-16">
                                    <span className="text-[#FFD000] text-7xl font-bold">
                                        {plan.price}
                                    </span>

                                    <span className="text-[#FFD000] text-3xl font-semibold mb-2">
                                        {plan.duration}
                                    </span>
                                </div>

                                <h4 className="text-3xl font-bold mb-8">
                                    Benefits:
                                </h4>

                                <div className="space-y-5">
                                    <div className="flex gap-4">
                                        <Check
                                            size={22}
                                            className="text-[#FFD000] mt-1"
                                        />
                                        <p className="text-xl text-gray-300">
                                            Access to gym facilities during working hours
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <Check
                                            size={22}
                                            className="text-[#FFD000] mt-1"
                                        />
                                        <p className="text-xl text-gray-300">
                                            Use of cardio & strength equipment
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <Check
                                            size={22}
                                            className="text-[#FFD000] mt-1"
                                        />
                                        <p className="text-xl text-gray-300">
                                            Access to locker & changing rooms
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
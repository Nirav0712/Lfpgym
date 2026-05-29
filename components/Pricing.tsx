"use client";

import Link from "next/link";

export default function PricingSection() {
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

    return (
        <section className="bg-black py-24">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="border border-neutral-800 bg-black relative overflow-hidden"
                        >
                            {/* Yellow Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-500/10" />

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <h3 className="text-white text-[28px] font-bold mb-2">
                                    {plan.title}
                                </h3>

                                <p className="text-white text-lg mb-10">
                                    {plan.subtitle}
                                </p>

                                <div className="flex items-end mb-12">
                                    <span className="text-yellow-400 text-6xl font-extrabold">
                                        {plan.price}
                                    </span>
                                    <span className="text-yellow-400 text-2xl font-bold ml-2">
                                        {plan.duration}
                                    </span>
                                </div>

                                <h4 className="text-white text-3xl font-bold mb-6">
                                    Benefits:
                                </h4>

                                <ul className="space-y-5 flex-grow">
                                    {plan.benefits.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start text-white text-lg"
                                        >
                                            <span className="text-yellow-400 mr-3 text-xl">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* JOIN NOW BUTTON ENABLED */}
                                <Link
                                    href="/contact"
                                    className="mt-10 border border-yellow-400 text-white font-bold text-center py-4 transition-all duration-300 hover:bg-yellow-400 hover:text-black"
                                >
                                    JOIN NOW
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
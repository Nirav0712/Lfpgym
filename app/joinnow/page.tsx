"use client";

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

export default function JoinForm() {
    return (
        <section className="bg-black py-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-5">

                {/* Heading */}
                <div className="text-center mb-20">
                    <h1 className="text-white text-5xl md:text-6xl font-bold">
                        Join
                    </h1>

                    <div className="mt-3 text-gray-400">
                        Home <span className="mx-2">/</span>
                        <span className="text-[#F5E609]">Join</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Image */}
                    <div className="flex justify-center">
                        <img
                            src="/join-man.png"
                            alt="Gym Member"
                            className="w-full max-w-[500px] object-contain"
                        />
                    </div>

                    {/* Right Form */}
                    <div>
                        <form className="space-y-6">

                            {/* First + Last Name */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        className="w-full bg-transparent border border-[#333] px-4 py-3 text-white outline-none focus:border-[#F5E609]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        className="w-full bg-transparent border border-[#333] px-4 py-3 text-white outline-none focus:border-[#F5E609]"
                                    />
                                </div>
                            </div>

                            {/* Email + Phone */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="w-full bg-transparent border border-[#333] px-4 py-3 text-white outline-none focus:border-[#F5E609]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">
                                        Phone
                                    </label>

                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border border-[#333] px-4 py-3 text-white outline-none focus:border-[#F5E609]"
                                    />
                                </div>
                            </div>

                            {/* Gender + DOB */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">
                                        Gender
                                    </label>

                                    <select className="w-full bg-black border border-[#333] px-4 py-3 text-white outline-none focus:border-[#F5E609]">
                                        <option>Choose</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">
                                        Birth Date
                                    </label>

                                    <input
                                        type="date"
                                        className="w-full bg-transparent border border-[#333] px-4 py-3 text-white outline-none focus:border-[#F5E609]"
                                    />
                                </div>
                            </div>

                            {/* Plan */}
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">
                                    Select Plan
                                </label>

                                <select className="w-full bg-black border border-[#333] px-4 py-3 text-white outline-none focus:border-[#F5E609]">
                                    <option>Choose</option>
                                    <option>1 Month Plan</option>
                                    <option>3 Months Plan</option>
                                    <option>6 Months Plan</option>
                                    <option>12 Months Plan</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">
                                    Have Any Message?
                                </label>

                                <textarea
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full bg-transparent border border-[#333] px-4 py-3 text-white outline-none resize-none focus:border-[#F5E609]"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="border border-[#F5E609] px-8 py-3 text-white font-semibold uppercase tracking-wide hover:bg-[#F5E609] hover:text-black transition-all duration-300"
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                </div>
            </div>
            <section className="bg-black py-20">
                <div className="max-w-screen-2xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="relative border border-neutral-800 bg-black overflow-hidden flex flex-col h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-500/10" />

                                <div className="relative z-10 p-8 flex flex-col h-full flex-grow justify-between">
                                    <div>
                                        <h3 className="text-white text-2xl font-bold mb-2">
                                            {plan.title}
                                        </h3>

                                        <p className="text-white mb-8">
                                            {plan.subtitle}
                                        </p>

                                        <div className="flex items-end mb-10">
                                            <span className="text-yellow-400 text-5xl font-extrabold">
                                                {plan.price}
                                            </span>
                                            <span className="text-yellow-400 text-xl font-bold ml-2">
                                                {plan.duration}
                                            </span>
                                        </div>

                                        <h4 className="text-white text-2xl font-bold mb-6">
                                            Benefits:
                                        </h4>

                                        <ul className="space-y-4 flex-grow mb-8">
                                            {plan.benefits.map((item, i) => (
                                                <li key={i} className="flex text-white">
                                                    <span className="text-yellow-400 mr-3">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a
                                        href="/contact"
                                        className="border border-yellow-400 text-white font-bold text-center py-4 hover:bg-yellow-400 hover:text-black transition-all duration-300 block"
                                    >
                                        JOIN NOW
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
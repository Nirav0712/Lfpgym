"use client";

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
            <section className="bg-black py-24">
                <div className="max-w-7xl mx-auto px-5">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-[#F5E609] text-sm font-semibold mb-4">
                            Pricing Plans
                        </p>

                        <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                            Choose the Perfect Plan
                            <br />
                            That Truly Fits You
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
                            Flexible membership options for every lifestyle, from single sessions
                            to full packages with world-class facilities.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="relative bg-[#050505] p-8 overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-[#F5E609]/20 blur-3xl"></div>

                            <h3 className="text-white text-4xl font-bold">
                                3 Months Plan
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Perfect for Starters
                            </p>

                            <div className="flex items-end gap-2 mt-10">
                                <span className="text-[#F5E609] text-6xl font-bold">
                                    4000
                                </span>
                                <span className="text-[#F5E609] font-semibold mb-2">
                                    /1 month
                                </span>
                            </div>

                            <h4 className="text-white font-bold mt-12 mb-6">
                                Benefits:
                            </h4>

                            <ul className="space-y-3 text-gray-300">
                                <li>✔ Unlimited gym access & equipment use.</li>
                                <li>✔ Access to all group fitness classes.</li>
                                <li>✔ Free locker & shower usage.</li>
                                <li>✔ Monthly body composition tracking.</li>
                                <li>✔ 10% discount on personal training.</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="relative bg-[#050505] p-8 overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-[#F5E609]/20 blur-3xl"></div>

                            <h3 className="text-white text-4xl font-bold">
                                6 Months Plan
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Commit to Your Fitness
                            </p>

                            <div className="flex items-end gap-2 mt-10">
                                <span className="text-[#F5E609] text-6xl font-bold">
                                    8000
                                </span>
                                <span className="text-[#F5E609] font-semibold mb-2">
                                    /3 month
                                </span>
                            </div>

                            <h4 className="text-white font-bold mt-12 mb-6">
                                Benefits:
                            </h4>

                            <ul className="space-y-3 text-gray-300">
                                <li>✔ Unlimited gym access & equipment use.</li>
                                <li>✔ Access to all group fitness classes.</li>
                                <li>✔ Free locker & shower usage.</li>
                                <li>✔ Monthly body composition tracking.</li>
                                <li>✔ 15% off on personal training sessions.</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-[#050505] p-8 overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-[#F5E609]/20 blur-3xl"></div>

                            <h3 className="text-white text-4xl font-bold">
                                12 Months Plan
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Best Value Package
                            </p>

                            <div className="flex items-end gap-2 mt-10">
                                <span className="text-[#F5E609] text-6xl font-bold">
                                    12000
                                </span>
                                <span className="text-[#F5E609] font-semibold mb-2">
                                    /6 month
                                </span>
                            </div>

                            <h4 className="text-white font-bold mt-12 mb-6">
                                Benefits:
                            </h4>

                            <ul className="space-y-3 text-gray-300">
                                <li>✔ Unlimited gym access & equipment use.</li>
                                <li>✔ Access to all group fitness classes.</li>
                                <li>✔ Free locker & shower usage.</li>
                                <li>✔ Monthly body composition tracking.</li>
                                <li>✔ 25% off on personal training sessions.</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <section className="bg-black overflow-hidden py-8">
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

                    <style jsx>{`
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
  `}</style>
                </section>
            </section>
        </section>
    );
}
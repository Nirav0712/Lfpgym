"use client";

export default function ContactPage() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-white text-5xl md:text-6xl font-bold">
            Contact Us
          </h2>

          <div className="mt-3 text-gray-400">
            Home
            <span className="mx-2">/</span>
            <span className="text-[#F5E609]">Contact Us</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left Side */}
          <div>

            <div className="mb-10">
              <h3 className="text-white font-bold mb-2">
                Address
              </h3>

              <p className="text-gray-300 leading-8">
                5th Floor, Life Fitness Pro
                Sidhivinayak Business Hub,
                Circle, nr. Ghevar Complex,
                Arihant Nagar, Shahibag,
                Ahmedabad, Gujarat 380016
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-white font-bold mb-2">
                Contact No.
              </h3>

              <p className="text-gray-300">
                091570 98443
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-white font-bold mb-2">
                Email:
              </h3>

              <p className="text-gray-300">
                lifefitnesspro18@gmail.com
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#F5E609] hover:text-black transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#F5E609] hover:text-black transition"
              >
                i
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#F5E609] hover:text-black transition"
              >
                ▶
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#F5E609] hover:text-black transition"
              >
                🌐
              </a>
            </div>

          </div>

          {/* Right Side */}
          <div>

            <p className="text-gray-300 mb-8 leading-8">
              Have a question, suggestion, or just want to say hi?
              We're here and happy to hear from you!
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-[#333] px-5 py-4 text-white outline-none focus:border-[#F5E609]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-[#333] px-5 py-4 text-white outline-none focus:border-[#F5E609]"
              />

              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full bg-transparent border border-[#333] px-5 py-4 text-white outline-none focus:border-[#F5E609]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-transparent border border-[#333] px-5 py-4 text-white outline-none resize-none focus:border-[#F5E609]"
              />

              <button
                type="submit"
                className="w-full border border-[#F5E609] text-white py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#F5E609] hover:text-black cursor-pointer"
              >
                SEND MESSAGE
              </button>

            </form>

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
  );
}
"use client";
import Link from "next/link";

export default function RunningText() {
    return (
        <>
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
            </section>

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
        </>
    );
}
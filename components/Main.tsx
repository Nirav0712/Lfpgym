"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">

            {/* Scrolling Text */}
            <div className="absolute inset-0 flex items-center overflow-hidden">
                <div className="marquee whitespace-nowrap">
                    <span className="mx-10 text-[120px] md:text-[180px] font-bold uppercase text-white/90">
                        TRAIN HARD
                    </span>
                    <span className="mx-10 text-[120px] md:text-[180px] font-bold uppercase text-yellow-400">
                        LIVE FIT
                    </span>
                    <span className="mx-10 text-[120px] md:text-[180px] font-bold uppercase text-white/90">
                        BUILD STRENGTH
                    </span>
                    <span className="mx-10 text-[120px] md:text-[180px] font-bold uppercase text-yellow-400">
                        TRAIN HARD
                    </span>
                    <span className="mx-10 text-[120px] md:text-[180px] font-bold uppercase text-white/90">
                        LIVE FIT
                    </span>
                    <span className="mx-10 text-[120px] md:text-[180px] font-bold uppercase text-yellow-400">
                        BUILD STRENGTH
                    </span>
                </div>
            </div>

            {/* Center Image */}
            <div className="relative z-10">
                <Image
                    src="/gym-man.png" // your image
                    alt="Gym Model"
                    width={700}
                    height={900}
                    priority
                    className="object-contain"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 z-[1]" />

            <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </section>
    );
}
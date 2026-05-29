"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Raj Patel",
        review:
            "Life Fitness Pro is the best gym for anyone serious about improving their health and fitness. The professional trainers offer structured workout programs focused on strength training, weight loss, and overall fitness improvement.",
    },
    {
        name: "Nirav Shah",
        review:
            "Amazing gym atmosphere with modern equipment and expert trainers. I achieved my fitness goals much faster than expected.",
    },
    {
        name: "Priya Mehta",
        review:
            "The trainers are very supportive and the workout plans are personalized. Highly recommended for beginners and professionals.",
    },
    {
        name: "Amit Joshi",
        review:
            "Clean environment, friendly staff, and excellent training sessions. One of the best gyms in Ahmedabad.",
    },
    {
        name: "Ravi Desai",
        review:
            "Great experience. The motivation and guidance from trainers helped me transform my fitness journey.",
    },
];
export default function TestimonialSlider() {
    return (
        <section className="bg-black py-28">
            <div className="max-w-5xl mx-auto px-5">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    loop
                    autoplay={{
                        delay: 4000,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="testimonialSwiper"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center font-size-[10px]">

                                {/* Stars */}
                                <div className="text-yellow-400 text-2xl mb-10">
                                    ★★★★★
                                </div>

                                {/* Review */}
                                <p className="text-white text-xl md:text-4xl font-bold leading-relaxed max-w-4xl mx-auto">
                                    {item.review}
                                </p>

                                {/* Name */}
                                <h4 className="text-white text-2xl font-semibold mt-12">
                                    {item.name}
                                </h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
        .testimonialSwiper .swiper-pagination {
          position: relative;
          margin-top: 60px;
        }

        .testimonialSwiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #444;
          opacity: 1;
        }

        .testimonialSwiper .swiper-pagination-bullet-active {
          background: #ffd400;
          border: 1px solid #ffd400;
        }
      `}</style>
        </section>
    );
}
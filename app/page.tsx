"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/Whychooseus";
import PricingPlans from "@/components/Pricing";
import ActivitiesSlider from "@/components/Activitiesslider";
import GymSchedule from "@/components/Gymschedule";
import Testimonial from "@/components/Testimonial";
import GymFAQ from "@/components/Gymfaq";
import Slider from "@/components/Slider";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PricingPlans />
      <WhyChooseUs />
      <ActivitiesSlider />
      <GymSchedule />
      <Testimonial />
      <GymFAQ />
      <Slider />
    </>
  );
}

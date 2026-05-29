"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = {
    membership: [
        {
            question: "What membership options are available?",
            answer:
                "We offer flexible membership plans including short-term and long-term options to suit different fitness goals and schedules.",
        },
        {
            question: "How can I join the gym?",
            answer:
                "You can visit our gym, call us directly, or register online through our website.",
        },
        {
            question: "Do you offer free trials?",
            answer:
                "Yes, we provide a free trial session for first-time visitors.",
        },
        {
            question: "Can I freeze or pause my membership?",
            answer:
                "Yes, memberships can be paused under specific conditions.",
        },
        {
            question: "Do you have discounts or referral bonuses?",
            answer:
                "Members who refer friends receive rewards and seasonal offers.",
        },
    ],

    training: [
        {
            question: "What kind of equipment do you have?",
            answer:
                "We have modern cardio, strength, and functional training equipment.",
        },
        {
            question: "Do you offer personal training?",
            answer:
                "Yes, certified trainers are available for one-on-one coaching.",
        },
        {
            question: "What classes are included with membership?",
            answer:
                "Yoga, Zumba, CrossFit, HIIT, and many more classes.",
        },
        {
            question: "Do you have locker rooms and showers?",
            answer:
                "Yes, clean locker rooms and shower facilities are available.",
        },
        {
            question: "Are group classes beginner-friendly?",
            answer:
                "Absolutely. Classes are suitable for all fitness levels.",
        },
    ],

    billing: [
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept cash, cards, UPI, net banking, and online payments.",
        },
        {
            question: "Can I get an invoice or receipt?",
            answer:
                "Yes, invoices and receipts are provided for every payment.",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "Cancellation policies depend on the membership plan selected.",
        },
        {
            question: "Are there any additional fees?",
            answer:
                "No hidden charges. Any additional fees are clearly mentioned.",
        },
        {
            question: "How do I update billing information?",
            answer:
                "Contact our front desk or update details through your account.",
        },
    ],
};

export default function GymFAQ() {
    const [activeTab, setActiveTab] = useState("membership");
    const [openIndex, setOpenIndex] = useState(0);

    const faqs =
        activeTab === "membership"
            ? faqData.membership
            : activeTab === "training"
                ? faqData.training
                : faqData.billing;

    return (
        <section className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-5">

                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Left Side */}
                    <div>
                        <p className="text-yellow-400 font-semibold mb-5 text-lg">
                            FAQ
                        </p>

                        <h2 className="text-white text-5xl md:text-7xl font-bold leading-tight">
                            Answers to Your Questions
                            <br />
                            About Gym & Fitness
                        </h2>
                    </div>

                    {/* Right Side */}
                    <div>

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-5 mb-10">

                            <button
                                onClick={() => {
                                    setActiveTab("membership");
                                    setOpenIndex(0);
                                }}
                                className={`px-8 py-4 border transition ${activeTab === "membership"
                                    ? "border-yellow-400 text-white"
                                    : "border-transparent text-gray-400"
                                    }`}
                            >
                                Membership & Plans
                            </button>

                            <button
                                onClick={() => {
                                    setActiveTab("training");
                                    setOpenIndex(null as any);
                                }}
                                className={`px-8 py-4 border transition ${activeTab === "training"
                                    ? "border-yellow-400 text-white"
                                    : "border-transparent text-gray-400"
                                    }`}
                            >
                                Training & Facilities
                            </button>

                            <button
                                onClick={() => {
                                    setActiveTab("billing");
                                    setOpenIndex(null as any);
                                }}
                                className={`px-8 py-4 border transition ${activeTab === "billing"
                                    ? "border-yellow-400 text-white"
                                    : "border-transparent text-gray-400"
                                    }`}
                            >
                                Billing & Policies
                            </button>
                        </div>

                        {/* Accordion */}
                        <div>
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-700"
                                >
                                    <button
                                        onClick={() =>
                                            setOpenIndex(
                                                openIndex === index ? -1 : index
                                            )
                                        }
                                        className="w-full flex justify-between items-center py-8 text-left"
                                    >
                                        <h3 className="text-white text-2xl font-bold">
                                            {faq.question}
                                        </h3>

                                        {openIndex === index ? (
                                            <ChevronUp
                                                size={20}
                                                className="text-white"
                                            />
                                        ) : (
                                            <ChevronDown
                                                size={20}
                                                className="text-white"
                                            />
                                        )}
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index
                                            ? "max-h-40 pb-8"
                                            : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-gray-300 text-xl leading-relaxed pr-10">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
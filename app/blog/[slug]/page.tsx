import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogArticle {
  title: string;
  category: string;
  date: string;
  month: string;
  author: string;
  readTime: string;
  image: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    listItems?: string[];
  }[];
  quote?: string;
}

const blogData: Record<string, BlogArticle> = {
  "fitness-strategy": {
    title: "Complete Fitness Strategy to Transform Your Body Faster",
    category: "Best Gym In Shahibaug",
    date: "12",
    month: "Oct",
    author: "Coach Aarav",
    readTime: "8 min read",
    image: "/blog/blog1.jpg",
    intro: "Unlock the full potential of your physique with a highly structured fitness strategy that combines progressive resistance, high-intensity intervals, customized nutrition, and targeted recovery metrics.",
    sections: [
      {
        heading: "1. The Myth of Random Workouts",
        paragraphs: [
          "Many fitness enthusiasts fall into the trap of performing random workouts. They walk into the gym without a defined plan, jump from machine to machine, and expect dramatic physical changes. True body transformation requires systematic planning.",
          "At Life Fitness Pro, we advocate for a structured approach. Every movement, set, rep, and rest interval must serve a specific purpose in your athletic journey. Without consistency and tracking, you are simply exercising, not training."
        ]
      },
      {
        heading: "2. The Pillar of Progressive Overload",
        paragraphs: [
          "Progressive overload is the most fundamental law of muscle growth and athletic progression. To make your muscles grow and adapt, you must continuously challenge them with workloads greater than they are accustomed to.",
          "You can apply progressive overload in several ways:"
        ],
        listItems: [
          "Increasing the Load: Gradually lifting heavier weights while maintaining pristine form.",
          "Increasing the Volume: Adding more sets or repetitions over your training cycle.",
          "Improving Density: Reducing rest times between sets to force greater metabolic adaptation.",
          "Improving Technique: Increasing the range of motion and time under tension."
        ]
      },
      {
        heading: "3. High-Intensity Interval Training vs. Steady-State Cardio",
        paragraphs: [
          "For rapid fat loss and metabolic conditioning, we combine High-Intensity Interval Training (HIIT) with Low-Intensity Steady-State (LISS) cardio.",
          "HIIT triggers the Excess Post-Exercise Oxygen Consumption (EPOC) effect, meaning your body continues to burn calories at an accelerated rate for hours after your workout. LISS, on the other hand, is excellent for active recovery and cardiovascular system maintenance, helping to flush out metabolic waste."
        ]
      },
      {
        heading: "4. Fueling the Machine: Customizing Macronutrients",
        paragraphs: [
          "Your strategy is only as good as your nutrition. To transform your body faster, you must customize your daily macronutrients based on your body composition goals.",
          "Protein forms the foundation of muscle repair and retention, especially during a caloric deficit. Clean carbohydrates fuel intense workouts and replenish glycogen levels, while healthy fats optimize hormone production and cellular health. Proper hydration is equally vital, as even a 2% drop in hydration can reduce muscle strength by 10%."
        ]
      },
      {
        heading: "5. The Role of Rest and Muscle Rebuilding",
        paragraphs: [
          "You do not grow muscle in the gym; you grow it during rest. During intense workouts, you create micro-tears in your muscle fibers. It is only during deep sleep and rest periods that your body synthesizes new protein to rebuild those fibers stronger.",
          "Aim for 7 to 9 hours of quality sleep per night, optimize your bedroom environment for deep sleep cycles, and incorporate active recovery days into your schedule to maximize your rate of progress."
        ]
      }
    ],
    quote: "Discipline is the bridge between goals and accomplishment. A structured strategy makes that bridge unbreakable."
  },
  "weight-loss-plan": {
    title: "Expert Training System at the Best Gym in Shahibaug",
    category: "Weight Loss & Muscle Gain Plan",
    date: "10",
    month: "Oct",
    author: "Coach Vikram",
    readTime: "7 min read",
    image: "/blog/blog2.jpg",
    intro: "How the trainers at Life Fitness Pro in Shahibaug design professional, results-oriented training frameworks to safely melt body fat while shielding your valuable lean muscle mass.",
    sections: [
      {
        heading: "1. The Shahibaug Standard: Professional Personal Coaching",
        paragraphs: [
          "Located in the heart of Shahibaug, Life Fitness Pro has earned the reputation of being the best gym in the region by delivering elite, science-backed results. Our expert training system is engineered to simplify your fitness journey while maximizing physical outcomes.",
          "We reject generic routines. Our certified personal trainers work individually with each member to map out their custom body structure, biomechanical limitations, and specific fitness goals."
        ]
      },
      {
        heading: "2. The Metabolic Golden Ratio: Deficit without Loss",
        paragraphs: [
          "The biggest mistake in weight loss is starving the body. Extreme caloric restriction leads to the loss of both fat and muscle mass, leaving you weak with a sluggish metabolism.",
          "Our system focuses on maintaining the 'Metabolic Golden Ratio'—creating a sustainable caloric deficit while providing adequate protein and resistance training to preserve muscle. This ensures that the weight you lose is pure fat, leaving you with a toned, athletic, and functional physique."
        ]
      },
      {
        heading: "3. Compound Movements as the Foundation for Fat Loss",
        paragraphs: [
          "To burn fat efficiently, you must engage the largest muscle groups in your body. Our training system prioritizes compound multi-joint movements like squats, deadlifts, overhead presses, and rows.",
          "These movements engage multiple muscle groups simultaneously, demanding massive amounts of energy and dramatically increasing your metabolic rate both during and after the training session."
        ]
      },
      {
        heading: "4. Energy Systems Development: Heart Rate Zone Training",
        paragraphs: [
          "Cardio at Life Fitness Pro is structured, not random. We use Energy Systems Development (ESD) to target specific heart rate zones.",
          "By monitoring your exertion levels, we ensure you train in the optimal fat-burning zone (Zone 2) for aerobic base building, combined with brief interval spikes to challenge your anaerobic thresholds and boost overall physical conditioning."
        ]
      },
      {
        heading: "5. Accountability and Biometric Assessment",
        paragraphs: [
          "What gets measured gets managed. Our expert training system is backed by consistent, biometric tracking.",
          "We perform regular body composition analysis (evaluating muscle mass, body fat percentage, and intracellular water levels), girth measurements, and strength progression audits to keep you fully accountable and motivated on your journey."
        ]
      }
    ],
    quote: "True fat loss is about building a body that works for you, not starving yourself to fit into a template."
  },
  "motivation": {
    title: "How to Stay Consistent at the Gym Even When You Feel Unmotivated",
    category: "Motivation",
    date: "08",
    month: "Oct",
    author: "Coach Rohan",
    readTime: "6 min read",
    image: "/blog/blog3.jpg",
    intro: "Discipline beats motivation every single time. Discover the neurological and behavioral science secrets to building lifelong gym consistency and breaking through plateaus.",
    sections: [
      {
        heading: "1. Motivation is a Feeling; Consistency is a System",
        paragraphs: [
          "Motivation is a highly unstable emotional state. It comes and goes depending on your sleep, stress, weather, and mood. If you only train when you feel motivated, you will never build a truly outstanding physique.",
          "Professional athletes and consistent gym-goers do not rely on motivation. They rely on habits, routines, and systems. By treating your gym session as a non-negotiable appointment, you take emotion out of the equation."
        ]
      },
      {
        heading: "2. Habit Stacking: The Architecture of Behavioral Nuance",
        paragraphs: [
          "One of the easiest ways to build gym consistency is through habit stacking. This is the process of linking your new fitness habit to an already established daily routine.",
          "For example:"
        ],
        listItems: [
          "Stacking with work: 'Immediately after closing my laptop at 6:00 PM, I will change into my gym clothes.'",
          "Stacking with morning coffee: 'As soon as I finish my morning coffee, I will pack my gym bag and leave.'",
          "Stacking with transport: 'On my commute home, I will drive directly past the gym and park in their lot.'"
        ]
      },
      {
        heading: "3. Pre-Workout Rituals that Trigger Performance",
        paragraphs: [
          "Create an automated sequence of actions that signals to your brain that it is time to perform. Over time, this sequence becomes an automatic neurological trigger.",
          "Your ritual could be as simple as drinking your pre-workout supplement, putting on your favorite energetic playlist, or wrapping your wrists. Once this trigger is pulled, your mind automatically shifts into workout mode, cutting down mental resistance."
        ]
      },
      {
        heading: "4. Overcoming the 'All-or-Nothing' Cognitive Trap",
        paragraphs: [
          "Many people quit the gym because they believe they must have a 'perfect' 90-minute session every time. If they are busy or tired, they skip the workout entirely.",
          "We encourage you to destroy the 'all-or-nothing' mindset. A bad 20-minute workout is infinitely better than a skipped workout. Showing up and going through the motions maintains the neural pathways of consistency, keeping the habit alive even during stressful life cycles."
        ]
      },
      {
        heading: "5. The Role of a Supportive Fitness Community",
        paragraphs: [
          "Human beings are social creatures, and we adapt to our environments. Surrounding yourself with individuals who share your fitness values makes consistency natural.",
          "At Life Fitness Pro, we cultivate an encouraging, highly energetic community. When you know your trainers and gym partners are waiting for you, accountability skyrockets, turning gym sessions from a chore into a highlight of your day."
        ]
      }
    ],
    quote: "You do not rise to the level of your goals. You fall to the level of your systems."
  },
  "strength-training": {
    title: "Top 7 Compound Exercises for Building Full-Body Power",
    category: "Strength",
    date: "28",
    month: "Sep",
    author: "Coach Dev",
    readTime: "9 min read",
    image: "/blog/blog4.jpg",
    intro: "Stop wasting time on isolated movements. Build ultimate functional power, bone density, and structural symmetry with these 7 master compound lifts.",
    sections: [
      {
        heading: "1. Why Compound Lifts Rule the Strength Kingdom",
        paragraphs: [
          "Compound exercises are multi-joint movements that engage multiple muscle groups simultaneously. Unlike isolation exercises (like bicep curls), compound movements force your body to work as a single, coordinated unit.",
          "By recruiting massive muscle volume, compound lifts trigger a significantly greater release of natural growth hormone and testosterone, leading to faster muscle growth and total body power gains."
        ]
      },
      {
        heading: "2. The Big Three: Squat, Deadlift, and Bench Press",
        paragraphs: [
          "These three lifts form the absolute bedrock of physical power development:",
          "The Squat (King of Lifts) is the ultimate lower-body builder, developing the quadriceps, glutes, hamstrings, and lower back while reinforcing core stability.",
          "The Deadlift is the purest test of raw human strength. It targets the entire posterior chain—from your calves to your upper traps—promoting robust back health and explosive hip extension power.",
          "The Bench Press is the classic upper-body horizontal push movement. It targets the pectorals, anterior deltoids, and triceps, creating a powerful, stable upper torso."
        ]
      },
      {
        heading: "3. Core Vertical Lifts: Overhead Press and Barbell Row",
        paragraphs: [
          "To build fully balanced, injury-resistant shoulders and a thick, powerful back, you must lift vertically:",
          "The Overhead Press (OHP) builds rounded shoulders, powerful triceps, and forces your abdominal muscles to contract intensely to stabilize the load overhead.",
          "The Barbell Row is the ultimate horizontal pull. It thickens the latissimus dorsi, rhomboids, and traps, providing the essential structural support needed to lift heavy in bench presses and squats."
        ]
      },
      {
        heading: "4. The Functional Finishers: Pull-Ups and Lunges",
        paragraphs: [
          "No strength program is complete without bodyweight and unilateral work:",
          "The Pull-Up is the gold standard for vertical pulling, building a wide back, strong grip, and functional shoulder health.",
          "The Barbell Lunge addresses unilateral strength discrepancies, correcting imbalances between your left and right leg, improving hip mobility, and strengthening key knee stabilizers."
        ]
      },
      {
        heading: "5. Setting Up a Progressive Strength Program",
        paragraphs: [
          "To safely master these lifts, start with foundational weights under a trainer's supervision. Focus on perfect technique, and use progressive overload to slowly add weight over time. Keep track of your performance to watch your full-body strength soar."
        ]
      }
    ],
    quote: "Symmetry, strength, and structural health are forged through compound movement, not isolation."
  },
  "recovery": {
    title: "Why Rest Days Are Crucial for Muscle Growth and Performance",
    category: "Recovery",
    date: "22",
    month: "Sep",
    author: "Coach Sameer",
    readTime: "7 min read",
    image: "/blog/blog5.jpg",
    intro: "You don't grow muscle in the gym; you grow it in bed. Explore the cellular science of muscle recovery and active rest strategies for elite athletes.",
    sections: [
      {
        heading: "1. The Physiology of Hypertrophy: Microtears and Supercompensation",
        paragraphs: [
          "During weight training, you are actually causing microscopic damage (microtears) to your muscle fibers. The training session itself is catabolic—it breaks down muscle tissue.",
          "The anabolic (growth) phase only begins when you leave the gym. Your body initiates a cellular process called protein synthesis, repairing the damaged fibers and adapting them to handle future stress. This adaptation process is known as supercompensation, and it requires adequate rest to complete."
        ]
      },
      {
        heading: "2. Hormonal Harmonization During Rest",
        paragraphs: [
          "Intense training causes spikes in cortisol, your body's primary stress hormone. While necessary for acute performance, chronically elevated cortisol breaks down muscle tissue and promotes fat storage.",
          "Taking dedicated rest days drops cortisol levels and allows testosterone and growth hormone to rise to optimal levels, ensuring your body stays in an anabolic, muscle-building state."
        ]
      },
      {
        heading: "3. Sleep Hygiene: The Greatest Recovery Tool",
        paragraphs: [
          "There is no supplement, massage gun, or cold plunge that can replace the physiological power of deep sleep.",
          "During slow-wave deep sleep, your body releases the vast majority of its daily growth hormone, increases blood flow to muscles for repair, and synthesizes protein. Aim for 8 hours of uninterrupted sleep in a cool, dark room to unlock this natural performance enhancer."
        ]
      },
      {
        heading: "4. Active Recovery Strategies",
        paragraphs: [
          "Rest does not mean lying on the couch all day. Active recovery keeps blood flowing, carrying vital nutrients to healing muscles and flushing out metabolic waste.",
          "On your off-days, incorporate:"
        ],
        listItems: [
          "Mobility Work: Targeted dynamic stretches to release tight joints.",
          "Foam Rolling: Self-myofascial release to break up muscle knots and adhesions.",
          "Light Movement: A 30-minute brisk walk in Zone 1/2 heart rate.",
          "Contrast Therapy: Alternating hot and cold showers to stimulate vascular circulation."
        ]
      },
      {
        heading: "5. The Dangers of Overtraining Syndrome",
        paragraphs: [
          "Ignoring rest days leads directly to Overtraining Syndrome (OTS). Symptoms include chronic fatigue, elevated resting heart rate, persistent muscle soreness, sleep disruption, and a drop in strength.",
          "Listen to your body. Program a deload week every 6 to 8 weeks, and view rest days as a vital, active part of your overall training system rather than a sign of weakness."
        ]
      }
    ],
    quote: "Train hard, but recover harder. Your results are only as good as your ability to heal."
  },
  "lifestyle": {
    title: "Balancing Gym, Work, and Life: How to Build a Sustainable Routine",
    category: "Lifestyle",
    date: "18",
    month: "Sep",
    author: "Coach Riya",
    readTime: "8 min read",
    image: "/blog/blog6.jpg",
    intro: "You don't have to choose between a thriving career and an elite physique. Master the time-management tactics and meal prep hacks used by top executives to maintain consistency.",
    sections: [
      {
        heading: "1. The Time Deficit Illusion: Making Fitness Non-Negotiable",
        paragraphs: [
          "The most common excuse for skipping the gym is 'I don't have time.' However, the busiest people in the world—from CEOs to parents—still maintain elite physical shape. The difference is prioritization.",
          "Stop waiting for 'free time' to appear. You must schedule your workouts in your calendar just like an important business meeting or a client call. Once a habit is scheduled, it becomes a non-negotiable part of your day."
        ]
      },
      {
        heading: "2. The Power of Early Morning Training",
        paragraphs: [
          "If your workday is unpredictable, training in the evening leaves you vulnerable to cancellations due to late meetings, exhaustion, or social commitments.",
          "By training early in the morning (e.g., 6:30 AM), you guarantee your workout is complete before the demands of the day can interfere. Morning workouts also trigger endorphin release, raising your mental clarity, focus, and metabolism for the rest of the day."
        ]
      },
      {
        heading: "3. Efficient 45-Minute Workout Design",
        paragraphs: [
          "You do not need to spend two hours in the gym to get results. An intensely focused 45-minute workout can deliver incredible changes if you optimize the training density.",
          "Utilize supersets (pairing opposing muscle groups like chest and back with minimal rest) and giant sets to pack massive workout volume into short time blocks. Put your phone in your locker to cut out distractions and maintain momentum."
        ]
      },
      {
        heading: "4. Meal Prep Strategies for the Busy Professional",
        paragraphs: [
          "Nutrition is usually the first thing to slip when work gets busy. To avoid ordering unhealthy fast food, adopt a system of batch-cooking.",
          "Dedicate just two hours on Sunday afternoon to cook your high-protein foundations (like chicken breast, paneer, or fish), clean carbs (rice, quinoa, sweet potato), and roasted vegetables. Portion them into airtight containers so healthy meals are ready to heat and eat in seconds during the week."
        ]
      },
      {
        heading: "5. Setting Realistic and Sustainable Expectations",
        paragraphs: [
          "Consistency over a long period beats temporary perfection. If your schedule is packed, do not try to train 6 days a week. Commit to a highly focused 3-day full-body split.",
          "A structured 3-day routine maintained for a full year will deliver vastly superior results compared to an exhausting 6-day routine that causes burnout and injury in a month."
        ]
      }
    ],
    quote: "Do not let what you cannot do interfere with what you can do. A 30-minute workout is always a win."
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "fitness-strategy" },
    { slug: "weight-loss-plan" },
    { slug: "motivation" },
    { slug: "strength-training" },
    { slug: "recovery" },
    { slug: "lifestyle" }
  ];
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogData[slug];

  if (!article) {
    notFound();
  }

  // Get other blogs for the sidebar links
  const otherBlogs = Object.entries(blogData)
    .filter(([key]) => key !== slug)
    .slice(0, 4);

  return (
    <main className="bg-black text-white min-h-screen relative">
      {/* CSS Scroll Progress Bar */}
      <div className="scroll-progress" />

      {/* Featured Banner */}
      <section className="relative h-[480px] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent" />

        {/* Banner Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
          <span className="bg-[#F5E609]/10 text-[#F5E609] border border-[#F5E609]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            {article.category}
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-300 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-[#F5E609]">By</span>
              <span className="text-white font-bold">{article.author}</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span>{article.date} {article.month} 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="text-[#F5E609]">{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-400 font-medium mb-12 border-b border-zinc-900 pb-6">
          <Link href="/" className="hover:text-[#F5E609] transition-colors">
            Home
          </Link>
          <span className="text-[#F5E609]">›</span>
          <Link href="/blog" className="hover:text-[#F5E609] transition-colors">
            Blog
          </Link>
          <span className="text-[#F5E609]">›</span>
          <span className="text-white truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Article Body */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Intro paragraph */}
            <p className="text-zinc-200 text-xl sm:text-2xl font-medium leading-relaxed border-l-4 border-[#F5E609] pl-6 py-2 drop-shadow-sm">
              {article.intro}
            </p>

            <div className="h-[1px] bg-zinc-900 w-full" />

            {/* Dynamic sections */}
            <div className="space-y-12">
              {article.sections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight flex items-center gap-3 group">
                    <span className="w-1.5 h-7 bg-[#F5E609] block rounded-sm opacity-80 group-hover:opacity-100 group-hover:scale-y-110 transition-all duration-300" />
                    {section.heading}
                  </h2>
                  
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-zinc-300 text-[1.125rem] sm:text-[1.2rem] leading-9 font-normal">
                      {p}
                    </p>
                  ))}

                  {section.listItems && (
                    <ul className="space-y-4 pl-6 pt-2">
                      {section.listItems.map((item, itemIdx) => {
                        const parts = item.split(":");
                        return (
                          <li key={itemIdx} className="text-zinc-300 text-[1.125rem] sm:text-[1.2rem] leading-8 flex items-start">
                            <span className="text-[#F5E609] mr-3 font-bold select-none">✓</span>
                            <span>
                              {parts.length > 1 ? (
                                <>
                                  <strong className="text-white font-bold">{parts[0]}:</strong>
                                  {parts.slice(1).join(":")}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Key Quote block */}
            {article.quote && (
              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-l-4 border-[#F5E609] border-y border-r border-zinc-900 p-8 rounded-r-2xl rounded-l-sm relative overflow-hidden mt-12 group hover:border-[#F5E609]/30 transition-all duration-500">
                <div className="absolute -top-6 -left-6 text-[120px] text-zinc-900/20 font-serif leading-none select-none group-hover:text-[#F5E609]/10 transition-colors duration-500">“</div>
                <p className="text-zinc-200 text-xl sm:text-2xl font-semibold italic relative z-10 leading-relaxed pr-6 group-hover:text-[#F5E609] transition-colors duration-500">
                  "{article.quote}"
                </p>
              </div>
            )}

            {/* Share and Tags Section */}
            <div className="border-t border-zinc-900 pt-8 mt-12 flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">Tags:</span>
                <span className="bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 px-3 py-1 text-xs font-bold rounded-md hover:text-[#F5E609] transition-colors cursor-pointer">#Fitness</span>
                <span className="bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 px-3 py-1 text-xs font-bold rounded-md hover:text-[#F5E609] transition-colors cursor-pointer">#GymLife</span>
                <span className="bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 px-3 py-1 text-xs font-bold rounded-md hover:text-[#F5E609] transition-colors cursor-pointer">#Training</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">Share:</span>
                <div className="flex items-center gap-2">
                  <button className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#F5E609] hover:text-black text-zinc-300 flex items-center justify-center transition-all duration-300 cursor-pointer" title="Share on Facebook">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#F5E609] hover:text-black text-zinc-300 flex items-center justify-center transition-all duration-300 cursor-pointer" title="Share on Twitter">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#F5E609] hover:text-black text-zinc-300 flex items-center justify-center transition-all duration-300 cursor-pointer" title="Share on LinkedIn">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar Details */}
          <div className="lg:col-span-4 space-y-12 w-full lg:sticky lg:top-28">
            
            {/* Join Free Card */}
            <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-900 p-8 rounded-3xl text-center space-y-6 hover:shadow-[0_0_30px_rgba(245,230,9,0.05)] transition-all duration-500 group">
              <span className="bg-[#F5E609]/10 text-[#F5E609] border border-[#F5E609]/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest block w-fit mx-auto">
                Life Fitness Pro
              </span>
              <h3 className="text-white text-3xl font-black uppercase tracking-tight group-hover:text-[#F5E609] transition-colors duration-300">
                Transform Your Body Today
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Take the first step towards your fitness goals with our certified personal trainers, modern facilities, and custom routines.
              </p>
              <Link 
                href="/joinnow" 
                className="w-full bg-[#F5E609] hover:bg-[#F5E609]/90 text-black text-sm font-bold uppercase tracking-widest py-4 rounded-xl transition-all duration-300 block shadow-lg hover:shadow-[#F5E609]/20 active:scale-[0.98]"
              >
                Get Free Trial Pass
              </Link>
            </div>

            {/* Other Recent Blogs */}
            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-3xl space-y-6">
              <h3 className="text-white text-xl font-bold uppercase tracking-tight border-b border-zinc-900 pb-4">
                Other Articles
              </h3>

              <div className="space-y-4">
                {otherBlogs.map(([key, blog]) => (
                  <Link 
                    key={key} 
                    href={`/blog/${key}`}
                    className="block p-4 rounded-2xl border border-zinc-900/60 bg-zinc-950/40 hover:bg-zinc-950/90 hover:border-zinc-800 transition-all duration-300 group"
                  >
                    <span className="text-[#F5E609] text-[10px] font-bold uppercase tracking-wider block mb-2">
                      {blog.category}
                    </span>
                    <h4 className="text-white text-base font-bold leading-snug transition-colors group-hover:text-[#F5E609] line-clamp-2">
                      {blog.title}
                    </h4>
                    <div className="flex items-center justify-between mt-3 text-zinc-500 text-xs pt-2 border-t border-zinc-900/60">
                      <span>{blog.date} {blog.month} 2026</span>
                      <span className="text-zinc-600 group-hover:text-[#F5E609] group-hover:translate-x-1 transition-all duration-300">
                        ➔
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Marquee Slider */}
      <section className="bg-black overflow-hidden pt-24 pb-8">
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

        <style
          dangerouslySetInnerHTML={{
            __html: `
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
              .scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background-color: #F5E609;
                z-index: 9999;
                transform-origin: 0 50%;
                animation: grow-progress auto linear;
                animation-timeline: scroll();
              }
              @keyframes grow-progress {
                from { transform: scaleX(0); }
                to { transform: scaleX(1); }
              }
            `,
          }}
        />
      </section>

    </main>
  );
}

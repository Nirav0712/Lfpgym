import Link from "next/link";
import { notFound } from "next/navigation";
import TrialForm from "@/components/TrialForm";

interface ActivityDetail {
  title: string;
  desc: string;
  longDesc: string;
  intensity: string;
  duration: string;
  classSize: string;
  target: string;
}

const activityData: Record<string, ActivityDetail> = {
  "aerobics": {
    title: "Aerobics",
    desc: "Improve stamina and overall fitness with aerobics training.",
    longDesc: "Our high-energy aerobics sessions combine rhythmic aerobic exercise with stretching and strength training routines. Boost your cardiovascular health, burn calories rapidly, and improve your coordination in an encouraging, music-driven group environment suitable for all fitness levels.",
    intensity: "High",
    duration: "60 mins",
    classSize: "15 - 25 Members",
    target: "Full Body & Cardiovascular System"
  },
  "yoga": {
    title: "Yoga",
    desc: "Enhance flexibility, balance, and mental wellness.",
    longDesc: "Experience the profound union of breath, body, and mind. Our guided Yoga program offers pathways for absolute beginners to advanced practitioners, incorporating Vinyasa flows, deep stretching, breathing exercises (Pranayama), and mindfulness techniques designed to melt stress and cultivate deep physical poise.",
    intensity: "Low to Moderate",
    duration: "75 mins",
    classSize: "10 - 15 Members",
    target: "Core Strength, Flexibility & Mental Balance"
  },
  "cross-fit": {
    title: "CrossFit",
    desc: "High-intensity workouts designed for real results.",
    longDesc: "Push your physical boundaries with our expert CrossFit workouts. Blending powerlifting, Olympic weightlifting, gymnastics, and high-intensity metabolic conditioning, each session is scaled to your individual level to forge unmatched physical work capacity, explosive power, and lean muscle.",
    intensity: "Very High",
    duration: "45 mins",
    classSize: "8 - 12 Members",
    target: "Explosive Power, Strength & Stamina"
  },
  "strength": {
    title: "Strength Training",
    desc: "Build muscle and increase strength effectively.",
    longDesc: "Build structural power, increase bone density, and sculpt lean muscle. Our strength programs utilize free weights, compound lifts, and progressive overload tracking to safely guide you from foundational lifting forms to advanced strength milestones under expert coaching.",
    intensity: "High",
    duration: "60 mins",
    classSize: "12 - 18 Members",
    target: "Hypertrophy, Power & Skeletal Strength"
  },
  "cardio": {
    title: "Cardio Training",
    desc: "Boost heart health and burn calories faster.",
    longDesc: "Ignite your metabolism and elevate your cardiovascular endurance. Through standard steady-state training, high-intensity interval training (HIIT), and specialized cardiovascular machines, you will build robust stamina, torch fat, and optimize your systemic heart and lung performance.",
    intensity: "Moderate to High",
    duration: "50 mins",
    classSize: "15 - 20 Members",
    target: "Stamina, Aerobic Capacity & Fat Loss"
  },
  "boxing": {
    title: "Boxing",
    desc: "Train like a fighter and improve endurance.",
    longDesc: "Unleash your inner athlete with fighter-level boxing training. Master proper punching mechanics, head movement, shadow boxing, heavy bag intervals, and pad work. A complete full-body metabolic conditioning routine that sharpens focus, reflexes, and core power.",
    intensity: "High",
    duration: "60 mins",
    classSize: "10 - 15 Members",
    target: "Upper Body Speed, Core & Stamina"
  },
  "zumba": {
    title: "Zumba",
    desc: "Fun and energetic dance workouts.",
    longDesc: "Ditch the traditional workout and join the party. Zumba combines high-energy Latin and international beats with easy-to-follow dance choreography. It is a full-body cardio workout that feels like a dance celebration, helping you burn hundreds of calories while boosting your mood.",
    intensity: "Moderate",
    duration: "60 mins",
    classSize: "20 - 30 Members",
    target: "Full Body Cardio & Coordination"
  },
  "personal-training": {
    title: "Personal Training",
    desc: "One-on-one coaching for faster progress.",
    longDesc: "Fast-track your physical transformation with elite personal training. Get absolute one-on-one focus, fully customized nutrition guides, biometric progress tracking, and exercise plans specifically built to match your body type, physical capabilities, and personal milestones.",
    intensity: "Tailored to Member",
    duration: "60 mins",
    classSize: "1 on 1 Coaching",
    target: "Customized Personal Fitness Goals"
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "aerobics" },
    { slug: "yoga" },
    { slug: "cross-fit" },
    { slug: "strength" },
    { slug: "cardio" },
    { slug: "boxing" },
    { slug: "zumba" },
    { slug: "personal-training" }
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  // Normalize slug to match keys (e.g. crossfit -> cross-fit)
  let normalizedSlug = slug.toLowerCase();
  if (normalizedSlug === "crossfit") normalizedSlug = "cross-fit";

  const data = activityData[normalizedSlug];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex-1 bg-black text-white px-8 sm:px-12 py-16 relative overflow-hidden flex items-center">
      
      {/* Premium ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-zinc-900/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-3 text-zinc-400 hover:text-yellow-400 font-bold uppercase tracking-widest text-sm mb-12 transition-colors group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Details Grid */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <p className="text-yellow-400 font-bold text-lg uppercase tracking-widest mb-4">
                Activity Details
              </p>
              <h1 className="text-6xl sm:text-7xl font-black uppercase tracking-tight leading-none mb-6">
                {data.title}
              </h1>
              <p className="text-zinc-400 text-xl font-medium leading-relaxed max-w-xl">
                {data.desc}
              </p>
            </div>

            <div className="h-0.5 bg-zinc-900 w-full" />

            <div className="space-y-6">
              <h2 className="text-white text-3xl font-black uppercase tracking-tight">
                Program Overview
              </h2>
              <p className="text-zinc-300 text-[1.25rem] leading-10 font-normal">
                {data.longDesc}
              </p>
            </div>

            {/* Quick stats table grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Intensity Level</p>
                <p className="text-white text-xl font-bold uppercase tracking-tight">{data.intensity}</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Duration</p>
                <p className="text-white text-xl font-bold uppercase tracking-tight">{data.duration}</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Class Capacity</p>
                <p className="text-white text-xl font-bold uppercase tracking-tight">{data.classSize}</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Target Goals</p>
                <p className="text-white text-xl font-bold uppercase tracking-tight">{data.target}</p>
              </div>
            </div>
          </div>

          {/* Right interactive claim card (imported client component) */}
          <div className="lg:col-span-5 w-full">
            <TrialForm activityTitle={data.title} />
          </div>

        </div>

      </div>
    </div>
  );
}

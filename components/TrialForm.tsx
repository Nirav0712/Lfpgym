"use client";

import { useState } from "react";

interface TrialFormProps {
  activityTitle: string;
}

export default function TrialForm({ activityTitle }: TrialFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && slot) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-zinc-950/70 border border-yellow-500/20 p-8 rounded-3xl backdrop-blur-md text-center py-16 space-y-6">
        <div className="w-20 h-20 bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-full flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <div>
          <h3 className="text-white text-2xl font-black uppercase tracking-tight">Pass Claimed!</h3>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed px-2">
            Thank you, <span className="text-white font-bold">{name}</span>. Your free access pass for <span className="text-yellow-400 font-bold">{activityTitle}</span> has been registered. Our team will contact you shortly to confirm your slot.
          </p>
        </div>
        <button 
          onClick={() => {
            setName("");
            setPhone("");
            setSlot("");
            setSubmitted(false);
          }}
          className="border border-zinc-800 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950/70 border border-zinc-900 p-8 rounded-3xl backdrop-blur-md hover:border-yellow-500/20 transition-all duration-500">
      
      <div className="mb-8">
        <span className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Free Access Pass
        </span>
        <h3 className="text-white text-3xl font-black uppercase tracking-tight mt-4">
          Join a Free Class
        </h3>
        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
          Fill in your details below to schedule your first trial session for {activityTitle} completely free.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-yellow-500 text-white rounded-xl px-5 py-4 outline-none transition duration-300 text-base"
            required
          />
        </div>
        <div>
          <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Phone Number</label>
          <input 
            type="tel" 
            placeholder="Enter your phone number" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-yellow-500 text-white rounded-xl px-5 py-4 outline-none transition duration-300 text-base"
            required
          />
        </div>
        <div>
          <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Preferred Slot</label>
          <div className="relative">
            <select 
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-yellow-500 text-zinc-400 rounded-xl px-5 py-4 outline-none transition duration-300 text-base appearance-none cursor-pointer"
              required
            >
              <option value="" disabled>Select a time slot</option>
              <option value="morning">Morning (06:00 AM - 11:00 AM)</option>
              <option value="afternoon">Afternoon (12:00 PM - 03:00 PM)</option>
              <option value="evening">Evening (04:00 PM - 09:00 PM)</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold uppercase tracking-widest py-5 rounded-xl transition duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] cursor-pointer"
        >
          Claim Free Trial Pass
        </button>
      </form>
      
    </div>
  );
}

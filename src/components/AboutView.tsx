import React from "react";
import { SketchCard, WhiskDoodle, CupcakeDoodle, OvenDoodle, DecorDoodles } from "./DoodleAssets";
import { Cake, Sparkles, Smile, Trophy, Heart } from "lucide-react";
import { motion } from "motion/react";

export const AboutView: React.FC = () => {
  const funFacts = [
    { icon: Smile, text: "Over 10,000 sweet smiles baked!", color: "bg-pink-100 text-pink-600" },
    { icon: Sparkles, text: "Over 5 million sprinkles scattered!", color: "bg-amber-100 text-amber-700" },
    { icon: Trophy, text: "Voted Colombo's Friendliest Family Bakery!", color: "bg-emerald-100 text-emerald-700" },
    { icon: Heart, text: "100% baked from organic, kid-safe, premium ingredients!", color: "bg-sky-100 text-sky-700" },
  ];

  return (
    <div className="relative pb-20 pt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
      <DecorDoodles />

      {/* Header and Title */}
      <div className="flex flex-col items-center text-center gap-2 mb-12 z-10 relative">
        <span className="text-4xl">🎨👩‍🍳✨</span>
        <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-800 tracking-tight">
          Our Sweet Story
        </h1>
        <p className="text-slate-500 font-medium text-sm sm:text-base max-w-sm">
          Once upon a time, a pinch of sugar met a bundle of doodles...
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start z-10 relative">
        {/* Story Section */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <SketchCard className="bg-white/80 leading-relaxed" hoverEffect={false}>
            <h2 className="font-display font-black text-2xl text-slate-800 mb-4 flex items-center gap-2">
              📖 The Bakery Notebook
            </h2>
            <div className="text-slate-600 space-y-4 font-medium text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-pink-500 font-bold font-display text-lg">Once upon a time</strong>, in a sunny, candy-colored workshop in Colombo, a master baker and a children's book illustrator decided to join forces. They had one simple dream: to make cakes that look like they jumped straight out of a child's sketchbook!
              </p>
              <p>
                Instead of serious, cold, razor-sharp corporate designs, they wanted to celebrate the wobbly, warm, joyful energy of childhood. They began whisking organic vanilla batter, cooking fresh strawberry jams, and drawing cute marshmallow dinosaurs, starry planets, and sleeping teddy bears.
              </p>
              <p>
                Every single cake at <span className="font-display font-bold text-slate-800">Doodle Cakes</span> is baked fresh to order. We sculpt each frosting swirl by hand and sprinkle it with custom glitter. Our mission is to make your special birthday or holiday look as cozy and colorful as a sketchbook page!
              </p>
            </div>
          </SketchCard>

          {/* Sketchy baking illustrations carousel panel */}
          <div className="grid grid-cols-3 gap-4">
            <SketchCard className="flex flex-col items-center p-4 bg-amber-50/40" hoverEffect={true}>
              <WhiskDoodle />
              <span className="font-display font-bold text-xs text-slate-500 mt-2 text-center">Hand Whisked</span>
            </SketchCard>
            <SketchCard className="flex flex-col items-center p-4 bg-pink-50/40" hoverEffect={true}>
              <CupcakeDoodle />
              <span className="font-display font-bold text-xs text-slate-500 mt-2 text-center">Baked Love</span>
            </SketchCard>
            <SketchCard className="flex flex-col items-center p-4 bg-emerald-50/40" hoverEffect={true}>
              <OvenDoodle />
              <span className="font-display font-bold text-xs text-slate-500 mt-2 text-center">Freshly Baked</span>
            </SketchCard>
          </div>
        </div>

        {/* Meet the Baker & Facts Section */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Meet Baker Card */}
          <SketchCard className="bg-pink-100/30 flex flex-col items-center text-center p-6" hoverEffect={true}>
            <div className="relative w-24 h-24 rounded-full border-3 border-slate-800 overflow-hidden bg-pink-200 flex items-center justify-center shadow-md">
              {/* Cute hand-drawn chef avatar */}
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                {/* Chef Hat */}
                <path d="M 30,35 C 30,15 70,15 70,35 Z" fill="#FFF" stroke="#334155" strokeWidth="2.5" />
                <path d="M 35,35 Q 50,25 65,35" stroke="#334155" strokeWidth="2" fill="none" />
                <rect x="36" y="35" width="28" height="10" rx="1" fill="#FFF" stroke="#334155" strokeWidth="2.5" />
                
                {/* Face */}
                <circle cx="50" cy="58" r="16" fill="#FED7AA" stroke="#334155" strokeWidth="2.5" />
                {/* Chef Eyes */}
                <path d="M 42,54 Q 45,51 48,54" stroke="#334155" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 52,54 Q 55,51 58,54" stroke="#334155" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Smile */}
                <path d="M 44,64 Q 50,70 56,64" stroke="#334155" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Rosy cheeks */}
                <circle cx="38" cy="60" r="2.5" fill="#F43F5E" />
                <circle cx="62" cy="60" r="2.5" fill="#F43F5E" />

                {/* Apron strap */}
                <path d="M 34,74 C 40,82 60,82 66,74" fill="#3B82F6" stroke="#334155" strokeWidth="2.5" />
              </svg>
            </div>
            
            <h3 className="font-display font-black text-xl text-slate-800 mt-4">
              Chef Lily & Sparky 🦄
            </h3>
            <span className="text-xs font-display font-bold text-pink-600 bg-pink-100 px-2.5 py-0.5 rounded-full border border-pink-200 mt-1">
              Co-founders & Main Whiskers
            </span>
            <p className="text-xs text-slate-500 mt-3 italic leading-relaxed">
              \"We believe life is too short for straight lines. Let's make every single cake look like a cozy, delicious scribble!\"
            </p>
          </SketchCard>

          {/* Fun facts list */}
          <SketchCard className="bg-white/80" hoverEffect={false}>
            <h3 className="font-display font-black text-lg text-slate-800 mb-4 flex items-center gap-1.5">
              <span>🍭 Kid-Friendly Fun Facts</span>
            </h3>
            <div className="flex flex-col gap-3.5">
              {funFacts.map((fact, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`p-2 rounded-xl border border-slate-700 flex-shrink-0 ${fact.color}`}>
                    <fact.icon className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <p className="text-xs sm:text-sm font-display font-semibold text-slate-600 mt-1">
                    {fact.text}
                  </p>
                </div>
              ))}
            </div>
          </SketchCard>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { ViewState } from "../types";
import { cakesData } from "../data/cakesData";
import { CakeCard } from "./CakeCard";
import { HeroCakeDoodle, DoodleButton, DecorDoodles, DoodleDivider } from "./DoodleAssets";
import { ArrowRight, Sparkles, Star, Flame } from "lucide-react";
import { motion } from "motion/react";

interface HomeViewProps {
  setView: (view: ViewState) => void;
  onViewDetails: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setView, onViewDetails }) => {
  // 1. Most Picked
  const mostPickedCakes = cakesData.filter((cake) => cake.mostPicked);

  // 2. Latest Cakes (sorted by dateAdded descending)
  const latestCakes = [...cakesData]
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .slice(0, 3);

  // 3. Best Sellers
  const bestSellers = cakesData.filter((cake) => cake.bestSelling).slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      {/* Decorative background doodles */}
      <DecorDoodles />

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-pink-100 border-2 border-slate-800 text-pink-700 font-display font-extrabold text-sm rounded-full shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]"
            >
              <Sparkles className="w-4 h-4 fill-pink-300 stroke-[2.5]" />
              Magical Doodle Bakery
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-slate-800 leading-[1.1] tracking-tight max-w-xl"
            >
              Cakes as sweet <br />
              as you!{" "}
              <span className="relative inline-block text-pink-500 whitespace-nowrap">
                🎂
                <span className="absolute left-0 bottom-1 w-full h-2.5 bg-yellow-200 -z-10 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 font-medium max-w-md leading-relaxed"
            >
              Every bite is a sketchbook story! Choose your favorite whimsical flavor, choose your size, and order instantly on WhatsApp. Sprinkled with absolute joy!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2"
            >
              <DoodleButton
                onClick={() => setView({ type: "store" })}
                color="bg-pink-300 hover:bg-pink-400 text-slate-800 text-lg py-3.5 px-8 flex items-center gap-2"
              >
                <span>Explore Yummy Store</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </DoodleButton>
            </motion.div>
          </div>

          {/* Large Doodle Hero Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroCakeDoodle />
          </div>
        </div>
      </section>

      {/* Doodle Divider wave */}
      <DoodleDivider color="fill-amber-100/60" />

      {/* Featured Section (Most Picked) */}
      <section className="bg-amber-100/60 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-2 mb-12">
            <div className="p-2.5 bg-amber-200 border-2 border-slate-800 rounded-full text-amber-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
              <Star className="w-6 h-6 fill-amber-500 stroke-[2.5]" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-800 mt-2">
              Most Picked Delights!
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-sm font-medium">
              These magical favorites are loved by kids and grownups alike!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mostPickedCakes.map((cake) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <CakeCard cake={cake} onViewDetails={onViewDetails} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DoodleDivider color="fill-amber-100/60" flip={true} />

      {/* Best Sellers Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <div className="p-2.5 bg-pink-100 border-2 border-slate-800 rounded-full text-pink-600 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
            <Flame className="w-6 h-6 fill-pink-400 stroke-[2.5]" />
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-800 mt-2">
            Best Sellers! 🔥
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-sm font-medium">
            Baked round-the-clock, our absolute record-breaking treats!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((cake) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <CakeCard cake={cake} onViewDetails={onViewDetails} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Squiggly divider between sellers and latest */}
      <div className="py-6 max-w-4xl mx-auto">
        <svg viewBox="0 0 400 10" className="w-full h-3 fill-none stroke-slate-300 stroke-[2.5] stroke-dasharray-[5,5]">
          <path d="M 0,5 Q 50,0 100,5 T 200,5 T 300,5 T 400,5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Latest Cakes Section */}
      <section className="py-16 bg-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-2 mb-12">
            <span className="text-3xl">✨🎂🆕</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-800 mt-2">
              Brand New In Town!
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-sm font-medium">
              Fresh additions from our baking sketchbook. Be the first to try!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestCakes.map((cake) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <CakeCard cake={cake} onViewDetails={onViewDetails} />
              </motion.div>
            ))}
          </div>

          {/* CTA to Store */}
          <div className="flex justify-center mt-12">
            <DoodleButton
              onClick={() => setView({ type: "store" })}
              color="bg-yellow-300 hover:bg-yellow-400"
              className="text-base py-3 px-8 flex items-center gap-2"
            >
              <span>View All Delicious Creations</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </DoodleButton>
          </div>
        </div>
      </section>
    </div>
  );
};

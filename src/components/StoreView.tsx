import React, { useState, useMemo } from "react";
import { ViewState } from "../types";
import { cakesData } from "../data/cakesData";
import { CakeCard } from "./CakeCard";
import { DecorDoodles } from "./DoodleAssets";
import { Filter, SlidersHorizontal, Search, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface StoreViewProps {
  onViewDetails: (id: string) => void;
}

type SortType = "newest" | "price-asc" | "price-desc";

export const StoreView: React.FC<StoreViewProps> = ({ onViewDetails }) => {
  const [selectedOccasion, setSelectedOccasion] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortType>("newest");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const occasionFilters = ["All", "Birthday", "Wedding", "Kids Party", "Anniversary", "Just Because"];

  const filteredAndSortedCakes = useMemo(() => {
    let list = [...cakesData];

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      list = list.filter(
        (cake) =>
          cake.name.toLowerCase().includes(query) ||
          cake.description.toLowerCase().includes(query)
      );
    }

    // Filter by occasion
    if (selectedOccasion !== "All") {
      list = list.filter((cake) => cake.occasion.includes(selectedOccasion));
    }

    // Sort
    if (sortBy === "newest") {
      list.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
    } else if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedOccasion, sortBy, searchQuery]);

  return (
    <div className="relative pb-20 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
      <DecorDoodles />

      {/* Header and Title */}
      <div className="flex flex-col items-center text-center gap-2 mb-10 z-10 relative">
        <motion.div
          animate={{ rotate: [0, -3, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-4xl"
        >
          🍰🍭🎨
        </motion.div>
        <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-800 tracking-tight">
          The Cake Sketchbook
        </h1>
        <p className="text-slate-500 font-medium text-sm sm:text-base max-w-md">
          Explore all our magical, hand-drawn recipe creations! Pick your occasion, filter, sort, and bring home the sweet fun!
        </p>
      </div>

      {/* Filter, Sort and Search Controls Panel */}
      <div className="flex flex-col gap-6 bg-amber-50/50 border-[3px] border-slate-800 p-5 rounded-3xl shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] mb-10 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search bar */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 stroke-[2.5]" />
            <input
              type="text"
              placeholder="Search chocolate, rainbow, dino..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-slate-800 rounded-full pl-10 pr-4 py-2.5 font-display text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm shadow-sm"
            />
          </div>

          {/* Sort selection dropdown */}
          <div className="md:col-span-6 flex items-center justify-end gap-2">
            <SlidersHorizontal className="w-4 h-4 text-slate-600 stroke-[2.5]" />
            <span className="text-xs font-display font-bold text-slate-500">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              className="bg-white border-2 border-slate-800 rounded-full px-4 py-2.5 font-display font-semibold text-slate-700 text-xs focus:outline-none cursor-pointer shadow-sm"
            >
              <option value="newest">🆕 Newest Added</option>
              <option value="price-asc">💵 Price: Low to High</option>
              <option value="price-desc">💰 Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Occasion tabs styled as playful sketchy pills */}
        <div className="flex flex-wrap gap-2 items-center border-t border-dashed border-slate-300 pt-4">
          <div className="flex items-center gap-1.5 text-slate-500 mr-2">
            <Filter className="w-4 h-4 stroke-[2.5]" />
            <span className="text-xs font-display font-bold">Occasion:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {occasionFilters.map((occasion) => {
              const isSelected = selectedOccasion === occasion;
              return (
                <button
                  key={occasion}
                  onClick={() => setSelectedOccasion(occasion)}
                  className={`px-3.5 py-1.5 text-xs font-display font-bold border-2 rounded-full cursor-pointer transition-all
                    ${
                      isSelected
                        ? "bg-pink-300 border-slate-800 text-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]"
                        : "bg-white border-slate-300 text-slate-600 hover:border-slate-800"
                    }`}
                >
                  {occasion}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredAndSortedCakes.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10 relative"
        >
          {filteredAndSortedCakes.map((cake) => (
            <motion.div
              layout
              key={cake.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CakeCard cake={cake} onViewDetails={onViewDetails} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 bg-white border-[3px] border-slate-800 rounded-3xl shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] max-w-md mx-auto text-center gap-4 z-10 relative">
          <span className="text-4xl">😢🍰</span>
          <h3 className="font-display font-black text-xl text-slate-800">No Cakes Match!</h3>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Oops! Our baking sketchbook doesn't have those recipes yet. Try checking another category, clearing your search query, or contact us to build a fully custom cake!
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedOccasion("All");
            }}
            className="px-4 py-2 bg-yellow-300 hover:bg-yellow-400 border-2 border-slate-800 font-display font-bold text-xs rounded-full shadow-sm cursor-pointer"
          >
            Show All Cakes
          </button>
        </div>
      )}
    </div>
  );
};

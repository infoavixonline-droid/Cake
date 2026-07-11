import React, { useState } from "react";
import { Cake } from "../types";
import { useCart } from "../context/CartContext";
import { SketchCard, DoodleButton } from "./DoodleAssets";
import { CakeVector } from "./CakeVector";
import { formatCurrency } from "../lib/config";
import { getSingleCakeWhatsAppLink } from "../lib/whatsapp";
import { ShoppingCart, MessageSquare, Info } from "lucide-react";
import { motion } from "motion/react";

interface CakeCardProps {
  cake: Cake;
  onViewDetails: (id: string) => void;
}

export const CakeCard: React.FC<CakeCardProps> = ({ cake, onViewDetails }) => {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>(cake.weightOptions[0]);
  const [addedMessage, setAddedMessage] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: cake.id,
      name: cake.name,
      price: cake.price,
      weightOption: selectedWeight
    }, 1);

    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  const handleOrderNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = getSingleCakeWhatsAppLink(cake.name, selectedWeight, 1, cake.price);
    window.open(link, "_blank");
  };

  const getAccentBg = (color: string) => {
    switch (color) {
      case "pink": return "bg-pink-50 border-pink-200 text-pink-700";
      case "emerald": return "bg-emerald-50 border-emerald-200 text-emerald-700";
      case "purple": return "bg-purple-50 border-purple-200 text-purple-700";
      case "sky": return "bg-sky-50 border-sky-200 text-sky-700";
      case "amber": return "bg-amber-50 border-amber-200 text-amber-700";
      case "rose": return "bg-rose-50 border-rose-200 text-rose-700";
      case "orange": return "bg-orange-50 border-orange-200 text-orange-700";
      case "blue": return "bg-blue-50 border-blue-200 text-blue-700";
      default: return "bg-amber-50 border-amber-200 text-amber-700";
    }
  };

  return (
    <SketchCard 
      className="flex flex-col h-full bg-amber-50/40 relative group cursor-pointer"
      hoverEffect={true}
    >
      <div onClick={() => onViewDetails(cake.id)} className="flex-grow flex flex-col">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1">
          {cake.mostPicked && (
            <span className="px-2.5 py-0.5 text-xs font-display font-extrabold bg-amber-200 text-amber-800 border-2 border-slate-800 rounded-full shadow-[1px_1px_0px_0px_rgba(30,41,59,1)]">
              ⭐ Most Picked
            </span>
          )}
          {cake.bestSelling && (
            <span className="px-2.5 py-0.5 text-xs font-display font-extrabold bg-pink-200 text-pink-800 border-2 border-slate-800 rounded-full shadow-[1px_1px_0px_0px_rgba(30,41,59,1)]">
              🔥 Best Seller
            </span>
          )}
        </div>

        {/* Info button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(cake.id);
          }}
          className="absolute top-4 right-4 z-10 p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border-2 border-slate-800 rounded-full transition-colors cursor-pointer"
          title="View Details"
        >
          <Info className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Vector Cake Graphic in Doodle Frame */}
        <div className="w-full bg-white border-[3px] border-slate-800 rounded-[20px] p-4 mt-4 mb-4 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.05)] relative overflow-hidden group-hover:scale-[1.01] transition-transform">
          {/* Subtle background rays */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-50/50 pointer-events-none" />
          <CakeVector id={cake.id} className="w-36 h-36 md:w-44 md:h-44 mx-auto" />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-2">
          {/* Occasion tag list */}
          <div className="flex flex-wrap gap-1">
            {cake.occasion.map((occ) => (
              <span 
                key={occ} 
                className={`text-[11px] font-display font-bold px-2 py-0.5 rounded-md border ${getAccentBg(cake.accentColor)}`}
              >
                {occ}
              </span>
            ))}
          </div>

          <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 leading-snug group-hover:text-pink-500 transition-colors">
            {cake.name}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {cake.description}
          </p>
        </div>
      </div>

      {/* Interactive Controls (always visible, handles action selections) */}
      <div className="mt-4 pt-3 border-t-2 border-dashed border-slate-300 flex flex-col gap-3">
        {/* Weight Selector */}
        <div className="flex items-center justify-between gap-1">
          <span className="text-xs font-display font-bold text-slate-500">Pick Size:</span>
          <div className="flex gap-1">
            {cake.weightOptions.map((weight) => (
              <button
                key={weight}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedWeight(weight);
                }}
                className={`px-2 py-0.5 text-xs font-display font-semibold border-2 rounded-md cursor-pointer transition-all
                  ${
                    selectedWeight === weight
                      ? "bg-slate-800 border-slate-800 text-white font-bold"
                      : "bg-white border-slate-300 text-slate-600 hover:border-slate-800"
                  }`}
              >
                {weight}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="flex items-center justify-between gap-2 mt-1">
          <div className="flex flex-col">
            <span className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-wider">Price</span>
            <span className="font-display font-black text-lg text-slate-800">{formatCurrency(cake.price)}</span>
          </div>

          {/* Buttons Layout */}
          <div className="flex items-center gap-1.5">
            <DoodleButton
              onClick={handleAddToCart}
              color="bg-amber-200 hover:bg-amber-300"
              className="p-2.5 text-xs flex items-center justify-center"
              title="Add to Cart"
            >
              <ShoppingCart className="w-4 h-4" />
            </DoodleButton>

            <DoodleButton
              onClick={handleOrderNow}
              color="bg-emerald-300 hover:bg-emerald-400"
              className="px-3 py-2 text-xs flex items-center gap-1"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-800/20" />
              <span className="hidden sm:inline font-bold">Order</span>
            </DoodleButton>
          </div>
        </div>

        {/* Toast-like add confirmations */}
        {addedMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-800 text-amber-200 font-display font-bold text-xs px-3 py-1 rounded-full border border-slate-700 shadow-md z-10 whitespace-nowrap"
          >
            🍰 Added to Cart!
          </motion.div>
        )}
      </div>
    </SketchCard>
  );
};

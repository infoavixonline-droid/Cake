import React, { useState } from "react";
import { ViewState, Cake } from "../types";
import { useCart } from "../context/CartContext";
import { cakesData } from "../data/cakesData";
import { SketchCard, DoodleButton, DecorDoodles } from "./DoodleAssets";
import { CakeVector } from "./CakeVector";
import { formatCurrency } from "../lib/config";
import { getSingleCakeWhatsAppLink } from "../lib/whatsapp";
import { ArrowLeft, ShoppingCart, MessageSquare, ShieldCheck, HelpCircle, Star, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface DetailsViewProps {
  cakeId: string;
  setView: (view: ViewState) => void;
}

export const DetailsView: React.FC<DetailsViewProps> = ({ cakeId, setView }) => {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [addedMessage, setAddedMessage] = useState(false);

  // Find the selected cake
  const cake = cakesData.find((c) => c.id === cakeId);

  // Fallback if cake not found
  if (!cake) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center select-none">
        <span className="text-4xl">😿🎂</span>
        <h2 className="font-display font-black text-2xl text-slate-800 mt-4">Cake Not Found!</h2>
        <p className="text-sm text-slate-500 max-w-xs mt-2">
          Oops, we couldn't find this recipe in our baking sketchbook!
        </p>
        <DoodleButton onClick={() => setView({ type: "store" })} color="bg-amber-200 mt-6 text-xs">
          Back to Store
        </DoodleButton>
      </div>
    );
  }

  // Set initial selected weight once cake is found
  if (selectedWeight === "") {
    setSelectedWeight(cake.weightOptions[0]);
  }

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(
      {
        id: cake.id,
        name: cake.name,
        price: cake.price,
        weightOption: selectedWeight,
      },
      quantity
    );

    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  const handleOrderNow = () => {
    const link = getSingleCakeWhatsAppLink(cake.name, selectedWeight, quantity, cake.price);
    window.open(link, "_blank");
  };

  return (
    <div className="relative pb-20 pt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
      <DecorDoodles />

      {/* Back button */}
      <button
        onClick={() => setView({ type: "store" })}
        className="flex items-center gap-1 text-sm font-display font-bold text-pink-500 hover:text-pink-600 mb-6 cursor-pointer z-10 relative"
      >
        <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        <span>Back to Bakery Store</span>
      </button>

      {/* Detail grid container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start z-10 relative">
        {/* Left Side: Massive Vector Illustration Card */}
        <div className="md:col-span-5 flex justify-center">
          <SketchCard className="bg-white w-full p-6 relative group overflow-hidden" hoverEffect={false}>
            {/* Rays decoration in background */}
            <div className="absolute inset-0 bg-radial-gradient from-pink-50/20 to-transparent pointer-events-none" />
            
            {/* Star badge */}
            {cake.mostPicked && (
              <span className="absolute top-4 left-4 z-10 px-2.5 py-0.5 text-[10px] font-display font-extrabold bg-amber-200 text-amber-800 border-2 border-slate-800 rounded-full shadow-[1px_1px_0px_0px_rgba(30,41,59,1)]">
                ⭐ Most Picked
              </span>
            )}

            <CakeVector id={cake.id} className="w-48 h-48 sm:w-60 sm:h-60 mx-auto" />
          </SketchCard>
        </div>

        {/* Right Side: Information Panel */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <SketchCard className="bg-white/80 flex flex-col gap-5 p-6" hoverEffect={false}>
            {/* Category Badges */}
            <div className="flex flex-wrap gap-1.5">
              {cake.occasion.map((occ) => (
                <span
                  key={occ}
                  className="px-2.5 py-0.5 text-xs font-display font-bold bg-pink-50 border border-pink-200 text-pink-600 rounded-md"
                >
                  🎉 {occ}
                </span>
              ))}
            </div>

            {/* Name and description */}
            <div className="flex flex-col gap-2">
              <h1 className="font-display font-black text-3xl text-slate-800 leading-tight">
                {cake.name}
              </h1>
              <span className="font-display font-black text-2xl text-pink-500 mt-1">
                {formatCurrency(cake.price)} <span className="text-xs font-bold text-slate-400">per piece</span>
              </span>
              <p className="text-sm text-slate-600 font-medium leading-relaxed mt-1">
                {cake.description}
              </p>
            </div>

            {/* Size / Weight Picker */}
            <div className="flex flex-col gap-2 border-t border-dashed border-slate-300 pt-4">
              <span className="text-xs font-display font-extrabold text-slate-500">Pick Cake Weight / Size:</span>
              <div className="flex gap-2">
                {cake.weightOptions.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-4 py-2 font-display font-bold text-sm border-2 rounded-xl cursor-pointer transition-all
                      ${
                        selectedWeight === weight
                          ? "bg-slate-800 border-slate-800 text-white shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]"
                          : "bg-white border-slate-300 text-slate-600 hover:border-slate-800"
                      }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity select counter */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-display font-extrabold text-slate-500">Select Quantity:</span>
              <div className="flex items-center gap-2 bg-white border-2 border-slate-800 rounded-full p-1.5 shadow-sm">
                <button
                  onClick={handleDecrement}
                  className="p-1 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                >
                  <span className="font-black text-lg px-1">-</span>
                </button>
                <span className="font-display font-black text-base text-slate-800 px-3 w-8 text-center select-none">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="p-1 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                >
                  <span className="font-black text-lg px-1">+</span>
                </button>
              </div>
            </div>

            {/* Price Calculations */}
            <div className="flex items-center justify-between border-t border-dashed border-slate-300 pt-4 px-1">
              <span className="text-sm font-display font-bold text-slate-500">Calculated Subtotal:</span>
              <span className="text-xl font-display font-black text-slate-800">
                {formatCurrency(cake.price * quantity)}
              </span>
            </div>

            {/* Action buttons layout */}
            <div className="grid grid-cols-2 gap-3.5 mt-2">
              <DoodleButton
                onClick={handleAddToCart}
                color="bg-amber-200 hover:bg-amber-300"
                className="py-3 text-sm flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4 stroke-[2.5]" />
                <span>Add to Cart</span>
              </DoodleButton>

              <DoodleButton
                onClick={handleOrderNow}
                color="bg-emerald-300 hover:bg-emerald-400"
                className="py-3 text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-emerald-800/10 stroke-[2.5]" />
                <span>Order via WhatsApp</span>
              </DoodleButton>
            </div>

            {/* Trust disclaimer */}
            <div className="flex items-center gap-2 justify-center text-slate-400 text-[10px] border-t border-slate-100 pt-3">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Deep link securely connects to official WhatsApp client</span>
            </div>
          </SketchCard>

          {/* Toast confirmations */}
          {addedMessage && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center bg-slate-800 text-amber-200 font-display font-bold text-sm py-2 px-4 rounded-xl border border-slate-700 shadow-md max-w-max mx-auto"
            >
              🍰 Successfully added {quantity} item(s) to your Plate!
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

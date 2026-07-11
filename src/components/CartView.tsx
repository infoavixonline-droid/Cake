import React from "react";
import { ViewState } from "../types";
import { useCart } from "../context/CartContext";
import { CartItemComponent } from "./CartItemComponent";
import { SketchCard, DoodleButton, DecorDoodles } from "./DoodleAssets";
import { CakeVector } from "./CakeVector";
import { formatCurrency } from "../lib/config";
import { getCartWhatsAppLink } from "../lib/whatsapp";
import { ShoppingBag, ArrowLeft, MessageSquare, Trash2, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface CartViewProps {
  setView: (view: ViewState) => void;
}

export const CartView: React.FC<CartViewProps> = ({ setView }) => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const subtotal = getCartTotal();

  const handleBuyAll = () => {
    if (cartItems.length === 0) return;
    const link = getCartWhatsAppLink(cartItems, subtotal);
    window.open(link, "_blank");
  };

  return (
    <div className="relative pb-20 pt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
      <DecorDoodles />

      {/* Header and Title */}
      <div className="flex flex-col items-center text-center gap-2 mb-10 z-10 relative">
        <span className="text-4xl">🛒🍰✨</span>
        <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-800 tracking-tight">
          Your Sweet Plate
        </h1>
        <p className="text-slate-500 font-medium text-sm sm:text-base max-w-sm">
          Check out your selected yummy cakes and place your order instantly!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start z-10 relative">
        {cartItems.length > 0 ? (
          <>
            {/* Cart Items List */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2 mb-1">
                <button
                  onClick={() => setView({ type: "store" })}
                  className="flex items-center gap-1 text-xs font-display font-bold text-pink-500 hover:text-pink-600 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Add More Cakes</span>
                </button>

                <button
                  onClick={clearCart}
                  className="flex items-center gap-1 text-xs font-display font-bold text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              </div>

              {/* Animating the cart list */}
              <div className="flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {cartItems.map((item) => (
                    <CartItemComponent key={`${item.id}-${item.weightOption}`} item={item} />
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Checkout / Order Summary Block */}
            <div className="lg:col-span-4">
              <SketchCard className="bg-amber-100/40 sticky top-28 flex flex-col gap-5" hoverEffect={false}>
                <h3 className="font-display font-black text-xl text-slate-800">Order Bill 🧾</h3>
                
                {/* Cost lines */}
                <div className="flex flex-col gap-2.5 font-display font-bold text-sm text-slate-600 border-b-2 border-dashed border-slate-300 pb-4">
                  <div className="flex justify-between">
                    <span>Cake subtotal:</span>
                    <span className="text-slate-800 font-extrabold">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery/Order fee:</span>
                    <span className="text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded text-xs">FREE</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="flex justify-between items-center py-1">
                  <span className="font-display font-black text-base text-slate-800">Grand Total:</span>
                  <span className="font-display font-black text-2xl text-pink-500">{formatCurrency(subtotal)}</span>
                </div>

                {/* Checkout button (WhatsApp deep link) */}
                <DoodleButton
                  onClick={handleBuyAll}
                  color="bg-pink-300 hover:bg-pink-400 text-slate-800 py-3.5 flex items-center justify-center gap-2 text-base shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-800/20" />
                  <span>Buy All via WhatsApp</span>
                </DoodleButton>

                <div className="flex items-center gap-2 justify-center text-slate-400 text-[10px] mt-1 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Official wa.me Deep Connection</span>
                </div>
              </SketchCard>
            </div>
          </>
        ) : (
          /* Empty Cart State */
          <div className="lg:col-span-12">
            <SketchCard className="bg-white flex flex-col items-center justify-center text-center p-12 max-w-md mx-auto gap-5" hoverEffect={true}>
              <div className="w-32 h-32 bg-pink-50 border-3 border-slate-800 rounded-full flex items-center justify-center p-4 shadow-inner">
                {/* Cute empty plate illustration using CakeVector but transparent, or empty plate path */}
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-slate-800 stroke-[3]" fill="none">
                  {/* Plate ellipse */}
                  <ellipse cx="50" cy="65" rx="35" ry="8" fill="#F1F5F9" />
                  <ellipse cx="50" cy="65" rx="25" ry="5" />
                  {/* Crumbs */}
                  <circle cx="45" cy="64" r="1.5" fill="#334155" />
                  <circle cx="56" cy="66" r="2" fill="#334155" />
                  <circle cx="62" cy="63" r="1" fill="#334155" />
                  {/* Speech bubble */}
                  <path d="M 50,45 C 35,45 35,25 50,25 C 65,25 65,45 50,45 Z" fill="#FFF" />
                  <path d="M 45,43 L 40,48 L 47,45" fill="#FFF" />
                  {/* Sad smile inside bubble */}
                  <path d="M 46,35 Q 50,39 54,35" strokeWidth="2.5" />
                </svg>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-display font-black text-2xl text-slate-800">Your Plate is Empty! 🍽️</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                  Your cart is as empty as a plate after a birthday party! Let's find something delicious to fill it back up! 🍰
                </p>
              </div>

              <DoodleButton
                onClick={() => setView({ type: "store" })}
                color="bg-yellow-300 hover:bg-yellow-400"
                className="text-xs px-6 py-2.5 flex items-center gap-1.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Go To Cake Store</span>
              </DoodleButton>
            </SketchCard>
          </div>
        )}
      </div>
    </div>
  );
};

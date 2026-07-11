import React from "react";
import { useCart } from "../context/CartContext";
import { ViewState } from "../types";
import { motion } from "motion/react";
import { ShoppingBag, Cake, Award, HelpCircle, Mail } from "lucide-react";

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const navItems = [
    { label: "Home", view: { type: "home" as const }, icon: Cake, color: "hover:bg-pink-100" },
    { label: "Store", view: { type: "store" as const }, icon: Award, color: "hover:bg-amber-100" },
    { label: "About", view: { type: "about" as const }, icon: HelpCircle, color: "hover:bg-teal-100" },
    { label: "Contact", view: { type: "contact" as const }, icon: Mail, color: "hover:bg-sky-100" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-amber-50/90 backdrop-blur-md select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setView({ type: "home" })}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative p-2 bg-pink-100 border-2 border-slate-800 rounded-full">
            <Cake className="w-6 h-6 text-pink-500 stroke-[2.5]" />
          </div>
          <span className="font-display font-bold text-xl sm:text-2xl text-slate-800 tracking-tight">
            Doodle Cakes
          </span>
        </motion.div>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = currentView.type === item.view.type;
            return (
              <button
                key={item.label}
                onClick={() => setView(item.view)}
                className={`flex items-center gap-1.5 px-4 py-2 font-display font-medium rounded-full border-2 text-sm transition-all cursor-pointer
                  ${
                    isActive
                      ? "bg-amber-200 border-slate-800 text-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]"
                      : "border-transparent text-slate-600 hover:text-slate-800 " + item.color
                  }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Cart Icon Link */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button - simple list of links styled as a clean menu */}
          <div className="md:hidden flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentView.type === item.view.type;
              return (
                <button
                  key={item.label}
                  onClick={() => setView(item.view)}
                  className={`p-1.5 text-xs rounded-lg font-display font-semibold border
                    ${
                      isActive
                        ? "bg-amber-100 border-slate-800 text-slate-800"
                        : "border-transparent text-slate-600"
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <motion.button
            onClick={() => setView({ type: "cart" })}
            className={`relative p-2.5 bg-amber-200 hover:bg-amber-300 border-2 border-slate-800 text-slate-800 transition-colors cursor-pointer
              rounded-[16px_8px_14px_6px]/[8px_14px_6px_16px] shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] flex items-center justify-center`}
            whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-2 -right-2 bg-pink-500 border-2 border-slate-800 text-white font-display font-extrabold text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-sm"
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>

      {/* Playful sketchy squiggly bottom border using custom SVG */}
      <div className="w-full h-1 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1200 6" preserveAspectRatio="none" className="w-full h-full fill-slate-800 opacity-80">
          <path d="M0,3 Q150,0 300,3 T600,3 T900,3 T1200,3 L1200,6 L0,6 Z" />
        </svg>
      </div>
    </header>
  );
};

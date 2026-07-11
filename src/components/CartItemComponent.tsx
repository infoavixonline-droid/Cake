import React from "react";
import { CartItem } from "../types";
import { useCart } from "../context/CartContext";
import { CakeVector } from "./CakeVector";
import { formatCurrency } from "../lib/config";
import { Trash2, Plus, Minus } from "lucide-react";
import { motion } from "motion/react";

interface CartItemProps {
  item: CartItem;
}

export const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.weightOption, item.quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.id, item.weightOption, item.quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(item.id, item.weightOption);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-amber-50/20 border-2 border-slate-800 rounded-2xl relative
        shadow-[3px_3px_0px_0px_rgba(30,41,59,1)]"
    >
      {/* Product Information */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        {/* Cake Thumbnail Vector */}
        <div className="w-16 h-16 bg-white border-2 border-slate-800 rounded-xl flex items-center justify-center p-1 shadow-sm flex-shrink-0">
          <CakeVector id={item.id} className="w-12 h-12" />
        </div>

        <div className="flex flex-col">
          <h4 className="font-display font-extrabold text-base text-slate-800 line-clamp-1">
            {item.name}
          </h4>
          <span className="inline-block text-xs font-display font-bold text-pink-600 bg-pink-50 border border-pink-100 rounded px-2 py-0.5 w-max mt-0.5">
            ⚖️ Size: {item.weightOption}
          </span>
          <span className="text-xs text-slate-400 mt-1 font-medium">
            Unit Price: {formatCurrency(item.price)}
          </span>
        </div>
      </div>

      {/* Action panel */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-dashed border-slate-200">
        {/* Quantity Controls */}
        <div className="flex items-center gap-1.5 bg-white border-2 border-slate-800 rounded-full p-1 shadow-sm">
          <motion.button
            onClick={handleDecrement}
            className="p-1 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
          </motion.button>
          
          <span className="font-display font-black text-sm text-slate-800 px-2 w-6 text-center select-none">
            {item.quantity}
          </span>

          <motion.button
            onClick={handleIncrement}
            className="p-1 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          </motion.button>
        </div>

        {/* Total Price */}
        <div className="flex flex-col items-end min-w-[90px]">
          <span className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-wider">Subtotal</span>
          <span className="font-display font-extrabold text-slate-800 text-sm">
            {formatCurrency(item.price * item.quantity)}
          </span>
        </div>

        {/* Scribble Delete button */}
        <motion.button
          onClick={handleRemove}
          className="p-2 bg-rose-50 hover:bg-rose-100 border-2 border-slate-800 text-rose-600 rounded-full cursor-pointer shadow-sm flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: [-10, 10, -10, 0] }}
          whileTap={{ scale: 0.9 }}
          title="Remove Item"
        >
          <Trash2 className="w-4 h-4 stroke-[2.5]" />
        </motion.button>
      </div>
    </motion.div>
  );
};

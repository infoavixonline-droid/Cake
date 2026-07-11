import React from "react";
import { motion } from "motion/react";

// Wave Divider component to separate sections with squiggly borders
export const DoodleDivider: React.FC<{ color?: string; flip?: boolean }> = ({ 
  color = "fill-amber-100", 
  flip = false 
}) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`relative block w-full h-[30px] md:h-[45px] ${color}`}
      >
        <path d="M0,0 C150,90 350,10 500,70 C650,130 850,50 1000,80 C1150,110 1190,40 1200,10 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  );
};

// Hand-Drawn Hero Cake Illustration
export const HeroCakeDoodle: React.FC = () => {
  return (
    <motion.div
      className="relative w-72 h-72 md:w-96 md:h-96 mx-auto flex items-center justify-center"
      animate={{ 
        y: [0, -8, 0, -4, 0],
        rotate: [0, -1, 1, -0.5, 0]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-md">
        {/* Confetti and Sprinkles Background */}
        <g stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Sparkles */}
          <path d="M 50,100 L 50,85 M 42,92 L 58,92" />
          <path d="M 330,80 L 330,65 M 322,72 L 338,72" />
          <path d="M 350,280 L 350,265 M 342,272 L 358,272" />
          <path d="M 60,300 L 60,285 M 52,292 L 68,292" />
          
          {/* Swirls */}
          <path d="M 80,180 A 10,10 0 1 1 90,190" />
          <path d="M 300,190 A 12,12 0 1 0 290,178" />
        </g>

        {/* Cake Stand */}
        <path 
          d="M 120,320 C 120,320 150,320 150,340 C 150,350 120,360 200,360 C 280,360 250,350 250,340 C 250,320 280,320 280,320" 
          fill="#E2E8F0" 
          stroke="#334155" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M 90,320 L 310,320 C 320,320 320,310 310,310 L 90,310 C 80,310 80,320 90,320 Z" 
          fill="#CBD5E1" 
          stroke="#334155" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Bottom Layer of Cake */}
        <path 
          d="M 100,310 C 100,240 105,220 200,220 C 295,220 300,240 300,310 Z" 
          fill="#FCA5A5" 
          stroke="#334155" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Swirly yellow icing drip bottom layer */}
        <path 
          d="M 100,270 C 120,270 125,290 140,290 C 155,290 160,270 175,270 C 190,270 195,295 210,295 C 225,295 230,270 245,270 C 260,270 265,285 280,285 C 295,285 298,270 300,270 L 300,310 L 100,310 Z" 
          fill="#FEF08A" 
          stroke="#334155" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Middle Layer of Cake */}
        <path 
          d="M 120,220 C 120,160 125,150 200,150 C 275,150 280,160 280,220 Z" 
          fill="#86EFAC" 
          stroke="#334155" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Frosting dripping on middle layer */}
        <path 
          d="M 120,190 C 135,190 140,205 155,205 C 170,205 175,190 190,190 C 205,190 210,205 225,205 C 240,205 245,190 260,190 C 275,190 278,198 280,200 L 280,220 L 120,220 Z" 
          fill="#F472B6" 
          stroke="#334155" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Top Layer of Cake */}
        <path 
          d="M 145,150 C 145,100 150,90 200,90 C 250,90 255,100 255,150 Z" 
          fill="#7DD3FC" 
          stroke="#334155" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Top Layer Frosting */}
        <path 
          d="M 145,125 C 155,125 160,135 170,135 C 180,135 185,125 200,125 C 215,125 220,135 230,135 C 240,135 250,125 255,125 L 255,150 L 145,150 Z" 
          fill="#A78BFA" 
          stroke="#334155" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Candles on Top */}
        {/* Left Candle */}
        <path d="M 175,90 L 175,60" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
        <path d="M 175,90 L 175,60" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
        {/* Left Flame */}
        <path 
          d="M 175,60 C 170,55 170,45 175,40 C 180,45 180,55 175,60 Z" 
          fill="#FBBF24" 
          stroke="#334155" 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />

        {/* Center Candle */}
        <path d="M 200,90 L 200,50" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
        <path d="M 200,90 L 200,50" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" />
        {/* Center Flame */}
        <path 
          d="M 200,50 C 195,43 195,30 200,25 C 205,30 205,43 200,50 Z" 
          fill="#FBBF24" 
          stroke="#334155" 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />

        {/* Right Candle */}
        <path d="M 225,90 L 225,60" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
        <path d="M 225,90 L 225,60" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />
        {/* Right Flame */}
        <path 
          d="M 225,60 C 220,55 220,45 225,40 C 230,45 230,55 225,60 Z" 
          fill="#FBBF24" 
          stroke="#334155" 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />

        {/* Sprinkles decoration on cake layers */}
        {/* Pink layer sprinkles */}
        <line x1="140" y1="245" x2="150" y2="245" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
        <line x1="260" y1="250" x2="270" y2="255" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
        <line x1="200" y1="260" x2="210" y2="255" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
        
        {/* Green layer sprinkles */}
        <line x1="160" y1="170" x2="165" y2="180" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
        <line x1="240" y1="175" x2="245" y2="165" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};

// Squiggly Sketchy Border container (looks hand-drawn)
export const SketchCard: React.FC<{
  children: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
  className?: string;
  hoverEffect?: boolean;
}> = ({
  children,
  bgColor = "bg-white",
  borderColor = "border-slate-800",
  className = "",
  hoverEffect = true,
}) => {
  return (
    <motion.div
      className={`relative p-5 border-[3px] ${borderColor} ${bgColor} ${className}
        rounded-[24px_12px_28px_14px]/[14px_28px_12px_24px] shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]`}
      whileHover={hoverEffect ? {
        scale: 1.02,
        rotate: [0, -0.5, 0.5, 0],
        boxShadow: "6px 6px 0px 0px rgba(30,41,59,1)",
        transition: { duration: 0.2 }
      } : undefined}
    >
      {children}
    </motion.div>
  );
};

// Friendly hand-drawn buttons
export const DoodleButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  borderColor?: string;
  className?: string;
  type?: "button" | "submit";
}> = ({
  children,
  onClick,
  color = "bg-pink-300 hover:bg-pink-400",
  borderColor = "border-slate-800",
  className = "",
  type = "button"
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`relative px-5 py-2.5 font-display font-semibold border-[3.5px] ${borderColor} ${color} ${className}
        rounded-[18px_8px_20px_10px]/[10px_20px_8px_18px] text-slate-800 transition-colors cursor-pointer
        shadow-[3px_3px_0px_0px_rgba(30,41,59,1)]`}
      whileHover={{
        scale: 1.04,
        rotate: [0, -1, 1, 0],
        boxShadow: "4px 4px 0px 0px rgba(30,41,59,1)",
      }}
      whileTap={{ scale: 0.98, boxShadow: "1px 1px 0px 0px rgba(30,41,59,1)" }}
    >
      {children}
    </motion.button>
  );
};

// Hand-Drawn Whisk Doodle for About section
export const WhiskDoodle: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-slate-800 fill-none" strokeWidth="3" strokeLinecap="round">
      <path d="M 50,75 L 50,95" /> {/* Handle */}
      <rect x="47" y="80" width="6" height="10" rx="2" fill="#94A3B8" />
      <path d="M 50,75 C 35,70 30,50 30,35 C 30,15 50,15 50,15" />
      <path d="M 50,75 C 65,70 70,50 70,35 C 70,15 50,15 50,15" />
      <path d="M 50,75 C 40,70 42,40 50,20 C 58,40 60,70 50,75" />
      <path d="M 50,75 C 45,70 47,50 50,28 C 53,50 55,70 50,75" />
      <path d="M 30,40 Q 50,30 70,40" />
      <path d="M 32,55 Q 50,45 68,55" />
    </svg>
  );
};

// Hand-Drawn Cupcake Doodle for About section
export const CupcakeDoodle: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20" stroke="#334155" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Cup wrapper */}
      <path d="M 30,60 L 35,90 Q 50,93 65,90 L 70,60" fill="#FDE047" />
      {/* Wrapper folds */}
      <line x1="38" y1="60" x2="42" y2="90" />
      <line x1="50" y1="60" x2="50" y2="92" />
      <line x1="62" y1="60" x2="58" y2="90" />
      
      {/* Sponge/Cream topping */}
      <path d="M 25,60 C 20,50 35,45 35,45 C 35,45 40,30 50,32 C 60,30 65,45 65,45 C 65,45 80,50 75,60 Z" fill="#F472B6" />
      <path d="M 35,45 C 40,35 45,38 50,38 C 55,38 60,35 65,45" />

      {/* Cherry on top */}
      <circle cx="50" cy="22" r="8" fill="#EF4444" />
      <path d="M 52,14 Q 58,5 65,10" />
    </svg>
  );
};

// Hand-Drawn Oven Doodle
export const OvenDoodle: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20" stroke="#334155" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Main Box */}
      <rect x="20" y="25" width="60" height="60" rx="6" fill="#F1F5F9" />
      {/* Control panel */}
      <line x1="20" y1="40" x2="80" y2="40" />
      <circle cx="30" cy="32.5" r="3" fill="#94A3B8" />
      <circle cx="42" cy="32.5" r="3" fill="#94A3B8" />
      <circle cx="54" cy="32.5" r="3" fill="#94A3B8" />
      <rect x="64" y="29.5" width="10" height="6" rx="1" fill="#CBD5E1" />

      {/* Glass door */}
      <rect x="28" y="48" width="44" height="28" rx="2" fill="#E2E8F0" />
      {/* Oven Window view of cake inside */}
      <path d="M 40,68 C 40,62 43,60 50,60 C 57,60 60,62 60,68 Z" fill="#FCA5A5" />
      <line x1="38" y1="68" x2="62" y2="68" strokeWidth="2" />

      {/* Door Handle */}
      <path d="M 35,48 L 65,48" strokeWidth="5" />
    </svg>
  );
};

// Scattered sprinkles background decorations
export const DecorDoodles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      {/* Balloon 1 */}
      <motion.div 
        className="absolute top-12 left-6 md:left-24 text-red-400"
        animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="60" viewBox="0 0 40 60" fill="currentColor" stroke="#334155" strokeWidth="2">
          <ellipse cx="20" cy="25" rx="15" ry="20" />
          <path d="M 20,45 L 18,48 L 22,48 Z" />
          <path d="M 20,48 Q 15,53 22,58" fill="none" />
        </svg>
      </motion.div>

      {/* Balloon 2 */}
      <motion.div 
        className="absolute top-24 right-8 md:right-32 text-sky-400"
        animate={{ y: [0, -15, 0], rotate: [0, -6, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="35" height="55" viewBox="0 0 40 60" fill="currentColor" stroke="#334155" strokeWidth="2">
          <ellipse cx="20" cy="25" rx="15" ry="20" />
          <path d="M 20,45 L 18,48 L 22,48 Z" />
          <path d="M 20,48 Q 25,53 18,58" fill="none" />
        </svg>
      </motion.div>

      {/* Twinkling Stars */}
      {[
        { top: "15%", left: "45%", delay: 0 },
        { top: "45%", left: "5%", delay: 1.5 },
        { top: "60%", right: "8%", delay: 0.7 },
        { top: "85%", left: "15%", delay: 2 },
        { top: "80%", right: "20%", delay: 1.2 },
      ].map((star, idx) => (
        <motion.svg
          key={idx}
          style={{ position: "absolute", top: star.top, left: star.left, right: star.right }}
          className="w-6 h-6 text-yellow-400"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="#334155"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: star.delay }}
        >
          <path d="M12,2 L14.5,8.5 L21,9 L16,14 L17.5,21 L12,17 L6.5,21 L8,14 L3,9 L9.5,8.5 Z" />
        </motion.svg>
      ))}

      {/* Colorful Sprinkles */}
      {[
        { top: "30%", left: "12%", color: "bg-pink-400", rotate: 25 },
        { top: "20%", right: "15%", color: "bg-purple-400", rotate: -45 },
        { top: "55%", left: "48%", color: "bg-yellow-400", rotate: 60 },
        { top: "72%", left: "30%", color: "bg-emerald-400", rotate: 15 },
        { top: "68%", right: "12%", color: "bg-blue-400", rotate: -15 },
        { top: "90%", left: "55%", color: "bg-rose-400", rotate: 80 },
      ].map((sprinkle, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: sprinkle.top,
            left: sprinkle.left,
            right: sprinkle.right,
            transform: `rotate(${sprinkle.rotate}deg)`,
          }}
          className={`w-5 h-2 rounded-full border border-slate-700 ${sprinkle.color}`}
        />
      ))}

      {/* Squiggly Loops */}
      {[
        { top: "10%", left: "30%" },
        { top: "50%", right: "25%" },
        { top: "75%", left: "8%" },
      ].map((loop, idx) => (
        <svg
          key={idx}
          style={{ position: "absolute", top: loop.top, left: loop.left, right: loop.right }}
          className="w-8 h-8 text-slate-300 stroke-slate-400 fill-none"
          strokeWidth="2"
          viewBox="0 0 50 50"
        >
          <path d="M 10,25 C 20,5 30,5 35,15 C 40,25 25,45 15,35 C 5,25 25,10 40,25" />
        </svg>
      ))}
    </div>
  );
};

import React from "react";
import { motion } from "motion/react";

// Import real photos of the cakes
import cakeRainbowSprinkle from "../assets/images/cake_rainbow_sprinkle_1783057264196.jpg";
import cakeChocoSaurus from "../assets/images/cake_choco_saurus_1783057284152.jpg";
import cakeMagicalUnicorn from "../assets/images/cake_magical_unicorn_1783057337342.jpg";
import cakeUnderSea from "../assets/images/cake_under_sea_1783057351314.jpg";
import cakeSpaceRocket from "../assets/images/cake_space_rocket_1783057374581.jpg";
import cakePrincessTiara from "../assets/images/cake_princess_tiara_1783057391464.jpg";
import cakeTeddyBear from "../assets/images/cake_teddy_bear_1783057405890.jpg";
import cakeCookieMonster from "../assets/images/cake_cookie_monster_1783057417992.jpg";

interface CakeVectorProps {
  id: string;
  className?: string;
}

const cakeImages: Record<string, string> = {
  "cake-001": cakeRainbowSprinkle,
  "cake-002": cakeChocoSaurus,
  "cake-003": cakeMagicalUnicorn,
  "cake-004": cakeUnderSea,
  "cake-005": cakeSpaceRocket,
  "cake-006": cakePrincessTiara,
  "cake-007": cakeTeddyBear,
  "cake-008": cakeCookieMonster,
};

const cakeAlts: Record<string, string> = {
  "cake-001": "Rainbow Sprinkle Birthday Cake",
  "cake-002": "Choco-Saurus Dino Cake",
  "cake-003": "Magical Unicorn Fantasy Cake",
  "cake-004": "Under-the-Sea Adventure Cake",
  "cake-005": "Space Cadet Rocket Cake",
  "cake-006": "Princess Tiara Pink Palace Cake",
  "cake-007": "Teddy Bear Picnic Cake",
  "cake-008": "Cookie Monster Fudge Cake",
};

export const CakeVector: React.FC<CakeVectorProps> = ({ id, className = "w-48 h-48 mx-auto" }) => {
  const imageUrl = cakeImages[id];
  const altText = cakeAlts[id] || "Delicious Custom Cake";

  // Robust fallback to vector SVGs if the image is missing or not registered
  const getCakeSVG = () => {
    switch (id) {
      case "cake-001": // Rainbow Sprinkle Birthday Cake
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Cake plate */}
            <path d="M 30,165 Q 100,180 170,165" stroke="#334155" strokeWidth="3" fill="none" strokeLinecap="round" />
            <ellipse cx="100" cy="165" rx="70" ry="10" fill="#E2E8F0" stroke="#334155" strokeWidth="3" />
            {/* Sponge base */}
            <path d="M 45,160 C 45,100 48,90 100,90 C 152,90 155,100 155,160 Z" fill="#FDA4AF" stroke="#334155" strokeWidth="4" strokeLinejoin="round" />
            {/* Drip frosting */}
            <path d="M 45,120 C 55,120 60,135 70,135 C 80,135 85,120 100,120 C 115,120 120,135 130,135 C 140,135 150,120 155,120 L 155,160 L 45,160 Z" fill="#FEE2E2" stroke="#334155" strokeWidth="3" />
            {/* Sprinkles (colored rects/circles) */}
            <g stroke="#334155" strokeWidth="1">
              <rect x="60" y="140" width="8" height="3" rx="1.5" fill="#38BDF8" transform="rotate(15, 60, 140)" />
              <rect x="130" y="145" width="8" height="3" rx="1.5" fill="#F43F5E" transform="rotate(-30, 130, 145)" />
              <rect x="95" y="130" width="8" height="3" rx="1.5" fill="#FBBF24" transform="rotate(45, 95, 130)" />
              <rect x="110" y="142" width="8" height="3" rx="1.5" fill="#34D399" transform="rotate(-15, 110, 142)" />
              <rect x="75" y="150" width="8" height="3" rx="1.5" fill="#A78BFA" transform="rotate(75, 75, 150)" />
              <rect x="85" y="110" width="8" height="3" rx="1.5" fill="#FB923C" transform="rotate(-20, 85, 110)" />
              <rect x="115" y="112" width="8" height="3" rx="1.5" fill="#22D3EE" transform="rotate(30, 115, 112)" />
            </g>
            {/* Birthday Candles */}
            <line x1="85" y1="90" x2="85" y2="70" stroke="#334155" strokeWidth="3" />
            <line x1="100" y1="90" x2="100" y2="65" stroke="#334155" strokeWidth="3" />
            <line x1="115" y1="90" x2="115" y2="70" stroke="#334155" strokeWidth="3" />
            <circle cx="85" cy="65" r="4" fill="#FBBF24" stroke="#334155" strokeWidth="1.5" />
            <circle cx="100" cy="60" r="5" fill="#F59E0B" stroke="#334155" strokeWidth="1.5" />
            <circle cx="115" cy="65" r="4" fill="#FBBF24" stroke="#334155" strokeWidth="1.5" />
          </svg>
        );

      case "cake-002": // Choco-Saurus Dino Cake
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse cx="100" cy="165" rx="70" ry="10" fill="#E2E8F0" stroke="#334155" strokeWidth="3" />
            {/* Chocolate fudge block */}
            <path d="M 45,160 C 45,110 50,100 100,100 C 150,100 155,110 155,160 Z" fill="#78350F" stroke="#334155" strokeWidth="4" />
            {/* Fudge drips */}
            <path d="M 45,130 Q 70,140 85,130 Q 110,145 125,130 Q 145,140 155,130 L 155,160 L 45,160 Z" fill="#451A03" stroke="#334155" strokeWidth="3" />
            {/* Marshmallow Dino Tail/Spikes */}
            <path d="M 50,110 Q 30,105 45,90 Q 60,105 50,110" fill="#34D399" stroke="#334155" strokeWidth="2.5" />
            <path d="M 150,115 Q 170,110 155,95 Q 140,110 150,115" fill="#34D399" stroke="#334155" strokeWidth="2.5" />
            {/* Center dino head popping out of cake */}
            <path d="M 85,100 C 85,60 115,60 115,100 Z" fill="#34D399" stroke="#334155" strokeWidth="3" />
            <circle cx="95" cy="80" r="2.5" fill="#1E293B" />
            {/* Cute dino cheek */}
            <circle cx="93" cy="86" r="2" fill="#F43F5E" />
            {/* Little dino horn */}
            <path d="M 108,70 L 115,65 L 112,74" fill="#FBBF24" stroke="#334155" strokeWidth="1.5" />
            {/* Oreo soil cookie crumbs */}
            <circle cx="70" cy="155" r="3" fill="#1E293B" />
            <circle cx="120" cy="158" r="2.5" fill="#1E293B" />
            <circle cx="135" cy="152" r="3" fill="#1E293B" />
            <circle cx="60" cy="150" r="2" fill="#1E293B" />
          </svg>
        );

      case "cake-003": // Magical Unicorn Fantasy Cake
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse cx="100" cy="165" rx="70" ry="10" fill="#E2E8F0" stroke="#334155" strokeWidth="3" />
            {/* Lavender body */}
            <path d="M 45,160 C 45,100 48,95 100,95 C 152,95 155,100 155,160 Z" fill="#D8B4FE" stroke="#334155" strokeWidth="4" />
            {/* Pink & Purple Mane */}
            <path d="M 45,130 C 35,130 38,155 50,150" stroke="#F472B6" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 155,135 C 165,135 162,158 150,152" stroke="#60A5FA" strokeWidth="6" strokeLinecap="round" fill="none" />
            {/* Unicorn Horn */}
            <polygon points="90,95 110,95 100,50" fill="#FBBF24" stroke="#334155" strokeWidth="3" strokeLinejoin="round" />
            <line x1="93" y1="85" x2="107" y2="80" stroke="#334155" strokeWidth="2.5" />
            <line x1="95" y1="73" x2="105" y2="68" stroke="#334155" strokeWidth="2.5" />
            <line x1="97" y1="61" x2="103" y2="57" stroke="#334155" strokeWidth="2.5" />
            {/* Sleeping eyes (cute u-shape) */}
            <path d="M 72,125 Q 82,133 92,125" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M 108,125 Q 118,133 128,125" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* Eyelashes */}
            <line x1="74" y1="128" x2="70" y2="134" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
            <line x1="126" y1="128" x2="130" y2="134" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
            {/* Golden Star Sparkles */}
            <path d="M 65,108 L 67,112 L 72,113 L 68,116 L 69,121 L 65,118 L 61,121 L 62,116 L 58,113 L 63,112 Z" fill="#FBBF24" />
            <path d="M 135,110 L 137,114 L 142,115 L 138,118 L 139,123 L 135,120 L 131,123 L 132,118 L 128,115 L 133,114 Z" fill="#FBBF24" />
          </svg>
        );

      case "cake-004": // Under-the-Sea Adventure
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse cx="100" cy="165" rx="70" ry="10" fill="#FEF08A" stroke="#334155" strokeWidth="3" /> {/* Sandy plate */}
            {/* Ocean body */}
            <path d="M 45,160 C 45,100 48,95 100,95 C 152,95 155,100 155,160 Z" fill="#38BDF8" stroke="#334155" strokeWidth="4" />
            {/* Sea Waves frosting */}
            <path d="M 45,145 Q 72,155 100,145 Q 128,155 155,145 L 155,160 L 45,160 Z" fill="#0284C7" stroke="#334155" strokeWidth="3" />
            <path d="M 45,120 Q 72,130 100,120 Q 128,130 155,120 L 155,140 Q 128,150 100,140 Q 72,150 45,140 Z" fill="#0EA5E9" />
            {/* Orange Octopus */}
            <circle cx="100" cy="115" r="14" fill="#FB923C" stroke="#334155" strokeWidth="2.5" />
            {/* Octopus Eyes */}
            <circle cx="95" cy="112" r="2.5" fill="#FFF" stroke="#334155" strokeWidth="1" />
            <circle cx="95" cy="112" r="1" fill="#000" />
            <circle cx="105" cy="112" r="2.5" fill="#FFF" stroke="#334155" strokeWidth="1" />
            <circle cx="105" cy="112" r="1" fill="#000" />
            {/* Octopus tentacles */}
            <path d="M 88,124 Q 82,128 84,134" stroke="#FB923C" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M 95,127 Q 92,134 96,138" stroke="#FB923C" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M 105,127 Q 108,134 104,138" stroke="#FB923C" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M 112,124 Q 118,128 116,134" stroke="#FB923C" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            {/* White starfish */}
            <path d="M 60,135 L 62,141 L 68,142 L 63,146 L 64,152 L 60,149 L 56,152 L 57,146 L 52,142 L 58,141 Z" fill="#FFF" stroke="#334155" strokeWidth="2" strokeLinejoin="round" />
            {/* Bubbles */}
            <circle cx="75" cy="105" r="3" fill="none" stroke="#FFF" strokeWidth="1.5" />
            <circle cx="125" cy="108" r="4.5" fill="none" stroke="#FFF" strokeWidth="1.5" />
          </svg>
        );

      case "cake-005": // Space Cadet Rocket Cake
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse cx="100" cy="165" rx="70" ry="10" fill="#E2E8F0" stroke="#334155" strokeWidth="3" />
            {/* Dark cocoa planet body */}
            <path d="M 45,160 C 45,100 48,95 100,95 C 152,95 155,100 155,160 Z" fill="#1E293B" stroke="#334155" strokeWidth="4" />
            {/* Ring around the planet cake */}
            <path d="M 32,135 Q 100,155 168,135" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M 32,135 Q 100,155 168,135" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Tiny Strawberry Rocket */}
            <g transform="translate(100, 105) rotate(-35)">
              <path d="M -8,5 L 8,5 L 8,-15 C 8,-15 0,-28 0,-28 C 0,-28 -8,-15 -8,-15 Z" fill="#EF4444" stroke="#334155" strokeWidth="2.5" />
              {/* Fins */}
              <path d="M -8,0 L -14,5 L -8,5" fill="#FBBF24" stroke="#334155" strokeWidth="2.5" />
              <path d="M 8,0 L 14,5 L 8,5" fill="#FBBF24" stroke="#334155" strokeWidth="2.5" />
              {/* Window */}
              <circle cx="0" cy="-6" r="3" fill="#FFF" stroke="#334155" strokeWidth="1.5" />
              {/* Fire blast */}
              <path d="M -5,5 L 0,18 L 5,5 Z" fill="#F97316" stroke="#334155" strokeWidth="2" />
            </g>
            {/* Yellow Stars */}
            <path d="M 65,110 L 67,112 L 72,113 L 68,115 L 69,120 L 65,117 L 61,120 L 62,115 L 58,113 L 63,112 Z" fill="#FBBF24" />
            <circle cx="140" cy="115" r="2" fill="#FFF" />
            <circle cx="130" cy="125" r="1.5" fill="#FFF" />
          </svg>
        );

      case "cake-006": // Princess Tiara Pink Palace
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse cx="100" cy="165" rx="70" ry="10" fill="#E2E8F0" stroke="#334155" strokeWidth="3" />
            {/* Strawberry Pink Body */}
            <path d="M 45,160 C 45,100 48,95 100,95 C 152,95 155,100 155,160 Z" fill="#F472B6" stroke="#334155" strokeWidth="4" />
            {/* Scalloped white frosting drips */}
            <path d="M 45,130 C 50,130 55,142 62,142 C 70,142 75,130 82,130 C 90,130 95,142 102,142 C 110,142 115,130 122,130 C 130,130 135,142 142,142 C 150,142 152,130 155,130 L 155,160 L 45,160 Z" fill="#FFF" stroke="#334155" strokeWidth="3" />
            {/* Elegant Tiara on top */}
            <path d="M 75,95 Q 100,85 125,95 L 122,85 Q 100,75 78,85 Z" fill="#FCD34D" stroke="#334155" strokeWidth="2.5" />
            <polygon points="90,88 100,68 110,88" fill="#FCD34D" stroke="#334155" strokeWidth="2.5" />
            <polygon points="80,91 85,76 92,90" fill="#FCD34D" stroke="#334155" strokeWidth="2.5" />
            <polygon points="120,91 115,76 108,90" fill="#FCD34D" stroke="#334155" strokeWidth="2.5" />
            {/* Tiara gems */}
            <circle cx="100" cy="68" r="2.5" fill="#EC4899" />
            <circle cx="85" cy="76" r="2" fill="#3B82F6" />
            <circle cx="115" cy="76" r="2" fill="#3B82F6" />
            {/* Sparkly pearls on bottom draping */}
            <circle cx="62" cy="142" r="3.5" fill="#FFF" stroke="#334155" strokeWidth="1.5" />
            <circle cx="102" cy="142" r="3.5" fill="#FFF" stroke="#334155" strokeWidth="1.5" />
            <circle cx="142" cy="142" r="3.5" fill="#FFF" stroke="#334155" strokeWidth="1.5" />
          </svg>
        );

      case "cake-007": // Teddy Bear Picnic Cake
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse cx="100" cy="165" rx="70" ry="10" fill="#E2E8F0" stroke="#334155" strokeWidth="3" />
            {/* Golden Bear Body */}
            <path d="M 45,160 C 45,100 48,95 100,95 C 152,95 155,100 155,160 Z" fill="#F59E0B" stroke="#334155" strokeWidth="4" />
            {/* Bear Ears */}
            <circle cx="58" cy="98" r="14" fill="#D97706" stroke="#334155" strokeWidth="3.5" />
            <circle cx="58" cy="98" r="7" fill="#FCA5A5" />
            <circle cx="142" cy="98" r="14" fill="#D97706" stroke="#334155" strokeWidth="3.5" />
            <circle cx="142" cy="98" r="7" fill="#FCA5A5" />
            {/* Big snout */}
            <ellipse cx="100" cy="135" rx="16" ry="12" fill="#FFF" stroke="#334155" strokeWidth="3" />
            {/* Nose */}
            <path d="M 92,131 Q 100,125 108,131 Q 100,139 92,131 Z" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
            {/* Mouth */}
            <path d="M 100,135 Q 97,143 94,141" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 100,135 Q 103,143 106,141" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Happy closed eyes */}
            <path d="M 74,118 Q 80,112 86,118" stroke="#334155" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 114,118 Q 120,112 126,118" stroke="#334155" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Rosy cheeks */}
            <circle cx="70" cy="126" r="4" fill="#F43F5E" opacity="0.6" />
            <circle cx="130" cy="126" r="4" fill="#F43F5E" opacity="0.6" />
          </svg>
        );

      case "cake-008": // Cookie Monster Fudge Cake
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse cx="100" cy="165" rx="70" ry="10" fill="#E2E8F0" stroke="#334155" strokeWidth="3" />
            {/* Blue Shaggy Body */}
            <path d="M 45,160 C 45,100 48,95 100,95 C 152,95 155,100 155,160 Z" fill="#2563EB" stroke="#334155" strokeWidth="4" />
            {/* Googly Eyes on top of cake */}
            <circle cx="88" cy="92" r="12" fill="#FFF" stroke="#334155" strokeWidth="3" />
            <circle cx="86" cy="90" r="4.5" fill="#000" />
            <circle cx="112" cy="92" r="12" fill="#FFF" stroke="#334155" strokeWidth="3" />
            <circle cx="115" cy="94" r="4.5" fill="#000" />
            {/* Mouth cookie crumb stuffing */}
            <path d="M 75,135 Q 100,165 125,135" fill="#1E293B" stroke="#334155" strokeWidth="3" />
            {/* Half eaten cookie inside mouth */}
            <g transform="translate(100,140) rotate(15)">
              <circle cx="0" cy="0" r="12" fill="#D97706" stroke="#334155" strokeWidth="2.5" />
              {/* Bite mark */}
              <circle cx="-11" cy="0" r="6" fill="#1E293B" />
              {/* Choco chips */}
              <circle cx="2" cy="-4" r="2" fill="#451A03" />
              <circle cx="-2" cy="4" r="1.5" fill="#451A03" />
              <circle cx="5" cy="3" r="2" fill="#451A03" />
            </g>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse cx="100" cy="165" rx="70" ry="10" fill="#E2E8F0" stroke="#334155" strokeWidth="3" />
            <path d="M 50,160 C 50,110 55,100 100,100 C 145,100 150,110 150,160 Z" fill="#F472B6" stroke="#334155" strokeWidth="4" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      className={`${className} flex items-center justify-center relative overflow-hidden`}
      animate={{
        scale: [1, 1.015, 1],
        rotate: [0, 0.5, -0.5, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover rounded-xl border-2 border-slate-800 shadow-sm"
          referrerPolicy="no-referrer"
        />
      ) : (
        getCakeSVG()
      )}
    </motion.div>
  );
};


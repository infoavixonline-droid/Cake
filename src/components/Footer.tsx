import React from "react";
import { ViewState } from "../types";
import { motion } from "motion/react";
import { Cake, Instagram, Facebook, MessageSquare } from "lucide-react";

interface FooterProps {
  setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "https://instagram.com", color: "hover:bg-rose-100 text-rose-500" },
    { icon: Facebook, label: "Facebook", url: "https://facebook.com", color: "hover:bg-blue-100 text-blue-600" },
    { icon: MessageSquare, label: "WhatsApp", url: "https://wa.me/94771234567", color: "hover:bg-emerald-100 text-emerald-600" },
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-100 select-none">
      {/* Wave Scalloped Top Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] fill-slate-900">
          {/* Hand-drawn bumpy scalloped edge path */}
          <path d="M0,80 Q30,50 60,80 T120,80 T180,80 T240,80 T300,80 T360,80 T420,80 T480,80 T540,80 T600,80 T660,80 T720,80 T780,80 T840,80 T900,80 T960,80 T1020,80 T1080,80 T1140,80 T1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView({ type: "home" })}>
              <div className="p-2 bg-pink-100 border border-slate-700 rounded-full text-pink-600">
                <Cake className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl text-white">Doodle Cakes</span>
            </div>
            <p className="text-slate-300 font-display text-sm leading-relaxed max-w-sm">
              Baked with love, sprinkled with joy! Delicious custom cakes designed to turn every celebration into a magical sketchbook adventure. 🎂✨
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-lg text-amber-200">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              {[
                { label: "Home", view: { type: "home" as const } },
                { label: "Our Store", view: { type: "store" as const } },
                { label: "About Us", view: { type: "about" as const } },
                { label: "Contact Us", view: { type: "contact" as const } },
                { label: "My Cart", view: { type: "cart" as const } },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => setView(link.view)}
                  className="text-left hover:text-amber-300 transition-colors cursor-pointer font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info & Socials */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-lg text-pink-300">Say Hello!</h4>
            <p className="text-sm text-slate-400">
              📍 123 Sweet Tooth Lane, Colombo, Sri Lanka<br />
              📞 +94 77 123 4567<br />
              ✉️ hello@doodlecakes.lk
            </p>
            <div className="flex gap-2.5 mt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 bg-slate-800 border border-slate-700 rounded-full transition-colors ${social.color}`}
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 stroke-[2.5]" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Squiggly line separator */}
        <div className="w-full h-[2px] bg-slate-800 mb-6" />

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500 font-display font-medium">
          <p>© {currentYear} Doodle Cakes Bakery. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with sweetness & sprinkles 🍰
          </p>
        </div>
      </div>
    </footer>
  );
};

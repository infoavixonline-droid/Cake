import React, { useState } from "react";
import { SketchCard, DoodleButton, DecorDoodles } from "./DoodleAssets";
import { MessageSquare, Phone, MapPin, Clock, Instagram, Facebook, Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.contact && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", contact: "", message: "" });
    }
  };

  const socials = [
    { icon: Instagram, label: "Instagram", url: "https://instagram.com", color: "bg-rose-100 hover:bg-rose-200 text-rose-600 border-rose-300" },
    { icon: Facebook, label: "Facebook", url: "https://facebook.com", color: "bg-blue-100 hover:bg-blue-200 text-blue-600 border-blue-300" },
    { icon: MessageSquare, label: "WhatsApp Chat", url: "https://wa.me/94771234567", color: "bg-emerald-100 hover:bg-emerald-200 text-emerald-600 border-emerald-300" },
  ];

  return (
    <div className="relative pb-20 pt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
      <DecorDoodles />

      {/* Header and Title */}
      <div className="flex flex-col items-center text-center gap-2 mb-12 z-10 relative">
        <span className="text-4xl">💌🎈📬</span>
        <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-800 tracking-tight">
          Say Hello to Us!
        </h1>
        <p className="text-slate-500 font-medium text-sm sm:text-base max-w-sm">
          Have a question or a super-duper custom cake dream? Send us a scribble!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start z-10 relative">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <SketchCard className="bg-white/90 relative" hoverEffect={false}>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center text-center py-10 px-4 gap-4"
              >
                <div className="text-6xl animate-bounce">🎉🍭✨</div>
                <h3 className="font-display font-black text-2xl text-slate-800">
                  Yay! We got your message!
                </h3>
                <p className="text-sm text-slate-500 font-medium max-w-xs leading-relaxed">
                  Thank you so much! Our head baking wizards will look at your scribble and get back to you faster than a rolling pin! 👩‍🍳💖
                </p>
                <DoodleButton
                  onClick={() => setSubmitted(false)}
                  color="bg-amber-200 hover:bg-amber-300"
                  className="mt-4 px-6 text-xs"
                >
                  Send Another Scribble
                </DoodleButton>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-display font-black text-xl text-slate-800 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-5 h-5 text-amber-500 fill-amber-300" />
                  <span>Send a Secret Message</span>
                </h3>

                {/* Name Input */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-display font-extrabold text-slate-500">Your Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Little Leo or Mom Sarah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border-2 border-slate-800 rounded-xl px-4 py-2.5 font-display text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm shadow-sm"
                  />
                </div>

                {/* Email / Phone Input */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-display font-extrabold text-slate-500">How to reach you (Email or Phone):</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. leo@kidparty.com or +94 77 111 2222"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full bg-slate-50 border-2 border-slate-800 rounded-xl px-4 py-2.5 font-display text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm shadow-sm"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-display font-extrabold text-slate-500">Your Sweet Message:</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what flavor you love, what date your party is, or if you want custom dinos!"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border-2 border-slate-800 rounded-xl px-4 py-2.5 font-display text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm shadow-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="mt-2 flex justify-start">
                  <DoodleButton
                    type="submit"
                    color="bg-pink-300 hover:bg-pink-400 text-sm py-3 px-6"
                  >
                    Send to the Baker! 🧁
                  </DoodleButton>
                </div>
              </form>
            )}
          </SketchCard>
        </div>

        {/* Store Details Panel */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <SketchCard className="bg-amber-100/40" hoverEffect={true}>
            <h3 className="font-display font-black text-xl text-slate-800 mb-4">📍 Our Sweet Spot</h3>
            
            <div className="flex flex-col gap-4 font-medium text-slate-600 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-slate-700 rounded-lg flex-shrink-0 text-slate-700">
                  <MapPin className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-xs">Address</h4>
                  <p className="text-xs mt-0.5">123 Sweet Tooth Lane, Colombo 03, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-slate-700 rounded-lg flex-shrink-0 text-slate-700">
                  <Clock className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-xs">Baking Hours</h4>
                  <p className="text-xs mt-0.5">Tuesday - Sunday: 9:00 AM - 7:00 PM</p>
                  <p className="text-[10px] text-pink-500 font-bold mt-0.5">🌟 Closed on Mondays for Whisk cleaning!</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-slate-700 rounded-lg flex-shrink-0 text-slate-700">
                  <Phone className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-xs">Hotline & WhatsApp</h4>
                  <p className="text-xs mt-0.5">+94 77 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-slate-700 rounded-lg flex-shrink-0 text-slate-700">
                  <Mail className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-xs">Email</h4>
                  <p className="text-xs mt-0.5">hello@doodlecakes.lk</p>
                </div>
              </div>
            </div>
          </SketchCard>

          {/* Social connections */}
          <SketchCard className="bg-white" hoverEffect={false}>
            <h3 className="font-display font-black text-lg text-slate-800 mb-3">Scribble Socials</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed font-medium">
              We post cute photos of cake sketches and baking bloopers daily. Come say hello!
            </p>
            <div className="flex flex-col gap-2">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2.5 p-2.5 border-2 border-slate-800 rounded-xl font-display font-bold text-xs transition-all ${social.color} shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]`}
                  whileHover={{ scale: 1.02, x: 2 }}
                >
                  <social.icon className="w-4 h-4 stroke-[2.5]" />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </SketchCard>
        </div>
      </div>
    </div>
  );
};

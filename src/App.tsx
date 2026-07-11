/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomeView } from "./components/HomeView";
import { StoreView } from "./components/StoreView";
import { AboutView } from "./components/AboutView";
import { ContactView } from "./components/ContactView";
import { CartView } from "./components/CartView";
import { DetailsView } from "./components/DetailsView";
import { ViewState } from "./types";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

function AppContent() {
  const [currentView, setView] = useState<ViewState>({ type: "home" });

  // Reset window scroll to top whenever page navigation occurs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  const handleViewDetails = (id: string) => {
    setView({ type: "details", cakeId: id });
  };

  const renderActiveView = () => {
    switch (currentView.type) {
      case "home":
        return (
          <HomeView 
            setView={setView} 
            onViewDetails={handleViewDetails} 
          />
        );
      case "store":
        return (
          <StoreView 
            onViewDetails={handleViewDetails} 
          />
        );
      case "about":
        return <AboutView />;
      case "contact":
        return <ContactView />;
      case "cart":
        return <CartView setView={setView} />;
      case "details":
        return (
          <DetailsView 
            cakeId={currentView.cakeId || ""} 
            setView={setView} 
          />
        );
      default:
        return (
          <HomeView 
            setView={setView} 
            onViewDetails={handleViewDetails} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fefcf3] font-sans antialiased text-slate-800">
      {/* Playful Sticky Header */}
      <Navbar currentView={currentView} setView={setView} />

      {/* Primary Page Canvas */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView.type + (currentView.cakeId || "")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Playful Footer */}
      <Footer setView={setView} />
    </div>
  );
}


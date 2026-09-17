import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { Preloader } from './components/Preloader';
import { SteamCanvas } from './components/SteamCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OriginStory } from './components/OriginStory';
import { Powers } from './components/Powers';
import { TeaStallAnchor } from './components/TeaStallAnchor';
import { AllianceBeacon } from './components/AllianceBeacon';
import { Mission } from './components/Mission';
import { ChatPortal } from './components/ChatPortal';
import { Footer } from './components/Footer';
import { EmailConfigModal } from './components/EmailConfigModal';
import {
  toggleAudio,
  getSoundEnabled,
  playGlassClink,
  playSteamWhoosh,
} from './utils/audio';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(getSoundEnabled());
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isEmailConfigOpen, setIsEmailConfigOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.classList.add('bg-[#080605]', 'text-[#F3ECE4]');
  }, []);

  const handleToggleSound = () => {
    const newState = toggleAudio();
    setIsSoundOn(newState);
    if (newState) {
      playGlassClink();
    }
  };

  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080605] text-[#F3ECE4] selection:bg-[#B45309] selection:text-white">
      {/* Interactive Atmospheric Fog & Mist Layer */}
      <SteamCanvas />

      {/* Minimal Sincere Preloader */}
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Cinematic Experience */}
      {!isLoading && (
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Top Navbar */}
          <Navbar
            isSoundOn={isSoundOn}
            onToggleSound={handleToggleSound}
            onOpenChat={() => {
              playSteamWhoosh();
              setIsChatOpen(true);
            }}
            onScrollTo={handleScrollTo}
          />

          {/* 1. Hero Section with Silhouette & Glowing Amber Eyes */}
          <Hero
            onOpenChat={() => {
              playSteamWhoosh();
              setIsChatOpen(true);
            }}
            onScrollToOrigin={() => handleScrollTo('origin')}
          />

          {/* 2. Origin Story Section (Scroll-Triggered Narrative with Secret Identity Beats) */}
          <OriginStory />

          {/* 3. Tactical Capabilities & Catalyst Section */}
          <Powers />

          {/* 4. Homely Lived-In Roadside Stall Anchor Section with Interactive Bell */}
          <TeaStallAnchor
            onOpenChat={() => {
              playSteamWhoosh();
              setIsChatOpen(true);
            }}
          />

          {/* 5. The Search for the Others / Alliance Beacon Section */}
          <AllianceBeacon
            onOpenChat={() => {
              playSteamWhoosh();
              setIsChatOpen(true);
            }}
          />

          {/* 6. The Watch & Creed Section */}
          <Mission
            onOpenChat={() => {
              playSteamWhoosh();
              setIsChatOpen(true);
            }}
          />

          {/* 7. Cinematic Footer */}
          <Footer
            onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onOpenChat={() => {
              playSteamWhoosh();
              setIsChatOpen(true);
            }}
          />

          {/* Floating Action Button (Understated Direct Line) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="fixed bottom-6 right-6 z-40 flex items-center space-x-3"
          >
            {/* Email Config Tool Button */}
            <button
              onClick={() => setIsEmailConfigOpen(true)}
              title="EmailJS Settings"
              className="p-3 rounded-full bg-[#140D0A]/90 border border-stone-800 text-stone-400 hover:text-amber-400 hover:border-amber-700/50 transition-all shadow-lg cursor-pointer backdrop-blur-md"
            >
              <Settings size={15} />
            </button>

            {/* Direct Helpline Trigger */}
            <button
              onClick={() => {
                playSteamWhoosh();
                setIsChatOpen(true);
              }}
              className="relative px-5 py-3 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-500 text-[#080605] font-sans font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(217,119,6,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] cursor-pointer flex items-center space-x-2 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#080605] animate-pulse" />
              <span>Reach Captain Chai</span>
            </button>
          </motion.div>

          {/* Conversational Helpline Modal */}
          <ChatPortal
            isOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
          />

          {/* Email Configuration Modal */}
          <EmailConfigModal
            isOpen={isEmailConfigOpen}
            onClose={() => setIsEmailConfigOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default App;

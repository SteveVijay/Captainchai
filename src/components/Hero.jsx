import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageSquare, AlertOctagon, MapPin } from 'lucide-react';
import { playSteamWhoosh, playGlassClink } from '../utils/audio';
import { CaptainSilhouette } from './CaptainSilhouette';

const EVOCATIVE_LINES = [
  "Panamukku sleeps easier knowing someone's watching.",
  "The kettle stays hot until dawn. So does the watch.",
  "Some debts are paid in tea. Others in vigilance.",
];

export const Hero = ({ onOpenChat, onOpenSOS, onScrollToOrigin }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const currentFullText = EVOCATIVE_LINES[lineIndex];
    let charIndex = 0;
    setDisplayedText('');
    setIsTypingDone(false);

    const typingInterval = setInterval(() => {
      if (charIndex <= currentFullText.length) {
        setDisplayedText(currentFullText.slice(0, charIndex));
        charIndex++;
      } else {
        setIsTypingDone(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [lineIndex]);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % EVOCATIVE_LINES.length);
    }, 11000);
    return () => clearInterval(cycleInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-6 sm:px-12 bg-stall-warmth"
    >
      {/* Background Cinematic Texture & Vignette */}
      <div className="absolute inset-0 bg-film-grain pointer-events-none opacity-45" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Column: Narrative Headline & Wordmark */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Subtle Sector Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center space-x-2.5 px-3 py-1 rounded bg-[#160E0A] border border-amber-950 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-amber-300/80 uppercase">
              THE VIGIL OF PANAMUKKU
            </span>
          </motion.div>

          {/* Bespoke Logotype Wordmark Treatment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 leading-none">
              <span className="font-wordmark text-6xl sm:text-8xl lg:text-9xl tracking-[0.1em] wordmark-distressed uppercase">
                CAPTAIN
              </span>
              <span className="font-wordmark text-6xl sm:text-8xl lg:text-9xl tracking-[0.1em] wordmark-amber uppercase">
                CHAI
              </span>
            </div>
          </motion.div>

          {/* Typewriter Line Reveal */}
          <div className="min-h-[64px] sm:min-h-[76px] mb-6 flex items-start">
            <p className="font-editorial text-2xl sm:text-3xl text-amber-100/90 font-normal italic leading-snug">
              “{displayedText}”
              <span
                className={`inline-block w-[2px] h-6 sm:h-7 ml-1.5 bg-amber-400 align-middle ${
                  isTypingDone ? 'animate-pulse' : ''
                }`}
              />
            </p>
          </div>

          {/* Grounded Backstory Lead */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl font-sans mb-8 font-light"
          >
            By day, he tends his late father’s tea stall on the corner of Panamukku. By night, changed by an abduction he cannot remember, he watches over the alleys and highway bypass. Fast, strong, and always where trouble is — gone before anyone can thank him.
          </motion.p>

          {/* Action CTAs: Direct Helpline + 1-Click SOS + Story */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3.5 mb-10"
          >
            {/* 1-Click Urgent SOS Flare Button */}
            <button
              onClick={onOpenSOS}
              className="px-6 py-3.5 rounded bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-wordmark text-lg uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(239,68,68,0.45)] hover:shadow-[0_0_40px_rgba(239,68,68,0.7)] cursor-pointer flex items-center space-x-2 animate-pulse"
            >
              <AlertOctagon size={18} />
              <span>EMERGENCY SOS FLARE</span>
            </button>

            {/* Standard Message Button */}
            <button
              onClick={() => {
                playSteamWhoosh();
                onOpenChat();
              }}
              className="px-6 py-3.5 rounded bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-[#080605] font-sans font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(217,119,6,0.3)] cursor-pointer flex items-center space-x-2"
            >
              <MessageSquare size={16} className="text-[#080605]" />
              <span>Reach Captain Chai</span>
            </button>

            {/* Origin Link */}
            <button
              onClick={() => {
                playGlassClink();
                onScrollToOrigin();
              }}
              className="px-4 py-3.5 rounded bg-[#130E0B] hover:bg-[#1C140F] border border-amber-950 hover:border-amber-800/50 text-stone-300 hover:text-amber-200 font-sans text-xs tracking-wider uppercase transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              <span>The Story</span>
              <ArrowDown size={13} className="text-amber-400/80" />
            </button>
          </motion.div>

          {/* Asymmetric Details Strip */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-amber-950/60 max-w-lg w-full">
            <div>
              <span className="block font-wordmark text-2xl text-amber-300/90 tracking-wider">
                PANAMUKKU
              </span>
              <span className="text-[10px] tracking-widest text-stone-300 uppercase font-mono">
                Jurisdiction
              </span>
            </div>
            <div>
              <span className="block font-wordmark text-2xl text-amber-300/90 tracking-wider">
                UNSEEN
              </span>
              <span className="text-[10px] tracking-widest text-stone-300 uppercase font-mono">
                Vigilance
              </span>
            </div>
            <div>
              <span className="block font-wordmark text-2xl text-amber-300/90 tracking-wider">
                20:00 – 05:00
              </span>
              <span className="text-[10px] tracking-widest text-stone-300 uppercase font-mono">
                Watch Hours
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Character Visual (Silhouette with Piercing Glowing Amber Eyes) */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden stall-card p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            <CaptainSilhouette size="hero" className="w-full h-full rounded" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

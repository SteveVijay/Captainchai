import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Shield, MessageSquare, AlertOctagon, Map, Bell } from 'lucide-react';
import { playGlassClink } from '../utils/audio';

export const Navbar = ({
  isSoundOn,
  onToggleSound,
  onOpenChat,
  onOpenSOS,
  onScrollTo,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 py-4 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080605]/95 backdrop-blur-md border-b border-amber-950/40 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.85)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logotype / Wordmark */}
        <button
          onClick={() => {
            playGlassClink();
            onScrollTo('hero');
          }}
          className="flex items-center space-x-3.5 group text-left cursor-pointer focus:outline-none"
        >
          {/* Subtle Tea Glass / Stall Motif with glowing dot */}
          <div className="relative w-8 h-8 rounded bg-[#160F0C] border border-amber-900/40 flex items-center justify-center group-hover:border-amber-600/60 transition-colors">
            <svg
              className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" y1="2" x2="6" y2="4" />
              <line x1="10" y1="2" x2="10" y2="4" />
              <line x1="14" y1="2" x2="14" y2="4" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="font-wordmark text-2xl tracking-[0.14em] uppercase text-[#E8DDD2] group-hover:text-white transition-colors">
              CAPTAIN
            </span>
            <span className="font-wordmark text-2xl tracking-[0.14em] uppercase text-amber-400 group-hover:text-amber-300 transition-colors">
              CHAI
            </span>
            <span className="text-[10px] font-mono tracking-widest text-stone-300 px-1.5 py-0.5 rounded bg-black/50 border border-stone-800 uppercase hidden sm:inline-block">
              PANAMUKKU
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-[0.18em] text-stone-400 font-sans">
          <button
            onClick={() => {
              playGlassClink();
              onScrollTo('origin');
            }}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            The Origin
          </button>
          <button
            onClick={() => {
              playGlassClink();
              onScrollTo('abilities');
            }}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            Capabilities
          </button>
          <button
            onClick={() => {
              playGlassClink();
              onScrollTo('stall');
            }}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            The Bell & Stall
          </button>
          <button
            onClick={() => {
              playGlassClink();
              onScrollTo('map');
            }}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            Patrol Radar
          </button>
          <button
            onClick={() => {
              playGlassClink();
              onScrollTo('alliance');
            }}
            className="hover:text-amber-300 transition-colors cursor-pointer flex items-center space-x-1"
          >
            <span>Alliance</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </button>
          <button
            onClick={() => {
              playGlassClink();
              onScrollTo('mission');
            }}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            The Creed
          </button>
        </nav>

        {/* Action Controls & Emergency SOS */}
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            title={isSoundOn ? 'Mute audio' : 'Enable audio'}
            className="p-2 rounded bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-amber-300 hover:border-amber-700/50 transition-colors cursor-pointer"
          >
            {isSoundOn ? (
              <Volume2 size={15} className="text-amber-400" />
            ) : (
              <VolumeX size={15} />
            )}
          </button>

          {/* ⚡ 1-CLICK EMERGENCY SOS BUTTON */}
          <button
            onClick={onOpenSOS}
            className="px-3 sm:px-4 py-2 rounded bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-wordmark text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] cursor-pointer flex items-center space-x-1.5 animate-pulse"
          >
            <AlertOctagon size={14} />
            <span>SOS FLARE</span>
          </button>

          {/* Standard Reach Captain Button */}
          <button
            onClick={onOpenChat}
            className="hidden sm:flex px-4 py-2 rounded bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-500 text-[#080605] font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(217,119,6,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.45)] cursor-pointer items-center space-x-1.5"
          >
            <span>Message</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

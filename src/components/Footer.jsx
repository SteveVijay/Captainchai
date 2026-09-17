import React from 'react';
import { ArrowUp, Shield, AlertOctagon, Settings } from 'lucide-react';

export const Footer = ({ onScrollToTop, onOpenChat, onOpenSOS, onOpenEmailConfig }) => {
  return (
    <footer className="relative bg-[#060404] text-stone-400 border-t border-amber-950/60 font-sans py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-12">
          
          {/* Col 1: Identity & Backstory Summary */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded bg-[#160E0A] border border-amber-900/40 flex items-center justify-center text-amber-400">
                <Shield size={16} />
              </div>
              <div className="flex items-baseline space-x-1.5">
                <span className="font-wordmark text-2xl tracking-[0.12em] text-[#E8DDD2]">
                  CAPTAIN
                </span>
                <span className="font-wordmark text-2xl tracking-[0.12em] text-amber-400">
                  CHAI
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-md font-light mb-6">
              Kannan runs his late father's roadside stall on the corner of Panamukku. By night, empowered by a night he cannot remember and the recipe his father left behind, he stands watch across the town.
            </p>

            <div className="text-[10px] font-mono text-stone-300 tracking-wider">
              PANAMUKKU SECTOR 4 • 09°58'N, 76°16'E • ACTIVE PATROL 20:00 – 05:00
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="md:col-span-3 flex flex-col space-y-2.5 text-xs">
            <span className="font-mono text-[10px] text-amber-500 tracking-[0.2em] uppercase font-semibold mb-2">
              Dossier Directory
            </span>
            <a href="#hero" className="text-stone-400 hover:text-amber-300 transition-colors">
              The Watch
            </a>
            <a href="#origin" className="text-stone-400 hover:text-amber-300 transition-colors">
              The Origin Story
            </a>
            <a href="#abilities" className="text-stone-400 hover:text-amber-300 transition-colors">
              Tactical Capabilities
            </a>
            <a href="#stall" className="text-stone-400 hover:text-amber-300 transition-colors">
              The Roadside Stall & Bell
            </a>
            <a href="#map" className="text-stone-400 hover:text-amber-300 transition-colors">
              Panamukku Radar Map
            </a>
            <a href="#alliance" className="text-stone-400 hover:text-amber-300 transition-colors">
              The Alliance Protocol
            </a>
            <a href="#mission" className="text-stone-400 hover:text-amber-300 transition-colors">
              The Creed
            </a>
          </div>

          {/* Col 3: Emergency Distress & Direct Helpline */}
          <div className="md:col-span-4 p-6 rounded stall-card space-y-4">
            <div>
              <span className="font-wordmark text-lg text-[#F3ECE4] tracking-wider uppercase block mb-1">
                Immediate Intervention
              </span>
              <p className="text-stone-300 text-xs leading-relaxed font-light">
                In an emergency, trigger the instant flare without forms. For messages or alliance reports, use the helpline.
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={onOpenSOS}
                className="w-full py-2.5 rounded bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-wordmark text-sm uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center space-x-1.5 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
              >
                <AlertOctagon size={15} />
                <span>1-Click SOS Flare</span>
              </button>

              <button
                onClick={onOpenChat}
                className="w-full py-2.5 rounded bg-amber-700/80 hover:bg-amber-600 text-[#080605] font-sans font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Open Direct Message
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits, Developer Settings Link & Top Scroll */}
        <div className="pt-8 border-t border-stone-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <div className="flex items-center space-x-4">
            <p className="font-sans font-light">
              Captain Chai character dossier and official helpline portal.
            </p>
            {/* Subtle Developer Settings Trigger */}
            <button
              onClick={onOpenEmailConfig}
              className="text-stone-400 hover:text-amber-400/80 text-[10px] font-mono tracking-wider transition-colors cursor-pointer flex items-center space-x-1"
            >
              <Settings size={11} />
              <span>Email Service Config</span>
            </button>
          </div>

          <button
            onClick={onScrollToTop}
            className="p-2 rounded bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-amber-300 transition-colors cursor-pointer flex items-center space-x-1"
            title="Back to Top"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest">Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

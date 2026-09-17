import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Sparkles, MessageSquare } from 'lucide-react';
import { playBrassBellChime, playSteamWhoosh } from '../utils/audio';

export const TeaStallAnchor = ({ onOpenChat }) => {
  const [bellRung, setBellRung] = useState(false);
  const [isSwinging, setIsSwinging] = useState(false);

  const handleRingBell = () => {
    playBrassBellChime();
    setIsSwinging(true);
    setBellRung(true);

    setTimeout(() => {
      setIsSwinging(false);
    }, 2800);
  };

  return (
    <section id="stall" className="relative py-24 px-6 sm:px-12 bg-[#0A0706] border-y border-amber-950/40 overflow-hidden">
      {/* Background warm lamplight glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Interactive Visual of the Roadside Stall & Hanging Bell */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6 relative stall-card p-6 rounded"
        >
          {/* Authentic Roadside Tea Stall Canvas */}
          <div className="relative w-full aspect-[4/3] rounded bg-[#080504] overflow-hidden flex items-center justify-center p-4">
            
            {/* Ambient Tungsten Light Halo */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />

            <svg
              className="w-full h-full text-amber-500/70"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="woodTexture" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2E1D13" />
                  <stop offset="100%" stopColor="#140D08" />
                </linearGradient>
                <radialGradient id="hangingLamp" cx="200" cy="50" r="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                  <stop offset="30%" stopColor="#B45309" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#080504" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Hanging Single 60W Bulb */}
              <line x1="200" y1="0" x2="200" y2="48" stroke="#3D291C" strokeWidth="2" />
              <circle cx="200" cy="50" r="90" fill="url(#hangingLamp)" />
              <circle cx="200" cy="50" r="5" fill="#FEF3C7" className="animate-pulse" />
              <path d="M193 46 L207 46 L204 40 L196 40 Z" fill="#241710" />

              {/* Weathered Wooden Stall Canopy */}
              <path d="M40 75 L360 65 L370 100 L30 110 Z" fill="#1C130E" stroke="#382519" strokeWidth="1" />
              {/* Bamboo/Steel Support Poles */}
              <line x1="60" y1="105" x2="55" y2="280" stroke="#241812" strokeWidth="4" />
              <line x1="340" y1="95" x2="345" y2="280" stroke="#241812" strokeWidth="4" />

              {/* Wooden Counter Surface */}
              <rect x="50" y="180" width="300" height="18" rx="2" fill="url(#woodTexture)" stroke="#3D271A" strokeWidth="1" />
              <rect x="60" y="198" width="280" height="75" fill="#100B08" stroke="#241710" strokeWidth="1" />

              {/* Brass Samovar / Tea Boiler with Rising Steam */}
              <rect x="230" y="125" width="45" height="55" rx="3" fill="#26170E" stroke="#52321E" strokeWidth="1.5" />
              <path d="M235 125 L240 112 L265 112 L270 125 Z" fill="#3D2516" />
              <circle cx="252" cy="108" r="4" fill="#6B4125" />
              {/* Brass boiler tap */}
              <path d="M222 165 L230 165 L230 172 L225 172 Z" fill="#784424" />

              {/* Rising Steam Wisps from Kettle */}
              <path
                d="M245 105 Q240 85, 248 65 T244 40"
                stroke="rgba(254, 243, 199, 0.25)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-pulse"
              />
              <path
                d="M258 102 Q265 80, 256 60 T260 35"
                stroke="rgba(245, 158, 11, 0.2)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-pulse"
              />

              {/* Glass Tumblers in Metal Wire Caddy */}
              <rect x="100" y="155" width="70" height="25" rx="1" fill="#160F0B" stroke="#38251A" strokeWidth="1" />
              {[110, 122, 134, 146, 158].map((x) => (
                <g key={x}>
                  <rect x={x} y="150" width="8" height="20" rx="1" fill="#1F1510" stroke="#4A3122" strokeWidth="0.8" />
                  <line x1={x + 2} y1="156" x2={x + 6} y2="156" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.4" />
                </g>
              ))}

              {/* Wooden Bench by the roadside */}
              <rect x="70" y="250" width="260" height="8" rx="1" fill="#1C120C" stroke="#2B1B12" strokeWidth="1" />
              <line x1="100" y1="258" x2="95" y2="290" stroke="#241710" strokeWidth="3" />
              <line x1="300" y1="258" x2="305" y2="290" stroke="#241710" strokeWidth="3" />

              {/* ======================================================= */}
              {/* THE MYTHICAL HANGING BRASS BELL ON THE STALL AWNING     */}
              {/* ======================================================= */}
              <g transform="translate(100, 75)">
                {/* Bell Cord */}
                <line x1="0" y1="0" x2="0" y2="24" stroke="#D97706" strokeWidth="1.5" />
                
                {/* Brass Bell Body with Swing Animation */}
                <g className={isSwinging ? 'origin-top animate-bounce' : ''}>
                  <path
                    d="M-8 24 C-8 16, 8 16, 8 24 L10 32 L-10 32 Z"
                    fill="#F59E0B"
                    stroke="#78350F"
                    strokeWidth="1"
                  />
                  <circle cx="0" cy="34" r="2.5" fill="#FEF3C7" />
                  <line x1="0" y1="34" x2="0" y2="44" stroke="#D97706" strokeWidth="1" />
                  {/* Pull Ring */}
                  <circle cx="0" cy="46" r="3" stroke="#F59E0B" strokeWidth="1" fill="none" />
                </g>
              </g>
            </svg>

            {/* Materialized Silhouette if bell is rung */}
            <AnimatePresence>
              {bellRung && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 bg-[#080504]/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20"
                >
                  {/* Piercing glowing amber eyes in the steam */}
                  <div className="flex items-center space-x-3 mb-4 animate-amber-eyes">
                    <span className="w-3 h-2 rounded-full bg-amber-400" />
                    <span className="w-3 h-2 rounded-full bg-amber-400" />
                  </div>

                  <p className="font-editorial text-2xl text-[#F7EFE8] italic mb-2">
                    “You rang the bell. I'm here. What happened?”
                  </p>

                  <p className="font-mono text-[10px] text-amber-400 tracking-widest uppercase mb-4">
                    CAPTAIN CHAI HAS MATERIALIZED
                  </p>

                  <button
                    onClick={() => {
                      playSteamWhoosh();
                      onOpenChat();
                    }}
                    className="px-5 py-2.5 rounded bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-[#080605] font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2 cursor-pointer shadow-lg"
                  >
                    <MessageSquare size={14} />
                    <span>Speak to Kannan</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Inset Badge */}
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 border border-amber-950 text-[10px] font-mono text-amber-400">
              STALL NO. 4 // PANAMUKKU JUNCTION
            </div>
          </div>

          {/* Bell Trigger Interaction Bar */}
          <div className="mt-4 pt-3 border-t border-amber-950/60 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-stone-400 text-xs font-light">
              <Bell size={14} className="text-amber-400 animate-pulse" />
              <span>The Hanging Awning Bell</span>
            </div>

            <button
              onClick={handleRingBell}
              className="px-3.5 py-1.5 rounded bg-amber-950/60 hover:bg-amber-900/60 border border-amber-800/50 hover:border-amber-500 text-amber-300 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <Bell size={13} />
              <span>{bellRung ? 'Ring Again' : 'Ring The Bell'}</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: The Urban Legend of the Hanging Bell */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#160E0A] border border-amber-950 text-amber-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-6">
            <span>THE PANAMUKKU LEGEND</span>
          </div>

          <h3 className="font-wordmark text-3xl sm:text-5xl text-[#F3ECE4] tracking-[0.08em] uppercase mb-6">
            THE HANGING BRASS BELL
          </h3>

          <p className="font-editorial text-xl sm:text-2xl text-stone-300 italic leading-relaxed mb-6 font-normal">
            “There is a saying in town: if you find yourself in desperate trouble at night, go to the roadside tea stall of Panamukku and ring the hanging bell. He will appear before you like a myth.”
          </p>

          <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed font-light mb-6">
            By daylight, it is just a weathered brass bell hanging from the wooden stall awning, brushed by the morning wind as autorickshaws idle at the corner. But after midnight, the bell connects directly to his heightened acoustic senses across the town.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-amber-950/60 w-full text-xs">
            <div>
              <span className="font-mono text-[10px] uppercase text-amber-500 tracking-wider block mb-1">
                Daytime
              </span>
              <p className="text-stone-400 font-light">
                05:00 AM – 11:30 AM <br />
                Kannan behind the counter.
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-amber-500 tracking-wider block mb-1">
                Night Vigil
              </span>
              <p className="text-stone-400 font-light">
                08:00 PM – 05:00 AM <br />
                Ring the bell for the guardian.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TeaStallAnchor;

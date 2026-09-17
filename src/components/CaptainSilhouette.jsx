import React from 'react';
import { motion } from 'framer-motion';

export const CaptainSilhouette = ({ className = '', size = 'hero' }) => {
  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      {/* Background Deep Shadow & Warm Stall Glow */}
      <div className="absolute inset-0 bg-[#060404]" />
      
      {/* Cinematic Character Artwork (High Resolution) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full overflow-hidden"
      >
        <img
          src="/assets/captain_chai_cinematic.jpg"
          alt="Captain Chai - The Guardian of Panamukku"
          className="w-full h-full object-cover object-[38%_center] filter brightness-[0.92] contrast-[1.05]"
        />

        {/* Clean Vignette & Gradient Overlays to seamlessly mask any unwanted generated text on the right */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080605] via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-[#080605]/95 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#080605] via-[#080605]/90 to-transparent pointer-events-none" />

        {/* Subtle Steam Particles Drifting across the steaming glass */}
        <div className="absolute bottom-16 right-8 w-24 h-40 bg-amber-500/10 rounded-full blur-2xl animate-steam-slow pointer-events-none" />

        {/* Focused Amber Eye Glow Highlight */}
        <div className="absolute top-[35%] left-[55%] pointer-events-none animate-amber-eyes opacity-80">
          <div className="w-2.5 h-1.5 rounded-full bg-amber-300 blur-[1px] shadow-[0_0_12px_rgba(245,158,11,0.9)]" />
        </div>
      </motion.div>

      {/* Subtle Inset Dossier Tag */}
      <div className="absolute bottom-3 left-4 right-4 z-30 px-3.5 py-1.5 rounded bg-black/80 backdrop-blur-md border border-amber-950/80 flex items-center justify-between text-[10px] font-mono text-stone-300">
        <span className="text-amber-400 tracking-wider">KANNAN // CAPTAIN CHAI</span>
        <span className="text-stone-400">PANAMUKKU VIGIL</span>
      </div>
    </div>
  );
};

export default CaptainSilhouette;

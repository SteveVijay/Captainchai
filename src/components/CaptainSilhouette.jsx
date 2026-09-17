import React from 'react';
import { motion } from 'framer-motion';

export const CaptainSilhouette = ({ className = '', size = 'hero' }) => {
  const isHero = size === 'hero';

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      {/* Background Dimly-Lit Roadside Tea Stall Layer (Warm Tungsten Atmosphere) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Warm single hanging bulb glow */}
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-amber-500/18 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        
        {/* Deep ambient stall shadow vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080605] via-transparent to-[#080605]/80" />

        {/* Tea Stall Architectural Silhouette in Background (Blurred, atmospheric) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-35 filter blur-[1.5px]"
          viewBox="0 0 600 500"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="awningGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1C140F" />
              <stop offset="100%" stopColor="#0B0806" />
            </linearGradient>
            <radialGradient id="bulbSpill" cx="420" cy="90" r="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#B45309" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#080605" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Wooden stall awning / tarp */}
          <path d="M40 70 L560 50 L580 110 L20 125 Z" fill="url(#awningGrad)" />
          {/* Awning support poles */}
          <line x1="80" y1="120" x2="70" y2="460" stroke="#1F1712" strokeWidth="6" />
          <line x1="520" y1="105" x2="530" y2="460" stroke="#1F1712" strokeWidth="6" />
          
          {/* Hanging Tungsten Bulb & Cord */}
          <line x1="420" y1="55" x2="420" y2="90" stroke="#2B1F17" strokeWidth="2" />
          <circle cx="420" cy="92" r="130" fill="url(#bulbSpill)" />
          <circle cx="420" cy="92" r="4" fill="#FEF3C7" className="animate-pulse" />

          {/* Tea Stall Counter & Wooden Bench Silhouette */}
          <rect x="50" y="320" width="500" height="24" rx="2" fill="#140E0A" stroke="#261A13" strokeWidth="1" />
          
          {/* Traditional Brass Tea Kettle / Samovar on counter */}
          <path d="M400 320 L405 285 L435 285 L440 320 Z" fill="#1A120D" stroke="#3D271A" strokeWidth="1" />
          <path d="M410 285 L415 272 L425 272 L430 285 Z" fill="#241710" />
          
          {/* Glass Tumblers Rack */}
          <rect x="120" y="300" width="80" height="20" rx="1" fill="#110C09" stroke="#241811" strokeWidth="1" />
          <line x1="135" y1="300" x2="135" y2="320" stroke="#3D291C" strokeWidth="2" />
          <line x1="150" y1="300" x2="150" y2="320" stroke="#3D291C" strokeWidth="2" />
          <line x1="165" y1="300" x2="165" y2="320" stroke="#3D291C" strokeWidth="2" />
          <line x1="180" y1="300" x2="180" y2="320" stroke="#3D291C" strokeWidth="2" />
        </svg>
      </div>

      {/* Foreground Steam Particles Drifting Past */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute bottom-16 left-1/4 w-32 h-48 bg-amber-600/10 rounded-full blur-2xl animate-steam-slow" />
        <div className="absolute bottom-10 right-1/3 w-40 h-60 bg-amber-400/8 rounded-full blur-3xl animate-steam-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* The Central Superhero Silhouette (Kannan in Shadow with Piercing Amber Eyes) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full h-full flex items-center justify-center"
      >
        <svg
          className="w-full max-w-[420px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
          viewBox="0 0 380 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="jacketShadow" x1="190" y1="80" x2="190" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#15100C" />
              <stop offset="35%" stopColor="#0E0A08" />
              <stop offset="100%" stopColor="#060404" />
            </linearGradient>

            <linearGradient id="rimLightRight" x1="280" y1="120" x2="190" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#B45309" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#080605" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="rimLightLeft" x1="100" y1="140" x2="180" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#080605" stopOpacity="0" />
            </linearGradient>

            <pattern id="subtleSteamFabric" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q5 5, 10 10 T20 10" stroke="rgba(245, 158, 11, 0.035)" strokeWidth="0.8" fill="none" />
            </pattern>
          </defs>

          {/* Hood / High Collar Shadow Silhouette */}
          <path
            d="M130 145 C130 95, 155 70, 190 70 C225 70, 250 95, 250 145 C250 180, 240 215, 230 230 L150 230 C140 215, 130 180, 130 145 Z"
            fill="url(#jacketShadow)"
          />

          {/* Head & Jawline in Pitch Shadow */}
          <ellipse cx="190" cy="148" rx="38" ry="46" fill="#0A0706" />

          {/* Upper Body: Dark Weathered Tactical Jacket & Cloak */}
          <path
            d="M110 230 C75 255, 45 320, 25 480 L355 480 C335 320, 305 255, 270 230 C245 220, 220 228, 190 228 C160 228, 135 220, 110 230 Z"
            fill="url(#jacketShadow)"
          />

          {/* Subtle Steam-Wisp Pattern woven into jacket fabric */}
          <path
            d="M110 230 C75 255, 45 320, 25 480 L355 480 C335 320, 305 255, 270 230 Z"
            fill="url(#subtleSteamFabric)"
          />

          {/* Right Shoulder Subtle Rim-Lighting from Stall Bulb */}
          <path
            d="M250 145 C250 190, 280 230, 310 270 C330 310, 345 380, 355 480"
            stroke="url(#rimLightRight)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left Collar Faint Edge */}
          <path
            d="M130 145 C130 190, 105 230, 75 270"
            stroke="url(#rimLightLeft)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Subtle Chest Emblem Silhouette (Tea glass / leaf wisp) */}
          <g transform="translate(182, 260)" opacity="0.4">
            <path
              d="M8 2 L3 10 C3 14, 6 16, 8 16 C10 16, 13 14, 13 10 Z"
              fill="#D97706"
            />
            <path d="M8 2 L8 16" stroke="#1A120D" strokeWidth="1" />
          </g>

          {/* ============================================================ */}
          {/* THE ONLY CLEAR DETAIL: PIERCING GLOWING AMBER / GOLD EYES   */}
          {/* ============================================================ */}
          <g className="animate-amber-eyes">
            {/* Ambient Eye Glow Halo */}
            <circle cx="174" cy="144" r="9" fill="#F59E0B" fillOpacity="0.2" />
            <circle cx="206" cy="144" r="9" fill="#F59E0B" fillOpacity="0.2" />

            {/* Left Eye: Focused Sharp Ellipse */}
            <ellipse cx="174" cy="144" rx="5.5" ry="3.2" fill="#FEF08A" />
            <ellipse cx="174" cy="144" rx="4" ry="2.2" fill="#F59E0B" />
            <circle cx="174" cy="144" r="1.4" fill="#FFFFFF" />

            {/* Right Eye: Focused Sharp Ellipse */}
            <ellipse cx="206" cy="144" rx="5.5" ry="3.2" fill="#FEF08A" />
            <ellipse cx="206" cy="144" rx="4" ry="2.2" fill="#F59E0B" />
            <circle cx="206" cy="144" r="1.4" fill="#FFFFFF" />
          </g>

          {/* Gentle Foreground Steam rising from his chest/cloak */}
          <path
            d="M175 220 Q168 180, 172 150 T170 110"
            stroke="rgba(254, 243, 199, 0.12)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M205 230 Q212 190, 208 160 T210 120"
            stroke="rgba(245, 158, 11, 0.14)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Subtle Bottom Metadata Inset */}
      <div className="absolute bottom-3 left-4 right-4 z-30 px-3.5 py-1.5 rounded bg-black/75 border border-amber-950/60 flex items-center justify-between text-[10px] font-mono text-stone-400">
        <span className="text-amber-400 tracking-wider">PANAMUKKU VIGIL</span>
        <span className="text-stone-300">NIGHT PATROL</span>
      </div>
    </div>
  );
};

export default CaptainSilhouette;

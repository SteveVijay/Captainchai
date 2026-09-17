import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Flame, RefreshCw, Zap, Sparkles } from 'lucide-react';
import { playCaffeineZap, playGlassClink } from '../utils/audio';

const ENERGY_LEVELS = [
  {
    percentage: 100,
    status: 'EXTRA STRONG KADAK BOIL',
    subtext: 'Optimal monsoon problem-solving velocity.',
    color: '#EF4444',
    joke: '“I can hear colors and they all taste like freshly crushed ginger.”'
  },
  {
    percentage: 88,
    status: 'IDEAL CARDAMOM HARMONY',
    subtext: 'Zen wisdom balanced with high-speed delivery.',
    color: '#10B981',
    joke: '“Ready to solve relationship crises and algebraic equations before my tea cools!”'
  },
  {
    percentage: 125,
    status: '1.21 GIGAWATT MONSOON OVERDRIVE',
    subtext: 'Warning: Kettle whistle reaching supersonic pitch.',
    color: '#F59E0B',
    joke: '“Just reorganized the entire periodic table by spice flavor profile!”'
  },
  {
    percentage: 95,
    status: 'SULAIMANI LIME VELOCITY',
    subtext: 'Heartwarming clarity with zero lethargy.',
    color: '#EC4899',
    joke: '“If Monday had a face, I’d offer it a warm cup and a pep talk.”'
  },
  {
    percentage: 110,
    status: 'TRIPLE-BOIL TURBO CHARGE',
    subtext: 'Authorizing emergency deliveries of encouragement.',
    color: '#8B5CF6',
    joke: '“Authorizing 5,000 cups of pure reassurance for anyone feeling overwhelmed!”'
  }
];

export const ChaiOMeter = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isCalibrating, setIsCalibrating] = useState(false);

  const currentLevel = ENERGY_LEVELS[currentIdx];

  const handleRecalibrate = () => {
    setIsCalibrating(true);
    playCaffeineZap();
    playGlassClink();

    setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % ENERGY_LEVELS.length);
      setIsCalibrating(false);
    }, 400);
  };

  return (
    <div id="meter" className="relative p-8 rounded-3xl bg-[#1C100B] border-4 border-black comic-shadow max-w-4xl mx-auto my-12 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-20 transition-colors duration-700 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${currentLevel.color}, transparent 70%)` }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Gauge Dial */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Outer Circular Track */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                className="stroke-stone-800"
                strokeWidth="10"
                fill="transparent"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                stroke={currentLevel.color}
                strokeWidth="10"
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray="264"
                initial={{ strokeDashoffset: 264 }}
                animate={{
                  strokeDashoffset: 264 - (264 * Math.min(currentLevel.percentage, 100)) / 100,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </svg>

            {/* Center Dial Information */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl animate-bounce">☕</span>
              <span className="font-comic text-3xl text-white mt-1">
                {currentLevel.percentage}%
              </span>
              <span className="text-[10px] font-space font-extrabold uppercase text-amber-300">
                CAFFEINE POTENCY
              </span>
            </div>
          </div>

          <div className="mt-2 text-xs font-space text-stone-400 font-bold uppercase">
            LIVE SENSOR: KOCHI TIME
          </div>
        </div>

        {/* Right: Status Display & Re-calibrate button */}
        <div className="flex-1 flex flex-col items-start text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-black/60 border border-stone-700 text-stone-300 font-space text-xs font-black uppercase mb-3">
            <Gauge size={14} className="text-amber-400" />
            <span>KETTLE PRESSURE SENSOR</span>
          </div>

          <h3
            className="font-comic text-2xl sm:text-3xl tracking-wide uppercase transition-colors duration-300 mb-2"
            style={{ color: currentLevel.color }}
          >
            {currentLevel.status}
          </h3>

          <p className="text-stone-300 font-space text-sm font-semibold mb-4">
            {currentLevel.subtext}
          </p>

          <div className="p-3.5 rounded-xl bg-black/40 border border-stone-800/80 mb-6 w-full">
            <p className="font-kalam text-amber-200 text-base italic leading-relaxed">
              {currentLevel.joke}
            </p>
          </div>

          <button
            onClick={handleRecalibrate}
            disabled={isCalibrating}
            className="px-5 py-2.5 rounded-xl bg-[#2D160C] hover:bg-[#451F10] border border-amber-500/40 text-[#FDFBF7] font-space font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all hover:border-amber-400 cursor-pointer"
          >
            <RefreshCw size={14} className={isCalibrating ? 'animate-spin text-amber-400' : 'text-amber-400'} />
            <span>Recalibrate Chai-o-Meter</span>
          </button>
        </div>

      </div>
    </div>
  );
};

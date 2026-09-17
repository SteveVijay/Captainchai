import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_STATES = [
  'Brewing.',
  'Brewing..',
  'Brewing...',
  'Almost there.',
];

export const Preloader = ({ onComplete }) => {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % LOADING_STATES.length);
    }, 450);

    const timer = setTimeout(() => {
      clearInterval(textInterval);
      onComplete();
    }, 1800);

    return () => {
      clearInterval(textInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070504] text-[#E8DDD2] select-none"
    >
      {/* Ambient center warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.12)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Single minimal amber ember slowly brightening */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0.2 }}
            animate={{
              scale: [0.8, 1.25, 0.9, 1.4],
              opacity: [0.3, 0.9, 0.5, 1],
            }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
            }}
            className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#D97706] via-[#F59E0B] to-[#FEF3C7] shadow-[0_0_35px_12px_rgba(245,158,11,0.45)]"
          />

          {/* Subtle outer wisp pulse */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
            className="absolute w-6 h-6 rounded-full border border-amber-500/30"
          />
        </div>

        {/* Restrained, sincere loading text */}
        <div className="h-6 flex items-center justify-center">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-stone-400">
            {LOADING_STATES[stageIndex]}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;

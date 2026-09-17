import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Users, ShieldAlert, Sparkles, Send, CheckCircle2, Lock } from 'lucide-react';
import { playMessageTone, playConfirmationChime, playSteamWhoosh } from '../utils/audio';

export const AllianceBeacon = ({ onOpenChat }) => {
  const [activeTab, setActiveTab] = useState('manifesto');
  const [signalSent, setSignalSent] = useState(false);
  const [alias, setAlias] = useState('');
  const [manifestation, setManifestation] = useState('');

  const handleSendSignal = (e) => {
    e.preventDefault();
    if (!alias.trim() || !manifestation.trim()) return;

    playConfirmationChime();
    setSignalSent(true);
    setTimeout(() => {
      setAlias('');
      setManifestation('');
    }, 1000);
  };

  return (
    <section id="alliance" className="relative py-28 px-6 sm:px-12 bg-[#080605] border-t border-amber-950/40 overflow-hidden">
      {/* Subtle background radar ring pulses */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-amber-950/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#160E0A] border border-amber-950 text-amber-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-6"
          >
            <Radio size={13} className="text-amber-400 animate-pulse" />
            <span>OPEN FREQUENCY // THE SEARCH FOR THE OTHERS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-wordmark text-4xl sm:text-6xl text-[#F3ECE4] tracking-[0.1em] uppercase mb-4"
          >
            YOU ARE NOT THE ONLY ONE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-editorial text-xl sm:text-2xl text-stone-300 italic max-w-2xl mx-auto leading-relaxed"
          >
            “Whoever took me that night didn't stop with one stall in Panamukku. There are others out there trying to understand what was done to them.”
          </motion.p>
        </div>

        {/* The Alliance Broadcast Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Kannan's Personal Open Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 stall-card stall-border-asymmetric p-8 sm:p-10 rounded"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded bg-[#1C120D] border border-amber-900/40 flex items-center justify-center text-amber-400">
                <Users size={20} />
              </div>
              <div>
                <h3 className="font-wordmark text-2xl text-[#F3ECE4] uppercase tracking-wider">
                  The Sanctuary Protocol
                </h3>
                <span className="text-[10px] font-mono text-stone-300 tracking-wider">
                  ENCRYPTED BEACON FOR ALTERED INDIVIDUALS
                </span>
              </div>
            </div>

            <blockquote className="font-editorial text-lg sm:text-xl text-[#F5EDE4] italic leading-relaxed mb-6 font-normal border-l border-amber-500/40 pl-4">
              “If you woke up with heat rushing through your veins, hearing whispered conversations through brick walls, or moving faster than humanly possible — don't hide in fear. I know what it feels like to think you're losing your mind. We are stronger together, and we protect our own.”
            </blockquote>

            <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed font-light mb-6">
              Kannan is actively listening for anomalous reports across neighboring districts and railway corridors. Whether your alterations require physical stabilization or you are looking to stand watch together, this portal serves as a safe meeting ground.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-amber-950/60 text-xs">
              <div className="flex items-start space-x-2.5 text-stone-400 font-light">
                <ShieldAlert size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Zero disclosure to external organizations or state agencies.</span>
              </div>
              <div className="flex items-start space-x-2.5 text-stone-400 font-light">
                <Lock size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Secure rendezvous points arranged behind the Panamukku stall.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Encrypted Ability Signal Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 stall-card p-6 sm:p-8 rounded"
          >
            <div className="flex items-center justify-between pb-4 border-b border-amber-950 mb-6">
              <div className="flex items-center space-x-2">
                <Radio size={16} className="text-amber-400 animate-pulse" />
                <span className="font-mono text-xs text-amber-300 uppercase tracking-wider font-semibold">
                  CONFIDENTIAL BEACON
                </span>
              </div>
              <span className="text-[10px] font-mono text-stone-300">
                P2P ENCRYPTED
              </span>
            </div>

            <AnimatePresence mode="wait">
              {!signalSent ? (
                <form onSubmit={handleSendSignal} className="space-y-4 font-sans text-xs">
                  <div>
                    <label className="block font-mono text-[10px] tracking-wider uppercase text-stone-400 mb-1.5">
                      Alias or First Name
                    </label>
                    <input
                      type="text"
                      value={alias}
                      onChange={(e) => setAlias(e.target.value)}
                      placeholder="e.g. Runner, Farhan, V..."
                      required
                      className="w-full px-3.5 py-2.5 rounded bg-[#080605] border border-amber-950 focus:border-amber-600/60 text-stone-200 placeholder-stone-700 text-xs font-mono focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-wider uppercase text-stone-400 mb-1.5">
                      Describe What You Are Experiencing / Alterations
                    </label>
                    <textarea
                      rows={3}
                      value={manifestation}
                      onChange={(e) => setManifestation(e.target.value)}
                      placeholder="e.g. Extreme thermal sensitivity, rapid kinetic bursts, sensory over-stimulation..."
                      required
                      className="w-full px-3.5 py-2.5 rounded bg-[#080605] border border-amber-950 focus:border-amber-600/60 text-stone-200 placeholder-stone-700 text-xs leading-relaxed focus:outline-none"
                    />
                  </div>

                  <p className="text-[11px] text-stone-400 font-light italic">
                    Kannan reads all anomalous signal transmissions personally before dawn.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-[#080605] font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                  >
                    <Send size={14} />
                    <span>Transmit Secure Signal</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-950/80 border border-amber-500/50 mx-auto mb-3 flex items-center justify-center text-amber-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <h4 className="font-wordmark text-xl text-[#F3ECE4] uppercase tracking-wider mb-1">
                    SIGNAL LOGGED ON PRIVATE FREQUENCY
                  </h4>
                  <p className="text-stone-300 text-xs font-light leading-relaxed mb-4">
                    Kannan has received your beacon. Stay low, avoid drawing attention to yourself, and watch the Panamukku stall.
                  </p>
                  <button
                    onClick={() => setSignalSent(false)}
                    className="text-[11px] font-mono text-amber-400 hover:underline uppercase"
                  >
                    Transmit Another Signal
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AllianceBeacon;

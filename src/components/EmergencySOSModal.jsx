import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertOctagon, X, ShieldAlert, MapPin, Radio, Zap, CheckCircle2, PhoneCall } from 'lucide-react';
import { playEmergencyDistressPulse, playConfirmationChime, playSteamWhoosh } from '../utils/audio';

const PANAMUKKU_SECTORS = [
  'Sector 4 — Roadside Junction (Near Tea Stall)',
  'Sector 1 — North Canal Bridge Corridor',
  'Sector 2 — Old Market Road & Fish Stalls',
  'Sector 3 — Railway Bypass & Warehouses',
  'Sector 5 — West Residential Alleyways',
];

export const EmergencySOSModal = ({ isOpen, onClose }) => {
  const [selectedSector, setSelectedSector] = useState(PANAMUKKU_SECTORS[0]);
  const [isActivated, setIsActivated] = useState(false);
  const [etaSeconds, setEtaSeconds] = useState(38);
  const [isBeaconActive, setIsBeaconActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActivated && etaSeconds > 0) {
      timer = setInterval(() => {
        setEtaSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActivated, etaSeconds]);

  if (!isOpen) return null;

  const handleTriggerSOS = () => {
    playEmergencyDistressPulse();
    setIsActivated(true);
    setIsBeaconActive(true);
    setEtaSeconds(34);
  };

  const handleCancelSOS = () => {
    setIsActivated(false);
    setIsBeaconActive(false);
    setEtaSeconds(38);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg bg-[#0F0806] rounded-2xl border-2 border-red-900/60 shadow-[0_0_50px_rgba(239,68,68,0.25)] p-6 sm:p-8 text-[#F7EFE8] overflow-hidden"
      >
        {/* Pulsing Red Emergency Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-red-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-red-950/80 mb-6">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-lg bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-400 animate-pulse">
              <AlertOctagon size={20} />
            </div>
            <div>
              <h3 className="font-wordmark text-2xl tracking-wider text-red-400 leading-none">
                EMERGENCY DISTRESS FLARE
              </h3>
              <p className="text-[10px] font-mono text-stone-400 tracking-widest uppercase mt-0.5">
                PANAMUKKU RAPID INTERVENTION BEACON
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!isActivated ? (
            /* ======================================================= */
            /* 1-CLICK SOS TRIGGER STATE (ZERO COMPLEX FORMS)         */
            /* ======================================================= */
            <motion.div
              key="trigger-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-stone-300 leading-relaxed font-light">
                <p>
                  <strong>No forms, no questions.</strong> If you are in immediate danger, being followed, or witnessing a crisis in Panamukku, tap the emergency button below.
                </p>
              </div>

              {/* Quick Sector Selection */}
              <div>
                <label className="block font-mono text-[10px] tracking-wider uppercase text-stone-400 mb-2 flex items-center space-x-1.5">
                  <MapPin size={12} className="text-red-400" />
                  <span>Select Your Panamukku Sector:</span>
                </label>
                <div className="space-y-2">
                  {PANAMUKKU_SECTORS.map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => setSelectedSector(sec)}
                      className={`w-full text-left px-3.5 py-2.5 rounded text-xs font-sans transition-all flex items-center justify-between cursor-pointer ${
                        selectedSector === sec
                          ? 'bg-red-950/60 border border-red-500/60 text-red-200'
                          : 'bg-[#140C09] border border-stone-800/80 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                      }`}
                    >
                      <span className="font-light">{sec}</span>
                      {selectedSector === sec && <CheckCircle2 size={14} className="text-red-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Giant Urgent SOS Trigger Button */}
              <button
                onClick={handleTriggerSOS}
                className="w-full py-5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-wordmark text-2xl tracking-[0.14em] uppercase shadow-[0_0_35px_rgba(239,68,68,0.5)] hover:shadow-[0_0_50px_rgba(239,68,68,0.75)] transition-all cursor-pointer flex items-center justify-center space-x-3 group animate-pulse"
              >
                <Zap size={24} className="fill-white group-hover:scale-110 transition-transform" />
                <span>SIGNAL KANNAN NOW</span>
              </button>

              <p className="text-center font-mono text-[10px] text-stone-500 tracking-wider">
                TRANSMITS HIGH-PRIORITY METABOLIC PING TO CAPTAIN CHAI
              </p>
            </motion.div>
          ) : (
            /* ======================================================= */
            /* ACTIVATED DISTRESS FLARE STATE (LIVE TELEMETRY & ETA)   */
            /* ======================================================= */
            <motion.div
              key="activated-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 text-center"
            >
              {/* Pulsing Radar Beacon Animation */}
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-75" />
                <div className="absolute inset-2 rounded-full border border-red-400 animate-ping opacity-50" style={{ animationDelay: '0.4s' }} />
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.8)]">
                  <Zap size={28} className="animate-bounce" />
                </div>
              </div>

              <div>
                <h4 className="font-wordmark text-3xl text-red-400 tracking-wider uppercase mb-1">
                  DISTRESS FLARE ACTIVE
                </h4>
                <p className="font-mono text-xs text-amber-300 tracking-widest uppercase">
                  HYPER-VELOCITY TRANSIT INITIATED
                </p>
              </div>

              {/* Countdown Telemetry */}
              <div className="p-4 rounded-xl bg-[#180A08] border border-red-900/60 flex items-center justify-around">
                <div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">
                    Estimated Arrival
                  </span>
                  <span className="font-wordmark text-4xl text-red-400 tracking-wider">
                    {etaSeconds}s
                  </span>
                </div>
                <div className="h-10 w-[1px] bg-red-950" />
                <div className="text-left">
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">
                    Target Sector
                  </span>
                  <span className="font-sans text-xs text-stone-200 font-medium">
                    {selectedSector.split('—')[0]}
                  </span>
                </div>
              </div>

              {/* Crucial Immediate Safety Instructions */}
              <div className="p-4 rounded-xl bg-black/60 border border-stone-800 text-left text-xs space-y-2 text-stone-300 font-light">
                <div className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                  ⚠️ INSTRUCTIONS WHILE YOU WAIT:
                </div>
                <p>1. Move toward lit shopfronts or streetlamps if possible.</p>
                <p>2. Keep your back to a wall and avoid dark dead-end alleys.</p>
                <p>3. Kannan approaches in shadow — do not panic when you feel the steam rush.</p>
              </div>

              {/* Cancel Button */}
              <div className="pt-2">
                <button
                  onClick={handleCancelSOS}
                  className="px-5 py-2.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-400 hover:text-stone-200 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Cancel Distress Signal (False Alarm)
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default EmergencySOSModal;

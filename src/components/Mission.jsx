import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { playSteamWhoosh } from '../utils/audio';

export const Mission = ({ onOpenChat }) => {
  return (
    <section id="mission" className="relative py-28 px-6 sm:px-12 bg-[#080605] overflow-hidden">
      {/* Background warm ambient lamp aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Mission Manifesto Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded stall-card stall-border-asymmetric p-10 sm:p-16 text-center relative overflow-hidden"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#160E0A] border border-amber-950 text-amber-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-8">
            <span>THE CREED</span>
          </div>

          {/* Sincere Mission Statement */}
          <blockquote className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F7EFE8] font-normal italic leading-tight max-w-4xl mx-auto mb-8">
            “I couldn't save my father. <br className="hidden sm:inline" />
            <span className="text-amber-300">I can still show up for everyone else's.</span>”
          </blockquote>

          <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            The town of Panamukku has no spotlight in the sky, and no sirens to summon protection. If you are cornered, if someone you care for is in danger, or if the night feels insurmountable — leave a message here. I am never far.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                playSteamWhoosh();
                onOpenChat();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-[#080605] font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(217,119,6,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] cursor-pointer flex items-center justify-center space-x-2.5 group"
            >
              <MessageSquare size={16} className="text-[#080605]" />
              <span>Leave a Message for Kannan</span>
            </button>
          </div>
        </motion.div>

        {/* Quiet Operating Principles Grid (Asymmetric) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded stall-card flex flex-col justify-between">
            <div className="flex items-center space-x-2.5 mb-3 text-amber-400">
              <ShieldCheck size={18} />
              <h4 className="font-wordmark text-lg uppercase tracking-wider text-[#F3ECE4]">
                Total Discretion
              </h4>
            </div>
            <p className="text-stone-300 font-sans text-xs leading-relaxed font-light">
              No reports are shared with outside authorities. What you say here remains strictly between you and Kannan.
            </p>
          </div>

          <div className="p-6 rounded stall-card flex flex-col justify-between">
            <div className="flex items-center space-x-2.5 mb-3 text-amber-400">
              <Clock size={18} />
              <h4 className="font-wordmark text-lg uppercase tracking-wider text-[#F3ECE4]">
                Night Response
              </h4>
            </div>
            <p className="text-stone-300 font-sans text-xs leading-relaxed font-light">
              Immediate sweeps across Panamukku lanes between dusk and 5:00 AM. Urgent alerts trigger rapid on-ground intervention.
            </p>
          </div>

          <div className="p-6 rounded stall-card flex flex-col justify-between">
            <div className="flex items-center space-x-2.5 mb-3 text-amber-400">
              <MapPin size={18} />
              <h4 className="font-wordmark text-lg uppercase tracking-wider text-[#F3ECE4]">
                Ground Coverage
              </h4>
            </div>
            <p className="text-stone-300 font-sans text-xs leading-relaxed font-light">
              Panamukku main junction, canal bridge corridor, railway bypass, and nearby residential lanes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;

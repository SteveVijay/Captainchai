import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, Shield, Flame } from 'lucide-react';

const ABILITIES = [
  {
    id: 'speed',
    title: 'Kinetic Hyper-Velocity',
    metric: 'Instantaneous Response',
    icon: Zap,
    description:
      'Moves at speeds that outpace vehicle traffic along the Panamukku bypass. Able to cross the entire district in seconds, intervening before collision or violence occurs and vanishing into the night before authorities arrive.',
    classification: 'Sub-cellular kinetic modifications implanted during the abduction night.',
  },
  {
    id: 'senses',
    title: 'Acoustic & Tactile Perception',
    metric: 'Radius: 3.5 Kilometers',
    icon: Eye,
    description:
      'Detects micro-acoustic vibrations and distress frequencies across town. The sharp ring of the stall\'s hanging brass bell, a muffled struggle in a dark lane, or the sudden skid of tires against wet gravel registers instantly in his consciousness.',
    classification: 'Heightened sensory processing calibrated to Panamukku street acoustics.',
  },
  {
    id: 'strength',
    title: 'Enhanced Structural Density & Force',
    metric: 'Tensile Resistance',
    icon: Shield,
    description:
      'Possesses extraordinary muscular resilience and physical density. Capable of stopping runaway auto-rickshaws with his bare hands, breaking heavy industrial padlocks, and absorbing blunt impact without injury.',
    classification: 'First discovered when his fingers effortlessly crushed tempered tea glasses.',
  },
  {
    id: 'catalyst',
    title: 'The Catalyst: His Father’s Recipe',
    metric: 'Biochemical Ignition & Stabilizer',
    icon: Flame,
    description:
      'The alterations inflicted on him during his abduction would remain dormant or physically unstable without his late father\'s exact herbal tea recipe. The balance of roasted spices and ginger acts as the precise bio-catalyst that awakens and stabilizes his altered cells.',
    classification: 'Brewed fresh twice a day behind the Panamukku stall counter.',
  },
];

export const Powers = () => {
  return (
    <section id="abilities" className="relative py-28 px-6 sm:px-12 bg-[#080605] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-film-grain pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#160E0A] border border-amber-950 text-amber-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-6"
          >
            <span>FIELD DOSSIER // CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-wordmark text-4xl sm:text-6xl text-[#F3ECE4] tracking-[0.1em] uppercase mb-4"
          >
            TACTICAL CAPABILITIES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-300 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light"
          >
            Capabilities forged on the night of the abduction, catalyzed and stabilized by his father's blend.
          </motion.p>
        </div>

        {/* Asymmetric Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ABILITIES.map((ability, idx) => {
            const Icon = ability.icon;
            return (
              <motion.div
                key={ability.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="stall-card stall-border-asymmetric p-8 sm:p-10 flex flex-col justify-between rounded"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded bg-[#1C140F] border border-amber-900/40 flex items-center justify-center text-amber-400">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-stone-300 uppercase px-2.5 py-1 rounded bg-black/60 border border-stone-800">
                      {ability.metric}
                    </span>
                  </div>

                  <h3 className="font-wordmark text-2xl sm:text-3xl text-[#F3ECE4] tracking-wide uppercase mb-3">
                    {ability.title}
                  </h3>

                  <p className="text-stone-300 font-sans text-sm leading-relaxed mb-6 font-light">
                    {ability.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800/80">
                  <p className="font-mono text-[11px] text-amber-500/80 tracking-wide leading-relaxed">
                    ORIGIN: {ability.classification}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Powers;

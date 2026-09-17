import React from 'react';
import { motion } from 'framer-motion';

const NARRATIVE_BEATS = [
  {
    act: 'ACT I',
    tag: 'THE ROADSIDE STALL',
    quote: 'Kannan grew up helping his father run a small roadside tea stall in the town of Panamukku.',
    subtext: 'Before the sleepless nights, there was only the aroma of crushed green cardamom and bruised ginger in the morning fog, the familiar double-clink of thick glass tumblers against steel saucers, and the steady rhythm of two pairs of hands serving the early shift.',
    homelyDetail: 'Cardamom, fresh ginger, and thirty years of quiet routine on the Panamukku junction.',
  },
  {
    act: 'ACT II',
    tag: 'THE SUDDEN LOSS',
    quote: 'After his father died in a road accident, Kannan — barely out of his teens — had no choice but to take over the stall and support his mother, giving up his own path in life.',
    subtext: 'He put away his books and his own ambitions without a word. The brass kettle could not go cold, and his mother’s weathered hands could not bear the heavy iron pots alone.',
    homelyDetail: 'He chose responsibility over himself, every morning at 5:00 AM.',
  },
  {
    act: 'ACT III',
    tag: 'THE ABDUCTION & ALTERATION',
    quote: 'One night he was abducted by an unknown stranger, held overnight, and subjected to an unexplained alteration before being left unconscious on the roadside.',
    subtext: 'No ransom was ever asked. No face was ever remembered. During those missing twelve hours, something unnatural was done to his biology — an impossible kinetic enhancement woven directly into his bloodstream and nervous system.',
    homelyDetail: 'Found on the wet gravel just two hundred paces from the stall with a strange heat beneath his skin.',
  },
  {
    act: 'ACT IV',
    tag: 'THE FATHER’S RECIPE & CATALYST',
    quote: 'Shaken, he went home and slept. When he woke, his mother made him tea from his father\'s old recipe to comfort him.',
    subtext: 'The exact ratio of strong Assam leaf, crushed cloves, black peppercorns, and roasted spices his father had perfected over thirty years — a blend that unknowingly contained the exact biochemical catalyst needed to ignite and stabilize the foreign alterations in his cells.',
    homelyDetail: 'A mother’s comfort that unintentionally ignited a superhuman engine.',
  },
  {
    act: 'ACT V',
    tag: 'THE AWAKENING',
    quote: 'The moment he drank it, his heart raced, his senses sharpened, and the slightest touch of his fingers shattered the glass in his hand.',
    subtext: 'The kinetic modifications locked into place. The distant sound of a screeching tire three streets over struck his ears as loud as thunder. His body moved at blurring velocity before his conscious mind could even register the step.',
    homelyDetail: 'Hot tea on the wooden counter, shattered tempered glass, and a transformed human heart.',
  },
  {
    act: 'ACT VI',
    tag: 'THE DOUBLE LIFE',
    quote: 'He never learned who took him or why — but he was changed. By day he remained the quiet tea-seller keeping his father\'s stall alive. By night, he became something else.',
    subtext: 'By day he serves twenty-rupee cups, smiles quietly at town gossip, and wipes down wooden benches. By night, he moves across Panamukku at impossible speeds, preventing tragedy in the shadows, and by dawn he is back behind the stove boiling milk as if nothing happened.',
    homelyDetail: 'Not a single neighbor or regular customer suspects who he becomes when the lamps go out.',
  },
  {
    act: 'ACT VII',
    tag: 'THE UNSEEN GUARDIAN',
    quote: 'The people of Panamukku thank Captain Chai every time he saves someone. None of them have ever thought to thank Kannan, the boy who\'s poured their tea every morning for years.',
    subtext: 'Only his mother suspects something in the weary calm of his eyes when he returns before sunrise, but she simply pours his father’s blend into his glass and never asks.',
    homelyDetail: 'A secret kept in silence over steaming brass and roadside gravel.',
  },
];

export const OriginStory = () => {
  return (
    <section id="origin" className="relative py-32 px-6 sm:px-12 bg-[#090706] overflow-hidden">
      {/* Background Ambient Textures */}
      <div className="absolute inset-0 bg-film-grain pointer-events-none opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080605] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080605] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#160E0A] border border-amber-950 text-amber-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-6"
          >
            <span>CONFIDENTIAL RECORD // PANAMUKKU</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-wordmark text-4xl sm:text-6xl text-[#F3ECE4] tracking-[0.1em] uppercase mb-4"
          >
            THE ORIGIN OF THE VIGIL
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-editorial text-xl sm:text-2xl text-stone-300 italic max-w-xl mx-auto leading-relaxed"
          >
            An abduction by an unknown stranger, a father's stabilizing recipe, and a double life born from quiet grief.
          </motion.p>
        </div>

        {/* Narrative Scroll Sequence */}
        <div className="space-y-28 sm:space-y-36">
          {NARRATIVE_BEATS.map((beat, idx) => (
            <motion.div
              key={beat.act}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center text-center max-w-2xl mx-auto px-4"
            >
              {/* Act & Tag Marker */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="font-wordmark text-lg tracking-widest text-amber-500">
                  {beat.act}
                </span>
                <span className="w-1 h-1 rounded-full bg-stone-700" />
                <span className="font-mono text-[10px] tracking-widest text-stone-300 uppercase">
                  {beat.tag}
                </span>
              </div>

              {/* Central Narrative Beat */}
              <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F5EDE4] font-normal leading-relaxed mb-6">
                “{beat.quote}”
              </blockquote>

              {/* Subtext Observation */}
              <p className="font-sans text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-lg mb-4">
                {beat.subtext}
              </p>

              {/* Homely Sensory Detail */}
              <div className="text-[11px] font-mono text-amber-400/70 tracking-wide">
                — {beat.homelyDetail}
              </div>

              {/* Minimal Divider */}
              <div className="w-12 h-[1px] bg-amber-950 mt-12" />
            </motion.div>
          ))}
        </div>

        {/* Dramatic Irony Climax Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1 }}
          className="mt-36 p-8 sm:p-12 rounded stall-card stall-border-asymmetric text-left max-w-2xl mx-auto"
        >
          <div className="font-mono text-[10px] tracking-[0.25em] text-amber-500 uppercase mb-3">
            THE UNNOTICED HERO
          </div>
          <p className="font-editorial text-2xl sm:text-3xl text-[#F3ECE4] italic leading-relaxed mb-4">
            “By dawn, the gravel is swept, the apron is tied around his waist, and the water is brought to a rolling boil. To the town, he is just Kannan.”
          </p>
          <p className="text-stone-300 text-xs font-sans leading-relaxed font-light">
            He wants no statue. He wants no gratitude. He only wants to ensure that in Panamukku, no family has to wake up to the sudden silence he lived through.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default OriginStory;

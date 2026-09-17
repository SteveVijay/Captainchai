// Mood Chai Recommendation Engine for Captain Chai

export const MOOD_BLENDS = [
  {
    id: 'ginger-rage',
    name: 'Ginger Rage-Buster Chai',
    tagline: 'Boiling-Point Anger Disperser',
    spiciness: '🔥🔥🔥🔥🔥',
    caffeine: '98%',
    description: 'Triple-crushed ginger, roasted peppercorns, and lightning-infused Assam leaves that vaporize workplace frustration and traffic anger into pure constructive momentum.',
    color: '#E27022',
    icon: '⚡🫖',
    quote: 'Channel that boiling water into making tea, not blowing your whistle!',
    keywords: ['angry', 'mad', 'rage', 'boss', 'traffic', 'fight', 'hate', 'furious', 'annoyed', 'unfair', 'screaming', 'frustrated']
  },
  {
    id: 'elaichi-zen',
    name: 'Cardamom Calm Soul-Steeper',
    tagline: 'Deep Anxiety & Stress Neutralizer',
    spiciness: '🌱🌱✨✨',
    caffeine: '65%',
    description: 'Whole green cardamom pods bruised by monsoon thunder, steamed with buffalo milk and pure Kerala honey. Gently decompresses racing thoughts and tight shoulders.',
    color: '#10B981',
    icon: '🌿☕',
    quote: 'Even the strongest tea leaves need 5 minutes of quiet soaking. Breathe, friend.',
    keywords: ['stress', 'anxious', 'anxiety', 'worried', 'nervous', 'scared', 'panic', 'overwhelmed', 'pressure', 'exam', 'deadline', 'tired', 'burnout']
  },
  {
    id: 'cutting-turbo',
    name: 'Cutting Chai Turbo 3000',
    tagline: 'Sloth & Procrastination Smite',
    spiciness: '⚡⚡⚡⚡⚡',
    caffeine: '150%',
    description: 'Concentrated 2x decoction with raw cane jaggery, cinnamon bark, and a spark of static electricity. Guaranteed to kickstart stuck projects and sluggish Monday mornings.',
    color: '#F59E0B',
    icon: '🚀☕',
    quote: 'Procrastination is just un-steeped potential! Drink up and let us conquer this!',
    keywords: ['lazy', 'stuck', 'procrastination', 'monday', 'boring', 'unmotivated', 'sleepy', 'focus', 'start', 'slow', 'lost']
  },
  {
    id: 'sulaimani-balm',
    name: 'Malabar Sulaimani Heart Healer',
    tagline: 'Heartbreak & Bad Day Antidote',
    spiciness: '🍋🍯✨',
    caffeine: '40%',
    description: 'Clear golden black tea infused with sweet cloves, freshly squeezed sun-ripened lime, and wild forest honey. Sips like a warm hug on a stormy night.',
    color: '#EC4899',
    icon: '💖🫖',
    quote: 'People might break promises, but a good cup of tea never lies. You are going to be okay.',
    keywords: ['heartbreak', 'sad', 'breakup', 'cry', 'lonely', 'depressed', 'grief', 'hurt', 'friend', 'relationship', 'bad day', 'crying']
  },
  {
    id: 'masala-decision',
    name: 'Clove & Star-Anise Clarity Brew',
    tagline: 'Tough Decision & Fog Disperser',
    spiciness: '🌟🌟🌟🌟',
    caffeine: '85%',
    description: 'A symmetrical blend of whole star anise, royal nutmeg, and roasted mace. Clears mental fog so you can see the right crossroad clearly.',
    color: '#8B5CF6',
    icon: '🔮☕',
    quote: 'When in doubt, take the path that keeps your tea warm and your integrity intact.',
    keywords: ['decision', 'confused', 'career', 'choice', 'job', 'future', 'dilemma', 'path', 'which', 'college', 'option']
  },
  {
    id: 'kadak-general',
    name: 'Captain’s Master Kadak Blend',
    tagline: 'The Everyday Heroic All-Rounder',
    spiciness: '☕⚡🔥',
    caffeine: '90%',
    description: 'The secret stall formula: thick milk boiled three times with crushed ginger, cardamom, and lightning-zapped CTC tea leaves. Fixes 99.8% of mortal predicaments.',
    color: '#D97706',
    icon: '🏆☕',
    quote: 'No problem is too big or too small — we steep it out together!',
    keywords: []
  }
];

export const recommendChai = (text = '') => {
  const lower = text.toLowerCase();
  for (const blend of MOOD_BLENDS) {
    if (blend.keywords.length > 0 && blend.keywords.some(kw => lower.includes(kw))) {
      return blend;
    }
  }
  return MOOD_BLENDS[MOOD_BLENDS.length - 1]; // Default Kadak Blend
};

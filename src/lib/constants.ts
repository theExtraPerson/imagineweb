/**
 * IMAGINE DREAMS AFRICA — SITE CONSTANTS
 * All copy, data, and configuration from PRD
 */

// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════

export const NAVIGATION = [
  { label: 'About', href: '#about' },
  { label: 'Pillars', href: '#pillars' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
];

// ═══════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════

export const HERO = {
  location: 'Kampala, Uganda',
  title: ['BUILDING', 'DIGITAL', 'AFRICA'],
  tagline: 'A movement. A company. A blueprint for the continent\'s digital future — built from Kampala, for Africa.',
};

// ═══════════════════════════════════════
// ABOUT SECTION
// ═══════════════════════════════════════

export const ABOUT = {
  heading: ['NOT A', 'STARTUP.', 'A SYSTEM.'],
  paragraphs: [
    'Imagine Dreams Africa is building the digital infrastructure Africa deserves. We are not a startup chasing trends — we are a systematic intervention in Africa\'s technological future.',
    'Through six strategic pillars and three active ventures, we create companies, shape policy, and demonstrate what\'s possible when Africans build with Africa in mind.',
    'From Kampala, for the continent. Every line of code, every policy recommendation, every product decision serves one purpose: African digital sovereignty.',
  ],
  stats: [
    { value: '6', label: 'Strategic Pillars' },
    { value: '3', label: 'Active Ventures' },
    { value: '54', label: 'African Nations' },
    { value: '01', label: 'City. Kampala.' },
  ],
  ctaPrimary: { label: 'Our Architecture', href: '#pillars' },
  ctaSecondary: { label: 'See Our Work', href: '#ventures' },
};

// ═══════════════════════════════════════
// PILLARS SECTION
// ═══════════════════════════════════════

export const PILLARS = [
  {
    num: '01',
    title: 'Digital Infrastructure',
    desc: 'Building the foundational systems — servers, frameworks, platforms — that Africa needs to own its digital future.',
    status: 'Active',
  },
  {
    num: '02',
    title: 'Data Sovereignty',
    desc: 'Ensuring African data remains under African control. Policy advocacy, technical infrastructure, and cultural shift.',
    status: 'Foundation',
  },
  {
    num: '03',
    title: 'Economic Empowerment',
    desc: 'Creating pathways for African artisans, craftspeople, and entrepreneurs to access global markets on their own terms.',
    status: 'Active–Empindu',
  },
  {
    num: '04',
    title: 'Skills Development',
    desc: 'Connecting skilled technical workers to opportunities. Formalising the informal. Making talent visible.',
    status: 'Pipeline',
  },
  {
    num: '05',
    title: 'Cultural Narrative',
    desc: 'Shaping how Africa is seen — by Africans and the world. Media, storytelling, representation matters.',
    status: 'Planning',
  },
  {
    num: '06',
    title: 'Strategic Core',
    desc: 'The engine room. Operations, partnerships, government relations. Making the system work as one.',
    status: 'Strategic Core',
  },
];

// ═══════════════════════════════════════
// VENTURES SECTION
// ═══════════════════════════════════════

export const VENTURES = [
  {
    letter: 'E',
    name: 'Empindu',
    href: 'https://empindu.com',
    tag: 'Consumer / Cultural',
    desc: 'Connecting Uganda\'s master craftspeople to global buyers. Preserving cultural heritage. Building artisan livelihoods.',
  },
  {
    letter: 'W',
    name: 'Workman',
    href: 'https://workman.ug',
    tag: 'Skills / Labour',
    desc: 'Connecting skilled technical workers to clients across Uganda. Formalising the informal skills economy.',
  },
  {
    letter: 'R',
    name: 'Red Leepstique',
    href: 'https://redleepstique.com',
    tag: 'Media / Women',
    desc: 'The premium digital magazine for high-achieving African women. African excellence on African terms.',
  },
];

// ═══════════════════════════════════════
// VISION SECTION
// ═══════════════════════════════════════

export const VISION = {
  year: '2035',
  label: '05 · A Glimpse. Not the Blueprint.',
  manifesto: 'By 2035, Africa\'s digital infrastructure is owned by Africans. African servers host African frameworks. African data serves African interests. When a collector in Copenhagen buys a basket from Kampala, 90% of the margin stays in Uganda.',
  redactedPhrases: [
    'African servers',
    'African frameworks',
    'a collector in Copenhagen',
    '90% of the margin',
  ],
  pillarDots: [
    'Digital Infrastructure',
    'Data Sovereignty',
    'Economic Empowerment',
    'Skills Development',
    'Cultural Narrative',
    'Strategic Core',
  ],
};

// ═══════════════════════════════════════
// PEOPLE SECTION
// ═══════════════════════════════════════

export const PEOPLE = {
  heading: ['BUILT BY', 'AFRICANS.'],
  invitation: 'We are builders, developers, designers, and dreamers who believe Africa\'s digital future must be built by Africans. If you share this mission, there is a place for you here.',
  roles: [
    { title: 'Founder', filled: true, name: 'Founding Team' },
    { title: 'CTO', filled: false, question: 'Are you the one?' },
    { title: 'BD Lead', filled: false, question: 'Are you the one?' },
    { title: 'Community', filled: false, question: 'Are you the one?' },
  ],
  ctaBand: {
    heading: 'WANT TO BUILD WITH US?',
    primary: { label: 'Apply to Join', href: '#contact' },
    secondary: { label: 'Partner With Us', href: '#contact' },
  },
};

// ═══════════════════════════════════════
// CONTACT SECTION
// ═══════════════════════════════════════

export const CONTACT = {
  heading: ['LET\'S', 'BUILD', 'TOGETHER.'],
  sub: 'Techpreneur. Investor. Government partner. Developer. Dreamer. However you engage with us, we want to hear from you.',
  email: 'hello@imaginedreams.org',
  location: 'Kampala, Uganda / East Africa',
  socials: [
    { label: 'Twitter/X', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  formFields: [
    { name: 'name', label: 'Name', type: 'text', placeholder: '' },
    { name: 'email', label: 'Email', type: 'email', placeholder: '' },
    { name: 'role', label: 'I am a…', type: 'text', placeholder: 'Developer / Investor / Partner / Dreamer' },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: '' },
  ],
  submitLabel: 'Send Message →',
  trustLine: 'We respond to every message. No spam. No noise.',
};

// ═══════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Imagine Dreams Africa. All rights reserved.`,
  links: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Press', href: '/press' },
  ],
};

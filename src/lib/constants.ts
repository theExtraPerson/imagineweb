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

export interface Pillar {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const pillarContent: Pillar[] = [
  {
    id: "01",
    title: "ICT Infrastructure",
    description:
      "Building resilient, scalable, and secure digital infrastructure to power institutions, governments, and enterprises. This includes cloud systems, connectivity frameworks, and interoperable platforms designed for long-term sustainability and growth.",
    image: "/images/ict.jpg"
  },
  {
    id: "02",
    title: "Digital Health",
    description:
      "Designing and deploying integrated digital health ecosystems including telemedicine, electronic health records, diagnostics, and AI-driven care systems to improve accessibility, efficiency, and patient outcomes.",
    image: "/images/health.jpg"
  },
  {
    id: "03",
    title: "Innovation Labs",
    description:
      "Creating experimental environments for rapid prototyping, research, and product development. These labs foster collaboration across disciplines to solve real-world problems using emerging technologies.",
    image: "/images/lab.jpg"
  },
  {
    id: "04",
    title: "Conservation Tech",
    description:
      "Leveraging technology for environmental protection, biodiversity monitoring, climate intelligence, and sustainable resource management through data-driven conservation systems.",
    image: "/images/conservation.jpg"
  },
  {
    id: "05",
    title: "Knowledge Preservation",
    description:
      "Digitizing, structuring, and safeguarding indigenous knowledge, cultural heritage, and institutional memory using modern archival systems and AI-enhanced indexing.",
    image: "/images/knowledge.jpg"
  },
  {
    id: "06",
    title: "Data Sovereignty",
    description:
      "Ensuring ownership, control, and governance of data within local jurisdictions. This includes secure data architectures, compliance frameworks, and decentralized data systems.",
    image: "/images/data.jpg"
  }
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
  label: "VISION // 2035",
  
  // This is used for the automated "redaction" logic 
  // (the code looks for these specific words to cover them)
  redactedPhrases: [
    "Sovereign", 
    "Africa", 
    "Heritage", 
    "Innovation", 
    "Sustainable", 
    "Data"
  ],

  // The primary massive heading text
  manifesto: "A DIGITALLY SOVEREIGN AFRICA THAT LEVERAGES TECHNOLOGY TO PRESERVE ITS HERITAGE, DRIVE INNOVATION, AND ENSURE SUSTAINABLE DEVELOPMENT FOR ALL ITS PEOPLE.",

  // The secondary quote text below it
  secondaryVision: "We envision an Africa where technology serves the people, not the other way around—where our data, our innovations, and our digital future belong to us.",

  // The labels for the grid at the bottom
  pillarDots: [
    "Heritage_Preservation",
    "Innovation_Cycles",
    "Sustainable_Dev",
    "Data_Sovereignty",
    "System_Integrity",
    "Digital_Futures"
  ]
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
  email: 'info@imaginedreams.org',
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

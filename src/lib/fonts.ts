import { Bebas_Neue, Libre_Baskerville, JetBrains_Mono } from 'next/font/google';

/**
 * IMAGINE DREAMS AFRICA — FONT CONFIGURATION
 * Typography System from PRD Section 03
 */

// Display / Hero - Bebas Neue
// Role: Page titles, section headings, venture names
// Weight: 400 only (Bebas Neue only comes in regular)
export const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

// Body / Editorial - Libre Baskerville
// Role: Body copy, quotes, taglines, manifesto
// Weights: 400 (regular), 700 (bold), + Italic variants
export const libre = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap',
});

// Technical / UI - JetBrains Mono
// Role: Labels, metadata, tags, form fields, nav links
// Weights: 300 (light), 400 (regular), 500 (medium)
export const jetbrains = JetBrains_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

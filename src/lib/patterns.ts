/**
 * IMAGINE DREAMS AFRICA — AFRICAN PATTERN SYSTEM
 * Kente-inspired and bark cloth textile patterns
 * PRD Section 03: African Pattern Language
 */

/**
 * Kente-inspired checkerboard with diamond offset
 * Used on: Hero section background at 4% opacity
 * Size: 80px × 80px repeat
 */
export const kentePattern = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
    <rect width="80" height="80" fill="none"/>
    <!-- Diamond pattern inspired by Kente cloth -->
    <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="%23F2EFE8" stroke-opacity="0.04" stroke-width="2"/>
    <circle cx="40" cy="40" r="3" fill="%23F2EFE8" fill-opacity="0.04"/>
  </svg>
`)}`;

/**
 * Diagonal hatching pattern
 * Used on: Manifesto strip (white background) at 2% opacity
 * Suggests bark cloth weave texture
 */
export const diagonalHatch = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <rect width="40" height="40" fill="none"/>
    <path d="M0 40 L40 0 M-10 30 L30 -10 M10 50 L50 10" stroke="%23080808" stroke-opacity="0.02" stroke-width="1"/>
  </svg>
`)}`;

/**
 * Negative space squares pattern
 * Used on: CTA band white surface at 3-4% opacity
 */
export const negativeSquares = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
    <rect width="60" height="60" fill="none"/>
    <rect x="5" y="5" width="20" height="20" fill="%23080808" fill-opacity="0.03"/>
    <rect x="35" y="35" width="20" height="20" fill="%23080808" fill-opacity="0.03"/>
  </svg>
`)}`;

/**
 * Helper function to apply pattern as CSS background
 */
export function getPatternCSS(pattern: string, opacity: number = 0.04) {
  return {
    backgroundImage: `url("${pattern}")`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
    opacity,
  };
}

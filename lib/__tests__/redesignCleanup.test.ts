import { describe, it, expect } from 'vitest';
import { existsSync } from 'fs';
import { resolve } from 'path';

const root = resolve(__dirname, '../..');

describe('redesign cleanup', () => {
  it('removes unused marquee, deck, and cosplay modules', () => {
    const removed = [
      'components/ui/VelocityText.tsx',
      'components/ui/PartnersMarquee.tsx',
      'components/ui/PlatformsMarquee.tsx',
      'components/ui/TechTicker.tsx',
      'components/ui/ProjectDeck.tsx',
      'components/ui/MagneticButton.tsx',
      'components/ui/CyberGrid.tsx',
      'components/ui/Team.tsx',
      'components/ui/Testimonials.tsx',
      'components/ui/SpotlightCard.tsx',
      'lib/useLightMarquee.ts',
      'lib/useOptimizedMarquee.ts',
    ];

    for (const rel of removed) {
      expect(existsSync(resolve(root, rel)), `${rel} should be deleted`).toBe(false);
    }
  });

  it('keeps FreeTools as a static grid module', () => {
    expect(existsSync(resolve(root, 'components/ui/FreeTools.tsx'))).toBe(true);
  });
});

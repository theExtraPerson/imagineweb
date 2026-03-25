import { NavBar } from '@/components/layout/NavBar';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { PageIndicator } from '@/components/layout/PageIndicator';
import { Footer } from '@/components/layout/Footer';
import { LenisProvider } from '@/providers/LenisProvider';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PillarsSection } from '@/components/sections/PillarsSection';
import { VenturesSection } from '@/components/sections/VenturesSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { PeopleSection } from '@/components/sections/PeopleSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { AfricanContinentScene } from '@/components/3d/AfricanContinentScene';

export default function Home() {
  return (
    <LenisProvider>
      {/* Custom Cursor - Desktop Only */}
      <CustomCursor />
      
      {/* Navigation */}
      <NavBar />
      
      {/* Page Progress Indicators */}
      <PageIndicator />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <VenturesSection />
        <VisionSection />
        <PeopleSection />
        <ContactSection />
      </main>

      <Footer />
    </LenisProvider>
  );
}

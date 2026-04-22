import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { LenisProvider } from '@/providers/LenisProvider';
import { Button } from '@/components/ui/button';

export default function PressPage() {
  return (
    <LenisProvider>
      <NavBar />
      
      <main className="flex-1 py-24 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-display font-bold text-4xl mb-8">Press & Media</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="font-body text-lg text-white/70 mb-12">
              Imagine Dreams Africa is building Africa&apos;s digital civilisation from Kampala. 
              For media inquiries, press kits, or interview requests, please contact us below.
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">Media Contact</h2>
            <div className="space-y-4 not-prose mb-12">
              <p className="font-body text-xl italic">
                <a href="mailto:info@imaginedreams.org" className="text-white underline hover:opacity-70">
                  info@imaginedreams.org
                </a>
              </p>
              <p className="font-mono text-sm uppercase tracking-[0.1em] text-white/50">
                Kampala, Uganda / East Africa
              </p>
            </div>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">Brand Assets</h2>
            <p className="font-body text-white/70 mb-6">
              Download our brand assets for use in your coverage of Imagine Dreams Africa.
            </p>
            
            <div className="not-prose mb-12">
              <Button variant="secondary" size="lg">
                Download Press Kit (PDF)
              </Button>
            </div>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">About Imagine Dreams Africa</h2>
            <p className="font-body text-white/70 mb-6">
              Imagine Dreams Africa (IDA) is building the digital infrastructure Africa deserves. 
              Through six strategic pillars and three active ventures, we create companies, shape policy, 
              and demonstrate what&apos;s possible when Africans build with Africa in mind.
            </p>
            <p className="font-body text-white/70 mb-6">
              From our base in Kampala, Uganda, we serve all 54 African nations with a systematic 
              approach to digital sovereignty, economic empowerment, and cultural narrative.
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">Active Ventures</h2>
            <ul className="list-disc list-inside space-y-2 font-body text-white/70 mb-12">
              <li>
                <strong>Empindu</strong> — Connecting Uganda&apos;s master craftspeople to global buyers
              </li>
              <li>
                <strong>Workman</strong> — Connecting skilled technical workers to clients across Uganda
              </li>
              <li>
                <strong>Red Leepstique</strong> — Premium digital magazine for high-achieving African women
              </li>
            </ul>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">For Interview Requests</h2>
            <p className="font-body text-white/70 mb-6">
              We are available for interviews, panel discussions, and speaking engagements. 
              Please allow 48 hours for response to all media inquiries.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </LenisProvider>
  );
}

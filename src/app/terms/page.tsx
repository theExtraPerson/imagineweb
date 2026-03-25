import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { LenisProvider } from '@/providers/LenisProvider';

export default function TermsPage() {
  return (
    <LenisProvider>
      <NavBar />
      
      <main className="flex-1 py-24 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-display font-bold text-4xl mb-8">Terms of Use</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="font-body text-lg text-white/70 mb-6">
              Last updated: March 2026
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">1. Acceptance of Terms</h2>
            <p className="font-body text-white/70 mb-6">
              By accessing and using the website imaginedreams.org (the &quot;Website&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Website.
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">2. Use License</h2>
            <p className="font-body text-white/70 mb-6">
              Permission is granted to temporarily download one copy of the materials on Imagine Dreams Africa&apos;s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 font-body text-white/70 mb-6">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">3. Disclaimer</h2>
            <p className="font-body text-white/70 mb-6">
              The materials on Imagine Dreams Africa&apos;s Website are provided &quot;as is&quot;. Imagine Dreams Africa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">4. Limitations</h2>
            <p className="font-body text-white/70 mb-6">
              In no event shall Imagine Dreams Africa or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Imagine Dreams Africa&apos;s Website.
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">5. Revisions</h2>
            <p className="font-body text-white/70 mb-6">
              Imagine Dreams Africa may revise these terms of use for its Website at any time without notice. By using this Website you are agreeing to be bound by the then current version of these Terms of Use.
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">6. Contact Information</h2>
            <p className="font-body text-white/70 mb-6">
              If you have any questions about these Terms of Use, please contact us at:{' '}
              <a href="mailto:hello@imaginedreams.org" className="text-white underline">
                hello@imaginedreams.org
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </LenisProvider>
  );
}

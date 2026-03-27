import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { LenisProvider } from '@/providers/LenisProvider';

export default function PrivacyPage() {
  return (
    <LenisProvider>
      <NavBar />
      
      <main className="flex-1 py-24 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-display font-bold text-4xl mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="font-body text-lg text-white/70 mb-6">
              Last updated: March 2026
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">1. Introduction</h2>
            <p className="font-body text-white/70 mb-6">
              Imagine Dreams Africa (&rdquo;we&ldquo;, &rdquo;our&ldquo;, or &rdquo;us&ldquo;) respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website imaginedreams.org and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">2. Information We Collect</h2>
            <p className="font-body text-white/70 mb-6">
              We collect several types of information from and about users of our website, including information:
            </p>
            <ul className="list-disc list-inside space-y-2 font-body text-white/70 mb-6">
              <li>By which you may be personally identified (&quot;personal data&quot;)</li>
              <li>About your internet connection, the equipment you use to access our website, and usage details</li>
              <li>That you provide directly by filling in forms on our website (such as contact forms)</li>
              <li>When you contact us about employment opportunities or business inquiries</li>
            </ul>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">3. How We Use Your Information</h2>
            <p className="font-body text-white/70 mb-6">
              We use information that we collect about you or that you provide to us:
            </p>
            <ul className="list-disc list-inside space-y-2 font-body text-white/70 mb-6">
              <li>To present our website and its contents to you</li>
              <li>To provide you with information, products, or services that you request from us</li>
              <li>To fulfill any other purpose for which you provide it</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us</li>
            </ul>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">4. Data Security</h2>
            <p className="font-body text-white/70 mb-6">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers.
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">5. Third-Party Services</h2>
            <p className="font-body text-white/70 mb-6">
              Our website may use third-party services such as analytics providers and email delivery services. These third parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for other purposes.
            </p>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">6. Your Rights</h2>
            <p className="font-body text-white/70 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 font-body text-white/70 mb-6">
              <li>Access your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
            </ul>

            <h2 className="font-display font-bold text-2xl mt-12 mb-4">7. Contact Information</h2>
            <p className="font-body text-white/70 mb-6">
              To ask questions or comments about this privacy policy or our privacy practices, please send an email to:{' '}
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

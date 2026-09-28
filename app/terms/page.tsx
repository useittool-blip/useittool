import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - UseItTool",
  description: "Read the terms and conditions for using UseItTool. Understand your rights and responsibilities when using our free online tools.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            Last updated: September 28, 2026
          </p>
        </section>

        {/* Agreement Notice */}
        <section className="mb-10">
          <div className="rounded-xl bg-indigo-50 border-2 border-indigo-200 p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">⚖️</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-950 mb-2">
                  Agreement to Terms
                </h3>
                <p className="text-zinc-700">
                  By accessing or using <strong>UseItTool</strong>, you agree to be bound by these 
                  Terms of Service and all applicable laws and regulations. If you do not agree with 
                  any of these terms, you are prohibited from using this site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Acceptance of Terms */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            1. Acceptance of Terms
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              By using UseItTool ("the Website", "the Service"), you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service. These terms apply to all 
              users of the Website, including visitors, users, and contributors.
            </p>
            <p>
              If you are using our services on behalf of an organization, you represent and warrant 
              that you have the authority to bind that organization to these terms.
            </p>
          </div>
        </section>

        {/* 2. Description of Service */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            2. Description of Service
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              UseItTool provides a collection of free online tools for various purposes, including 
              but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Image processing (compression, conversion, optimization)</li>
              <li>Text processing (word counting, case conversion)</li>
              <li>Developer utilities (JSON formatting, Base64 encoding)</li>
              <li>Calculators (percentage, BMI)</li>
              <li>QR code generation</li>
              <li>Color selection and conversion</li>
              <li>And other utility tools</li>
            </ul>
            <p className="mt-4">
              All tools are provided "as is" and are free to use without registration or payment.
            </p>
          </div>
        </section>

        {/* 3. User Responsibilities */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            3. User Responsibilities
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>As a user of UseItTool, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the tools only for lawful purposes</li>
              <li>Not attempt to interfere with the proper functioning of the Website</li>
              <li>Not use the service to process illegal, harmful, or offensive content</li>
              <li>Not attempt to reverse engineer, decompile, or disassemble any part of the Website</li>
              <li>Not use automated systems (bots, scrapers) to access the Website</li>
              <li>Not redistribute or resell access to our tools without permission</li>
              <li>Comply with all applicable local, national, and international laws</li>
            </ul>
          </div>
        </section>

        {/* 4. Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            4. Intellectual Property Rights
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              All content on UseItTool, including but not limited to text, graphics, logos, icons, 
              images, software, and the overall design of the Website, is the property of UseItTool 
              or its content suppliers and is protected by international copyright, trademark, and 
              other intellectual property laws.
            </p>
            <p className="mt-3">
              <strong>Your content:</strong> Any files or data you process using our tools remain 
              your property. Since all processing happens locally in your browser, we never claim 
              ownership of your content.
            </p>
          </div>
        </section>

        {/* 5. Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            5. Privacy and Data Protection
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              Your privacy is important to us. Please review our{' '}
              <a href="/privacy" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Privacy Policy
              </a>{' '}
              for information about how we collect, use, and protect your data.
            </p>
            <p className="mt-3">
              <strong>Key principle:</strong> All file processing occurs locally in your browser. 
              Your files are never uploaded to our servers and never leave your device.
            </p>
          </div>
        </section>

        {/* 6. Disclaimer of Warranties */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            6. Disclaimer of Warranties
          </h2>
          <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-6">
            <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
              <p>
                UseItTool is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong>{' '}
                basis without any warranties of any kind, either express or implied, including but not 
                limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Implied warranties of merchantability</li>
                <li>Implied warranties of fitness for a particular purpose</li>
                <li>Implied warranties of non-infringement</li>
                <li>Warranties that the service will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy or reliability of results</li>
              </ul>
              <p className="mt-3">
                We do not guarantee that the tools will meet your specific requirements or that the 
                results will be accurate in all cases.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            7. Limitation of Liability
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              To the maximum extent permitted by applicable law, UseItTool shall not be liable for 
              any direct, indirect, incidental, special, consequential, or punitive damages, including 
              but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Loss of profits, data, or business opportunities</li>
              <li>Loss of goodwill or reputation</li>
              <li>Damages resulting from errors or inaccuracies in tool outputs</li>
              <li>Damages resulting from unauthorized access to or alteration of your data</li>
              <li>Damages resulting from service interruptions or downtime</li>
              <li>Any other damages arising from your use of the service</li>
            </ul>
            <p className="mt-3">
              This limitation applies regardless of whether such damages are based on contract, tort, 
              negligence, strict liability, or any other legal theory.
            </p>
          </div>
        </section>

        {/* 8. Third-Party Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            8. Third-Party Links and Services
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              Our Website may contain links to third-party websites or services that are not owned 
              or controlled by UseItTool. We have no control over, and assume no responsibility for, 
              the content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p className="mt-3">
              You acknowledge and agree that UseItTool shall not be liable, directly or indirectly, 
              for any damage or loss caused by or in connection with the use of any such content, 
              goods, or services available on or through any such websites or services.
            </p>
          </div>
        </section>

        {/* 9. Modifications */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            9. Modifications to Terms
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              effective immediately upon posting on this page with an updated "Last updated" date.
            </p>
            <p className="mt-3">
              Your continued use of the Website after any changes constitutes your acceptance of the 
              new Terms of Service. If you do not agree to the modified terms, you must discontinue 
              using the Website.
            </p>
            <p className="mt-3">
              We encourage you to review these Terms periodically to stay informed of any updates.
            </p>
          </div>
        </section>

        {/* 10. Termination */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            10. Termination
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              We may terminate or suspend your access to the Website immediately, without prior 
              notice or liability, for any reason whatsoever, including without limitation if you 
              breach these Terms of Service.
            </p>
            <p className="mt-3">
              Upon termination, your right to use the Website will immediately cease. All provisions 
              of the Terms which by their nature should survive termination shall survive termination, 
              including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </div>
        </section>

        {/* 11. Governing Law */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            11. Governing Law
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              These Terms shall be governed and construed in accordance with international laws, 
              without regard to conflict of law provisions. Any disputes arising from these Terms 
              or your use of the Website shall be resolved through good-faith negotiations.
            </p>
          </div>
        </section>

        {/* 12. Severability */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            12. Severability
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              If any provision of these Terms is held to be invalid or unenforceable by a court, 
              the remaining provisions will continue in full force and effect. The invalid provision 
              will be replaced by a valid one that most closely matches the intent of the original provision.
            </p>
          </div>
        </section>

        {/* 13. Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            13. Contact Information
          </h2>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-zinc-700 mb-3">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-zinc-700">
              <p>
                📧 Email: <a href="mailto:legal@useittool.com" className="text-indigo-600 hover:text-indigo-700 font-medium">legal@useittool.com</a>
              </p>
              <p>
                🌐 Website: <a href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">useittool.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            📄 Related Pages
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="/privacy"
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-bold text-zinc-950 mb-1">Privacy Policy</h3>
              <p className="text-sm text-zinc-600">
                Learn how we protect your data and privacy.
              </p>
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-2xl mb-2">📬</div>
              <h3 className="font-bold text-zinc-950 mb-1">Contact Us</h3>
              <p className="text-sm text-zinc-600">
                Get in touch with any questions or feedback.
              </p>
            </a>
          </div>
        </section>

        {/* Thank You */}
        <section className="text-center py-8 border-t border-zinc-200">
          <p className="text-lg text-zinc-700">
            Thank you for using <strong>UseItTool</strong>! 🙏
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            By using our services, you help us continue providing free tools to everyone.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - UseItTool",
  description: "Read our privacy policy to understand how UseItTool protects your data. We don't collect, store, or share your personal information. 100% private and secure.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Your privacy is our top priority.
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            Last updated: September 28, 2026
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            📋 Introduction
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              At <strong>UseItTool</strong> ("we", "our", or "us"), we are committed to protecting 
              your privacy and ensuring the security of your personal information. This Privacy Policy 
              explains how we collect, use, and protect your data when you use our website and online tools.
            </p>
            <p>
              By using UseItTool, you agree to the terms outlined in this Privacy Policy.
            </p>
          </div>
        </section>

        {/* Key Principle */}
        <section className="mb-10">
          <div className="rounded-xl bg-green-50 border-2 border-green-200 p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🔒</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-950 mb-2">
                  Our Core Privacy Principle
                </h3>
                <p className="text-zinc-700">
                  <strong>All file processing happens locally in your browser.</strong> Your files 
                  (images, documents, data) are <strong>never uploaded to our servers</strong>. 
                  They never leave your device. This means your data is 100% private and secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            📊 Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">
                ✅ Information We DO Collect
              </h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-700 ml-4">
                <li>
                  <strong>Basic analytics data:</strong> We may use anonymous analytics tools 
                  (like Google Analytics) to track page views, visitor numbers, and general usage patterns.
                </li>
                <li>
                  <strong>Cookies:</strong> We use essential cookies to ensure the website functions properly.
                </li>
                <li>
                  <strong>Technical data:</strong> IP address, browser type, device type, and operating system 
                  (for analytics and security purposes only).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">
                ❌ Information We DO NOT Collect
              </h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-700 ml-4">
                <li>
                  <strong>Your files:</strong> Images, documents, and data you process with our tools 
                  are never uploaded to our servers.
                </li>
                <li>
                  <strong>Personal information:</strong> We don't require registration, so we don't collect 
                  names, emails, or passwords.
                </li>
                <li>
                  <strong>Payment information:</strong> All our tools are free, so we don't collect 
                  any payment data.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            🎯 How We Use Information
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>We use the limited information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To improve our website and user experience</li>
              <li>To understand which tools are most popular</li>
              <li>To identify and fix technical issues</li>
              <li>To ensure the security of our website</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            🌐 Third-Party Services
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>We may use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Google Analytics:</strong> To track website traffic and user behavior anonymously.
              </li>
              <li>
                <strong>Google AdSense:</strong> To display advertisements (if applicable). Google may use 
                cookies to serve ads based on your prior visits to our website or other websites.
              </li>
              <li>
                <strong>Cloudflare:</strong> For website security and performance optimization.
              </li>
            </ul>
            <p className="mt-4">
              These third-party services have their own privacy policies, and we encourage you to review them.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            🛡️ Data Security
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              We take data security seriously and implement appropriate technical and organizational measures 
              to protect your information. However, since all file processing happens locally in your browser, 
              your files are never transmitted over the internet and are therefore completely secure.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            ⚖️ Your Rights
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Right to access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to restrict processing:</strong> Request limitation of data processing</li>
              <li><strong>Right to data portability:</strong> Request transfer of your data</li>
              <li><strong>Right to object:</strong> Object to processing of your personal data</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at the email address provided below.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            🍪 Cookies
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              We use cookies to enhance your browsing experience. Cookies are small text files stored on 
              your device by your browser.
            </p>
            <p className="mt-3">
              <strong>Types of cookies we use:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Advertising cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
            <p className="mt-3">
              You can control and delete cookies through your browser settings. However, disabling certain 
              cookies may affect the functionality of our website.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            👶 Children's Privacy
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a child, 
              please contact us immediately.
            </p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            🔄 Changes to This Privacy Policy
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              for other operational, legal, or regulatory reasons. We will notify you of any material changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="mt-3">
              We encourage you to review this Privacy Policy periodically to stay informed about how we 
              protect your information.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            📬 Contact Us
          </h2>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-zinc-700 mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
              practices, please contact us:
            </p>
            <p className="text-zinc-700">
              📧 Email: <a href="mailto:privacy@useittool.com" className="text-indigo-600 hover:text-indigo-700 font-medium">privacy@useittool.com</a>
            </p>
          </div>
        </section>

        {/* Thank You */}
        <section className="text-center py-8 border-t border-zinc-200">
          <p className="text-lg text-zinc-700">
            Thank you for trusting <strong>UseItTool</strong> with your privacy! 🔒
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            We are committed to keeping your data safe and private.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">Terms of Service</h1>
        <p className="text-zinc-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-zinc-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using UseItTool, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">2. Use of Services</h2>
            <p>All tools provided on UseItTool are for informational and personal use only. You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair the website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">3. Intellectual Property</h2>
            <p>The content, design, and tools on this website are the property of UseItTool and are protected by applicable intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">4. Limitation of Liability</h2>
            <p>UseItTool is provided "as is" without any warranties. We shall not be liable for any damages arising from the use of our tools or website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">5. Contact Us</h2>
            <p>For any questions regarding these Terms, please contact us at:</p>
            <p className="mt-2 font-medium text-indigo-600">
              📧 Email: <a href="mailto:support@useittool.com" className="underline">support@useittool.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
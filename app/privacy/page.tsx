export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">Privacy Policy</h1>
        <p className="text-zinc-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-zinc-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">1. Introduction</h2>
            <p>Welcome to UseItTool. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle information when you use our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">2. Data Collection & Processing</h2>
            <p><strong>Local Processing:</strong> All tools on UseItTool process your data locally in your browser. Your files, text, and inputs never leave your device and are never uploaded to our servers.</p>
            <p><strong>Analytics:</strong> We may use anonymous analytics (like Google Analytics) to understand how our site is used and to improve our services. No personally identifiable information is collected.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">3. Cookies</h2>
            <p>We use essential cookies to ensure the basic functionality of the website. We also use a cookie to remember your consent preference. You can manage your cookie preferences at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">4. Third-Party Services</h2>
            <p>We may display third-party advertisements (e.g., Google AdSense). These providers may use cookies to serve ads based on your prior visits to our website or other websites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2 font-medium text-indigo-600">
              📧 Email: <a href="mailto:support@useittool.com" className="underline">support@useittool.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
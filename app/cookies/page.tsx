export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">Cookie Policy</h1>
        
        <div className="space-y-6 text-zinc-700 leading-relaxed">
          <p>At UseItTool, we use cookies to enhance your browsing experience and analyze our traffic.</p>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use the site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">How We Use Cookies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., remembering your cookie consent choice).</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</li>
              <li><strong>Advertising Cookies:</strong> Used by third-party ad providers (like Google AdSense) to show relevant ads.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">Managing Cookies</h2>
            <p>You can choose to disable cookies through your browser settings. However, this may affect the functionality of some features on our site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at:</p>
            <p className="mt-2 font-medium text-indigo-600">
              📧 Email: <a href="mailto:support@useittool.com" className="underline">support@useittool.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
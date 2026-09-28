import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - UseItTool",
  description: "Learn how UseItTool uses cookies to improve your experience. Understand what cookies we use and how to manage them.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            Cookie Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Understanding how we use cookies on UseItTool.
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            Last updated: September 28, 2026
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            🍪 What Are Cookies?
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              Cookies are small text files that are stored on your computer or mobile device when 
              you visit a website. They are widely used to make websites work more efficiently and 
              provide useful information to website owners.
            </p>
            <p className="mt-3">
              At <strong>UseItTool</strong>, we use cookies to enhance your browsing experience, 
              analyze website traffic, and serve relevant advertisements.
            </p>
          </div>
        </section>

        {/* Key Principle */}
        <section className="mb-10">
          <div className="rounded-xl bg-indigo-50 border-2 border-indigo-200 p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🔒</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-950 mb-2">
                  Important Note About Your Files
                </h3>
                <p className="text-zinc-700">
                  Cookies are <strong>NOT</strong> used to store your files or data. All file processing 
                  (images, text, documents) happens locally in your browser. Your files are never uploaded 
                  to our servers and never stored in cookies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-6">
            📋 Types of Cookies We Use
          </h2>

          <div className="space-y-4">
            {/* Essential Cookies */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">⚙️</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-zinc-950 mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-sm text-zinc-600 mb-3">
                    These cookies are necessary for the website to function properly. They enable 
                    core features like security and network management.
                  </p>
                  <div className="bg-zinc-50 rounded-lg p-3 text-xs">
                    <div className="font-semibold text-zinc-700 mb-1">Examples:</div>
                    <ul className="list-disc list-inside text-zinc-600 space-y-1">
                      <li>Session management</li>
                      <li>Security tokens</li>
                      <li>Load balancing</li>
                    </ul>
                  </div>
                  <div className="mt-3 inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Always Active — Cannot be disabled
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">📊</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-zinc-950 mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-sm text-zinc-600 mb-3">
                    These cookies help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously.
                  </p>
                  <div className="bg-zinc-50 rounded-lg p-3 text-xs">
                    <div className="font-semibold text-zinc-700 mb-1">We use:</div>
                    <ul className="list-disc list-inside text-zinc-600 space-y-1">
                      <li><strong>Google Analytics:</strong> Tracks page views, visitor numbers, and user behavior</li>
                      <li>Anonymous data collection (no personal information)</li>
                      <li>Helps us improve the website based on usage patterns</li>
                    </ul>
                  </div>
                  <div className="mt-3 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Optional — Can be disabled
                  </div>
                </div>
              </div>
            </div>

            {/* Advertising Cookies */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">📢</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-zinc-950 mb-2">
                    Advertising Cookies
                  </h3>
                  <p className="text-sm text-zinc-600 mb-3">
                    These cookies are used to deliver advertisements that are relevant to you and 
                    your interests. They also help limit the number of times you see an advertisement.
                  </p>
                  <div className="bg-zinc-50 rounded-lg p-3 text-xs">
                    <div className="font-semibold text-zinc-700 mb-1">We use:</div>
                    <ul className="list-disc list-inside text-zinc-600 space-y-1">
                      <li><strong>Google AdSense:</strong> Displays relevant advertisements</li>
                      <li><strong>DoubleClick:</strong> Google's advertising service</li>
                      <li>May use cookies to serve ads based on prior visits</li>
                    </ul>
                  </div>
                  <div className="mt-3 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Optional — Can be disabled
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Cookies */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">⚡</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-zinc-950 mb-2">
                    Performance Cookies
                  </h3>
                  <p className="text-sm text-zinc-600 mb-3">
                    These cookies collect information about how you use our website, such as which 
                    pages you visit most often and if you encounter any error messages.
                  </p>
                  <div className="bg-zinc-50 rounded-lg p-3 text-xs">
                    <div className="font-semibold text-zinc-700 mb-1">Purpose:</div>
                    <ul className="list-disc list-inside text-zinc-600 space-y-1">
                      <li>Improve website speed and performance</li>
                      <li>Identify and fix technical issues</li>
                      <li>Optimize user experience</li>
                    </ul>
                  </div>
                  <div className="mt-3 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Optional — Can be disabled
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            🌐 Third-Party Cookies
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              In addition to our own cookies, we also use various third-party cookies to report 
              usage statistics, deliver advertisements, and enhance user experience. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Google Analytics:</strong> Web analytics service provided by Google, Inc. 
                Learn more at{' '}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <strong>Google AdSense:</strong> Advertising service provided by Google, Inc. 
                Learn more at{' '}
                <a 
                  href="https://policies.google.com/technologies/ads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Google Advertising Policies
                </a>
              </li>
              <li>
                <strong>Cloudflare:</strong> Content delivery network and security service. 
                Learn more at{' '}
                <a 
                  href="https://www.cloudflare.com/privacypolicy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Cloudflare Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* How to Manage Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            ⚙️ How to Manage Cookies
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              You can control and manage cookies in various ways. Please note that removing or 
              blocking cookies may impact your user experience and some features may no longer 
              function properly.
            </p>

            <h3 className="text-lg font-bold text-zinc-950 mt-6 mb-3">
              Browser Settings
            </h3>
            <p>
              Most browsers allow you to manage cookie settings. You can usually find these settings 
              in the "Options" or "Preferences" menu of your browser. The following links may be helpful:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <a 
                  href="https://support.google.com/chrome/answer/95647" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Cookie settings in Google Chrome
                </a>
              </li>
              <li>
                <a 
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Cookie settings in Firefox
                </a>
              </li>
              <li>
                <a 
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Cookie settings in Safari
                </a>
              </li>
              <li>
                <a 
                  href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Cookie settings in Microsoft Edge
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-zinc-950 mt-6 mb-3">
              Opt-Out Links
            </h3>
            <p>You can opt out of third-party cookies using these links:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Google Analytics Opt-out
                </a>
              </li>
              <li>
                <a 
                  href="https://adssettings.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Google Ads Settings
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aboutads.info/choices/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Your Online Choices (Industry opt-out)
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Cookie Duration */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            ⏱️ Cookie Duration
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
              <thead className="bg-zinc-100">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-zinc-700">Cookie Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-zinc-700">Duration</th>
                  <th className="text-left py-3 px-4 font-semibold text-zinc-700">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-900">Session Cookies</td>
                  <td className="py-3 px-4 text-zinc-600">Until browser closes</td>
                  <td className="py-3 px-4 text-zinc-600">Essential functionality</td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="py-3 px-4 font-medium text-zinc-900">Analytics Cookies</td>
                  <td className="py-3 px-4 text-zinc-600">Up to 2 years</td>
                  <td className="py-3 px-4 text-zinc-600">Track usage patterns</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-900">Advertising Cookies</td>
                  <td className="py-3 px-4 text-zinc-600">Up to 2 years</td>
                  <td className="py-3 px-4 text-zinc-600">Serve relevant ads</td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="py-3 px-4 font-medium text-zinc-900">Performance Cookies</td>
                  <td className="py-3 px-4 text-zinc-600">Up to 1 year</td>
                  <td className="py-3 px-4 text-zinc-600">Optimize website</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Changes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            🔄 Changes to This Cookie Policy
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, 
              legislation, or our data practices. When we make changes, we will update the 
              "Last updated" date at the top of this page.
            </p>
            <p className="mt-3">
              We encourage you to review this Cookie Policy periodically to stay informed about 
              how we use cookies.
            </p>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            📄 Related Pages
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a
              href="/privacy"
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-bold text-zinc-950 mb-1">Privacy Policy</h3>
              <p className="text-xs text-zinc-600">
                Learn how we protect your data.
              </p>
            </a>
            <a
              href="/terms"
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-2xl mb-2">⚖️</div>
              <h3 className="font-bold text-zinc-950 mb-1">Terms of Service</h3>
              <p className="text-xs text-zinc-600">
                Read our terms and conditions.
              </p>
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-2xl mb-2">📬</div>
              <h3 className="font-bold text-zinc-950 mb-1">Contact Us</h3>
              <p className="text-xs text-zinc-600">
                Get in touch with questions.
              </p>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            📬 Contact Us About Cookies
          </h2>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-zinc-700 mb-3">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <p className="text-zinc-700">
              📧 Email: <a href="mailto:privacy@useittool.com" className="text-indigo-600 hover:text-indigo-700 font-medium">privacy@useittool.com</a>
            </p>
          </div>
        </section>

        {/* Thank You */}
        <section className="text-center py-8 border-t border-zinc-200">
          <p className="text-lg text-zinc-700">
            Thank you for understanding our cookie practices! 🍪
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            We are committed to transparency and your privacy.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">Disclaimer</h1>
        <p className="text-zinc-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-zinc-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">1. General Information</h2>
            <p>The information and tools provided on UseItTool are for general informational and educational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the tools.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">2. External Links</h2>
            <p>Our website may contain links to external sites that are not provided by us. We have no control over the content and privacy practices of these sites and assume no responsibility for them.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">3. Limitation of Liability</h2>
            <p>In no event will UseItTool be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">4. Contact Us</h2>
            <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at:</p>
            <p className="mt-2 font-medium text-indigo-600">
              📧 Email: <a href="mailto:support@useittool.com" className="underline">support@useittool.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
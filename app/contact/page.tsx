export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-4">Contact Us</h1>
        <p className="text-zinc-600 mb-8 leading-relaxed">
          We'd love to hear from you! Have questions, feedback, or suggestions? 
          We're here to help. We typically respond within 24-48 hours.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📧</span>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900">Email Us</h3>
              <p className="text-zinc-600 mb-2">Send us an email and we'll get back to you as soon as possible.</p>
              <a href="mailto:support@useittool.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                support@useittool.com →
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">⏱️</span>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900">Response Time</h3>
              <p className="text-zinc-600">We typically respond to all inquiries within 24-48 hours.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
          <h3 className="font-semibold text-zinc-900 mb-2">❓ Frequently Asked Questions</h3>
          <div className="space-y-4 text-sm text-zinc-600">
            <div>
              <p className="font-medium text-zinc-900">Are all tools really free?</p>
              <p>Yes! All our tools are 100% free to use. No hidden charges, no premium plans.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-900">Is my data safe?</p>
              <p>Absolutely! All file processing happens locally in your browser. Your files never leave your device.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
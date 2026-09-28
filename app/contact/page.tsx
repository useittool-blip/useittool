import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - UseItTool",
  description: "Get in touch with UseItTool. Send us your questions, feedback, or suggestions. We're here to help!",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            We'd love to hear from you!
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-10">
          <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-6">
            <p className="text-zinc-700 leading-relaxed">
              Have questions, feedback, or suggestions? We're here to help! Whether you need 
              assistance with our tools, want to report a bug, or have ideas for new features, 
              don't hesitate to reach out. We typically respond within 24-48 hours.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-6">
            📬 Get in Touch
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:contact@useittool.com"
              className="group rounded-xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-zinc-950 mb-2">Email Us</h3>
              <p className="text-sm text-zinc-600 mb-3">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <p className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                contact@useittool.com →
              </p>
            </a>

            {/* Response Time */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-bold text-zinc-950 mb-2">Response Time</h3>
              <p className="text-sm text-zinc-600 mb-3">
                We typically respond to all inquiries within 24-48 hours.
              </p>
              <p className="text-sm font-medium text-green-600">
                ✓ Fast & Friendly Support
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-6">
            ✉️ Send Us a Message
          </h2>
          
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <form
              action="mailto:contact@useittool.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select a subject...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-6">
            ❓ Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="font-bold text-zinc-950 mb-2">
                Are all tools really free?
              </h3>
              <p className="text-sm text-zinc-600">
                Yes! All our tools are 100% free to use. No hidden charges, no premium plans, 
                no paywalls. Just free tools for everyone.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="font-bold text-zinc-950 mb-2">
                Is my data safe?
              </h3>
              <p className="text-sm text-zinc-600">
                Absolutely! All file processing happens locally in your browser. Your files 
                never leave your device and are never uploaded to our servers.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="font-bold text-zinc-950 mb-2">
                Do I need to create an account?
              </h3>
              <p className="text-sm text-zinc-600">
                No! You can use all our tools without signing up. Just open the tool and 
                start using it immediately.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="font-bold text-zinc-950 mb-2">
                Can I suggest a new tool?
              </h3>
              <p className="text-sm text-zinc-600">
                Absolutely! We love hearing new ideas. Use the contact form above or send 
                us an email with your suggestion.
              </p>
            </div>
          </div>
        </section>

        {/* Thank You */}
        <section className="text-center py-8 border-t border-zinc-200">
          <p className="text-lg text-zinc-700">
            Thank you for choosing <strong>UseItTool</strong>! ❤️
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            We appreciate your feedback and support.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About UseItTool - Free Online Tools for Everyone",
  description: "Learn about UseItTool, our mission to provide free, fast, and private online tools for everyday tasks. No signup required, 100% secure.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            About UseItTool
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Your trusted source for free, fast, and private online tools.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            🎯 Our Mission
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p className="text-lg">
              At <strong>UseItTool</strong>, we believe everyone deserves access to high-quality 
              online tools without barriers. Our mission is simple: provide <strong>fast, free, 
              and private</strong> tools that help you complete everyday tasks efficiently.
            </p>
            <p>
              Whether you're a developer, designer, student, or just someone who needs to get 
              things done quickly, UseItTool is here to help. No complicated signups, no hidden 
              fees, no data collection — just tools that work.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-6">
            🛠️ What We Offer
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="text-3xl mb-3">🖼️</div>
              <h3 className="font-bold text-zinc-950 mb-2">Image Tools</h3>
              <p className="text-sm text-zinc-600">
                Compress, convert, and optimize images in JPG, PNG, and WebP formats.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-zinc-950 mb-2">Text Tools</h3>
              <p className="text-sm text-zinc-600">
                Count words, convert cases, and transform text with powerful utilities.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-bold text-zinc-950 mb-2">Developer Tools</h3>
              <p className="text-sm text-zinc-600">
                JSON formatter, Base64 encoder, password generator, and more for developers.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-zinc-950 mb-2">QR & Calculators</h3>
              <p className="text-sm text-zinc-600">
                Generate QR codes, calculate percentages, BMI, and other everyday calculations.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-6">
            💎 Our Core Values
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-5 rounded-xl bg-indigo-50 border border-indigo-100">
              <div className="text-2xl flex-shrink-0">🆓</div>
              <div>
                <h3 className="font-bold text-zinc-950 mb-1">100% Free</h3>
                <p className="text-sm text-zinc-700">
                  All our tools are completely free to use. No hidden charges, no premium plans, 
                  no paywalls. Just free tools for everyone.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-green-50 border border-green-100">
              <div className="text-2xl flex-shrink-0">🔒</div>
              <div>
                <h3 className="font-bold text-zinc-950 mb-1">100% Private</h3>
                <p className="text-sm text-zinc-700">
                  Your files and data never leave your browser. All processing happens locally 
                  on your device. We don't collect, store, or share your data.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-purple-50 border border-purple-100">
              <div className="text-2xl flex-shrink-0">⚡</div>
              <div>
                <h3 className="font-bold text-zinc-950 mb-1">Lightning Fast</h3>
                <p className="text-sm text-zinc-700">
                  Our tools are optimized for speed. No waiting, no loading screens — 
                  just instant results when you need them.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-orange-50 border border-orange-100">
              <div className="text-2xl flex-shrink-0">🚫</div>
              <div>
                <h3 className="font-bold text-zinc-950 mb-1">No Signup Required</h3>
                <p className="text-sm text-zinc-700">
                  Start using any tool immediately. No accounts, no email verification, 
                  no hassle. Just open and use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-6">
            ⚙️ How It Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white text-xl font-bold mb-3">
                1
              </div>
              <h3 className="font-bold text-zinc-950 mb-2">Choose a Tool</h3>
              <p className="text-sm text-zinc-600">
                Browse our collection of 14+ tools and pick the one you need.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white text-xl font-bold mb-3">
                2
              </div>
              <h3 className="font-bold text-zinc-950 mb-2">Upload or Input</h3>
              <p className="text-sm text-zinc-600">
                Upload your file or enter your data directly into the tool.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white text-xl font-bold mb-3">
                3
              </div>
              <h3 className="font-bold text-zinc-950 mb-2">Get Results</h3>
              <p className="text-sm text-zinc-600">
                Get instant results and download or copy them with one click.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            📬 Get in Touch
          </h2>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-zinc-700 mb-3">
              Have questions, feedback, or suggestions? We'd love to hear from you!
            </p>
            <p className="text-zinc-700">
              📧 Email: <a href="mailto:contact@useittool.com" className="text-indigo-600 hover:text-indigo-700 font-medium">contact@useittool.com</a>
            </p>
          </div>
        </section>

        {/* Thank You */}
        <section className="text-center py-8 border-t border-zinc-200">
          <p className="text-lg text-zinc-700">
            Thank you for choosing <strong>UseItTool</strong>! ❤️
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            We're committed to making your everyday tasks easier.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
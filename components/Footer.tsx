import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 text-zinc-700">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Column 1: About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-lg">
                U
              </div>
              <span className="text-xl font-bold text-zinc-900">UseItTool</span>
            </Link>
            <p className="text-sm text-zinc-600 leading-relaxed mb-4">
              Fast, free, and private online tools for your everyday tasks. 
              100% free, no signup required.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                100% Free
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Private
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">🏠</span> Home
                </Link>
              </li>
              <li>
                <Link href="/all-tools" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">🛠️</span> All Tools
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">📂</span> Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">ℹ️</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">📬</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">🔒</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">⚖️</span> Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">🍪</span> Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">⚠️</span> Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Popular Tools */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Popular Tools
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/image-compressor" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">🖼️</span> Image Compressor
                </Link>
              </li>
              <li>
                <Link href="/tools/word-counter" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">📝</span> Word Counter
                </Link>
              </li>
              <li>
                <Link href="/tools/json-formatter" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">📋</span> JSON Formatter
                </Link>
              </li>
              <li>
                <Link href="/tools/qr-code-generator" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">📱</span> QR Code Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/password-generator" className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-xs">🔐</span> Password Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-zinc-600 mb-3">
              Get notified about new tools and updates. No spam, unsubscribe anytime.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-3 py-2 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Subscribe
              </button>
            </form>
            <p className="text-xs text-zinc-500 mt-2">
              🔒 We respect your privacy.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-300 my-8"></div>

        {/* Bottom Footer - جميع العناصر في صف واحد */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-600">
          <p>
            © {currentYear} <span className="text-zinc-900 font-medium">UseItTool</span>. All rights reserved.
          </p>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            All systems operational
          </span>
          <p className="italic">
            Made with ❤️ for everyone who needs fast, free, and private tools.
          </p>
        </div>
      </div>
    </footer>
  );
}
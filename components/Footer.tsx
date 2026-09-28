import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="text-white text-xl font-bold mb-4">UseItTool</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Fast, free, and private online tools for your everyday tasks. 100% free, no signup required.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">🏠 Home</Link></li>
            <li><Link href="/all-tools" className="hover:text-white transition-colors">🛠️ All Tools</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">️ About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">📬 Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition-colors">🔒 Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">⚖️ Terms of Service</Link></li>
            <li><Link href="/cookies" className="hover:text-white transition-colors">🍪 Cookie Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white transition-colors">⚠️ Disclaimer</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm text-zinc-400 mb-4">Get notified about new tools. No spam.</p>
          <a href="mailto:support@useittool.com" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
             support@useittool.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
        <p>© 2026 UseItTool. All rights reserved.</p>
        <p className="mt-2">Made with ❤️ for everyone who needs fast, free, and private tools.</p>
      </div>
    </footer>
  );
}
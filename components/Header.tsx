import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🛠️</span>
            <span className="text-xl font-bold text-zinc-900">UseItTool</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/all-tools" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">
              All Tools
            </Link>
            <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button (Placeholder) */}
          <button className="md:hidden text-zinc-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
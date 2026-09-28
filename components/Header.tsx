import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-zinc-950">
          UseItTool
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-zinc-600 sm:flex">
          <Link href="#categories" className="hover:text-zinc-950 transition-colors">Categories</Link>
          <Link href="#popular" className="hover:text-zinc-950 transition-colors">Popular</Link>
        </nav>
      </div>
    </header>
  );
}
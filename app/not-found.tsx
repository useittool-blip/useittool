import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { tools } from "@/lib/tools";

export default function NotFound() {
  // عرض 4 أدوات عشوائية للاقتراح
  const suggestedTools = tools
    .filter((tool) => tool.popular)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        {/* 404 Hero */}
        <section className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="text-9xl font-black text-indigo-600 tracking-tighter">
              404
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="mx-auto max-w-xl text-base sm:text-lg text-zinc-600 leading-relaxed">
            The page you're looking for doesn't exist, has been moved, or is temporarily unavailable. 
            But don't worry — you can find what you need below!
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <label className="block text-sm font-medium text-zinc-700 mb-3 text-center">
              🔍 Search for the tool you need:
            </label>
            <SearchBar />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href="/"
              className="group rounded-xl border border-zinc-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-bold text-zinc-950 mb-1">Go Home</h3>
              <p className="text-xs text-zinc-500">Return to homepage</p>
            </Link>

            <Link
              href="/#categories"
              className="group rounded-xl border border-zinc-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-3xl mb-2">📂</div>
              <h3 className="font-bold text-zinc-950 mb-1">Browse Categories</h3>
              <p className="text-xs text-zinc-500">Explore all tool categories</p>
            </Link>

            <Link
              href="/contact"
              className="group rounded-xl border border-zinc-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-3xl mb-2">📬</div>
              <h3 className="font-bold text-zinc-950 mb-1">Contact Us</h3>
              <p className="text-xs text-zinc-500">Report a broken link</p>
            </Link>
          </div>
        </section>

        {/* Suggested Tools */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 mb-6 text-center">
            🛠️ Popular Tools You Might Like
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {suggestedTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="font-bold text-zinc-950 mb-1 group-hover:text-indigo-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-zinc-500 line-clamp-2">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Fun Message */}
        <section className="text-center py-8 border-t border-zinc-200">
          <p className="text-sm text-zinc-500 italic">
            💡 <strong>Tip:</strong> Use the search bar above to find any tool instantly, 
            or press <kbd className="px-1.5 py-0.5 bg-zinc-100 border border-zinc-300 rounded font-mono text-xs">Ctrl+K</kbd> for quick search.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";
import { tools } from "@/lib/tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools - UseItTool | 14+ Free Online Tools",
  description: "Browse all 14+ free online tools at UseItTool. Image compressors, text tools, developer utilities, calculators, QR generators, and more. No signup required.",
};

export default function AllToolsPage() {
  // Group tools by category
  const categories = Array.from(new Set(tools.map((tool) => tool.category)));

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            All Tools
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Browse our complete collection of {tools.length}+ free online tools.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-2xl">
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-12">
          <div className="grid gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 text-center">
              <div className="text-3xl font-bold text-indigo-600">{tools.length}</div>
              <div className="text-sm text-zinc-600 mt-1">Total Tools</div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 text-center">
              <div className="text-3xl font-bold text-indigo-600">{categories.length}</div>
              <div className="text-sm text-zinc-600 mt-1">Categories</div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 text-center">
              <div className="text-3xl font-bold text-indigo-600">100%</div>
              <div className="text-sm text-zinc-600 mt-1">Free Forever</div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 text-center">
              <div className="text-3xl font-bold text-indigo-600">0</div>
              <div className="text-sm text-zinc-600 mt-1">Signup Required</div>
            </div>
          </div>
        </section>

        {/* Tools by Category */}
        {categories.map((category) => {
          const categoryTools = tools.filter((tool) => tool.category === category);
          return (
            <section key={category} className="mb-12" id={category.toLowerCase()}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                  {category} Tools
                </h2>
                <p className="mt-2 text-sm text-zinc-500">
                  {categoryTools.length} {categoryTools.length === 1 ? 'tool' : 'tools'} available
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryTools.map((tool) => (
                  <ToolCard
                    key={tool.slug}
                    name={tool.name}
                    description={tool.description}
                    href={`/tools/${tool.slug}`}
                    icon={tool.icon}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {/* Quick Navigation */}
        <section className="mb-12">
          <h2 className="text-xl font-bold tracking-tight text-zinc-950 mb-4">
            🧭 Quick Navigation
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase()}`}
                className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium rounded-lg transition-colors"
              >
                {category} ({tools.filter((t) => t.category === category).length})
              </a>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-8 border-t border-zinc-200">
          <h3 className="text-xl font-bold text-zinc-950 mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-zinc-600 mb-4">
            We're constantly adding new tools. Let us know what you need!
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
          >
            Suggest a Tool →
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
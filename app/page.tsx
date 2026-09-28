import SearchBar from "@/components/SearchBar";
import ToolCard from "@/components/ToolCard";
import { getAllTools, getCategories, Category } from "@/lib/tools";

export default function HomePage() {
  const tools = getAllTools();
  const categories: Category[] = getCategories();
  const popularTools = tools.filter((tool) => tool.popular).slice(0, 6);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <section className="text-center space-y-6 py-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
          Simple tools for everyday tasks
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          UseItTool helps you complete everyday tasks quickly and securely. 100% free, no signup required, and your data never leaves your device.
        </p>
        <div className="max-w-xl mx-auto">
          <SearchBar tools={tools} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/all-tools?category=${category.id}`}
              className="p-4 bg-white rounded-xl border border-zinc-200 hover:border-indigo-500 hover:shadow-md transition-all text-center group"
            >
              <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">{category.icon}</span>
              <span className="font-medium text-zinc-900">{category.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Popular Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
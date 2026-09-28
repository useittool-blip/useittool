import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";
import { tools } from "@/lib/tools";

const categories = [
  { name: "Image Tools", description: "Compress, resize, and convert images online.", icon: "🖼️", slug: "image" },
  { name: "PDF Tools", description: "Merge, split, and convert PDF files easily.", icon: "📄", slug: "pdf" },
  { name: "Text Tools", description: "Count, format, and transform text quickly.", icon: "✍️", slug: "text" },
  { name: "Developer Tools", description: "Simple utilities for developers and coding tasks.", icon: "💻", slug: "developer" },
  { name: "SEO Tools", description: "Practical tools for everyday SEO tasks.", icon: "🔎", slug: "seo" },
  { name: "AI Tools", description: "Helpful tools powered by modern AI technology.", icon: "✨", slug: "ai" },
  { name: "Converters", description: "Convert files, formats, and values easily.", icon: "🔄", slug: "converters" },
  { name: "Calculators", description: "Fast and simple calculators for everyday use.", icon: "🧮", slug: "calculators" },
  { name: "QR Tools", description: "Create and work with QR codes quickly.", icon: "▦", slug: "qr" },
  { name: "Design Tools", description: "Color pickers, gradients, and CSS generators.", icon: "🎨", slug: "design" },
];

export default function Home() {
  const popularTools = tools.filter((tool) => tool.popular).length > 0 
    ? tools.filter((tool) => tool.popular) 
    : tools.slice(0, 8);

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              
              <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                Simple tools for everyday tasks.
              </h1>
              
              {/* ========== النص الجديد ========== */}
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                UseItTool helps you complete everyday tasks with fast, free, online tools.
              </p>
              {/* =================================== */}
              
              <div className="mt-8 flex justify-center w-full max-w-2xl mx-auto">
                <SearchBar />
              </div>

            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
              Browse Tools by Category
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
              Explore useful online tools organized into simple categories.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <a
                key={category.name}
                href={`#${category.slug}`}
                className="group rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-2xl transition group-hover:bg-zinc-900 group-hover:text-white">
                  {category.icon}
                </div>
                <h3 className="font-bold text-zinc-950">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{category.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Popular Tools Section */}
        <section id="popular" className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                Popular Tools
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                Start with some of the most useful tools available on UseItTool.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {popularTools.map((tool) => (
                <ToolCard
                  key={tool.slug}
                  name={tool.name}
                  description={tool.description}
                  href={`/tools/${tool.slug}`}
                  icon={tool.icon}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
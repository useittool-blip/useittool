import ToolHero from "@/components/ToolHero";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <main className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <ToolHero />
        {children}
      </main>
    </div>
  );
}
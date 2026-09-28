import Link from "next/link";

interface ToolCardProps {
  name: string;
  description: string;
  href: string;
  icon: string;
}

export default function ToolCard({ name, description, href, icon }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-2xl transition group-hover:bg-zinc-900 group-hover:text-white">
        {icon}
      </div>
      <h3 className="font-bold text-zinc-950">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
    </Link>
  );
}
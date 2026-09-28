import Link from 'next/link';
import { Tool } from '@/lib/tools';

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link 
      href={`/tools/${tool.slug}`} 
      className="block p-6 bg-white rounded-xl border border-zinc-200 hover:border-indigo-500 hover:shadow-md transition-all group"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{tool.icon}</div>
      <h3 className="text-lg font-semibold text-zinc-900 mb-2">{tool.name}</h3>
      <p className="text-sm text-zinc-600 line-clamp-2">{tool.description}</p>
      {tool.popular && (
        <span className="inline-block mt-3 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
          Popular
        </span>
      )}
    </Link>
  );
}
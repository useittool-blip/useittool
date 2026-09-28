'use client';

import { usePathname } from 'next/navigation';
import { tools } from '@/lib/tools';

export default function ToolHero() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop() || '';
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) return null;

  return (
    <section className="text-center mb-6 pb-6 border-b border-zinc-200">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-2">
        {tool.name}
      </h1>
      <p className="max-w-2xl mx-auto text-sm leading-6 text-zinc-600 mb-4">
        {tool.description}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600">
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          100% Free
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          No Signup Required
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          100% Private
        </span>
      </div>
    </section>
  );
}
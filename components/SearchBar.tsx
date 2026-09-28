'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tool } from '@/lib/tools';

export default function SearchBar({ tools }: { tools: Tool[] }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(query.toLowerCase()) ||
    tool.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a tool (e.g., image, json, password)..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full px-6 py-4 text-lg rounded-xl border border-zinc-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none shadow-sm bg-white"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">
          🔍
        </div>
      </div>

      {isOpen && query.length > 0 && filteredTools.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-zinc-200 shadow-xl max-h-96 overflow-y-auto z-50">
          {filteredTools.slice(0, 6).map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="flex items-center gap-4 p-4 hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-0"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
            >
              <span className="text-2xl">{tool.icon}</span>
              <div>
                <div className="font-medium text-zinc-900">{tool.name}</div>
                <div className="text-sm text-zinc-500 line-clamp-1">{tool.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
      
      {isOpen && query.length > 0 && filteredTools.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-zinc-200 shadow-xl p-4 text-center text-zinc-500 z-50">
          No tools found matching "{query}"
        </div>
      )}
    </div>
  );
}
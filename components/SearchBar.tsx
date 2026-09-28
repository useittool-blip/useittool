'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { tools } from '@/lib/tools';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // ========== Filter Tools Based on Query ==========
  const filteredTools = query.trim()
    ? tools.filter((tool) => {
        const searchStr = `${tool.name} ${tool.description} ${tool.category} ${tool.keywords.join(' ')}`.toLowerCase();
        return searchStr.includes(query.toLowerCase());
      })
    : [];

  // ========== Close Dropdown When Clicking Outside ==========
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      {/* ========== Search Input (ثابت في الصفحة) ========== */}
      <div className="relative">
        <svg 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search for any tool (e.g., image, json, qr)..."
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-zinc-300 rounded-xl text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
        />
      </div>

      {/* ========== Search Results Dropdown ========== */}
      {isFocused && query.trim() !== '' && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-zinc-200 rounded-xl shadow-2xl overflow-hidden z-40">
          {filteredTools.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              <p>No tools found for "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">Try a different search term</p>
            </div>
          ) : (
            <div className="max-h-96 overflow-y-auto py-2">
              {filteredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  onClick={() => {
                    setQuery('');
                    setIsFocused(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition-colors"
                >
                  <div className="text-2xl flex-shrink-0">{tool.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {tool.name}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {tool.description}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 flex-shrink-0">
                    {tool.category}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Footer */}
          {filteredTools.length > 0 && (
            <div className="px-4 py-2 border-t border-zinc-200 bg-zinc-50 text-xs text-gray-500 text-right">
              {filteredTools.length} {filteredTools.length === 1 ? 'result' : 'results'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
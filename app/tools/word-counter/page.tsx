'use client';

import { useState, useMemo } from 'react';

export default function WordCounterPage() {
  const [text, setText] = useState<string>('');

  const stats = useMemo(() => {
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    const lines = text === '' ? 0 : text.split(/\n/).length;
    const readingTime = Math.ceil(words / 200);

    return {
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      lines,
      readingTime,
    };
  }, [text]);

  const handleClear = () => setText('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Text copied to clipboard!');
    } catch (err) {
      alert('Failed to copy text');
    }
  };

  const handlePaste = async () => {
    try {
      const clipText = await navigator.clipboard.readText();
      setText(clipText);
    } catch (err) {
      alert('Failed to paste text');
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
          <div className="text-2xl font-bold text-indigo-600">{stats.words}</div>
          <div className="text-xs text-gray-500 mt-1">Words</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
          <div className="text-2xl font-bold text-indigo-600">{stats.characters}</div>
          <div className="text-xs text-gray-500 mt-1">Characters</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
          <div className="text-2xl font-bold text-indigo-600">{stats.charactersNoSpaces}</div>
          <div className="text-xs text-gray-500 mt-1">No Spaces</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
          <div className="text-2xl font-bold text-indigo-600">{stats.sentences}</div>
          <div className="text-xs text-gray-500 mt-1">Sentences</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
          <div className="text-2xl font-bold text-indigo-600">{stats.paragraphs}</div>
          <div className="text-xs text-gray-500 mt-1">Paragraphs</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
          <div className="text-2xl font-bold text-indigo-600">{stats.lines}</div>
          <div className="text-xs text-gray-500 mt-1">Lines</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
          <div className="text-2xl font-bold text-indigo-600">{stats.readingTime}m</div>
          <div className="text-xs text-gray-500 mt-1">Read Time</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Enter or paste your text below
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="w-full min-h-[300px] p-4 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y font-mono"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handlePaste}
          className="flex-1 min-w-[150px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Paste
        </button>

        <button
          onClick={handleCopy}
          disabled={text.length === 0}
          className="flex-1 min-w-[150px] bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </button>

        <button
          onClick={handleClear}
          disabled={text.length === 0}
          className="flex-1 min-w-[150px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Clear
        </button>
      </div>
    </div>
  );
}
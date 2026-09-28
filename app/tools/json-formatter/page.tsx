'use client';

import { useState, useRef, ChangeEvent } from 'react';

export default function JsonFormatterPage() {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [indentSize, setIndentSize] = useState<number>(2);
  const [sortKeys, setSortKeys] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [stats, setStats] = useState<{
    inputSize: number;
    outputSize: number;
    lines: number;
    keys: number;
    isValid: boolean;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // ========== Count Keys in JSON ==========
  const countKeys = (obj: any): number => {
    if (typeof obj !== 'object' || obj === null) return 0;
    let count = 0;
    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        count += countKeys(item);
      });
    } else {
      count += Object.keys(obj).length;
      Object.values(obj).forEach((val) => {
        count += countKeys(val);
      });
    }
    return count;
  };

  // ========== Format JSON (Beautify) ==========
  const handleBeautify = () => {
    if (!inputText.trim()) {
      setError('Please enter JSON text');
      setOutputText('');
      setStats(null);
      return;
    }

    try {
      const parsed = JSON.parse(inputText);
      let formatted: string;

      if (sortKeys && typeof parsed === 'object' && parsed !== null) {
        const sortObjectKeys = (obj: any): any => {
          if (Array.isArray(obj)) {
            return obj.map(sortObjectKeys);
          } else if (typeof obj === 'object' && obj !== null) {
            return Object.keys(obj)
              .sort()
              .reduce((acc: any, key: string) => {
                acc[key] = sortObjectKeys(obj[key]);
                return acc;
              }, {});
          }
          return obj;
        };
        const sorted = sortObjectKeys(parsed);
        formatted = JSON.stringify(sorted, null, indentSize);
      } else {
        formatted = JSON.stringify(parsed, null, indentSize);
      }

      setOutputText(formatted);
      setError('');
      setStats({
        inputSize: inputText.length,
        outputSize: formatted.length,
        lines: formatted.split('\n').length,
        keys: countKeys(parsed),
        isValid: true,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Invalid JSON';
      setError(errorMessage);
      setOutputText('');
      setStats({
        inputSize: inputText.length,
        outputSize: 0,
        lines: 0,
        keys: 0,
        isValid: false,
      });
    }
  };

  // ========== Minify JSON ==========
  const handleMinify = () => {
    if (!inputText.trim()) {
      setError('Please enter JSON text');
      setOutputText('');
      setStats(null);
      return;
    }

    try {
      const parsed = JSON.parse(inputText);
      const minified = JSON.stringify(parsed);

      setOutputText(minified);
      setError('');
      setStats({
        inputSize: inputText.length,
        outputSize: minified.length,
        lines: 1,
        keys: countKeys(parsed),
        isValid: true,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Invalid JSON';
      setError(errorMessage);
      setOutputText('');
      setStats({
        inputSize: inputText.length,
        outputSize: 0,
        lines: 0,
        keys: 0,
        isValid: false,
      });
    }
  };

  // ========== Validate JSON ==========
  const handleValidate = () => {
    if (!inputText.trim()) {
      setError('Please enter JSON text');
      setStats(null);
      return;
    }

    try {
      JSON.parse(inputText);
      setError('');
      setOutputText('✅ Valid JSON!');
      setStats({
        inputSize: inputText.length,
        outputSize: inputText.length,
        lines: inputText.split('\n').length,
        keys: countKeys(JSON.parse(inputText)),
        isValid: true,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Invalid JSON';
      setError(errorMessage);
      setOutputText('❌ Invalid JSON');
      setStats({
        inputSize: inputText.length,
        outputSize: 0,
        lines: 0,
        keys: 0,
        isValid: false,
      });
    }
  };

  // ========== Copy to Clipboard ==========
  const handleCopy = async () => {
    if (!outputText) return;
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy text');
    }
  };

  // ========== Clear ==========
  const handleClear = () => {
    setInputText('');
    setOutputText('');
    setError('');
    setStats(null);
  };

  // ========== Load Sample ==========
  const handleLoadSample = () => {
    const sample = JSON.stringify(
      {
        name: "UseItTool",
        version: "1.0.0",
        description: "Free online tools for everyone",
        author: {
          name: "Ahmed",
          email: "contact@useittool.com",
        },
        features: ["Image Tools", "PDF Tools", "Text Tools", "Developer Tools"],
        settings: {
          theme: "light",
          language: "en",
          notifications: true,
        },
        stats: {
          users: 1000000,
          tools: 134,
          rating: 4.9,
        },
      },
      null,
      2
    );
    setInputText(sample);
    setError('');
    setOutputText('');
    setStats(null);
  };

  // ========== Upload File ==========
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.json') && file.type !== 'application/json') {
      alert('Please select a JSON file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('File is too large. Maximum size is 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setInputText(content);
      setError('');
      setOutputText('');
      setStats(null);
    };
    reader.readAsText(file);
  };

  // ========== Download ==========
  const handleDownload = () => {
    if (!outputText) return;
    const blob = new Blob([outputText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'formatted.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Action Buttons Row 1 */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleBeautify}
            className="flex-1 min-w-[140px] bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-5 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            Beautify
          </button>

          <button
            onClick={handleMinify}
            className="flex-1 min-w-[140px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-5 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Minify
          </button>

          <button
            onClick={handleValidate}
            className="flex-1 min-w-[140px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-5 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Validate
          </button>

          <button
            onClick={handleLoadSample}
            className="flex-1 min-w-[140px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-5 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Load Sample
          </button>
        </div>

        {/* Options Row */}
        <div className="mt-4 pt-4 border-t border-zinc-200 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Indent:</label>
            <select
              value={indentSize}
              onChange={(e) => setIndentSize(Number(e.target.value))}
              className="px-3 py-1.5 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>8 spaces</option>
              <option value={0}>Tab</option>
            </select>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={sortKeys}
              onChange={(e) => setSortKeys(e.target.checked)}
              className="w-4 h-4 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
            />
            <span className="text-sm font-medium text-gray-700">Sort keys alphabetically</span>
          </label>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700">
            Input JSON
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-xs text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Upload File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleFileUpload}
              className="hidden"
            />
            <span className="text-xs text-gray-500">
              {inputText.length} chars · {inputText.split('\n').length} lines
            </span>
          </div>
        </div>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder='Paste your JSON here, e.g.: {"name": "UseItTool", "version": "1.0.0"}'
          className="w-full min-h-[250px] p-4 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y font-mono bg-zinc-50"
          spellCheck={false}
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div>
              <div className="text-sm font-medium text-red-900">Invalid JSON</div>
              <div className="text-sm text-red-700 mt-1 font-mono">{error}</div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
            <div className={`text-2xl font-bold ${stats.isValid ? 'text-green-600' : 'text-red-600'}`}>
              {stats.isValid ? '✓' : '✗'}
            </div>
            <div className="text-xs text-gray-500 mt-1">Valid JSON</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">{stats.keys}</div>
            <div className="text-xs text-gray-500 mt-1">Total Keys</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">{stats.lines}</div>
            <div className="text-xs text-gray-500 mt-1">Lines</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {stats.outputSize > 0 ? `${((stats.outputSize / stats.inputSize) * 100).toFixed(0)}%` : '0%'}
            </div>
            <div className="text-xs text-gray-500 mt-1">Size Ratio</div>
          </div>
        </div>
      )}

      {/* Output Area */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700">
            Output
          </label>
          {outputText && (
            <span className="text-xs text-gray-500">
              {outputText.length} chars · {outputText.split('\n').length} lines
            </span>
          )}
        </div>
        <textarea
          value={outputText}
          readOnly
          placeholder="Formatted JSON will appear here..."
          className="w-full min-h-[250px] p-4 border border-zinc-300 rounded-lg text-sm bg-gray-50 resize-y font-mono"
          spellCheck={false}
        />
      </div>

      {/* Action Buttons Row 2 */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleCopy}
          disabled={!outputText}
          className="flex-1 min-w-[150px] bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>

        <button
          onClick={handleDownload}
          disabled={!outputText}
          className="flex-1 min-w-[150px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>

        <button
          onClick={handleClear}
          disabled={!inputText && !outputText}
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
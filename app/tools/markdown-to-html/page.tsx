'use client';

import { useState, useMemo } from 'react';
import { marked } from 'marked';

export default function MarkdownToHtmlPage() {
  const [markdown, setMarkdown] = useState<string>(
    `# Welcome to UseItTool

## This is a Markdown to HTML Converter

### Features
- **Bold text** and *italic text*
- [Links](https://example.com)
- Lists and more!

### Code Example
\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### Blockquote
> This is a blockquote. It can span multiple lines and is great for highlighting important information.

### Table
| Feature | Status |
|---------|--------|
| Bold | ✅ |
| Italic | ✅ |
| Links | ✅ |
| Code | ✅ |

Enjoy using **Markdown to HTML** converter! 🎉`
  );
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'split' | 'markdown' | 'preview'>('split');

  // ========== Convert Markdown to HTML ==========
  const htmlOutput = useMemo(() => {
    try {
      return marked.parse(markdown, { async: false }) as string;
    } catch (err) {
      return '<p style="color: red;">Error parsing Markdown</p>';
    }
  }, [markdown]);

  // ========== Statistics ==========
  const stats = useMemo(() => {
    const words = markdown.trim() === '' ? 0 : markdown.trim().split(/\s+/).length;
    const characters = markdown.length;
    const lines = markdown === '' ? 0 : markdown.split('\n').length;
    const htmlSize = new Blob([htmlOutput]).size;
    return { words, characters, lines, htmlSize };
  }, [markdown, htmlOutput]);

  // ========== Copy HTML ==========
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(htmlOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy HTML');
    }
  };

  // ========== Copy Markdown ==========
  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy Markdown');
    }
  };

  // ========== Download HTML ==========
  const handleDownload = () => {
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Converted Markdown</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.6;
      color: #333;
    }
    pre { background: #f4f4f4; padding: 1rem; border-radius: 6px; overflow-x: auto; }
    code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-size: 0.9em; }
    blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 1rem; color: #666; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background: #f4f4f4; }
    img { max-width: 100%; }
  </style>
</head>
<body>
${htmlOutput}
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `converted-${Date.now()}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // ========== Clear ==========
  const handleClear = () => {
    setMarkdown('');
  };

  // ========== Load Sample ==========
  const handleLoadSample = () => {
    setMarkdown(`# Welcome to UseItTool

## This is a Markdown to HTML Converter

### Features
- **Bold text** and *italic text*
- [Links](https://example.com)
- Lists and more!

### Code Example
\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### Blockquote
> This is a blockquote. It can span multiple lines.

### Table
| Feature | Status |
|---------|--------|
| Bold | ✅ |
| Italic | ✅ |
| Links | ✅ |

Enjoy using **Markdown to HTML** converter! 🎉`);
  };

  // ========== Format File Size ==========
  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* View Mode Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('split')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'split'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ⚡ Split View
            </button>
            <button
              onClick={() => setViewMode('markdown')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'markdown'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📝 Markdown Only
            </button>
            <button
              onClick={() => setViewMode('preview')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'preview'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              👁️ Preview Only
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span>{stats.words} words</span>
            <span>{stats.characters} chars</span>
            <span>{stats.lines} lines</span>
            <span>HTML: {formatSize(stats.htmlSize)}</span>
          </div>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className={`grid gap-4 ${
        viewMode === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
      }`}>
        {/* Markdown Input */}
        {(viewMode === 'split' || viewMode === 'markdown') && (
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">
                📝 Markdown Input
              </label>
              <button
                onClick={handleCopyMarkdown}
                className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Copy Markdown
              </button>
            </div>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="Type your Markdown here..."
              className="w-full min-h-[500px] p-4 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y font-mono bg-zinc-50"
              spellCheck={false}
            />
          </div>
        )}

        {/* HTML Preview */}
        {(viewMode === 'split' || viewMode === 'preview') && (
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">
                👁️ HTML Preview
              </label>
            </div>
            <div
              className="min-h-[500px] p-4 border border-zinc-300 rounded-lg bg-white prose prose-sm max-w-none overflow-auto"
              style={{
                lineHeight: '1.6',
              }}
              dangerouslySetInnerHTML={{ __html: htmlOutput }}
            />
          </div>
        )}
      </div>

      {/* HTML Output (Raw) */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700">
            📄 HTML Output (Raw Code)
          </label>
          <span className="text-xs text-gray-500">
            {htmlOutput.length} chars
          </span>
        </div>
        <textarea
          value={htmlOutput}
          readOnly
          className="w-full min-h-[200px] p-4 border border-zinc-300 rounded-lg text-sm bg-zinc-900 text-green-400 resize-y font-mono"
          spellCheck={false}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleCopy}
          className="flex-1 min-w-[150px] bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
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
              Copy HTML
            </>
          )}
        </button>

        <button
          onClick={handleDownload}
          className="flex-1 min-w-[150px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download HTML
        </button>

        <button
          onClick={handleLoadSample}
          className="flex-1 min-w-[150px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Load Sample
        </button>

        <button
          onClick={handleClear}
          disabled={!markdown}
          className="flex-1 min-w-[150px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Clear
        </button>
      </div>

      {/* Markdown Cheat Sheet */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          📚 Markdown Cheat Sheet
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between p-2 bg-zinc-50 rounded">
              <code className="text-indigo-600"># Heading 1</code>
              <span className="text-gray-500">→ Large heading</span>
            </div>
            <div className="flex justify-between p-2 bg-zinc-50 rounded">
              <code className="text-indigo-600">## Heading 2</code>
              <span className="text-gray-500">→ Medium heading</span>
            </div>
            <div className="flex justify-between p-2 bg-zinc-50 rounded">
              <code className="text-indigo-600">**bold**</code>
              <span className="text-gray-500">→ <strong>bold</strong></span>
            </div>
            <div className="flex justify-between p-2 bg-zinc-50 rounded">
              <code className="text-indigo-600">*italic*</code>
              <span className="text-gray-500">→ <em>italic</em></span>
            </div>
            <div className="flex justify-between p-2 bg-zinc-50 rounded">
              <code className="text-indigo-600">[text](url)</code>
              <span className="text-gray-500">→ Link</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between p-2 bg-zinc-50 rounded">
              <code className="text-indigo-600">![alt](url)</code>
              <span className="text-gray-500">→ Image</span>
            </div>
            <div className="flex justify-between p-2 bg-zinc-50 rounded">
              <code className="text-indigo-600">- item</code>
              <span className="text-gray-500">→ Bullet list</span>
            </div>
            <div className="flex justify-between p-2 bg-zinc-50 rounded">
              <code className="text-indigo-600">1. item</code>
              <span className="text-gray-500">→ Numbered list</span>
            </div>
            <div className="flex justify-between p-2 bg-zinc-50 rounded">
              <code className="text-indigo-600">&gt; quote</code>
              <span className="text-gray-500">→ Blockquote</span>
            </div>
            <div className="flex justify-between p-2 bg-zinc-50 rounded">
              <code className="text-indigo-600">```code```</code>
              <span className="text-gray-500">→ Code block</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
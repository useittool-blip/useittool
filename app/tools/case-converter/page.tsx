'use client';

import { useState } from 'react';

export default function CaseConverterPage() {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [activeCase, setActiveCase] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const caseOptions = [
    { id: 'uppercase', label: 'UPPERCASE', icon: '🔠' },
    { id: 'lowercase', label: 'lowercase', icon: '🔡' },
    { id: 'titlecase', label: 'Title Case', icon: '📝' },
    { id: 'sentencecase', label: 'Sentence case', icon: '✍️' },
    { id: 'camelcase', label: 'camelCase', icon: '🐪' },
    { id: 'snakecase', label: 'snake_case', icon: '🐍' },
    { id: 'kebabcase', label: 'kebab-case', icon: '🍢' },
    { id: 'constantcase', label: 'CONSTANT_CASE', icon: '🔤' },
    { id: 'alternatingcase', label: 'aLtErNaTiNg', icon: '🔀' },
    { id: 'inversecase', label: 'iNVERSE', icon: '🔄' },
  ];

  const toWords = (text: string): string[] => {
    return text
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[_\-]+/g, ' ')
      .toLowerCase()
      .split(/\s+/)
      .filter(w => w.length > 0);
  };

  const convertText = (text: string, caseType: string): string => {
    if (!text) return '';

    switch (caseType) {
      case 'uppercase':
        return text.toUpperCase();

      case 'lowercase':
        return text.toLowerCase();

      case 'titlecase':
        return text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());

      case 'sentencecase':
        return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());

      case 'camelcase': {
        const words = toWords(text);
        return words
          .map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join('');
      }

      case 'snakecase':
        return toWords(text).join('_').toLowerCase();

      case 'kebabcase':
        return toWords(text).join('-').toLowerCase();

      case 'constantcase':
        return toWords(text).join('_').toUpperCase();

      case 'alternatingcase':
        return text
          .split('')
          .map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase())
          .join('');

      case 'inversecase':
        return text
          .split('')
          .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
          .join('');

      default:
        return text;
    }
  };

  const handleCaseChange = (caseType: string) => {
    setActiveCase(caseType);
    setOutputText(convertText(inputText, caseType));
  };

  const handleInputChange = (value: string) => {
    setInputText(value);
    if (activeCase) {
      setOutputText(convertText(value, activeCase));
    }
  };

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

  const handleClear = () => {
    setInputText('');
    setOutputText('');
    setActiveCase('');
  };

  const handleSwap = () => {
    setInputText(outputText);
    setOutputText('');
    setActiveCase('');
  };

  const inputStats = {
    characters: inputText.length,
    words: inputText.trim() === '' ? 0 : inputText.trim().split(/\s+/).length,
  };

  return (
    <div className="space-y-6">
      {/* Case Type Buttons */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select Case Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {caseOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleCaseChange(option.id)}
              className={`px-3 py-3 rounded-lg text-sm font-medium transition-all border-2 ${
                activeCase === option.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
              }`}
            >
              <div className="text-lg mb-1">{option.icon}</div>
              <div className="text-xs">{option.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700">
            Input Text
          </label>
          <div className="text-xs text-gray-500">
            {inputStats.words} words · {inputStats.characters} chars
          </div>
        </div>
        <textarea
          value={inputText}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full min-h-[200px] p-4 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y font-mono"
        />
      </div>

      {/* Output Area */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700">
            Converted Text
          </label>
          {outputText && (
            <div className="text-xs text-gray-500">
              {outputText.split(/\s+/).filter(w => w).length} words · {outputText.length} chars
            </div>
          )}
        </div>
        <textarea
          value={outputText}
          readOnly
          placeholder="Converted text will appear here..."
          className="w-full min-h-[200px] p-4 border border-zinc-300 rounded-lg text-sm bg-gray-50 resize-y font-mono"
        />
      </div>

      {/* Action Buttons */}
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
          onClick={handleSwap}
          disabled={!outputText}
          className="flex-1 min-w-[150px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Use as Input
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
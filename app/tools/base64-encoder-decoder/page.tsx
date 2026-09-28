'use client';

import { useState, useRef, ChangeEvent } from 'react';

type Mode = 'encode' | 'decode';

export default function Base64EncoderDecoderPage() {
  const [mode, setMode] = useState<Mode>('encode');
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [urlSafe, setUrlSafe] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // ========== Encode Text to Base64 ==========
  const handleEncode = () => {
    if (!inputText) {
      setError('Please enter text to encode');
      setOutputText('');
      return;
    }

    try {
      // Use TextEncoder for proper Unicode support
      const encoder = new TextEncoder();
      const bytes = encoder.encode(inputText);
      let binary = '';
      bytes.forEach((b) => (binary += String.fromCharCode(b)));
      let base64 = btoa(binary);

      if (urlSafe) {
        base64 = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
      }

      setOutputText(base64);
      setError('');
    } catch (err) {
      setError('Failed to encode text');
      setOutputText('');
    }
  };

  // ========== Decode Base64 to Text ==========
  const handleDecode = () => {
    if (!inputText) {
      setError('Please enter Base64 text to decode');
      setOutputText('');
      return;
    }

    try {
      let base64 = inputText.trim();

      if (urlSafe) {
        base64 = base64.replace(/-/g, '+').replace(/_/g, '/');
        while (base64.length % 4) {
          base64 += '=';
        }
      }

      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const decoder = new TextDecoder();
      const text = decoder.decode(bytes);

      setOutputText(text);
      setError('');
    } catch (err) {
      setError('Invalid Base64 string. Please check your input.');
      setOutputText('');
    }
  };

  // ========== Auto-process on input change ==========
  const handleInputChange = (value: string) => {
    setInputText(value);
    setError('');

    if (!value) {
      setOutputText('');
      return;
    }

    try {
      if (mode === 'encode') {
        const encoder = new TextEncoder();
        const bytes = encoder.encode(value);
        let binary = '';
        bytes.forEach((b) => (binary += String.fromCharCode(b)));
        let base64 = btoa(binary);
        if (urlSafe) {
          base64 = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
        }
        setOutputText(base64);
      } else {
        let base64 = value.trim();
        if (urlSafe) {
          base64 = base64.replace(/-/g, '+').replace(/_/g, '/');
          while (base64.length % 4) {
            base64 += '=';
          }
        }
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        const decoder = new TextDecoder();
        setOutputText(decoder.decode(bytes));
      }
    } catch (err) {
      if (mode === 'decode') {
        setError('Invalid Base64 string');
      }
      setOutputText('');
    }
  };

  // ========== Mode Change ==========
  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setInputText(outputText);
    setOutputText(inputText);
    setError('');
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
  };

  // ========== Swap ==========
  const handleSwap = () => {
    const temp = inputText;
    setInputText(outputText);
    setOutputText(temp);
    setError('');
  };

  // ========== Load Sample ==========
  const handleLoadSample = () => {
    const sample = mode === 'encode'
      ? 'Hello, UseItTool! 🎉 Welcome to Base64 Encoder/Decoder.'
      : 'SGVsbG8sIFVzZUl0VG9vbCEg8J+OiSBXZWxjb21lIHRvIEJhc2U2NCBFbmNvZGVyL0RlY29kZXIu';
    setInputText(sample);
    setError('');
  };

  // ========== Upload File as Base64 ==========
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('File is too large. Maximum size is 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      const base64 = result.split(',')[1];
      setInputText(base64);
      setMode('decode');
      setOutputText('');
      setError('');
    };
    reader.readAsDataURL(file);
  };

  // ========== Download Output ==========
  const handleDownload = () => {
    if (!outputText) return;
    const blob = new Blob([outputText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `base64-${mode}-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // ========== Statistics ==========
  const stats = {
    inputLength: inputText.length,
    outputLength: outputText.length,
    ratio: inputText.length > 0 ? ((outputText.length / inputText.length) * 100).toFixed(1) : '0',
  };

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Operation Mode
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleModeChange('encode')}
            className={`px-4 py-4 rounded-xl text-sm font-medium transition-all border-2 ${
              mode === 'encode'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
            }`}
          >
            <div className="text-xl mb-1">🔒</div>
            <div className="font-semibold">Encode</div>
            <div className={`text-xs mt-1 ${mode === 'encode' ? 'text-indigo-200' : 'text-gray-500'}`}>
              Text → Base64
            </div>
          </button>
          <button
            onClick={() => handleModeChange('decode')}
            className={`px-4 py-4 rounded-xl text-sm font-medium transition-all border-2 ${
              mode === 'decode'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
            }`}
          >
            <div className="text-xl mb-1">🔓</div>
            <div className="font-semibold">Decode</div>
            <div className={`text-xs mt-1 ${mode === 'decode' ? 'text-indigo-200' : 'text-gray-500'}`}>
              Base64 → Text
            </div>
          </button>
        </div>

        {/* URL Safe Option */}
        <div className="mt-4 pt-4 border-t border-zinc-200">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={urlSafe}
              onChange={(e) => setUrlSafe(e.target.checked)}
              className="w-5 h-5 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">URL-Safe Base64</div>
              <div className="text-xs text-gray-500">
                Uses - and _ instead of + and / (safe for URLs and filenames)
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700">
            {mode === 'encode' ? 'Input Text' : 'Input Base64'}
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
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={handleLoadSample}
              className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Load Sample
            </button>
            <span className="text-xs text-gray-500">
              {stats.inputLength} chars
            </span>
          </div>
        </div>
        <textarea
          value={inputText}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'}
          className="w-full min-h-[200px] p-4 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y font-mono bg-zinc-50"
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
            <div className="text-sm text-red-700">{error}</div>
          </div>
        </div>
      )}

      {/* Statistics */}
      {outputText && (
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">{stats.inputLength}</div>
            <div className="text-xs text-gray-500 mt-1">Input Length</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">{stats.outputLength}</div>
            <div className="text-xs text-gray-500 mt-1">Output Length</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">{stats.ratio}%</div>
            <div className="text-xs text-gray-500 mt-1">Size Ratio</div>
          </div>
        </div>
      )}

      {/* Output Area */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700">
            {mode === 'encode' ? 'Base64 Output' : 'Decoded Text'}
          </label>
          {outputText && (
            <span className="text-xs text-gray-500">
              {stats.outputLength} chars
            </span>
          )}
        </div>
        <textarea
          value={outputText}
          readOnly
          placeholder="Output will appear here..."
          className="w-full min-h-[200px] p-4 border border-zinc-300 rounded-lg text-sm bg-gray-50 resize-y font-mono"
          spellCheck={false}
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
          Swap
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
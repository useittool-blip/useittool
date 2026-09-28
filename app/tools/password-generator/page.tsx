'use client';

import { useState, useMemo, useEffect } from 'react';

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState<number>(16);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [excludeSimilar, setExcludeSimilar] = useState<boolean>(false);
  const [generatedPassword, setGeneratedPassword] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [history, setHistory] = useState<string[]>([]);

  // ========== Character Sets ==========
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const NUMBERS = '0123456789';
  const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const SIMILAR_CHARS = 'il1LoO0';

  // ========== Build Character Pool ==========
  const characterPool = useMemo(() => {
    let pool = '';
    if (includeUppercase) pool += UPPERCASE;
    if (includeLowercase) pool += LOWERCASE;
    if (includeNumbers) pool += NUMBERS;
    if (includeSymbols) pool += SYMBOLS;

    if (excludeSimilar) {
      pool = pool.split('').filter(c => !SIMILAR_CHARS.includes(c)).join('');
    }

    return pool;
  }, [includeUppercase, includeLowercase, includeNumbers, includeSymbols, excludeSimilar]);

  // ========== Generate Password ==========
  const generatePassword = () => {
    if (characterPool.length === 0) {
      setGeneratedPassword('');
      return;
    }

    let password = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      password += characterPool[array[i] % characterPool.length];
    }

    setGeneratedPassword(password);
    setHistory(prev => [password, ...prev].slice(0, 5));
  };

  // ========== Auto-generate on settings change ==========
  useEffect(() => {
    generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, characterPool]);

  // ========== Calculate Password Strength ==========
  const strength = useMemo(() => {
    if (!generatedPassword) return { score: 0, label: '', color: '' };

    let score = 0;
    if (generatedPassword.length >= 8) score += 1;
    if (generatedPassword.length >= 12) score += 1;
    if (generatedPassword.length >= 16) score += 1;
    if (/[a-z]/.test(generatedPassword)) score += 1;
    if (/[A-Z]/.test(generatedPassword)) score += 1;
    if (/[0-9]/.test(generatedPassword)) score += 1;
    if (/[^a-zA-Z0-9]/.test(generatedPassword)) score += 1;

    if (score <= 2) return { score: 1, label: 'Very Weak', color: 'bg-red-500' };
    if (score <= 3) return { score: 2, label: 'Weak', color: 'bg-orange-500' };
    if (score <= 4) return { score: 3, label: 'Fair', color: 'bg-yellow-500' };
    if (score <= 5) return { score: 4, label: 'Strong', color: 'bg-green-500' };
    return { score: 5, label: 'Very Strong', color: 'bg-emerald-600' };
  }, [generatedPassword]);

  // ========== Copy to Clipboard ==========
  const handleCopy = async () => {
    if (!generatedPassword) return;
    try {
      await navigator.clipboard.writeText(generatedPassword);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy password');
    }
  };

  // ========== Copy from History ==========
  const handleCopyHistory = async (pwd: string) => {
    try {
      await navigator.clipboard.writeText(pwd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy password');
    }
  };

  // ========== Check if at least one option is selected ==========
  const hasOptions = includeUppercase || includeLowercase || includeNumbers || includeSymbols;

  return (
    <div className="space-y-6">
      {/* Generated Password Display */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Generated Password
        </label>
        <div className="relative">
          <div className="w-full px-4 py-4 pr-24 border-2 border-zinc-300 rounded-xl bg-zinc-50 font-mono text-lg break-all min-h-[60px] flex items-center">
            {generatedPassword || (
              <span className="text-gray-400">
                {!hasOptions ? 'Select at least one character type' : 'Generating...'}
              </span>
            )}
          </div>
          <button
            onClick={handleCopy}
            disabled={!generatedPassword}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>

        {/* Strength Meter */}
        {generatedPassword && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Strength</span>
              <span className={`text-sm font-bold ${
                strength.score <= 2 ? 'text-red-600' :
                strength.score === 3 ? 'text-yellow-600' :
                'text-green-600'
              }`}>
                {strength.label}
              </span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    level <= strength.score ? strength.color : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Password Settings
        </h3>

        {/* Length Slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700">
              Password Length
            </label>
            <span className="text-lg font-bold text-indigo-600">{length}</span>
          </div>
          <input
            type="range"
            min="4"
            max="64"
            step="1"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>4</span>
            <span>16</span>
            <span>32</span>
            <span>48</span>
            <span>64</span>
          </div>
        </div>

        {/* Character Type Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <label className="flex items-center gap-3 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="w-5 h-5 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">Uppercase Letters</div>
              <div className="text-xs text-gray-500 font-mono">A-Z</div>
            </div>
          </label>

          <label className="flex items-center gap-3 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="w-5 h-5 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">Lowercase Letters</div>
              <div className="text-xs text-gray-500 font-mono">a-z</div>
            </div>
          </label>

          <label className="flex items-center gap-3 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-5 h-5 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">Numbers</div>
              <div className="text-xs text-gray-500 font-mono">0-9</div>
            </div>
          </label>

          <label className="flex items-center gap-3 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="w-5 h-5 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">Symbols</div>
              <div className="text-xs text-gray-500 font-mono">!@#$%^&*...</div>
            </div>
          </label>
        </div>

        {/* Exclude Similar */}
        <label className="flex items-center gap-3 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors">
          <input
            type="checkbox"
            checked={excludeSimilar}
            onChange={(e) => setExcludeSimilar(e.target.checked)}
            className="w-5 h-5 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
          />
          <div className="flex-1">
            <div className="font-medium text-gray-900">Exclude Similar Characters</div>
            <div className="text-xs text-gray-500">
              Avoids confusing characters like: <span className="font-mono">i, l, 1, L, o, O, 0</span>
            </div>
          </div>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={generatePassword}
          disabled={!hasOptions}
          className="flex-1 min-w-[200px] bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Generate New Password
        </button>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">
            Recent Passwords (last 5)
          </h3>
          <div className="space-y-2">
            {history.map((pwd, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors"
              >
                <span className="font-mono text-sm text-gray-700 break-all flex-1 mr-3">
                  {pwd}
                </span>
                <button
                  onClick={() => handleCopyHistory(pwd)}
                  className="flex-shrink-0 text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
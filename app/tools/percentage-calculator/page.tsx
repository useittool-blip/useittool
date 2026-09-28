'use client';

import { useState, useMemo } from 'react';

type CalcMode = 'basic' | 'difference' | 'change' | 'discount';

export default function PercentageCalculatorPage() {
  const [mode, setMode] = useState<CalcMode>('basic');

  // Basic: What is X% of Y?
  const [basicPercent, setBasicPercent] = useState<string>('25');
  const [basicNumber, setBasicNumber] = useState<string>('200');

  // Difference: X is what % of Y?
  const [diffPart, setDiffPart] = useState<string>('50');
  const [diffWhole, setDiffWhole] = useState<string>('200');

  // Change: % change from X to Y
  const [changeFrom, setChangeFrom] = useState<string>('80');
  const [changeTo, setChangeTo] = useState<string>('100');

  // Discount: Price after X% discount on Y
  const [discountPercent, setDiscountPercent] = useState<string>('20');
  const [discountPrice, setDiscountPrice] = useState<string>('150');

  // ========== Calculate Results ==========
  const result = useMemo(() => {
    switch (mode) {
      case 'basic': {
        const p = parseFloat(basicPercent);
        const n = parseFloat(basicNumber);
        if (isNaN(p) || isNaN(n)) return null;
        return (p / 100) * n;
      }
      case 'difference': {
        const part = parseFloat(diffPart);
        const whole = parseFloat(diffWhole);
        if (isNaN(part) || isNaN(whole) || whole === 0) return null;
        return (part / whole) * 100;
      }
      case 'change': {
        const from = parseFloat(changeFrom);
        const to = parseFloat(changeTo);
        if (isNaN(from) || isNaN(to) || from === 0) return null;
        return ((to - from) / Math.abs(from)) * 100;
      }
      case 'discount': {
        const p = parseFloat(discountPercent);
        const price = parseFloat(discountPrice);
        if (isNaN(p) || isNaN(price)) return null;
        return price - (price * p / 100);
      }
      default:
        return null;
    }
  }, [mode, basicPercent, basicNumber, diffPart, diffWhole, changeFrom, changeTo, discountPercent, discountPrice]);

  // ========== Mode Options ==========
  const modeOptions: { id: CalcMode; label: string; icon: string; desc: string }[] = [
    { id: 'basic', label: 'Percentage of', icon: '🔢', desc: 'What is X% of Y?' },
    { id: 'difference', label: 'What %?', icon: '📊', desc: 'X is what % of Y?' },
    { id: 'change', label: '% Change', icon: '📈', desc: '% change from X to Y' },
    { id: 'discount', label: 'Discount', icon: '🏷️', desc: 'Price after X% off' },
  ];

  // ========== Format Result ==========
  const formatResult = (val: number): string => {
    if (Number.isInteger(val)) return val.toString();
    return val.toFixed(4).replace(/\.?0+$/, '');
  };

  // ========== Render Input Based on Mode ==========
  const renderInput = () => {
    switch (mode) {
      case 'basic':
        return (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-lg text-gray-600">What is</span>
            <input
              type="number"
              value={basicPercent}
              onChange={(e) => setBasicPercent(e.target.value)}
              className="w-28 px-4 py-3 border-2 border-indigo-300 rounded-xl text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-lg text-gray-600 font-bold">%</span>
            <span className="text-lg text-gray-600">of</span>
            <input
              type="number"
              value={basicNumber}
              onChange={(e) => setBasicNumber(e.target.value)}
              className="w-32 px-4 py-3 border-2 border-indigo-300 rounded-xl text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-lg text-gray-600">?</span>
          </div>
        );
      case 'difference':
        return (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="number"
              value={diffPart}
              onChange={(e) => setDiffPart(e.target.value)}
              className="w-32 px-4 py-3 border-2 border-indigo-300 rounded-xl text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-lg text-gray-600">is what % of</span>
            <input
              type="number"
              value={diffWhole}
              onChange={(e) => setDiffWhole(e.target.value)}
              className="w-32 px-4 py-3 border-2 border-indigo-300 rounded-xl text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-lg text-gray-600">?</span>
          </div>
        );
      case 'change':
        return (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-lg text-gray-600">% change from</span>
            <input
              type="number"
              value={changeFrom}
              onChange={(e) => setChangeFrom(e.target.value)}
              className="w-32 px-4 py-3 border-2 border-indigo-300 rounded-xl text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-lg text-gray-600">to</span>
            <input
              type="number"
              value={changeTo}
              onChange={(e) => setChangeTo(e.target.value)}
              className="w-32 px-4 py-3 border-2 border-indigo-300 rounded-xl text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        );
      case 'discount':
        return (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="number"
              value={discountPercent}
              onChange={(e) => setDiscountPercent(e.target.value)}
              className="w-28 px-4 py-3 border-2 border-indigo-300 rounded-xl text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-lg text-gray-600 font-bold">% off</span>
            <input
              type="number"
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
              className="w-32 px-4 py-3 border-2 border-indigo-300 rounded-xl text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-lg text-gray-600">$</span>
          </div>
        );
      default:
        return null;
    }
  };

  // ========== Get Result Label ==========
  const getResultLabel = (): string => {
    switch (mode) {
      case 'basic':
        return `${basicPercent}% of ${basicNumber}`;
      case 'difference':
        return `${diffPart} is what % of ${diffWhole}`;
      case 'change':
        return `Change from ${changeFrom} to ${changeTo}`;
      case 'discount':
        return `${discountPercent}% off $${discountPrice}`;
      default:
        return '';
    }
  };

  // ========== Get Result Suffix ==========
  const getResultSuffix = (): string => {
    switch (mode) {
      case 'difference':
      case 'change':
        return '%';
      case 'discount':
        return '$';
      default:
        return '';
    }
  };

  const isPositive = result !== null && result >= 0;

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Calculator Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {modeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setMode(option.id)}
              className={`px-4 py-4 rounded-xl text-sm font-medium transition-all border-2 text-left ${
                mode === option.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
              }`}
            >
              <div className="text-xl mb-1">{option.icon}</div>
              <div className="font-semibold">{option.label}</div>
              <div className={`text-xs mt-1 ${mode === option.id ? 'text-indigo-200' : 'text-gray-500'}`}>
                {option.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-8">
        <div className="flex flex-col items-center gap-8">
          {/* Input */}
          {renderInput()}

          {/* Result */}
          <div className="w-full max-w-md">
            <div className={`rounded-2xl p-8 text-center ${
              result !== null
                ? mode === 'change'
                  ? isPositive ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
                  : 'bg-indigo-50 border-2 border-indigo-200'
                : 'bg-gray-50 border-2 border-gray-200'
            }`}>
              <div className="text-sm text-gray-500 mb-2">
                {getResultLabel()}
              </div>
              <div className={`text-5xl font-bold ${
                result !== null
                  ? mode === 'change'
                    ? isPositive ? 'text-green-600' : 'text-red-600'
                    : 'text-indigo-600'
                  : 'text-gray-400'
              }`}>
                {result !== null ? (
                  <>
                    {mode === 'change' && isPositive ? '+' : ''}
                    {getResultSuffix() === '$' ? '$' : ''}
                    {formatResult(Math.abs(result))}
                    {getResultSuffix() === '%' ? '%' : ''}
                  </>
                ) : (
                  '—'
                )}
              </div>
              {mode === 'discount' && result !== null && (
                <div className="mt-3 text-sm text-gray-500">
                  You save: <span className="font-bold text-green-600">${formatResult(parseFloat(discountPrice) - result)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Examples */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Quick Examples
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <button
            onClick={() => { setMode('basic'); setBasicPercent('15'); setBasicNumber('200'); }}
            className="px-4 py-3 bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 rounded-lg text-sm text-left transition-colors"
          >
            <div className="font-medium text-gray-900">15% of 200</div>
            <div className="text-xs text-gray-500 mt-1">= 30</div>
          </button>
          <button
            onClick={() => { setMode('difference'); setDiffPart('45'); setDiffWhole('180'); }}
            className="px-4 py-3 bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 rounded-lg text-sm text-left transition-colors"
          >
            <div className="font-medium text-gray-900">45 is what % of 180</div>
            <div className="text-xs text-gray-500 mt-1">= 25%</div>
          </button>
          <button
            onClick={() => { setMode('change'); setChangeFrom('50'); setChangeTo('75'); }}
            className="px-4 py-3 bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 rounded-lg text-sm text-left transition-colors"
          >
            <div className="font-medium text-gray-900">Change from 50 to 75</div>
            <div className="text-xs text-gray-500 mt-1">= +50%</div>
          </button>
          <button
            onClick={() => { setMode('discount'); setDiscountPercent('30'); setDiscountPrice('99'); }}
            className="px-4 py-3 bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 rounded-lg text-sm text-left transition-colors"
          >
            <div className="font-medium text-gray-900">30% off $99</div>
            <div className="text-xs text-gray-500 mt-1">= $69.30</div>
          </button>
        </div>
      </div>
    </div>
  );
}
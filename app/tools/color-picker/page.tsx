'use client';

import { useState, useMemo } from 'react';

// ========== Helper Functions (Defined First) ==========
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

export default function ColorPickerPage() {
  const [hex, setHex] = useState<string>('#6366f1');
  const [copied, setCopied] = useState<string>('');

  // ========== Memoized Values ==========
  const rgb = useMemo(() => hexToRgb(hex), [hex]);

  const hsl = useMemo(() => {
    if (!rgb) return null;
    return rgbToHsl(rgb.r, rgb.g, rgb.b);
  }, [rgb]);

  const variations = useMemo(() => {
    if (!rgb) return [];
    const colors = [];

    for (let i = 4; i >= 1; i--) {
      const r = Math.min(255, Math.round(rgb.r + (255 - rgb.r) * (i / 5)));
      const g = Math.min(255, Math.round(rgb.g + (255 - rgb.g) * (i / 5)));
      const b = Math.min(255, Math.round(rgb.b + (255 - rgb.b) * (i / 5)));
      colors.push({
        hex: `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`,
        label: `Light ${i}`,
      });
    }

    colors.push({ hex, label: 'Original' });

    for (let i = 1; i <= 4; i++) {
      const r = Math.max(0, Math.round(rgb.r * (1 - i * 0.2)));
      const g = Math.max(0, Math.round(rgb.g * (1 - i * 0.2)));
      const b = Math.max(0, Math.round(rgb.b * (1 - i * 0.2)));
      colors.push({
        hex: `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`,
        label: `Dark ${i}`,
      });
    }

    return colors;
  }, [rgb, hex]);

  const complementary = useMemo(() => {
    if (!hsl) return [];
    const colors = [];

    colors.push({ hex: hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l), label: 'Complementary' });
    colors.push({ hex: hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l), label: 'Triadic 1' });
    colors.push({ hex: hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l), label: 'Triadic 2' });
    colors.push({ hex: hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l), label: 'Analogous 1' });
    colors.push({ hex: hslToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l), label: 'Analogous 2' });

    return colors;
  }, [hsl]);

  // ========== Handlers ==========
  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      alert('Failed to copy');
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHex(e.target.value);
  };

  const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
      setHex(value);
    }
  };

  return (
    <div className="space-y-6">
      {/* Color Picker Main */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Color Preview</label>
            <div className="w-full h-64 rounded-xl shadow-inner border-2 border-zinc-200 mb-4 transition-colors duration-200" style={{ backgroundColor: hex }} />
            <div className="flex items-center gap-3">
              <input type="color" value={hex} onChange={handleColorChange} className="w-16 h-16 rounded-lg border-2 border-zinc-300 cursor-pointer" />
              <input type="text" value={hex} onChange={handleHexInput} className="flex-1 px-4 py-3 border-2 border-zinc-300 rounded-lg text-lg font-mono font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="#000000" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 mb-3">Color Values</label>
            
            <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <div>
                <div className="text-xs text-gray-500 mb-1">HEX</div>
                <div className="font-mono font-bold text-lg">{hex.toUpperCase()}</div>
              </div>
              <button onClick={() => handleCopy(hex.toUpperCase(), 'HEX')} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                {copied === 'HEX' ? '✓ Copied!' : 'Copy'}
              </button>
            </div>

            {rgb && (
              <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                <div>
                  <div className="text-xs text-gray-500 mb-1">RGB</div>
                  <div className="font-mono font-bold text-lg">rgb({rgb.r}, {rgb.g}, {rgb.b})</div>
                </div>
                <button onClick={() => handleCopy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'RGB')} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                  {copied === 'RGB' ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            )}

            {hsl && (
              <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                <div>
                  <div className="text-xs text-gray-500 mb-1">HSL</div>
                  <div className="font-mono font-bold text-lg">hsl({hsl.h}°, {hsl.s}%, {hsl.l}%)</div>
                </div>
                <button onClick={() => handleCopy(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, 'HSL')} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                  {copied === 'HSL' ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Color Variations */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Color Variations (Lighter & Darker)</h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
          {variations.map((color, idx) => (
            <button key={idx} onClick={() => handleCopy(color.hex, `var-${idx}`)} className="group relative">
              <div className="w-full aspect-square rounded-lg border-2 border-zinc-200 hover:border-indigo-500 transition-colors shadow-sm" style={{ backgroundColor: color.hex }} />
              <div className="mt-2 text-center">
                <div className="text-xs font-mono text-gray-700">{color.hex.toUpperCase()}</div>
                <div className="text-xs text-gray-500">{color.label}</div>
              </div>
              {copied === `var-${idx}` && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <span className="text-white text-sm font-medium">✓ Copied!</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Complementary Colors */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Color Harmonies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {complementary.map((color, idx) => (
            <button key={idx} onClick={() => handleCopy(color.hex, `comp-${idx}`)} className="group relative">
              <div className="w-full h-24 rounded-lg border-2 border-zinc-200 hover:border-indigo-500 transition-colors shadow-sm mb-2" style={{ backgroundColor: color.hex }} />
              <div className="text-center">
                <div className="text-xs font-mono text-gray-700">{color.hex.toUpperCase()}</div>
                <div className="text-xs text-gray-500">{color.label}</div>
              </div>
              {copied === `comp-${idx}` && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <span className="text-white text-sm font-medium">✓ Copied!</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CSS Code */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">CSS Code</h3>
        <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-green-400 font-mono">
{`.my-element {
  color: ${hex};
  background-color: ${rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : ''};
  border-color: ${hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : ''};
}`}
          </pre>
        </div>
        <button
          onClick={() => handleCopy(`color: ${hex};\nbackground-color: rgb(${rgb?.r}, ${rgb?.g}, ${rgb?.b});\nborder-color: hsl(${hsl?.h}, ${hsl?.s}%, ${hsl?.l}%);`, 'CSS')}
          className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {copied === 'CSS' ? '✓ Copied!' : 'Copy CSS'}
        </button>
      </div>
    </div>
  );
}
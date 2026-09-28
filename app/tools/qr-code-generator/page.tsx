'use client';

import { useState, useEffect, useRef, ChangeEvent } from 'react';
import QRCode from 'qrcode';

type QRType = 'url' | 'text' | 'email' | 'phone' | 'wifi' | 'vcard';

export default function QrCodeGeneratorPage() {
  const [qrType, setQrType] = useState<QRType>('url');
  const [url, setUrl] = useState<string>('https://useittool.com');
  const [text, setText] = useState<string>('Hello, World!');
  const [email, setEmail] = useState<string>('contact@example.com');
  const [phone, setPhone] = useState<string>('+1234567890');
  const [wifiSsid, setWifiSsid] = useState<string>('MyWiFi');
  const [wifiPassword, setWifiPassword] = useState<string>('');
  const [wifiEncryption, setWifiEncryption] = useState<string>('WPA');
  const [vcardName, setVcardName] = useState<string>('John Doe');
  const [vcardPhone, setVcardPhone] = useState<string>('+1234567890');
  const [vcardEmail, setVcardEmail] = useState<string>('john@example.com');
  const [vcardCompany, setVcardCompany] = useState<string>('');
  const [foregroundColor, setForegroundColor] = useState<string>('#000000');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [size, setSize] = useState<number>(300);
  const [errorCorrection, setErrorCorrection] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ========== Build QR Content Based on Type ==========
  const buildQRContent = (): string => {
    switch (qrType) {
      case 'url':
        return url;
      case 'text':
        return text;
      case 'email':
        return `mailto:${email}`;
      case 'phone':
        return `tel:${phone}`;
      case 'wifi':
        return `WIFI:T:${wifiEncryption};S:${wifiSsid};P:${wifiPassword};;`;
      case 'vcard':
        return `BEGIN:VCARD
VERSION:3.0
FN:${vcardName}
TEL:${vcardPhone}
EMAIL:${vcardEmail}
ORG:${vcardCompany}
END:VCARD`;
      default:
        return '';
    }
  };

  // ========== Generate QR Code ==========
  const generateQR = async () => {
    const content = buildQRContent();
    if (!content.trim()) {
      alert('Please enter content for the QR code');
      return;
    }

    setIsGenerating(true);

    try {
      const dataUrl = await QRCode.toDataURL(content, {
        width: size,
        margin: 2,
        color: {
          dark: foregroundColor,
          light: backgroundColor,
        },
        errorCorrectionLevel: errorCorrection,
      });

      setQrDataUrl(dataUrl);
    } catch (err) {
      console.error('QR generation error:', err);
      alert('Failed to generate QR code. The content may be too long.');
    } finally {
      setIsGenerating(false);
    }
  };

  // ========== Auto-generate on input change ==========
  useEffect(() => {
    const timeout = setTimeout(() => {
      generateQR();
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    qrType,
    url,
    text,
    email,
    phone,
    wifiSsid,
    wifiPassword,
    wifiEncryption,
    vcardName,
    vcardPhone,
    vcardEmail,
    vcardCompany,
    foregroundColor,
    backgroundColor,
    size,
    errorCorrection,
  ]);

  // ========== Download QR Code ==========
  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `qrcode-${qrType}-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ========== QR Type Options ==========
  const qrTypeOptions: { id: QRType; label: string; icon: string }[] = [
    { id: 'url', label: 'URL', icon: '🔗' },
    { id: 'text', label: 'Text', icon: '📝' },
    { id: 'email', label: 'Email', icon: '📧' },
    { id: 'phone', label: 'Phone', icon: '📞' },
    { id: 'wifi', label: 'WiFi', icon: '📶' },
    { id: 'vcard', label: 'vCard', icon: '👤' },
  ];

  // ========== Render Input Based on Type ==========
  const renderInput = () => {
    switch (qrType) {
      case 'url':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        );
      case 'text':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here..."
              className="w-full min-h-[120px] px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
            />
          </div>
        );
      case 'email':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contact@example.com"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        );
      case 'phone':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1234567890"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        );
      case 'wifi':
        return (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Network Name (SSID)
              </label>
              <input
                type="text"
                value={wifiSsid}
                onChange={(e) => setWifiSsid(e.target.value)}
                placeholder="MyWiFi"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="text"
                value={wifiPassword}
                onChange={(e) => setWifiPassword(e.target.value)}
                placeholder="Enter WiFi password"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Encryption
              </label>
              <select
                value={wifiEncryption}
                onChange={(e) => setWifiEncryption(e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">No Password</option>
              </select>
            </div>
          </div>
        );
      case 'vcard':
        return (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={vcardName}
                onChange={(e) => setVcardName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={vcardPhone}
                onChange={(e) => setVcardPhone(e.target.value)}
                placeholder="+1234567890"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={vcardEmail}
                onChange={(e) => setVcardEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company (optional)
              </label>
              <input
                type="text"
                value={vcardCompany}
                onChange={(e) => setVcardCompany(e.target.value)}
                placeholder="Company name"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* QR Type Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          QR Code Type
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {qrTypeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setQrType(option.id)}
              className={`px-3 py-3 rounded-lg text-sm font-medium transition-all border-2 ${
                qrType === option.id
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Section */}
        <div className="space-y-6">
          {/* Content Input */}
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
            {renderInput()}
          </div>

          {/* Customization */}
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Customization
            </h3>
            <div className="space-y-4">
              {/* Colors */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Foreground Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={foregroundColor}
                      onChange={(e) => setForegroundColor(e.target.value)}
                      className="w-12 h-10 rounded border border-zinc-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={foregroundColor}
                      onChange={(e) => setForegroundColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-zinc-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Background Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-12 h-10 rounded border border-zinc-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-zinc-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-medium text-gray-600">
                    Size
                  </label>
                  <span className="text-xs font-bold text-indigo-600">
                    {size}px
                  </span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="600"
                  step="50"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Error Correction */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  Error Correction Level
                </label>
                <select
                  value={errorCorrection}
                  onChange={(e) => setErrorCorrection(e.target.value as 'L' | 'M' | 'Q' | 'H')}
                  className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="L">Low (7% recovery)</option>
                  <option value="M">Medium (15% recovery)</option>
                  <option value="Q">Quartile (25% recovery)</option>
                  <option value="H">High (30% recovery)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right: QR Code Preview */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4 text-center">
            QR Code Preview
          </h3>
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            {isGenerating ? (
              <div className="text-gray-500">
                <svg
                  className="animate-spin h-10 w-10 mx-auto mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                <span className="text-sm">Generating...</span>
              </div>
            ) : qrDataUrl ? (
              <>
                <div
                  className="rounded-lg overflow-hidden shadow-md mb-4"
                  style={{
                    backgroundColor,
                    padding: '16px',
                  }}
                >
                  <img
                    src={qrDataUrl}
                    alt="QR Code"
                    style={{ width: size, height: size }}
                  />
                </div>
                <button
                  onClick={handleDownload}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download QR Code (PNG)
                </button>
              </>
            ) : (
              <div className="text-gray-400 text-center">
                <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <p className="text-sm">Enter content to generate QR code</p>
              </div>
            )}
          </div>
          <canvas ref={canvasRef} className="hidden" />
        </div>
      </div>
    </div>
  );
}
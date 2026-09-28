'use client';

import { useState, useRef, ChangeEvent, DragEvent } from 'react';

export default function JpgToPngPage() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  const [pngUrl, setPngUrl] = useState<string>('');
  const [pngBlob, setPngBlob] = useState<Blob | null>(null);
  const [quality, setQuality] = useState<number>(100);
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    const validTypes = ['image/jpeg', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      alert('Please select a JPG/JPEG file only');
      return;
    }

    if (file.size > 20 * 1024 * 1024) {
      alert('File is too large. Maximum size is 20MB');
      return;
    }

    setOriginalFile(file);
    setOriginalPreview(URL.createObjectURL(file));
    setPngUrl('');
    setPngBlob(null);

    convertToPng(file, quality);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const convertToPng = async (file: File, q: number) => {
    setIsConverting(true);

    try {
      const img = new Image();
      const imageUrl = URL.createObjectURL(file);

      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              if (pngUrl) URL.revokeObjectURL(pngUrl);
              const newUrl = URL.createObjectURL(blob);
              setPngUrl(newUrl);
              setPngBlob(blob);
            }
            URL.revokeObjectURL(imageUrl);
            setIsConverting(false);
          },
          'image/png',
          q / 100
        );
      };

      img.src = imageUrl;
    } catch (error) {
      console.error('Conversion error:', error);
      setIsConverting(false);
    }
  };

  const handleQualityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuality = Number(e.target.value);
    setQuality(newQuality);
    if (originalFile) {
      convertToPng(originalFile, newQuality);
    }
  };

  const handleDownload = () => {
    if (!pngBlob || !originalFile) return;
    const fileName = originalFile.name.replace(/\.(jpg|jpeg)$/i, '.png');
    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    if (originalPreview) URL.revokeObjectURL(originalPreview);
    if (pngUrl) URL.revokeObjectURL(pngUrl);
    setOriginalFile(null);
    setOriginalPreview('');
    setPngUrl('');
    setPngBlob(null);
    setQuality(100);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const originalSize = originalFile?.size || 0;
  const pngSize = pngBlob?.size || 0;
  const change = originalSize > 0 && pngSize > 0
    ? (((pngSize - originalSize) / originalSize) * 100).toFixed(1)
    : '0';
  const isLarger = pngSize > originalSize;

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div>
      <canvas ref={canvasRef} className="hidden" />

      {!originalFile && (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
            isDragging
              ? 'border-indigo-600 bg-indigo-50'
              : 'border-gray-300 hover:border-indigo-500 hover:bg-gray-100'
          }`}
        >
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-lg font-medium text-gray-700 mb-2">
            Drag & drop your JPG image here, or click to browse
          </p>
          <p className="text-sm text-gray-500">
            JPG/JPEG files only — Maximum file size: 20MB
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,image/jpeg"
            onChange={handleFileInput}
            className="hidden"
          />
        </div>
      )}

      {originalFile && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-gray-700">Quality</label>
                <span className="text-lg font-bold text-indigo-600">{quality}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={quality}
                onChange={handleQualityChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Smaller file (10%)</span>
                <span>Higher quality (100%)</span>
              </div>
            </div>
          </div>

          {pngBlob && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5">
                <div className="text-sm text-gray-500 mb-1">Original (JPG)</div>
                <div className="text-2xl font-bold text-gray-900">{formatSize(originalSize)}</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5">
                <div className="text-sm text-gray-500 mb-1">Converted (PNG)</div>
                <div className="text-2xl font-bold text-indigo-600">{formatSize(pngSize)}</div>
              </div>
              <div className={`rounded-xl shadow-sm border border-zinc-200 p-5 ${isLarger ? 'bg-orange-50' : 'bg-green-50'}`}>
                <div className="text-sm text-gray-600 mb-1">Size Change</div>
                <div className={`text-2xl font-bold ${isLarger ? 'text-orange-600' : 'text-green-600'}`}>
                  {isLarger ? `+${change}%` : `${change}%`}
                </div>
                <div className="text-xs text-gray-500 mt-1">PNG is typically larger</div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Original JPG</h3>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {originalPreview && (
                  <img src={originalPreview} alt="Original" className="max-w-full max-h-full object-contain" />
                )}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Converted PNG</h3>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {isConverting ? (
                  <div className="text-gray-500">
                    <svg className="animate-spin h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span className="text-sm">Converting...</span>
                  </div>
                ) : pngUrl ? (
                  <img src={pngUrl} alt="Converted" className="max-w-full max-h-full object-contain" />
                ) : (
                  <span className="text-gray-400">No preview</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleDownload}
              disabled={!pngUrl || isConverting}
              className="flex-1 min-w-[200px] bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PNG
            </button>
            <button
              onClick={handleReset}
              className="flex-1 min-w-[200px] bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Convert Another JPG
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
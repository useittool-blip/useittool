'use client';

import { useState, useMemo } from 'react';

export default function BmiCalculatorPage() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weightLbs, setWeightLbs] = useState<string>('');
  const [heightFt, setHeightFt] = useState<string>('');
  const [heightIn, setHeightIn] = useState<string>('');

  // ========== Calculate BMI ==========
  const bmiResult = useMemo(() => {
    let bmi = 0;
    let isValid = false;

    if (unit === 'metric') {
      const w = parseFloat(weight);
      const h = parseFloat(height);
      if (w > 0 && h > 0) {
        bmi = w / Math.pow(h / 100, 2);
        isValid = true;
      }
    } else {
      const w = parseFloat(weightLbs);
      const ft = parseFloat(heightFt) || 0;
      const inc = parseFloat(heightIn) || 0;
      const totalInches = (ft * 12) + inc;
      
      if (w > 0 && totalInches > 0) {
        bmi = (w / Math.pow(totalInches, 2)) * 703;
        isValid = true;
      }
    }

    if (!isValid) return null;

    let category = '';
    let color = '';
    let bgColor = '';
    let advice = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-blue-600';
      bgColor = 'bg-blue-50 border-blue-200';
      advice = 'You may need to gain some weight. Consult a healthcare provider for a healthy diet plan.';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal Weight';
      color = 'text-green-600';
      bgColor = 'bg-green-50 border-green-200';
      advice = 'Great job! You have a healthy weight. Maintain it with a balanced diet and regular exercise.';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      color = 'text-orange-600';
      bgColor = 'bg-orange-50 border-orange-200';
      advice = 'You may need to lose some weight. Consider a balanced diet and increased physical activity.';
    } else {
      category = 'Obese';
      color = 'text-red-600';
      bgColor = 'bg-red-50 border-red-200';
      advice = 'Your health may be at risk. Please consult a healthcare provider for personalized advice.';
    }

    return {
      value: bmi.toFixed(1),
      category,
      color,
      bgColor,
      advice,
    };
  }, [weight, height, unit, weightLbs, heightFt, heightIn]);

  // ========== BMI Scale Visual ==========
  const getBmiPosition = () => {
    if (!bmiResult) return 0;
    const bmi = parseFloat(bmiResult.value);
    // Scale: 15 to 40
    const min = 15;
    const max = 40;
    const percentage = Math.min(100, Math.max(0, ((bmi - min) / (max - min)) * 100));
    return percentage;
  };

  return (
    <div className="space-y-6">
      {/* Unit Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Measurement Unit
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setUnit('metric')}
            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border-2 ${
              unit === 'metric'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
            }`}
          >
            🌍 Metric (kg, cm)
          </button>
          <button
            onClick={() => setUnit('imperial')}
            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border-2 ${
              unit === 'imperial'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
            }`}
          >
            🇺🇸 Imperial (lbs, ft/in)
          </button>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Enter Your Details
        </h3>

        {unit === 'metric' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g., 70"
                min="1"
                className="w-full px-4 py-3 border-2 border-zinc-300 rounded-xl text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g., 175"
                min="1"
                className="w-full px-4 py-3 border-2 border-zinc-300 rounded-xl text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (lbs)
              </label>
              <input
                type="number"
                value={weightLbs}
                onChange={(e) => setWeightLbs(e.target.value)}
                placeholder="e.g., 150"
                min="1"
                className="w-full px-4 py-3 border-2 border-zinc-300 rounded-xl text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (ft)
              </label>
              <input
                type="number"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
                placeholder="e.g., 5"
                min="0"
                className="w-full px-4 py-3 border-2 border-zinc-300 rounded-xl text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (in)
              </label>
              <input
                type="number"
                value={heightIn}
                onChange={(e) => setHeightIn(e.target.value)}
                placeholder="e.g., 9"
                min="0"
                max="11"
                className="w-full px-4 py-3 border-2 border-zinc-300 rounded-xl text-lg font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Result Section */}
      {bmiResult && (
        <div className={`rounded-xl shadow-sm border-2 p-6 transition-all ${bmiResult.bgColor}`}>
          <div className="text-center mb-6">
            <div className="text-sm font-medium text-gray-600 mb-1">Your BMI</div>
            <div className={`text-6xl font-bold ${bmiResult.color} mb-2`}>
              {bmiResult.value}
            </div>
            <div className={`text-xl font-bold ${bmiResult.color}`}>
              {bmiResult.category}
            </div>
          </div>

          {/* Visual Scale */}
          <div className="relative h-4 bg-gradient-to-r from-blue-400 via-green-400 via-orange-400 to-red-500 rounded-full mb-8 mt-4">
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-gray-800 rounded-full shadow-md transition-all duration-500"
              style={{ left: `calc(${getBmiPosition()}% - 12px)` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
            <span>15</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>40</span>
          </div>

          {/* Advice */}
          <div className="bg-white bg-opacity-70 rounded-lg p-4 border border-gray-200">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div className="font-semibold text-gray-900 mb-1">Health Advice</div>
                <div className="text-sm text-gray-700">{bmiResult.advice}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BMI Reference Table */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          BMI Categories (WHO Standard)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">BMI Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              <tr>
                <td className="py-3 px-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                  Underweight
                </td>
                <td className="py-3 px-4 text-gray-600">&lt; 18.5</td>
              </tr>
              <tr>
                <td className="py-3 px-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  Normal Weight
                </td>
                <td className="py-3 px-4 text-gray-600">18.5 - 24.9</td>
              </tr>
              <tr>
                <td className="py-3 px-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                  Overweight
                </td>
                <td className="py-3 px-4 text-gray-600">25.0 - 29.9</td>
              </tr>
              <tr>
                <td className="py-3 px-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  Obese
                </td>
                <td className="py-3 px-4 text-gray-600">≥ 30.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
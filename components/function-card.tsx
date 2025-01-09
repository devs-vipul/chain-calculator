"use client";

import { useState, useEffect } from "react";

interface FunctionCardProps {
  id: number;
  equation: string;
  nextFunction: number | null;
  onChange: (equation: string) => void;
}

export function FunctionCard({
  id,
  equation,
  nextFunction,
  onChange,
}: FunctionCardProps) {
  const [currentEquation, setCurrentEquation] = useState(equation);

  useEffect(() => {
    setCurrentEquation(currentEquation);
  }, [currentEquation]);

  const handleChange = (newValue: string) => {
    setCurrentEquation(newValue);

    if (/^[0-9x\s\+\-\*\/\^]*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="relative bg-white rounded-lg p-6 shadow-md w-[280px]">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-gray-600">Function: {id}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1">
            Equation
          </label>
          <input
            type="text"
            value={currentEquation}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark mb-1">
            Next function
          </label>
          <select
            disabled
            value={nextFunction || ""}
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md text-gray-500"
          >
            <option value="">-</option>
            {nextFunction && (
              <option value={nextFunction}>Function: {nextFunction}</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

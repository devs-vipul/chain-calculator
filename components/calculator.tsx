"use client";

import { useState } from "react";
import { FunctionCard } from "./function-card";

const initialFunctions = [
  { id: 1, equation: "x^2", nextFunction: 2 },
  { id: 2, equation: "2x+4", nextFunction: 3 },
  { id: 3, equation: "x-2", nextFunction: 4 },
  { id: 4, equation: "x/2", nextFunction: 5 },
  { id: 5, equation: "x^2+20", nextFunction: null },
];

export function Calculator() {
  const [initialValue, setInitialValue] = useState(2);
  const [functions, setFunctions] = useState(initialFunctions);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid grid-cols-[auto_1fr_1fr_1fr] gap-8 items-start">
          <div className="p-4 border border-orange-200 rounded-lg bg-white relative">
            <div className="text-sm font-medium text-orange-600 mb-2">
              Initial value of x
            </div>
            <input
              type="number"
              value={initialValue == 0 ? "" : initialValue}
              onChange={(e) => setInitialValue(Number(e.target.value))}
              className="w-20 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-3 grid grid-cols-3 gap-8">
            {functions.map((func) => (
              <FunctionCard
                key={func.id}
                {...func}
                onChange={(equation) => {
                  setFunctions((prev) =>
                    prev.map((f) => (f.id === func.id ? { ...f, equation } : f))
                  );
                }}
              />
            ))}
          </div>

          <div className="col-start-4 p-4 border border-green-200 rounded-lg bg-white relative">
            <div className="text-sm font-medium text-green-600 mb-2">
              Final Output y
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

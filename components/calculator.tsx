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
        </div>
      </div>
    </div>
  );
}

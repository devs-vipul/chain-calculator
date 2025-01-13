"use client";

import { useState } from "react";
import { FunctionCard } from "./function-card";
import { regexValidators } from "@/utils/regex-validators";
import { Snackbar } from "./snackbar";
import { ConnectionDot } from "./connection-dots";

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
  const [snackbar, setSnackbar] = useState({ isVisible: false, message: "" });

  const calculateResult = (x: number, equation: string): number => {
    try {
      let jsEvaluation = equation.replace(regexValidators.powerRegex, "**");
      jsEvaluation = jsEvaluation.replace(
        regexValidators.multiplicationRegex,
        "$1*$2"
      );
      jsEvaluation = jsEvaluation.replace(
        regexValidators.equationVariableRegex,
        String(x)
      );

      return eval(jsEvaluation);
    } catch {
      return 0;
    }
  };

  const getFinalOutput = () => {
    let result = initialValue;
    const order = [1, 2, 3, 4, 5];

    for (const id of order) {
      const func = functions.find((f) => f.id === id);
      if (func) {
        result = calculateResult(result, func.equation);
      }
    }
    return result;
  };

  const handleEquationChange = (id: number, equation: string) => {
    if (/^[0-9x\s\+\-\*\/\^]*$/.test(equation)) {
      setFunctions((prev) =>
        prev.map((f) => (f.id === id ? { ...f, equation } : f))
      );
    } else {
      setSnackbar({
        isVisible: true,
        message: `Please enter a valid equation in Function ${id}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid grid-cols-[auto_1fr_1fr_1fr] gap-8 items-start">
          {/* Initial Input */}
          <div className="p-4 rounded-lg relative">
            <div className="text-xs font-medium text-white bg-custom-orange rounded-full px-3 py-1 mb-2">
              Initial value of x
            </div>
            <input
              type="number"
              value={initialValue == 0 ? "" : initialValue}
              onChange={(e) => setInitialValue(Number(e.target.value))}
              className="w-20 p-2 border border-custom-orange rounded-2xl text-lg font-bold"
            />
          </div>

          {/* Function Cards */}
          <div className="col-span-3 grid grid-cols-3 gap-8">
            {functions.map((func) => (
              <FunctionCard
                key={func.id}
                {...func}
                onChange={(equation) => handleEquationChange(func.id, equation)}
              />
            ))}
          </div>

          {/* Final Output */}
          <div className="col-start-4 p-4 relative">
            <div className="text-xs max-w-max font-medium text-white bg-custom-green rounded-full px-3 py-1 mb-2">
              Final Output y
            </div>
            <div className="w-auto max-w-max p-2 border border-custom-green rounded-2xl font-bold text-lg">
              {getFinalOutput()}
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        message={snackbar.message}
        isVisible={snackbar.isVisible}
        onClose={() => setSnackbar({ ...snackbar, isVisible: false })}
      />
    </div>
  );
}

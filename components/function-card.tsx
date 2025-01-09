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
    console.log(currentEquation);
    setCurrentEquation(currentEquation);
  }, [currentEquation]);

  const handleChange = (newValue: string) => {
    setCurrentEquation(newValue);
    if (/^[0-9x\s\+\-\*\/\^]*$/.test(newValue)) {
      onChange(newValue);
    } else {
      alert(`Please Enter Valid Equation in Fn: ${id}`);
    }
  };

  return (
    <div>
      <div>
        <h2>Function: {id}</h2>
      </div>

      <div>
        <div>
          <label>Equation</label>
          <input
            type="text"
            value={currentEquation}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <div>
          <label>Next function</label>
          <select disabled value={nextFunction || ""}>
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

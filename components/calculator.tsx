"use client";

import { useState } from "react";

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
    <div>
      <div>
        <div>
          <div>
            <div>Initial value of x</div>
            <input
              type="number"
              value={initialValue == 0 ? "" : initialValue}
              onChange={(e) => setInitialValue(Number(e.target.value))}
            />
          </div>

          <div>
            {functions.map((func) => (
              <div key={func.id}>
                <div>
                  <h2>Function: {func.id}</h2>
                </div>

                <div>
                  <div>
                    <label>Equation</label>
                    <input
                      type="text"
                      value={func.equation}
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>Next function</label>
                    <select disabled value={func.nextFunction || ""}>
                      <option value="">-</option>
                      {func.nextFunction && (
                        <option value={func.nextFunction}>
                          Function: {func.nextFunction}
                        </option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

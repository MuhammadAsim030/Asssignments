import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  const handleClick = (e) => {
    const value = e.target.value;
    if (operator === "") {
      setNum1(num1 + value);
    } else {
      setNum2(num2 + value);
    }
  };

  const handleOperator = (e) => {
    if (num1 === "") return;
    setOperator(e.target.value);
  };

  const handleEqual = () => {
    if (num1 === "" || num2 === "" || operator === "") return;
    let calculation;
    switch (operator) {
      case "+":
        calculation = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        calculation = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        calculation = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        calculation = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        return;
    }
    setResult(calculation);
    setNum1("");
    setNum2("");
    setOperator("");
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperator("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen shadow-2xl shadow-bg-red">
      <div className="bg-gray-900 p-4 rounded-3xl shadow-lg">
        <input
          className="w-full h-12 text-black text-right text-xl font-[italiana] bg-green-900 p-2 rounded-xl mb-4"
          type="text"
          value={num1 + operator + num2}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          <button onClick={handleClick} value="7" className="btn bg-gray-400 text-black shadow-lg hover:bg-green-600 hover:text-white rounded-2xl">
            7
          </button>
          <button onClick={handleClick} value="8" className="btn bg-gray-400 text-black shadow-lg hover:bg-green-600 hover:text-white rounded-2xl">
            8
          </button>
          <button onClick={handleClick} value="9" className="btn bg-gray-400 text-black shadow-lg hover:bg-green-600 hover:text-white rounded-2xl">
            9
          </button>
          <button onClick={handleOperator} value="/" className="bg-black text-white p-1 rounded hover:bg-green-900 focus:ring focus:ring-violet-300">
            /
          </button>

          <button onClick={handleClick} value="4" className="btn bg-gray-400 text-black shadow-lg hover:bg-green-600 hover:text-white rounded-2xl">
            4
          </button>
          <button onClick={handleClick} value="5" className="btn bg-gray-400 text-black shadow-lg hover:bg-green-600 hover:text-white rounded-2xl">
            5
          </button>
          <button onClick={handleClick} value="6" className="btn bg-gray-400 text-black shadow-lg hover:bg-green-600 hover:text-white rounded-2xl">
            6
          </button>
          <button onClick={handleOperator} value="*" className="bg-black text-white p-1 rounded hover:bg-green-900 focus:ring focus:ring-violet-300">
            *
          </button>

          <button onClick={handleClick} value="1" className="btn bg-gray-400 text-black shadow-lg hover:bg-green-600 hover:text-white rounded-2xl">
            1
          </button>
          <button onClick={handleClick} value="2" className="btn bg-gray-400 text-black shadow-lg hover:bg-green-600 hover:text-white rounded-2xl">
            2
          </button>
          <button onClick={handleClick} value="3" className="btn bg-gray-400 text-black shadow-lg hover:bg-green-600 hover:text-white rounded-2xl">
            3
          </button>
          <button onClick={handleOperator} value="-" className="bg-black text-white p-1 rounded hover:bg-green-900 focus:ring focus:ring-violet-300">
            -
          </button>

          <button onClick={handleClear} className="bg-green-700 rounded-sm font-bold text-xl hover:bg-black hover:text-white">
            C
          </button>

          <button onClick={handleClick} value="0" className="btn bg-gray-400 text-black shadow-lg hover:bg-green-600 hover:text-white rounded-2xl">
            0
          </button>
          
          <button onClick={handleEqual} className="bg-blue-800 text-white rounded-2xl hover:bg-black hover:text-white">
            =
          </button>
          <button onClick={handleOperator} value="+" className="bg-black text-white p-1 rounded hover:bg-green-900 focus:ring focus:ring-violet-300">
            +
          </button>
        </div>
        {result && (
          <div className="text-white font-bold text-lg mt-4">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
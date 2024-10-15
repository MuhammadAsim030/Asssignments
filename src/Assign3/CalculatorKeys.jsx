
import React from 'react';

function CalculatorKey({ keyValue, onClick, className }) {
    return (
        <button 
            className={`border rounded-lg p-4 m-1 text-lg ${className}`} 
            onClick={() => onClick(keyValue)}>
            {keyValue}
        </button>
    );
}

export default CalculatorKey;
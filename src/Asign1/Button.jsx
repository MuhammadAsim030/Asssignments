
import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-blue-500 hover:bg-blue-400 text-white py-4 rounded-3xl pt-4 mt-4 font-bold px-6"
    >
      {children}
    </button>
  );
};

export default Button;
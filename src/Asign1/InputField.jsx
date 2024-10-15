
import React from 'react';

const InputField = ({ type, placeholder, onChange, error }) => {
  return (
    <div className="w-[300px]">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-gray-200"
        required
      />
      {error && <p className="text-red-700 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
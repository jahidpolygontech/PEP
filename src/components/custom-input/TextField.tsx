"use client";

import React from "react";

interface TextFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 font-semibold text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-3 text-gray py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default TextField;

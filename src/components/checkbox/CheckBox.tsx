"use client"

import React from "react"

type CheckboxProps = {
  label?: string
  showInfo?: React.ReactNode
  name?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

function Checkbox({
  label,
  showInfo = false,
  name,
  checked,
  onChange,
  className = "",
}: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${className}`}
      />
      {label && (
        <div className="flex items-center space-x-1">
          <label className="text-sm text-gray-700 cursor-pointer">{label}</label>
          {showInfo && <span>{showInfo}</span>}
        </div>
      )}
    </div>
  )
}

export default Checkbox;

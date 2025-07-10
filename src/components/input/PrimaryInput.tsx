"use client"

import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

type InputProps = {
  label?: string
  showPasswordToggle?: boolean
  type?: string
  name?: string
  value?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export default function PrimaryInput({
  label,
  showPasswordToggle = false,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  className = "",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = showPasswordToggle ? (showPassword ? "text" : "password") : type

  return (
    <div className="space-y-2 text-gray">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <input
          type={inputType}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
      </div>
    </div>
  )
}

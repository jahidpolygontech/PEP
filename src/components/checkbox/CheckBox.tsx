import { forwardRef } from "react"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  showInfo?: boolean
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, showInfo = false, className = "", ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          ref={ref}
          type="checkbox"
          className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${className}`}
          {...props}
        />
        {label && (
          <div className="flex items-center space-x-1">
            <label className="text-sm text-gray-700 cursor-pointer">{label}</label>
            {showInfo}
          </div>
        )}
      </div>
    )
  },
)

Checkbox.displayName = "Checkbox"

export { Checkbox }

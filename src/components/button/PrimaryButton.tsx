import { forwardRef } from "react"
import Image from "next/image"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "xs" | "sm" | "md" | "lg" 
  startIcon?: string
  endIcon?: string
  iconAlt?: string
  label?: string
  borderColor?: string
}

const PrimaryBtn = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      startIcon,
      endIcon,
      iconAlt = "icon",
      label,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 font-medium rounded-md focus:outline-none focus:ring-1 transition-colors"

    const variantClasses: Record<string, string> = {
      primary: "bg-primary text-white hover:bg-blue-700 focus:ring-blue-500 cursor-pointer",
      secondary:"border-primary border-2 text-primary font-medium bg-white rounded hover:bg-gray-100 border text-base  cursor-pointer",
      outline: "border-2 text- text-primary text-base font-medium hover:bg-gray-100 cursor-pointer",
    }

    const sizeClasses: Record<string, string> = {
      xs:"px-6 py-2 text-base ",
      sm: "px-6 py-3 text-base",
      md: "px-8 py-3 text-sm",
      lg: "px-16 py-2 text-base "
    }

    const renderIcon = (src?: string) =>
      src ? <Image src={src} alt={iconAlt} width={20} height={20} /> : null

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {renderIcon(startIcon)}
        {label || children}
        {renderIcon(endIcon)}
      </button>
    )
  }
)

PrimaryBtn.displayName = "PrimaryBtn"

export default PrimaryBtn

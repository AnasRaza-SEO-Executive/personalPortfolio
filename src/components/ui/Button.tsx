import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost' | 'dark'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-dark border border-accent',
  outline:
    'bg-transparent text-white border border-white/80 hover:bg-white hover:text-charcoal',
  ghost: 'bg-transparent text-charcoal border border-charcoal/20 hover:border-accent hover:text-accent',
  dark: 'bg-charcoal text-white hover:bg-charcoal-light border border-charcoal',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

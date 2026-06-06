import type { ReactNode } from 'react'
import { Button } from './Button'

interface SectionHeaderProps {
  title: string
  actionLabel?: string
  onAction?: () => void
  align?: 'left' | 'center'
  dark?: boolean
  children?: ReactNode
}

export function SectionHeader({
  title,
  actionLabel,
  onAction,
  align = 'left',
  dark = false,
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between ${
        align === 'center' ? 'text-center sm:text-center' : ''
      }`}
    >
      <div className={align === 'center' ? 'mx-auto' : ''}>
        <h2
          className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
            dark ? 'text-white' : 'text-charcoal'
          }`}
        >
          {title}
        </h2>
        {children}
      </div>
      {actionLabel && onAction && (
        <Button variant={dark ? 'outline' : 'ghost'} onClick={onAction} className="shrink-0">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

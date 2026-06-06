import type { ReactNode } from 'react'

interface PageShellProps {
  title: string
  subtitle?: string
  dark?: boolean
  children: ReactNode
}

export function PageShell({ title, subtitle, dark = false, children }: PageShellProps) {
  return (
    <div className={dark ? 'bg-charcoal text-white' : 'bg-white text-charcoal'}>
      <div
        className={`border-b pt-28 pb-12 ${dark ? 'border-white/10 bg-charcoal' : 'border-gray-100 bg-gray-50'}`}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
          {subtitle && (
            <p
              className={`mt-4 max-w-2xl text-lg leading-relaxed ${dark ? 'text-white/60' : 'text-gray-500'}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">{children}</div>
    </div>
  )
}

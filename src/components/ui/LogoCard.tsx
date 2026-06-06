import { useState } from 'react'
import type { LogoItem } from '../../data/content'

interface LogoCardProps {
  item: LogoItem
  dark?: boolean
}

export function LogoCard({ item, dark = false }: LogoCardProps) {
  const [imgError, setImgError] = useState(false)
  const useDarkTile = dark || item.darkCard
  const initials = item.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div
        className={`flex aspect-[4/3] w-full max-w-[200px] items-center justify-center overflow-hidden rounded-xl p-4 transition-colors ${
          useDarkTile
            ? 'bg-charcoal-light hover:bg-charcoal'
            : dark
              ? 'bg-charcoal-light hover:bg-white/5'
              : 'border border-gray-100 bg-white hover:border-accent/30 shadow-sm'
        }`}
      >
        {!imgError ? (
          <img
            src={item.image}
            alt={item.name}
            className="max-h-full max-w-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            className={`text-lg font-bold ${useDarkTile || dark ? 'text-white/80' : 'text-charcoal/60'}`}
          >
            {initials}
          </span>
        )}
      </div>
      <div>
        <p className={`text-sm font-semibold ${dark ? 'text-white' : 'text-charcoal'}`}>
          {item.name}
        </p>
        {item.subtitle && (
          <p className={`mt-0.5 text-xs ${dark ? 'text-white/50' : 'text-gray-500'}`}>
            {item.subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

import { stats } from '../../data/content'

export function Marquee() {
  const items = [...stats.map((s) => s.label), ...stats.map((s) => s.label)]

  return (
    <div className="overflow-hidden bg-accent py-4" aria-hidden>
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-sm font-bold uppercase tracking-[0.2em] text-charcoal"
          >
            {item}
            <span className="text-charcoal/40">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}

import { stats } from '../../data/content'

export function StatsMarquee() {
  const items = [...stats.map((s) => s.label), ...stats.map((s) => s.label)]

  return (
    <div
      className="overflow-hidden bg-accent py-3.5 shadow-sm"
      aria-label="Professional highlights"
    >
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap px-4">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-xs font-bold uppercase tracking-[0.18em] text-charcoal sm:text-sm"
          >
            {item}
            <span className="text-charcoal/50 text-base leading-none" aria-hidden>
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

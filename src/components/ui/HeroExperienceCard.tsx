interface HeroExperienceCardProps {
  period: string
  title: string
  company: string
  highlighted?: boolean
}

export function HeroExperienceCard({
  period,
  title,
  company,
  highlighted = false,
}: HeroExperienceCardProps) {
  return (
    <article
      className={`group relative rounded-xl border bg-white p-5 shadow-sm transition-all duration-200 ${
        highlighted
          ? 'border-gray-100 border-t-[3px] border-r-[3px] border-t-accent border-r-accent'
          : 'border-gray-100 hover:border-t-[3px] hover:border-r-[3px] hover:border-t-accent hover:border-r-accent hover:border-l-gray-100 hover:border-b-gray-100'
      }`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
        {period}
      </p>
      <h3 className="mt-2 text-base font-bold text-charcoal">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{company}</p>
    </article>
  )
}

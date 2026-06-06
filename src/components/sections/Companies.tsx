import { companies } from '../../data/content'
import { AnimateIn } from '../ui/AnimateIn'
import { LogoCard } from '../ui/LogoCard'

interface CompaniesProps {
  /** Tighter layout when embedded above the hero marquee */
  embedded?: boolean
}

export function Companies({ embedded = false }: CompaniesProps) {
  return (
    <div
      className={
        embedded
          ? 'border-t border-gray-100 bg-gray-50 py-14 lg:py-16'
          : 'bg-white py-20 lg:py-28'
      }
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateIn>
          <h2 className="mb-10 text-center text-2xl font-bold text-charcoal sm:text-3xl">
            Companies I&apos;ve Worked With
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {companies.map((company, i) => (
            <AnimateIn key={company.id} delay={0.05 * i}>
              <LogoCard item={company} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  )
}

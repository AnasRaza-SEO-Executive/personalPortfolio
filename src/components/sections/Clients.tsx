import { clients } from '../../data/content'
import { AnimateIn } from '../ui/AnimateIn'
import { LogoCard } from '../ui/LogoCard'
import { Button } from '../ui/Button'



interface ClientsProps {
  embedded?: boolean
}

export function Clients({ embedded = false }: ClientsProps) {
  return (
    <div
      className={
        embedded ? 'border-t border-gray-100 bg-white py-14 lg:py-16' : 'bg-gray-50 py-20 lg:py-28'
      }
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateIn>
          <h2 className="mb-4 text-center text-2xl font-bold text-charcoal sm:text-3xl">
            Clients I&apos;ve Worked With
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-gray-500">
            Brands I&apos;ve helped with SEO, local search, and AI Overview visibility.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((client, i) => (
            <AnimateIn key={client.id} delay={0.03 * i}>
              <LogoCard item={client} />
            </AnimateIn>
          ))}
        </div>
        <AnimateIn className="mt-10 text-center">
          <Button
            variant={embedded ? 'ghost' : 'primary'}
            onClick={() =>
              document
                .getElementById('portfolio')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Results
          </Button>
        </AnimateIn>
      </div>
    </div>
  )
}

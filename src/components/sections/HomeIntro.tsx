import { homeIntro } from '../../data/content'
import { AnimateIn } from '../ui/AnimateIn'

export function HomeIntro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <AnimateIn>
          <h2 className="text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {homeIntro.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-500">
            {homeIntro.subheading}
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}

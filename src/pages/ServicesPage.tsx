import { services } from '../data/content'
import { PageShell } from '../components/layout/PageShell'
import { ServiceCard } from '../components/ui/ServiceCard'
import { AnimateIn } from '../components/ui/AnimateIn'
import { useContact } from '../context/ContactContext'
import { Button } from '../components/ui/Button'

export function ServicesPage() {
  const { openContact } = useContact()

  return (
    <PageShell
      title="Services"
      subtitle="End-to-end SEO services — from audits and rankings to AI Overview visibility and local search."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <AnimateIn key={service.id} delay={0.06 * i}>
            <ServiceCard service={service} />
          </AnimateIn>
        ))}
      </div>
      <AnimateIn className="mt-16 rounded-2xl bg-charcoal p-10 text-center text-white">
        <h2 className="text-2xl font-bold">Need a custom SEO package?</h2>
        <p className="mx-auto mt-3 max-w-lg text-white/60">
          Tell me about your website and goals — I&apos;ll recommend the right mix of on-page,
          technical, and off-page SEO.
        </p>
        <Button className="mt-6" onClick={() => openContact()}>
          Get a Free Consultation
        </Button>
      </AnimateIn>
    </PageShell>
  )
}

import { Link2, Mail, MapPin, Phone } from 'lucide-react'
import { heroImage, site } from '../data/content'
import { AnimateIn } from '../components/ui/AnimateIn'
import { Button } from '../components/ui/Button'

const infoCards = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Phone', value: site.phoneDisplay, href: site.whatsapp },
  { icon: MapPin, label: 'City', value: site.city, href: undefined },
]

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <AnimateIn className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Contact
          </span>

          <h1 className="mt-3 text-4xl font-bold text-charcoal sm:text-5xl">
            Let&apos;s Work Together
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Based in Karachi · Open to SEO projects, freelance opportunities,
            and long-term collaborations.
          </p>
        </AnimateIn>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Profile Image */}
          <AnimateIn className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="absolute -left-3 top-4 h-[90%] w-[80%] rounded-br-[2rem] bg-accent" />

            <div className="relative overflow-hidden rounded-br-[2rem] shadow-2xl ring-2 ring-white">
              <img
                src={heroImage}
                alt={site.name}
                className="aspect-[4/5] w-full object-cover object-[48%_22%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-2xl font-bold">{site.name}</p>
                <p className="text-sm text-white/80">{site.title}</p>
              </div>
            </div>
          </AnimateIn>

          {/* Contact Content */}
          <AnimateIn delay={0.1}>
            {/* LinkedIn */}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-charcoal bg-charcoal px-6 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-charcoal-light"
            >
              <Link2 size={20} />
              LinkedIn Profile
            </a>

            {/* CTA Box */}
            <div className="mt-6 rounded-2xl bg-charcoal p-6 text-white shadow-xl">
              <h3 className="text-2xl font-bold">
                Ready to Grow Your Website?
              </h3>

              <p className="mt-3 text-white/70">
                Whether you need Local SEO, Technical SEO, AI Overview
                Optimization, or a complete SEO strategy, I&apos;m available
                for freelance and long-term projects.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  onClick={() => window.open(site.whatsapp, '_blank')}
                >
                  Chat on WhatsApp
                </Button>

               <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=connectwithanasraza@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium transition-colors hover:border-accent"
>
  Send Email
</a>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {infoCards.map((card) => {
                const Icon = card.icon

                const inner = (
                  <>
                    <Icon className="shrink-0 text-accent" size={20} />

                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        {card.label}
                      </span>

                      <span className="mt-0.5 block break-all text-sm font-medium text-charcoal">
                        {card.value}
                      </span>
                    </span>
                  </>
                )

                return card.href ? (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-white"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={card.label}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    {inner}
                  </div>
                )
              })}
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  )
}
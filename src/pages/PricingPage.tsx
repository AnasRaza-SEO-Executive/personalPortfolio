import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function PricingPage() {
  const [openPlan, setOpenPlan] = useState<number | null>(null)

  const plans = [
    {
      title: 'Starter',
      price: '$199/mo',
      shortFeatures: [
        '10 Keywords',
        '2 Blogs',
        'Technical SEO',
        'Monthly Report',
      ],
      fullFeatures: [
        '10 Keywords Optimized',
        'Meta Tags Creation',
        'Analytics / Console Setup',
        '2 Blogs (500 Words)',
        'Onsite SEO',
        'Technical SEO',
        'Monthly Report',
        'Monthly Link Building',
      ],
    },

    {
      title: 'Standard',
      price: '$349/mo',
      popular: true,
      shortFeatures: [
        '30 Keywords',
        'Website Audit',
        'Premium Backlinks',
        'Local SEO',
      ],
      fullFeatures: [
        '30 Keywords Optimized',
        'Website Audit (Technical Audit, Link Audit, Content Audit)',
        'Meta Tags Creation',
        'Analytics / Console Setup',
        '5 Blogs (500 Words)',
        'Onsite SEO',
        'Technical SEO',
        'Monthly Report',
        'Monthly Link Building',
        'Site Speed Optimization',
        'Premium Backlinks',
        'Local SEO / GMB Optimization',
        'Schema Markup Implementation',
      ],
    },

    {
      title: 'Enterprise',
      price: '$599/mo',
      shortFeatures: [
        '100 Keywords',
        '10 Blogs',
        'International SEO',
        'Core Web Vitals',
      ],
      fullFeatures: [
        '100 Keywords Optimized',
        'Website Audit (Technical Audit, Content Audit, Link Audit)',
        'Meta Tags Creation',
        'Analytics / Console Setup',
        '10 Blogs (500 Words)',
        'Onsite SEO',
        'Technical SEO',
        'Monthly Report',
        'Monthly Link Building',
        'Site Speed Optimization',
        'Premium Backlinks',
        'Local SEO / GMB Optimization',
        'Schema Markup Implementation',
        'Voice Search Optimization',
        'Core Web Vitals Optimization',
        'International / Multilingual SEO',
        'Hreflang Tags Implementation',
      ],
    },
  ]

  return (
    <section id="pricing" className="relative overflow-hidden bg-charcoal py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full border border-accent/30 px-4 py-2 text-sm font-semibold text-accent">
            PRICING
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            SEO Pricing & Packages
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            <strong className="text-white">
              Pricing depends on your project size, competition, goals, and
              current SEO status.
            </strong>
            <br />
            We'll review your requirements and provide a tailored SEO strategy
            and quote.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`relative overflow-hidden rounded-3xl border p-8 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                plan.popular
                  ? 'border-accent bg-accent/10 shadow-accent/20'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.popular && (
                <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-2xl font-bold text-white">
                {plan.title}
              </h3>

              <div className="mt-4 text-5xl font-extrabold text-accent">
                {plan.price}
              </div>

              <p className="mt-2 text-sm text-white/60">
                Monthly SEO Growth Package
              </p>

              {/* Short Features */}
              <ul className="mt-8 space-y-3">
                {plan.shortFeatures.map((feature) => (
                  <li key={feature} className="text-white/80">
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              {/* Dropdown Button */}
              <button
                onClick={() =>
                  setOpenPlan(openPlan === index ? null : index)
                }
                className="mt-6 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-accent"
              >
                <span>View Full Features</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    openPlan === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expand Features */}
              <AnimatePresence>
                {openPlan === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-2 rounded-xl bg-black/20 p-4">
                      {plan.fullFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-white/70"
                        >
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA */}
              <a
                href="https://wa.me/923360376528"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </a>
            </div>
          ))}
        </div>

        {/* Contract Notice */}
        <div className="mt-16 rounded-3xl border border-accent/20 bg-accent/10 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Minimum Contract Duration
          </h3>

          <p className="mt-4 text-xl font-bold text-accent">
            2 Month Minimum Commitment Required
          </p>

          <p className="mt-4 max-w-3xl mx-auto text-white/70">
            SEO is a long-term investment. Meaningful ranking improvements,
            traffic growth, and authority building require consistent work.
            Therefore, all SEO packages require a minimum engagement period of
            <span className="font-bold text-white"> 2 months </span>
            to ensure proper implementation and measurable results.
          </p>
        </div>
      </div>
    </section>
  )
}
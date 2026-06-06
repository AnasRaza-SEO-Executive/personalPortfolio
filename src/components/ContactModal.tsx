import { motion, AnimatePresence } from 'framer-motion'
import { Link2, Mail, MessageCircle, Phone, X } from 'lucide-react'
import { useContact } from '../context/ContactContext'
import { site } from '../data/content'
import { Button } from './ui/Button'

export function ContactModal() {
  const { isOpen, selectedPlan, closeContact } = useContact()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
            onClick={() => closeContact()}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal
            aria-labelledby="contact-title"
            className="relative z-10 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
          >
            <button
              type="button"
              onClick={() => closeContact()}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-charcoal"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h2 id="contact-title" className="text-2xl font-bold text-charcoal">
              Let&apos;s Talk
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {selectedPlan
                ? `Interested in ${selectedPlan}? Message me on WhatsApp — fastest way to reach me.`
                : 'Ready to grow your SEO? Chat on WhatsApp or connect on LinkedIn.'}
            </p>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-4 rounded-xl bg-[#25D366] p-4 text-white transition-transform hover:scale-[1.02]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <MessageCircle size={26} />
              </span>
              <span className="text-left">
                <span className="block text-xs font-semibold uppercase tracking-wider opacity-90">
                  WhatsApp
                </span>
                <span className="block text-lg font-bold">{site.whatsappDisplay}</span>
              </span>
            </a>

            <div className="mt-4 space-y-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-gray-100 px-4 py-3 text-charcoal transition-colors hover:border-accent hover:bg-accent/5"
              >
                <Link2 className="text-[#0A66C2]" size={22} />
                <span className="text-sm font-medium">Connect on LinkedIn</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-lg border border-gray-100 px-4 py-3 text-charcoal transition-colors hover:border-accent hover:bg-accent/5"
              >
                <Mail className="text-accent" size={22} />
                <span className="text-sm font-medium break-all">{site.email}</span>
              </a>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-3 rounded-lg border border-gray-100 px-4 py-3 text-charcoal transition-colors hover:border-accent hover:bg-accent/5"
              >
                <Phone className="text-accent" size={22} />
                <span className="text-sm font-medium">{site.phoneDisplay}</span>
              </a>
            </div>

            <Button variant="ghost" className="mt-6 w-full" onClick={() => closeContact()}>
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

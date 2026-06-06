import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface DetailModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  image?: string
  children: React.ReactNode
}

export function DetailModal({
  isOpen,
  onClose,
  title,
  subtitle,
  image,
  children,
}: DetailModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            {image && (
              <img src={image} alt="" className="h-56 w-full object-cover sm:h-64" />
            )}
            <div className="p-8">
              {subtitle && (
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {subtitle}
                </span>
              )}
              <h2 className="mt-2 text-2xl font-bold text-charcoal">{title}</h2>
              <div className="mt-4 text-gray-600 leading-relaxed">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

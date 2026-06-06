import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface ContactContextValue {
  isOpen: boolean
  selectedPlan: string | null
  openContact: (plan?: string) => void
  closeContact: () => void
}

const ContactContext = createContext<ContactContextValue | null>(null)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const openContact = useCallback((plan?: string) => {
    setSelectedPlan(plan ?? null)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeContact = useCallback(() => {
    setIsOpen(false)
    setSelectedPlan(null)
    document.body.style.overflow = ''
  }, [])

  const value = useMemo(
    () => ({ isOpen, selectedPlan, openContact, closeContact }),
    [isOpen, selectedPlan, openContact, closeContact],
  )

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  )
}

export function useContact() {
  const ctx = useContext(ContactContext)
  if (!ctx) throw new Error('useContact must be used within ContactProvider')
  return ctx
}

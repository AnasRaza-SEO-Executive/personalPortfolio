import type { Service } from '../../data/content'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <article className="group rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
        <Icon size={22} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-charcoal">{service.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
    </article>
  )
}

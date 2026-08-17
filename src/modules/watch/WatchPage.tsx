import { content } from '@/content'
import { usePageMeta } from '@/shared/seo/usePageMeta'
import { useCategoryParam } from '@/shared/useCategoryParam'
import { NotFoundPage } from '@/modules/not-found/NotFoundPage'

export function WatchPage() {
  const categoria = useCategoryParam()
  const category = categoria ? content.getCategory(categoria) : undefined
  const events = categoria ? content.listEvents(categoria) : []

  usePageMeta(category ? `Onde assistir — ${category.fullName}` : 'Onde assistir')

  if (!categoria || !category) return <NotFoundPage />

  const channels = [...new Set(events.flatMap((event) => event.broadcasters.map((item) => item.name)))]

  return (
    <div className="page">
      <header className="page-head">
        <h1>Onde assistir {category.fullName}</h1>
        <p>Canais e plataformas do recorte de demonstração. Confirme a grade oficial antes da transmissão.</p>
      </header>
      <ul className="chip-row">
        {channels.map((name) => (
          <li key={name} className="chip">
            {name}
          </li>
        ))}
      </ul>
      <ul className="plain-list">
        {events.map((event) => (
          <li key={event.slug}>
            <strong>{event.name}</strong> — {event.broadcasters.map((item) => item.name).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  )
}

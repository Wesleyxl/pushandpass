import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router'
import { content } from '@/content'
import { usePageMeta } from '@/shared/seo/usePageMeta'

const KIND_LABEL = {
  noticia: 'Notícia',
  piloto: 'Piloto',
  evento: 'Evento',
  circuito: 'Circuito',
} as const

export function SearchPage() {
  const [params] = useSearchParams()
  const q = params.get('q') ?? ''
  const hits = useMemo(() => content.search(q), [q])

  usePageMeta(q ? `Busca: ${q}` : 'Busca')

  return (
    <div className="page">
      <header className="page-head">
        <h1>Busca</h1>
        <p>{q ? `Resultados para “${q}”` : 'Digite pelo menos 2 caracteres no campo do topo.'}</p>
      </header>
      <ul className="plain-list">
        {hits.map((hit) => (
          <li key={`${hit.kind}-${hit.href}`}>
            <span className="tag">{KIND_LABEL[hit.kind]}</span>{' '}
            <Link to={hit.href}>{hit.title}</Link>
            <div className="muted">{hit.subtitle}</div>
          </li>
        ))}
      </ul>
      {q.length >= 2 && hits.length === 0 ? <p>Nenhum resultado no conteúdo de demonstração.</p> : null}
    </div>
  )
}

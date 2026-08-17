import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { content } from '@/content'
import { PRIMARY_CATEGORIES, type CategorySlug } from '@/content/types'
import { usePageMeta } from '@/shared/seo/usePageMeta'
import { NotFoundPage } from '@/modules/not-found/NotFoundPage'

export function CircuitsPage() {
  const [filter, setFilter] = useState<CategorySlug | 'todas'>('todas')
  const list = content.listCircuits(filter)
  const featured = content.listCircuits('todas').find((item) => item.featured)

  usePageMeta(
    'Circuitos e pistas',
    'Conheça os principais circuitos do mundo da F1, WEC, Indy e outras categorias.',
  )

  return (
    <div className="page dark-page">
      <p className="breadcrumb">
        <Link to="/">Home</Link> {' > '} Pistas
      </p>
      <header className="page-head">
        <h1>Circuitos e pistas</h1>
        <p>Conheça os principais circuitos do mundo da F1, WEC, Indy e outras categorias.</p>
      </header>
      <div className="tab-row">
        <button
          type="button"
          className={`tab${filter === 'todas' ? ' is-active' : ''}`}
          onClick={() => setFilter('todas')}
        >
          Todas
        </button>
        {PRIMARY_CATEGORIES.map((item) => (
          <button
            key={item.slug}
            type="button"
            className={`tab${filter === item.slug ? ' is-active' : ''}`}
            onClick={() => setFilter(item.slug)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="calendar-layout">
        <ul className="card-grid">
          {list.map((circuit) => (
            <li key={circuit.slug}>
              <article className="circuit-card">
                <div className="hero-visual">{circuit.name}</div>
                <h2>{circuit.name}</h2>
                <p>
                  {circuit.location}, {circuit.country}
                </p>
                <p className="muted">
                  {circuit.lengthKm} km
                  {circuit.laps ? ` · ${circuit.laps} voltas` : ''}
                </p>
                <Link className="cta" to={`/circuitos/${circuit.slug}`}>
                  Ver detalhes
                </Link>
              </article>
            </li>
          ))}
        </ul>
        {featured ? (
          <aside className="panel">
            <h2>Circuito em destaque</h2>
            <p>{featured.name}</p>
            <Link className="text-link" to={`/circuitos/${featured.slug}`}>
              Abrir ficha
            </Link>
          </aside>
        ) : null}
      </div>
    </div>
  )
}

export function CircuitDetailPage() {
  const { slug } = useParams()
  const circuit = slug ? content.getCircuit(slug) : undefined

  usePageMeta(circuit?.name ?? 'Circuito')

  if (!circuit) return <NotFoundPage />

  return (
    <div className="page">
      <p className="breadcrumb">
        <Link to="/circuitos">Circuitos</Link> {' > '} {circuit.name}
      </p>
      <h1>{circuit.name}</h1>
      <p>
        {circuit.location}, {circuit.country}
      </p>
      <p className="muted">
        {circuit.lengthKm} km
        {circuit.laps ? ` · ${circuit.laps} voltas` : ''}
      </p>
      <p>{circuit.summary}</p>
      <p>
        Categorias:{' '}
        {circuit.categories.map((item) => content.getCategory(item)?.name ?? item).join(', ')}
      </p>
    </div>
  )
}

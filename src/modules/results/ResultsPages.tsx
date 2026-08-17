import { Link, useParams } from 'react-router'
import { useState } from 'react'
import { content } from '@/content'
import { formatDayMonth } from '@/shared/format'
import { usePageMeta } from '@/shared/seo/usePageMeta'
import { useCategoryParam } from '@/shared/useCategoryParam'
import { NotFoundPage } from '@/modules/not-found/NotFoundPage'
import type { SessionKind } from '@/content/types'

export function ResultsListPage() {
  const categoria = useCategoryParam()
  const category = categoria ? content.getCategory(categoria) : undefined
  const events = categoria ? content.listEvents(categoria) : []

  usePageMeta(category ? `Resultados — ${category.fullName}` : 'Resultados')

  if (!categoria || !category) return <NotFoundPage />

  return (
    <div className="page">
      <header className="page-head">
        <h1>Resultados — {category.fullName}</h1>
      </header>
      <ul className="card-list">
        {events.map((event) => (
          <li key={event.slug}>
            <Link className="block-card" to={`/${categoria}/resultados/${event.slug}`}>
              <strong>{event.name}</strong>
              <span className="muted">
                {event.circuitName} · {formatDayMonth(event.startDate)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function EventResultsPage() {
  const categoria = useCategoryParam()
  const { evento } = useParams()
  const event = evento ? content.getEvent(evento) : undefined
  const sessions = evento ? content.listResultSessions(evento) : []
  const [session, setSession] = useState<SessionKind | null>(null)
  const activeSession = session && sessions.includes(session) ? session : (sessions[0] ?? 'Corrida')
  const result = evento ? content.getResult(evento, activeSession) : undefined

  usePageMeta(event ? `Resultado — ${event.name}` : 'Resultado')

  if (!categoria || !event || event.category !== categoria) return <NotFoundPage />

  const podium = result?.rows.slice(0, 3) ?? []

  return (
    <div className="page dark-page">
      <p className="breadcrumb">
        <Link to={`/${categoria}`}>{content.getCategory(categoria)?.name}</Link>
        {' > '}
        <Link to={`/${categoria}/resultados`}>Resultados</Link>
        {' > '}
        {event.name}
      </p>
      <header className="page-head">
        <h1>{event.name}</h1>
        <p>
          {event.circuitName} | {formatDayMonth(event.startDate)} a {formatDayMonth(event.endDate)}
        </p>
      </header>
      <div className="tab-row">
        {(sessions.length > 0 ? sessions : event.sessions.map((item) => item.kind)).map((kind) => (
          <button
            key={kind}
            type="button"
            className={`tab${activeSession === kind ? ' is-active' : ''}`}
            onClick={() => setSession(kind)}
          >
            {kind}
          </button>
        ))}
      </div>
      <div className="calendar-layout">
        <div className="table-wrap">
          <h2>Resultado da sessão</h2>
          {result ? (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Piloto</th>
                  <th>Voltas</th>
                  <th>Tempo / intervalo</th>
                  <th>Pneus</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.map((row) => {
                  const driver = content.getDriver(row.driverSlug)
                  return (
                    <tr key={row.driverSlug}>
                      <td>{row.position}</td>
                      <td>
                        <Link to={`/${categoria}/pilotos/${row.driverSlug}`}>{driver?.name}</Link>
                      </td>
                      <td>{row.laps}</td>
                      <td>{row.gap}</td>
                      <td>{row.tires}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          ) : (
            <p>Resultado desta sessão ainda não está no recorte de demonstração.</p>
          )}
        </div>
        <aside className="panel">
          <h2>Resumo</h2>
          {result ? (
            <p>
              Volta mais rápida: {content.getDriver(result.fastestLap.driverSlug)?.shortName} —{' '}
              {result.fastestLap.time}
            </p>
          ) : null}
          <h3>Pódio</h3>
          <ol className="standings-mini">
            {podium.map((row) => (
              <li key={row.driverSlug}>
                <span>{row.position}</span>
                {content.getDriver(row.driverSlug)?.shortName}
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  )
}

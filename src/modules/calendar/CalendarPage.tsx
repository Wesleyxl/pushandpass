import { Link } from 'react-router'
import { content } from '@/content'
import { formatDateTime, formatDayMonth } from '@/shared/format'
import { usePageMeta } from '@/shared/seo/usePageMeta'
import { useCategoryParam } from '@/shared/useCategoryParam'
import { NotFoundPage } from '@/modules/not-found/NotFoundPage'

export function CalendarPage() {
  const categoria = useCategoryParam()
  const category = categoria ? content.getCategory(categoria) : undefined
  const events = categoria ? content.listEvents(categoria) : []
  const upcoming = content.upcomingEvents(4)

  usePageMeta(category ? `Calendário — ${category.fullName}` : 'Calendário')

  if (!categoria || !category) return <NotFoundPage />

  return (
    <div className="page dark-page">
      <header className="page-head">
        <p className="eyebrow">{category.fullName}</p>
        <h1>Calendário de corridas — 2026</h1>
      </header>
      <div className="calendar-layout">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Horário</th>
                <th>Corrida / pista</th>
                <th>País</th>
                <th>Onde assistir</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => {
                const race = event.sessions.find((session) => session.kind === 'Corrida')
                return (
                  <tr key={event.slug}>
                    <td>{formatDayMonth(event.startDate)}</td>
                    <td>{race ? formatDateTime(race.startsAt).split(' ').slice(-1)[0] : '—'}</td>
                    <td>
                      <Link to={`/${categoria}/resultados/${event.slug}`}>{event.name}</Link>
                      <div className="muted">{event.circuitName}</div>
                    </td>
                    <td>{event.country}</td>
                    <td>{event.broadcasters.map((item) => item.name).join(', ')}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {events.length === 0 ? <p>Não há etapas cadastradas nesta categoria.</p> : null}
        </div>
        <aside className="panel">
          <h2>Próximas corridas</h2>
          <ul className="plain-list">
            {upcoming.map((event) => (
              <li key={event.slug}>
                <Link to={`/${event.category}/calendario`}>
                  {event.name}
                  <span className="muted"> — {formatDayMonth(event.startDate)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="session-cards">
        {events.map((event) => (
          <article key={event.slug} className="session-card">
            <h2>{event.name}</h2>
            <p className="muted">{event.circuitName}</p>
            <ul>
              {event.sessions.map((session) => (
                <li key={session.kind}>
                  <strong>{session.kind}</strong> {formatDateTime(session.startsAt)}
                </li>
              ))}
            </ul>
            <p>Transmissão: {event.broadcasters.map((item) => item.name).join(', ')}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

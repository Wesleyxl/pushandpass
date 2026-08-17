import { Link, useParams } from 'react-router'
import { content } from '@/content'
import { flagEmoji, formatDate } from '@/shared/format'
import { usePageMeta } from '@/shared/seo/usePageMeta'
import { useCategoryParam } from '@/shared/useCategoryParam'
import { NotFoundPage } from '@/modules/not-found/NotFoundPage'
import { useAuth } from '@/modules/auth/AuthContext'

export function DriversListPage() {
  const categoria = useCategoryParam()
  const category = categoria ? content.getCategory(categoria) : undefined
  const drivers = categoria ? content.listDrivers(categoria) : []

  usePageMeta(category ? `Pilotos — ${category.fullName}` : 'Pilotos')

  if (!categoria || !category) return <NotFoundPage />

  return (
    <div className="page">
      <header className="page-head">
        <h1>Pilotos — {category.fullName}</h1>
      </header>
      <ul className="card-grid">
        {drivers.map((driver) => (
          <li key={driver.slug}>
            <Link className="block-card" to={`/${categoria}/pilotos/${driver.slug}`}>
              <span className="muted">
                #{driver.number} {flagEmoji(driver.countryCode)}
              </span>
              <strong>{driver.name}</strong>
              <span>{content.getTeam(driver.teamSlug)?.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {drivers.length === 0 ? <p>Nenhum piloto cadastrado nesta categoria.</p> : null}
    </div>
  )
}

export function DriverProfilePage() {
  const categoria = useCategoryParam()
  const { slug } = useParams()
  const driver = slug ? content.getDriver(slug) : undefined
  const team = driver ? content.getTeam(driver.teamSlug) : undefined
  const { user, favorites, toggleFavorite } = useAuth()

  usePageMeta(driver?.name ?? 'Piloto')

  if (!categoria || !driver || driver.category !== categoria) return <NotFoundPage />

  const isFav = favorites.includes(driver.slug)

  return (
    <div className="page dark-page">
      <p className="breadcrumb">
        <Link to={`/${categoria}/pilotos`}>Pilotos</Link> {' > '} {driver.name}
      </p>
      <header className="driver-hero">
        <div>
          <h1>{driver.name}</h1>
          <p>
            #{driver.number} | {team?.name} {flagEmoji(driver.countryCode)}
          </p>
          {user ? (
            <button type="button" className="cta" onClick={() => toggleFavorite(driver.slug)}>
              {isFav ? 'Remover dos favoritos' : 'Favoritar piloto'}
            </button>
          ) : (
            <p className="muted">
              <Link to="/entrar">Entre</Link> para salvar este piloto nos favoritos.
            </p>
          )}
        </div>
        <div className="hero-visual portrait">{driver.shortName}</div>
      </header>
      <div className="calendar-layout">
        <section>
          <h2>História</h2>
          {driver.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <aside className="panel">
          <h2>Estatísticas</h2>
          <ul className="stat-grid">
            <li>
              <strong>{driver.stats.races}</strong>
              <span>Corridas</span>
            </li>
            <li>
              <strong>{driver.stats.wins}</strong>
              <span>Vitórias</span>
            </li>
            <li>
              <strong>{driver.stats.podiums}</strong>
              <span>Pódios</span>
            </li>
            <li>
              <strong>{driver.stats.points}</strong>
              <span>Pontos</span>
            </li>
          </ul>
          <h3>Títulos</h3>
          <p>{driver.titles.length ? driver.titles.join(', ') : '—'}</p>
          <p className="muted">
            Nascimento: {formatDate(driver.birthDate)} · {driver.hometown}
          </p>
        </aside>
      </div>
    </div>
  )
}

import { Link, useParams } from 'react-router'
import { content } from '@/content'
import { usePageMeta } from '@/shared/seo/usePageMeta'
import { useCategoryParam } from '@/shared/useCategoryParam'
import { NotFoundPage } from '@/modules/not-found/NotFoundPage'

export function TeamsListPage() {
  const categoria = useCategoryParam()
  const category = categoria ? content.getCategory(categoria) : undefined
  const teams = categoria ? content.listTeams(categoria) : []

  usePageMeta(category ? `Equipes — ${category.fullName}` : 'Equipes')

  if (!categoria || !category) return <NotFoundPage />

  return (
    <div className="page">
      <header className="page-head">
        <h1>Equipes — {category.fullName}</h1>
      </header>
      <ul className="card-grid">
        {teams.map((team) => (
          <li key={team.slug}>
            <Link className="block-card" to={`/${categoria}/equipes/${team.slug}`}>
              <strong>{team.name}</strong>
              <span className="muted">{team.base}</span>
            </Link>
          </li>
        ))}
      </ul>
      {teams.length === 0 ? <p>Nenhuma equipe cadastrada nesta categoria.</p> : null}
    </div>
  )
}

export function TeamPage() {
  const categoria = useCategoryParam()
  const { slug } = useParams()
  const team = slug ? content.getTeam(slug) : undefined

  usePageMeta(team?.name ?? 'Equipe')

  if (!categoria || !team || team.category !== categoria) return <NotFoundPage />

  return (
    <div className="page">
      <p className="breadcrumb">
        <Link to={`/${categoria}/equipes`}>Equipes</Link> {' > '} {team.name}
      </p>
      <h1>{team.name}</h1>
      <p className="muted">{team.base}</p>
      <p>{team.summary}</p>
      <h2>Pilotos</h2>
      <ul className="plain-list">
        {team.driverSlugs.map((driverSlug) => {
          const driver = content.getDriver(driverSlug)
          return (
            <li key={driverSlug}>
              <Link to={`/${categoria}/pilotos/${driverSlug}`}>{driver?.name ?? driverSlug}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

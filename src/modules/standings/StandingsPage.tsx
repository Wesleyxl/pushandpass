import { Link } from 'react-router'
import { content } from '@/content'
import { usePageMeta } from '@/shared/seo/usePageMeta'
import { useCategoryParam } from '@/shared/useCategoryParam'
import { NotFoundPage } from '@/modules/not-found/NotFoundPage'

export function StandingsPage() {
  const categoria = useCategoryParam()
  const category = categoria ? content.getCategory(categoria) : undefined
  const rows = categoria ? content.listStandings(categoria) : []

  usePageMeta(category ? `Classificação — ${category.fullName}` : 'Classificação')

  if (!categoria || !category) return <NotFoundPage />

  return (
    <div className="page">
      <header className="page-head">
        <h1>Classificação — {category.fullName}</h1>
      </header>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Piloto</th>
              <th>Equipe</th>
              <th>Pontos</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.driverSlug}>
                <td>{row.position}</td>
                <td>
                  <Link to={`/${categoria}/pilotos/${row.driverSlug}`}>
                    {content.getDriver(row.driverSlug)?.name}
                  </Link>
                </td>
                <td>
                  <Link to={`/${categoria}/equipes/${row.teamSlug}`}>
                    {content.getTeam(row.teamSlug)?.name}
                  </Link>
                </td>
                <td>{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 ? <p>Classificação ainda não disponível nesta categoria.</p> : null}
      </div>
    </div>
  )
}

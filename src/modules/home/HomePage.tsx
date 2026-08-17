import { Link } from 'react-router'
import { content } from '@/content'
import { relativeFromNow } from '@/shared/format'
import { usePageMeta } from '@/shared/seo/usePageMeta'
import type { NewsArticle } from '@/content/types'

function NewsRow({ article }: { article: NewsArticle }) {
  return (
    <Link to={`/${article.category}/noticias/${article.slug}`} className="news-row">
      <div className="thumb" aria-hidden="true">
        {article.imageLabel}
      </div>
      <div>
        <span className="tag">{content.getCategory(article.category)?.name}</span>
        <h3>{article.title}</h3>
        <p className="muted">{relativeFromNow(article.publishedAt)}</p>
      </div>
    </Link>
  )
}

export function HomePage() {
  const articles = content.listArticles()
  const featured = articles.find((item) => item.featured) ?? articles[0]
  const rest = articles.filter((item) => item.slug !== featured?.slug).slice(0, 4)
  const upcoming = content.upcomingEvents(5)
  const standings = content.listStandings('f1').slice(0, 5)
  const drivers = content.listDrivers('f1')

  usePageMeta(
    'Push & Pass — Tudo sobre o mundo do automobilismo',
    'Notícias, calendários, resultados e história do automobilismo.',
  )

  return (
    <div className="page home-page">
      <section className="upcoming-bar" aria-label="Próximas corridas">
        <strong>Próximas corridas</strong>
        <div className="upcoming-scroll">
          {upcoming.map((event) => (
            <Link key={event.slug} to={`/${event.category}/calendario`} className="upcoming-chip">
              {content.getCategory(event.category)?.name} · {event.name}
            </Link>
          ))}
        </div>
      </section>

      <div className="home-grid">
        <div className="home-main">
          {featured ? (
            <Link to={`/${featured.category}/noticias/${featured.slug}`} className="hero-card">
              <span className="badge-red">Em destaque</span>
              <div className="hero-visual">{featured.imageLabel}</div>
              <h1>{featured.title}</h1>
              <p>{featured.excerpt}</p>
              <p className="muted">{relativeFromNow(featured.publishedAt)}</p>
            </Link>
          ) : null}

          <section>
            <h2>Últimas notícias</h2>
            <div className="news-list">
              {rest.map((article) => (
                <NewsRow key={article.slug} article={article} />
              ))}
            </div>
          </section>
        </div>

        <aside className="home-side">
          <section className="panel">
            <h2>Classificação F1</h2>
            <ol className="standings-mini">
              {standings.map((row) => {
                const driver = content.getDriver(row.driverSlug)
                return (
                  <li key={row.driverSlug}>
                    <span>{row.position}</span>
                    <Link to={`/f1/pilotos/${row.driverSlug}`}>{driver?.shortName}</Link>
                    <strong>{row.points}</strong>
                  </li>
                )
              })}
            </ol>
            <Link className="text-link" to="/f1/classificacao">
              Ver completo
            </Link>
          </section>

          <section className="panel">
            <h2>Pilotos em destaque</h2>
            <ul className="plain-list">
              {drivers.slice(0, 5).map((driver) => (
                <li key={driver.slug}>
                  <Link to={`/f1/pilotos/${driver.slug}`}>{driver.name}</Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  )
}

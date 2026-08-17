import { Link } from 'react-router'
import { content } from '@/content'
import { usePageMeta } from '@/shared/seo/usePageMeta'
import { useCategoryParam } from '@/shared/useCategoryParam'
import { NotFoundPage } from '@/modules/not-found/NotFoundPage'

export function CategoryHubPage() {
  const categoria = useCategoryParam()
  const category = categoria ? content.getCategory(categoria) : undefined
  const articles = categoria ? content.listArticles(categoria).slice(0, 5) : []
  const events = categoria ? content.listEvents(categoria).slice(0, 4) : []

  usePageMeta(category ? category.fullName : 'Categoria')

  if (!categoria || !category) return <NotFoundPage />

  return (
    <div className="page">
      <header className="page-head">
        <h1>{category.fullName}</h1>
        <p>Notícias, calendário e classificação de {category.fullName} no Push &amp; Pass.</p>
      </header>
      <div className="split">
        <section>
          <h2>Notícias</h2>
          <ul className="plain-list">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link to={`/${categoria}/noticias/${article.slug}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
          <Link className="text-link" to={`/${categoria}/noticias`}>
            Todas as notícias
          </Link>
        </section>
        <section>
          <h2>Agenda</h2>
          <ul className="plain-list">
            {events.map((event) => (
              <li key={event.slug}>
                <Link to={`/${categoria}/calendario`}>{event.name}</Link>
              </li>
            ))}
          </ul>
          <Link className="text-link" to={`/${categoria}/calendario`}>
            Ver calendário
          </Link>
        </section>
      </div>
    </div>
  )
}

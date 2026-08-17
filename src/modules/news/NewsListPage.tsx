import { Link, useParams } from 'react-router'
import { content } from '@/content'
import { relativeFromNow } from '@/shared/format'
import { usePageMeta } from '@/shared/seo/usePageMeta'
import { useCategoryParam } from '@/shared/useCategoryParam'
import { NotFoundPage } from '@/modules/not-found/NotFoundPage'

export function NewsListPage() {
  const categoria = useCategoryParam()
  const category = categoria ? content.getCategory(categoria) : undefined
  const articles = categoria ? content.listArticles(categoria) : []

  usePageMeta(
    category ? `Notícias — ${category.fullName}` : 'Notícias',
    `Últimas notícias de ${category?.fullName ?? 'automobilismo'}.`,
  )

  if (!categoria || !category) return <NotFoundPage />

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">{category.fullName}</p>
        <h1>Notícias</h1>
      </header>
      <div className="news-list stacked">
        {articles.map((article) => (
          <Link key={article.slug} to={`/${categoria}/noticias/${article.slug}`} className="news-row">
            <div className="thumb">{article.imageLabel}</div>
            <div>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <p className="muted">
                {relativeFromNow(article.publishedAt)} · {article.source}
              </p>
            </div>
          </Link>
        ))}
        {articles.length === 0 ? <p>Ainda não há notícias nesta categoria.</p> : null}
      </div>
    </div>
  )
}

export function NewsArticlePage() {
  const categoria = useCategoryParam()
  const { slug } = useParams()
  const article = slug ? content.getArticle(slug) : undefined

  usePageMeta(article?.title ?? 'Notícia', article?.excerpt)

  if (!categoria || !article || article.category !== categoria) return <NotFoundPage />

  return (
    <article className="page article-page">
      <p className="eyebrow">
        <Link to={`/${categoria}/noticias`}>{content.getCategory(categoria)?.name}</Link>
      </p>
      <h1>{article.title}</h1>
      <p className="muted">
        {relativeFromNow(article.publishedAt)} · Fonte: {article.source}
      </p>
      <div className="hero-visual wide">{article.imageLabel}</div>
      {article.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  )
}
